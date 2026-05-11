// ==================== State ====================
const state = {
  mode: 'home',           // home | study | exam | review | unit-test | progress
  currentUnit: null,
  exam: {
    questions: [],
    answers: {},
    flagged: new Set(),
    current: 0,
    timeLeft: 90 * 60,
    timer: null,
    submitted: false,
    startTime: null
  },
  unitTest: {
    questions: [],
    answers: {},
    current: 0,
    submitted: false,
    unitId: null
  }
};

// ==================== localStorage ====================
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('toukei2_progress')) || {};
  } catch { return {}; }
}
function saveProgress(data) {
  localStorage.setItem('toukei2_progress', JSON.stringify(data));
}
function loadExamHistory() {
  try {
    return JSON.parse(localStorage.getItem('toukei2_exam_history')) || [];
  } catch { return []; }
}
function saveExamHistory(history) {
  localStorage.setItem('toukei2_exam_history', JSON.stringify(history));
}

// ==================== Utils ====================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 選択肢をシャッフルし、正解インデックスを追随させる
function shuffleOptions(q) {
  const order = shuffle([0, 1, 2, 3]);
  return {
    ...q,
    options: order.map(i => q.options[i]),
    answer: order.indexOf(q.answer)
  };
}

// 単元バランスを保って35問を抽出する
const EXAM_ALLOCATION = { 1:4, 2:3, 3:3, 4:4, 5:3, 6:3, 7:5, 8:3, 9:3, 10:2, 11:2 };

function buildExamQuestions() {
  const selected = [];
  for (const [unit, count] of Object.entries(EXAM_ALLOCATION)) {
    const pool = QUESTIONS.filter(q => q.unit === Number(unit));
    shuffle(pool).slice(0, count).forEach(q => selected.push(shuffleOptions(q)));
  }
  return shuffle(selected); // 単元順にならないよう最後に全体もシャッフル
}

function renderMath() {
  if (window.renderMathInElement) {
    renderMathInElement(document.getElementById('app'), {
      delimiters: [
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    });
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ==================== Navigation ====================
function navigate(mode, params = {}) {
  if (state.exam.timer) {
    if (mode !== 'exam' && !state.exam.submitted) {
      if (!confirm('試験を中断しますか？進捗は保存されません。')) return;
      clearInterval(state.exam.timer);
      state.exam.timer = null;
    }
  }
  state.mode = mode;
  Object.assign(state, params);
  render();
}

// ==================== Render Router ====================
function render() {
  const app = document.getElementById('app');
  switch (state.mode) {
    case 'home':       renderHome(app); break;
    case 'study':      renderStudy(app); break;
    case 'exam':       renderExam(app); break;
    case 'review':     renderReview(app); break;
    case 'unit-test':  renderUnitTest(app); break;
    case 'progress':   renderProgress(app); break;
    default:           renderHome(app);
  }
  renderMath();
}

// ==================== HOME ====================
function renderHome(app) {
  app.innerHTML = `
    <header class="app-header">
      <div class="header-inner">
        <h1 class="logo">統計検定2級 学習アプリ</h1>
        <button class="btn-icon" onclick="navigate('progress')" title="進捗">📈</button>
        <button class="btn-icon calc-toggle-btn" onclick="toggleCalculator()" title="電卓">🔢</button>
      </div>
    </header>
    <main class="home-main">
      <div class="hero">
        <h2 class="hero-title">統計検定2級 合格を目指そう</h2>
        <p class="hero-sub">全11単元 · 115問 · 試験範囲を完全網羅</p>
      </div>
      <div class="stats-bar">
        ${renderHomeStats()}
      </div>
      <div class="mode-cards">
        <div class="mode-card study-card" onclick="navigate('study')">
          <div class="mode-card-icon">📚</div>
          <h2>学習モード</h2>
          <p>単元別にテキスト・数式・具体例で概念を学ぶ</p>
          <ul>
            <li>全11単元のテキスト解説</li>
            <li>重要ポイント・具体例付き</li>
            <li>単元別確認テスト</li>
          </ul>
          <button class="btn btn-study">学習を始める</button>
        </div>
        <div class="mode-card exam-card" onclick="startExam()">
          <div class="mode-card-icon">📝</div>
          <h2>試験モード</h2>
          <p>本番準拠のCBT形式 — 35問 · 90分</p>
          <ul>
            <li>単元バランス保証の出題</li>
            <li>選択肢ランダム · フラグ機能</li>
            <li>採点後に全問解説</li>
          </ul>
          <button class="btn btn-exam">試験を開始</button>
        </div>
      </div>
    </main>
  `;
}

function renderHomeStats() {
  const prog = loadProgress();
  const history = loadExamHistory();
  const totalQ = QUESTIONS.length;
  const answered = Object.keys(prog.unitAnswers || {}).length;
  const lastExam = history.length > 0 ? history[history.length - 1] : null;
  return `
    <div class="stat-item"><span class="stat-num">${totalQ}</span><span class="stat-label">総問題数</span></div>
    <div class="stat-item"><span class="stat-num">${answered}</span><span class="stat-label">学習済み問題</span></div>
    <div class="stat-item"><span class="stat-num">${history.length}</span><span class="stat-label">受験回数</span></div>
    <div class="stat-item"><span class="stat-num">${lastExam ? lastExam.score + '点' : '—'}</span><span class="stat-label">直近スコア</span></div>
  `;
}

// ==================== STUDY MODE ====================
function renderStudy(app) {
  const unitId = state.currentUnit;
  if (unitId === null) {
    renderStudyTop(app);
  } else {
    renderStudyUnit(app, unitId);
  }
}

function renderStudyTop(app) {
  const prog = loadProgress();
  const unitAnswers = prog.unitAnswers || {};
  app.innerHTML = `
    <header class="app-header">
      <div class="header-inner">
        <button class="btn-back" onclick="navigate('home')">← ホーム</button>
        <h1>学習モード</h1>
        <button class="btn-icon calc-toggle-btn" onclick="toggleCalculator()" title="電卓">🔢</button>
      </div>
    </header>
    <main class="study-top">
      <div class="unit-grid">
        ${STUDY_CONTENT.map(unit => {
          const unitQs = QUESTIONS.filter(q => q.unit === unit.id);
          const answered = unitQs.filter(q => unitAnswers[q.id] !== undefined).length;
          const correct = unitQs.filter(q => unitAnswers[q.id] === q.answer).length;
          const pct = unitQs.length > 0 ? Math.round(answered / unitQs.length * 100) : 0;
          return `
            <div class="unit-card" onclick="openUnit(${unit.id})">
              <div class="unit-card-icon">${unit.icon}</div>
              <div class="unit-card-body">
                <h3>${unit.title}</h3>
                <div class="unit-progress">
                  <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
                  <span>${answered}/${unitQs.length}問</span>
                </div>
                ${answered > 0 ? `<span class="unit-accuracy">正解率 ${Math.round(correct/answered*100)}%</span>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </main>
  `;
}

function openUnit(unitId) {
  state.currentUnit = unitId;
  render();
}

function renderStudyUnit(app, unitId) {
  const unit = STUDY_CONTENT.find(u => u.id === unitId);
  if (!unit) return;
  app.innerHTML = `
    <header class="app-header">
      <div class="header-inner">
        <button class="btn-back" onclick="state.currentUnit=null;removeFocusToggle();render()">← 単元一覧</button>
        <h1>${unit.icon} ${unit.title}</h1>
        <button class="btn-icon calc-toggle-btn" onclick="toggleCalculator()" title="電卓">🔢</button>
      </div>
    </header>
    <main class="study-unit">
      <div class="study-content">
        ${unit.sections.map(sec => `
          <section class="study-section">
            <h2>${sec.heading}</h2>
            <div class="study-text">${sec.content}</div>
          </section>
        `).join('')}
      </div>
      <div class="study-unit-footer">
        <button class="btn btn-exam" onclick="startUnitTest(${unitId})">
          この単元のテストを受ける（${QUESTIONS.filter(q=>q.unit===unitId).length}問）
        </button>
      </div>
    </main>
  `;
  // フォーカスモードボタンを追加
  setTimeout(addFocusToggle, 100);
}

// ==================== UNIT TEST ====================
function startUnitTest(unitId) {
  const unitQs = shuffle(QUESTIONS.filter(q => q.unit === unitId)).map(shuffleOptions);
  state.unitTest = {
    questions: unitQs,
    answers: {},
    current: 0,
    submitted: false,
    unitId
  };
  state.mode = 'unit-test';
  render();
}

function renderUnitTest(app) {
  const ut = state.unitTest;
  if (ut.submitted) {
    renderUnitTestResult(app);
    return;
  }
  const q = ut.questions[ut.current];
  const total = ut.questions.length;
  const sel = ut.answers[ut.current];
  app.innerHTML = `
    <header class="app-header">
      <div class="header-inner">
        <button class="btn-back" onclick="if(confirm('テストを終了しますか？')){state.currentUnit=${ut.unitId};navigate('study')}">← 終了</button>
        <h1>単元テスト</h1>
        <span class="q-counter">${ut.current + 1} / ${total}</span>
      </div>
    </header>
    <main class="exam-main">
      <div class="question-card">
        <div class="q-text">${q.question}</div>
        <div class="options">
          ${q.options.map((opt, i) => `
            <button class="option ${sel === i ? 'selected' : ''}" onclick="answerUnitTest(${i})">
              <span class="opt-label">${['ア','イ','ウ','エ'][i]}</span> ${opt}
            </button>
          `).join('')}
        </div>
      </div>
      <div class="exam-nav">
        <button class="btn btn-outline" onclick="prevUnitTest()" ${ut.current === 0 ? 'disabled' : ''}>← 前へ</button>
        ${ut.current < total - 1
          ? `<button class="btn btn-study" onclick="nextUnitTest()">次へ →</button>`
          : `<button class="btn btn-exam" onclick="submitUnitTest()">採点する</button>`
        }
      </div>
    </main>
  `;
  renderMath();
}

function answerUnitTest(i) {
  state.unitTest.answers[state.unitTest.current] = i;
  render();
}
function nextUnitTest() {
  if (state.unitTest.current < state.unitTest.questions.length - 1) {
    state.unitTest.current++;
    render();
  }
}
function prevUnitTest() {
  if (state.unitTest.current > 0) {
    state.unitTest.current--;
    render();
  }
}
function submitUnitTest() {
  state.unitTest.submitted = true;
  const ut = state.unitTest;
  const correct = ut.questions.filter((q, i) => ut.answers[i] === q.answer).length;
  const pct = Math.round(correct / ut.questions.length * 100);
  // 進捗保存
  const prog = loadProgress();
  if (!prog.unitAnswers) prog.unitAnswers = {};
  ut.questions.forEach((q, i) => {
    if (ut.answers[i] !== undefined) {
      prog.unitAnswers[q.id] = ut.answers[i];
    }
  });
  saveProgress(prog);
  removeFocusToggle();
  render();
  // 70%以上なら紙吹雪 🎉
  if (pct >= 70) setTimeout(launchConfetti, 300);
}

function renderUnitTestResult(app) {
  const ut = state.unitTest;
  const total = ut.questions.length;
  const correct = ut.questions.filter((q, i) => ut.answers[i] === q.answer).length;
  const pct = Math.round(correct / total * 100);
  app.innerHTML = `
    <header class="app-header">
      <div class="header-inner">
        <button class="btn-back" onclick="state.currentUnit=${ut.unitId};navigate('study')">← 学習モードへ</button>
        <h1>単元テスト 結果</h1>
      </div>
    </header>
    <main class="review-main">
      <div class="result-summary ${pct>=70?'result-pass':'result-fail'}">
        <div class="result-score">${correct}<span>/${total}問</span></div>
        <div class="result-pct ${pct>=70?'pass':'fail'}">${pct}%</div>
        <div class="result-msg">${pct>=80?'✅ 優秀！':pct>=60?'📚 もう少し復習を':'⚠️ 要復習'}</div>
      </div>
      <div class="review-list">
        ${ut.questions.map((q, i) => {
          const ans = ut.answers[i];
          const isCorrect = ans === q.answer;
          return `
            <div class="review-item ${isCorrect?'correct':'wrong'}">
              <div class="review-q-num">Q${i+1} ${isCorrect?'✅':'❌'}</div>
              <div class="review-q-text">${q.question}</div>
              <div class="review-answers">
                <div class="your-answer">あなたの答え：${ans !== undefined ? q.options[ans] : '未回答'}</div>
                ${!isCorrect ? `<div class="correct-answer">正解：${q.options[q.answer]}</div>` : ''}
              </div>
              <div class="explanation"><strong>解説：</strong>${q.explanation}</div>
            </div>
          `;
        }).join('')}
      </div>
    </main>
  `;
  renderMath();
}

// ==================== EXAM MODE ====================
function startExam() {
  const examQ = buildExamQuestions();
  state.exam = {
    questions: examQ,
    answers: {},
    flagged: new Set(),
    current: 0,
    timeLeft: 90 * 60,
    timer: null,
    submitted: false,
    startTime: Date.now()
  };
  state.mode = 'exam';
  render();
  startTimer();
}

function startTimer() {
  state.exam.timer = setInterval(() => {
    state.exam.timeLeft--;
    const el = document.getElementById('timer');
    if (el) {
      el.textContent = formatTime(state.exam.timeLeft);
      if (state.exam.timeLeft <= 300) el.classList.add('urgent');
    }
    if (state.exam.timeLeft <= 0) {
      clearInterval(state.exam.timer);
      submitExam(true);
    }
  }, 1000);
}

function renderExam(app) {
  const ex = state.exam;
  if (ex.submitted) {
    renderReview(app);
    return;
  }
  const q = ex.questions[ex.current];
  const sel = ex.answers[ex.current];
  const flagged = ex.flagged.has(ex.current);
  app.innerHTML = `
    <header class="app-header exam-header">
      <div class="header-inner">
        <button class="btn-back" onclick="navigate('home')">← 中断</button>
        <span id="timer" class="timer">${formatTime(ex.timeLeft)}</span>
        <button class="btn-icon" onclick="toggleCalculator()" title="電卓">🔢</button>
      </div>
    </header>
    <div class="exam-body">
      <aside class="q-nav-panel">
        <div class="q-nav-grid">
          ${ex.questions.map((_, i) => {
            let cls = 'q-nav-btn';
            if (i === ex.current) cls += ' active';
            else if (ex.flagged.has(i)) cls += ' flagged';
            else if (ex.answers[i] !== undefined) cls += ' answered';
            return `<button class="${cls}" onclick="goToQuestion(${i})">${i+1}</button>`;
          }).join('')}
        </div>
        <div class="q-nav-legend">
          <span class="legend answered">回答済</span>
          <span class="legend flagged">フラグ</span>
          <span class="legend">未回答</span>
        </div>
        <button class="btn btn-exam submit-btn" onclick="confirmSubmitExam()">
          採点する（${Object.keys(ex.answers).length}/35）
        </button>
      </aside>
      <main class="exam-main">
        <div class="question-card">
          <div class="q-meta">
            <span class="q-num">問${ex.current + 1}</span>
            <span class="q-unit-tag">${q.unitName}</span>
            <button class="flag-btn ${flagged?'flagged':''}" onclick="toggleFlag(${ex.current})">
              ${flagged ? '🚩 フラグ解除' : '🏳 フラグ'}
            </button>
          </div>
          <div class="q-text">${q.question}</div>
          <div class="options">
            ${q.options.map((opt, i) => `
              <button class="option ${sel === i ? 'selected' : ''}" onclick="answerExam(${i})">
                <span class="opt-label">${i+1}</span> ${opt}
              </button>
            `).join('')}
          </div>
        </div>
        <div class="exam-nav">
          <button class="btn btn-outline" onclick="prevQuestion()" ${ex.current===0?'disabled':''}>← 前へ</button>
          <button class="btn btn-study" onclick="nextQuestion()" ${ex.current===34?'disabled':''}>次へ →</button>
        </div>
      </main>
    </div>
  `;
  renderMath();
}

function goToQuestion(i) { state.exam.current = i; render(); }
function prevQuestion() { if (state.exam.current > 0) { state.exam.current--; render(); } }
function nextQuestion() { if (state.exam.current < 34) { state.exam.current++; render(); } }
function answerExam(i) { state.exam.answers[state.exam.current] = i; render(); }
function toggleFlag(i) {
  if (state.exam.flagged.has(i)) state.exam.flagged.delete(i);
  else state.exam.flagged.add(i);
  render();
}

function confirmSubmitExam() {
  const answered = Object.keys(state.exam.answers).length;
  if (answered < 35) {
    if (!confirm(`未回答が ${35 - answered} 問あります。採点しますか？`)) return;
  }
  submitExam(false);
}

function submitExam(timeUp) {
  clearInterval(state.exam.timer);
  state.exam.submitted = true;
  const ex = state.exam;
  const correct = ex.questions.filter((q, i) => ex.answers[i] === q.answer).length;
  const history = loadExamHistory();
  history.push({
    date: new Date().toLocaleDateString('ja-JP'),
    score: correct,
    total: ex.questions.length,
    timeLeft: ex.timeLeft,
    timeUp
  });
  saveExamHistory(history);
  // 進捗保存
  const prog = loadProgress();
  if (!prog.unitAnswers) prog.unitAnswers = {};
  ex.questions.forEach((q, i) => {
    if (ex.answers[i] !== undefined) prog.unitAnswers[q.id] = ex.answers[i];
  });
  saveProgress(prog);
  render();
  // 70%以上で紙吹雪 🎉
  const pct = Math.round(ex.questions.filter((q,i)=>ex.answers[i]===q.answer).length / ex.questions.length * 100);
  if (pct >= 70 && !timeUp) setTimeout(launchConfetti, 400);
}

// ==================== REVIEW ====================
function renderReview(app) {
  const ex = state.exam;
  const total = ex.questions.length;
  const correct = ex.questions.filter((q, i) => ex.answers[i] === q.answer).length;
  const pct = Math.round(correct / total * 100);
  app.innerHTML = `
    <header class="app-header">
      <div class="header-inner">
        <button class="btn-back" onclick="navigate('home')">← ホーム</button>
        <h1>試験結果・解説</h1>
      </div>
    </header>
    <main class="review-main">
      <div class="result-summary ${pct>=70?'result-pass':'result-fail'}">
        <div class="result-score">${correct}<span>/${total}問</span></div>
        <div class="result-pct ${pct>=70?'pass':'fail'}">${pct}%</div>
        <div class="result-msg">${pct>=70?'✅ 合格ライン到達！':'📚 合格まであと少し（目安：70%）'}</div>
        ${ex.timeUp ? '<div class="time-up-msg">⏰ 時間切れ</div>' : ''}
      </div>
      <div class="unit-breakdown">
        <h3>単元別正解率</h3>
        <div class="unit-bars">
          ${getUnitBreakdown(ex).map(u => `
            <div class="unit-bar-row">
              <span class="unit-bar-label">${u.name}</span>
              <div class="unit-bar-wrap">
                <div class="unit-bar-fill" style="width:${u.pct}%"></div>
              </div>
              <span class="unit-bar-pct">${u.correct}/${u.total} (${u.pct}%)</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="review-list">
        <h3>全問解説</h3>
        ${ex.questions.map((q, i) => {
          const ans = ex.answers[i];
          const isCorrect = ans === q.answer;
          return `
            <div class="review-item ${isCorrect?'correct':'wrong'}">
              <div class="review-q-num">問${i+1} [${q.unitName}] ${isCorrect?'✅':'❌'}</div>
              <div class="review-q-text">${q.question}</div>
              <div class="review-options">
                ${q.options.map((opt, oi) => `
                  <div class="review-opt ${oi===q.answer?'correct-opt':''} ${oi===ans&&!isCorrect?'wrong-opt':''}">
                    ${oi===q.answer?'✅':oi===ans&&!isCorrect?'❌':'　'} ${opt}
                  </div>
                `).join('')}
              </div>
              <div class="explanation"><strong>解説：</strong>${q.explanation}</div>
            </div>
          `;
        }).join('')}
      </div>
    </main>
  `;
  renderMath();
}

function getUnitBreakdown(ex) {
  const units = {};
  ex.questions.forEach((q, i) => {
    if (!units[q.unit]) units[q.unit] = { name: q.unitName, total: 0, correct: 0 };
    units[q.unit].total++;
    if (ex.answers[i] === q.answer) units[q.unit].correct++;
  });
  return Object.values(units).map(u => ({
    ...u,
    pct: u.total > 0 ? Math.round(u.correct / u.total * 100) : 0
  }));
}

// ==================== PROGRESS ====================
function renderProgress(app) {
  const prog = loadProgress();
  const unitAnswers = prog.unitAnswers || {};
  const history = loadExamHistory();

  app.innerHTML = `
    <header class="app-header">
      <div class="header-inner">
        <button class="btn-back" onclick="navigate('home')">← ホーム</button>
        <h1>学習進捗</h1>
      </div>
    </header>
    <main class="progress-main">
      <section class="progress-section">
        <h2>単元別進捗</h2>
        <div class="progress-units">
          ${STUDY_CONTENT.map(unit => {
            const unitQs = QUESTIONS.filter(q => q.unit === unit.id);
            const answered = unitQs.filter(q => unitAnswers[q.id] !== undefined).length;
            const correct = unitQs.filter(q => unitAnswers[q.id] === q.answer).length;
            const pct = unitQs.length > 0 ? Math.round(answered / unitQs.length * 100) : 0;
            const acc = answered > 0 ? Math.round(correct / answered * 100) : null;
            return `
              <div class="prog-unit-row">
                <span class="prog-unit-name">${unit.icon} ${unit.title}</span>
                <div class="prog-bar-wrap">
                  <div class="prog-bar-fill" style="width:${pct}%"></div>
                </div>
                <span class="prog-stats">${answered}/${unitQs.length}問 ${acc !== null ? `| 正解率${acc}%` : ''}</span>
              </div>
            `;
          }).join('')}
        </div>
      </section>
      <section class="progress-section">
        <h2>受験履歴</h2>
        ${history.length === 0
          ? '<p class="no-data">まだ受験記録がありません</p>'
          : `<div class="history-list">
              ${[...history].reverse().map((h, i) => `
                <div class="history-item">
                  <span class="h-date">${h.date}</span>
                  <span class="h-score ${h.score/h.total>=0.7?'pass':'fail'}">${h.score}/${h.total}点（${Math.round(h.score/h.total*100)}%）</span>
                  <span class="h-time">${h.timeUp ? '⏰ 時間切れ' : '残り'+formatTime(h.timeLeft)}</span>
                </div>
              `).join('')}
            </div>`
        }
      </section>
      <section class="progress-section">
        <button class="btn btn-outline danger" onclick="if(confirm('全進捗をリセットしますか？')){localStorage.clear();render()}">
          🗑 進捗をリセット
        </button>
      </section>
    </main>
  `;
}

// ==================== CALCULATOR ====================
let calcDisplay = '0';
let calcPrev = '';
let calcOp = null;
let calcNew = true;

function toggleCalculator() {
  const el = document.getElementById('calculator');
  if (el) el.classList.toggle('hidden');
}

function calcInput(k) {
  const disp = document.getElementById('calc-display');
  if (!disp) return;
  if (k === 'C') { calcDisplay = '0'; calcPrev = ''; calcOp = null; calcNew = true; }
  else if (k === '±') { calcDisplay = String(-parseFloat(calcDisplay)); }
  else if (k === '%') { calcDisplay = String(parseFloat(calcDisplay) / 100); }
  else if (['÷','×','−','＋'].includes(k)) {
    calcPrev = calcDisplay;
    calcOp = k;
    calcNew = true;
  }
  else if (k === '＝') {
    if (calcOp && calcPrev !== '') {
      const a = parseFloat(calcPrev), b = parseFloat(calcDisplay);
      let r = 0;
      if (calcOp === '＋') r = a + b;
      else if (calcOp === '−') r = a - b;
      else if (calcOp === '×') r = a * b;
      else if (calcOp === '÷') r = b !== 0 ? a / b : 'Error';
      calcDisplay = String(parseFloat(r.toFixed(10)));
      calcOp = null; calcPrev = ''; calcNew = true;
    }
  }
  else if (k === '.') {
    if (calcNew) { calcDisplay = '0.'; calcNew = false; }
    else if (!calcDisplay.includes('.')) calcDisplay += '.';
  }
  else {
    if (calcNew || calcDisplay === '0') { calcDisplay = k; calcNew = false; }
    else calcDisplay += k;
  }
  disp.textContent = calcDisplay;
}

// ==================== INIT ====================
window.addEventListener('DOMContentLoaded', () => {
  // 電卓を body に一度だけ生成（render のたびに消えない）
  const calcEl = document.createElement('div');
  calcEl.id = 'calculator';
  calcEl.className = 'calculator hidden';
  calcEl.innerHTML = `
    <div class="calc-inner">
      <div class="calc-header">電卓 <button onclick="toggleCalculator()" class="calc-close">✕</button></div>
      <div id="calc-display" class="calc-display">0</div>
      <div class="calc-buttons">
        <button class="calc-btn clear" onclick="calcInput('C')">C</button>
        <button class="calc-btn" onclick="calcInput('±')">±</button>
        <button class="calc-btn" onclick="calcInput('%')">%</button>
        <button class="calc-btn op" onclick="calcInput('÷')">÷</button>
        <button class="calc-btn" onclick="calcInput('7')">7</button>
        <button class="calc-btn" onclick="calcInput('8')">8</button>
        <button class="calc-btn" onclick="calcInput('9')">9</button>
        <button class="calc-btn op" onclick="calcInput('×')">×</button>
        <button class="calc-btn" onclick="calcInput('4')">4</button>
        <button class="calc-btn" onclick="calcInput('5')">5</button>
        <button class="calc-btn" onclick="calcInput('6')">6</button>
        <button class="calc-btn op" onclick="calcInput('−')">−</button>
        <button class="calc-btn" onclick="calcInput('1')">1</button>
        <button class="calc-btn" onclick="calcInput('2')">2</button>
        <button class="calc-btn" onclick="calcInput('3')">3</button>
        <button class="calc-btn op" onclick="calcInput('＋')">＋</button>
        <button class="calc-btn zero" onclick="calcInput('0')">0</button>
        <button class="calc-btn" onclick="calcInput('.')">.</button>
        <button class="calc-btn op" onclick="calcInput('＝')">＝</button>
      </div>
    </div>
  `;
  document.body.appendChild(calcEl);
  render();
});

// ==================== FOCUS MODE ====================
let focusMode = false;

function toggleFocusMode() {
  focusMode = !focusMode;
  document.body.classList.toggle('focus-mode', focusMode);
  const btn = document.getElementById('focus-toggle-btn');
  if (btn) btn.textContent = focusMode ? '🔲' : '⛶';
}

function addFocusToggle() {
  const existing = document.getElementById('focus-toggle-btn');
  if (existing) return;
  const btn = document.createElement('button');
  btn.id = 'focus-toggle-btn';
  btn.className = 'focus-toggle';
  btn.title = 'フォーカスモード';
  btn.textContent = '⛶';
  btn.onclick = toggleFocusMode;
  document.body.appendChild(btn);
}

function removeFocusToggle() {
  const btn = document.getElementById('focus-toggle-btn');
  if (btn) btn.remove();
  if (focusMode) {
    focusMode = false;
    document.body.classList.remove('focus-mode');
  }
}

// ==================== CONFETTI ====================
function launchConfetti() {
  const colors = ['#00e676','#0f9fff','#ffab40','#ff6b8a','#7dd3fc','#84fab0'];
  const count = 28;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-particle';
      el.style.cssText = `
        left: ${20 + Math.random() * 60}vw;
        top: ${30 + Math.random() * 20}vh;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        width: ${5 + Math.random() * 7}px;
        height: ${5 + Math.random() * 7}px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        animation-duration: ${0.8 + Math.random() * 0.8}s;
        animation-delay: ${Math.random() * 0.3}s;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2000);
    }, i * 30);
  }
}
