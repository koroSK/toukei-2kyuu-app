const STUDY_CONTENT = [

  // =========================================================
  // Unit 1: データの種類と記述統計
  // =========================================================
  {
    id: 1,
    title: "データの種類と記述統計",
    icon: "📊",
    sections: [
      {
        heading: "1-1. まず「データ」って何だろう？",
        content: `
<p>統計学の第一歩は「データを正しく読む」ことです。でもその前に、データには<strong>種類</strong>があることを知っておく必要があります。</p>

<div class="example-box">
<strong>身近なデータの例</strong><br><br>
・テストの点数：80点、65点、92点…<br>
・血液型：A型、B型、O型、AB型<br>
・満足度アンケート：「1〜5段階評価」<br>
・年収：300万円、500万円…<br><br>
これらは全部「データ」ですが、<strong>扱い方が違います</strong>。
</div>

<p>なぜ種類が重要か？→ 種類によって「計算していいもの・してはいけないもの」が変わるからです。</p>
`
      },
      {
        heading: "1-2. データの4種類（難しくない！）",
        content: `
<p>データは「どれだけ情報が豊か？」で4段階に分けられます。下に行くほど豊かな情報を持っています。</p>

<table>
<thead><tr><th>種類</th><th>意味</th><th>例</th><th>できる計算</th></tr></thead>
<tbody>
<tr><td><strong>名義尺度</strong></td><td>ただの「ラベル」</td><td>血液型・性別・出身地</td><td>数を数える（最頻値）のみ</td></tr>
<tr><td><strong>順序尺度</strong></td><td>順番はある、差は不明</td><td>満足度1〜5・成績の順位</td><td>最頻値・中央値</td></tr>
<tr><td><strong>間隔尺度</strong></td><td>差に意味あり・0は基準点</td><td>気温℃・西暦年</td><td>平均・分散も可</td></tr>
<tr><td><strong>比例尺度</strong></td><td>差も比率も意味あり・絶対的な0がある</td><td>身長・体重・売上</td><td>全ての計算が可</td></tr>
</tbody>
</table>

<div class="key-point">
<strong>よく出る問題：「満足度評価は何尺度？」</strong><br><br>
「1〜5の満足度」は「2は1の2倍満足」とは言えません。<br>
だから<strong>順序尺度</strong>です（間隔尺度ではない！）。<br><br>
一方「体重60kgは30kgの2倍」は言えます。→ <strong>比例尺度</strong>
</div>
`
      },
      {
        heading: "1-3. 平均値 — 「みんなの中心」を求める",
        content: `
<p>平均値は一番なじみのある代表値です。「全部足して個数で割る」だけですが、なぜそれが「中心」になるのか考えてみましょう。</p>

<div class="example-box">
<strong>【例題】5人のテスト点数の平均を求める</strong><br><br>
点数：60, 70, 80, 90, 50<br><br>
ステップ①　全部足す<br>
60 + 70 + 80 + 90 + 50 = <strong>350</strong><br><br>
ステップ②　人数（5人）で割る<br>
350 ÷ 5 = <strong>70点</strong><br><br>
答え：平均 = <strong>70点</strong>
</div>

<p>数式で書くと：\\( \\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i \\)</p>

<div class="key-point">
<strong>式の読み方（怖くない！）</strong><br><br>
\\( \\bar{x} \\)（エックスバー）= 平均値<br>
\\( n \\) = データの個数<br>
\\( \\sum \\)（シグマ）= 全部足す記号<br>
\\( x_i \\) = i番目のデータ<br><br>
要するに「全部足して個数で割る」これだけです！
</div>

<div class="example-box">
<strong>【平均の弱点：外れ値の影響】</strong><br><br>
5人の年収：200万、250万、300万、350万、3000万（社長）<br><br>
平均 = (200+250+300+350+3000) ÷ 5 = <strong>820万円</strong><br><br>
「平均820万？」→ 実態と全然違います。<br>
この場合は中央値（次で解説）の方が実態に近い。
</div>
`
      },
      {
        heading: "1-4. 中央値と最頻値 — 外れ値に強い代表値",
        content: `
<p>平均値だけでは不十分なので、他の代表値も覚えましょう。</p>

<p><strong>中央値（メジアン）</strong>：データを小さい順に並べたとき、ちょうど真ん中の値。</p>

<div class="example-box">
<strong>【中央値の求め方】</strong><br><br>
データ：50, 60, 70, 80, 90（5個 → 奇数）<br>
小さい順に並べると：50, 60, <strong>70</strong>, 80, 90<br>
真ん中（3番目）= <strong>70</strong><br><br>
データ：50, 60, 70, 80, 90, 100（6個 → 偶数）<br>
真ん中2つは3番目と4番目：70と80<br>
中央値 = (70 + 80) ÷ 2 = <strong>75</strong>
</div>

<div class="example-box">
<strong>【先ほどの年収で試してみる】</strong><br><br>
200万, 250万, 300万, 350万, 3000万<br>
真ん中（3番目）= <strong>300万円</strong><br><br>
平均（820万）より「みんなの実感」に近い！<br>
→ 中央値は外れ値の影響を受けにくい
</div>

<p><strong>最頻値（モード）</strong>：一番よく出てくる値のこと。</p>

<div class="example-box">
<strong>【最頻値の例】</strong><br><br>
血液型：A, B, A, O, A, AB, A<br>
一番多いのはA → 最頻値 = <strong>A型</strong><br><br>
点数：60, 70, 70, 80, 70, 90<br>
70が3回で一番多い → 最頻値 = <strong>70点</strong>
</div>

<div class="key-point">
<strong>3つの代表値の使い分け</strong><br><br>
名義尺度（血液型）→ <strong>最頻値</strong>しか使えない<br>
外れ値がある → <strong>中央値</strong>が実態に近い<br>
外れ値がない、きれいなデータ → <strong>平均値</strong>が便利
</div>
`
      },
      {
        heading: "1-5. 分散と標準偏差 — ばらつきを数値にする",
        content: `
<p>代表値だけでは「みんなが似た点数か、バラバラか」が分かりません。そこで「ばらつき」を数値にします。</p>

<div class="example-box">
<strong>【なぜばらつきが必要？】</strong><br><br>
クラスA：60, 65, 70, 75, 80 → 平均70点<br>
クラスB：10, 20, 70, 120, 130 → 平均70点<br><br>
同じ平均70点でも、全然違いますよね？<br>
ばらつきの大きさを数値にするのが<strong>分散</strong>と<strong>標準偏差</strong>です。
</div>

<div class="example-box">
<strong>【分散の求め方（4ステップ）】</strong><br>
データ：2, 4, 6（平均 = 4）<br><br>
ステップ①　平均を引く（偏差）<br>
　2 - 4 = -2、 4 - 4 = 0、 6 - 4 = +2<br><br>
ステップ②　2乗する（マイナスを消す）<br>
　(-2)² = 4、 (0)² = 0、 (+2)² = 4<br><br>
ステップ③　全部足す<br>
　4 + 0 + 4 = 8<br><br>
ステップ④　個数-1（= 2）で割る<br>
　8 ÷ 2 = <strong>4</strong>（標本分散）<br><br>
標準偏差 = √4 = <strong>2</strong>
</div>

<div class="key-point">
<strong>なぜ n-1 で割るの？</strong><br><br>
標本（一部のデータ）から母集団（全体）を推定するとき、<br>
n で割ると実際より小さい値になるため、<br>
n-1 で割って補正します。（不偏分散）<br><br>
試験では「標本」の問題では n-1 が多いです。
</div>
`
      },
      {
        heading: "1-6. 変動係数と相関係数",
        content: `
<p><strong>変動係数（CV）</strong>：単位の違うデータのばらつきを比較するときに使います。</p>

<div class="example-box">
<strong>【例：A社とB社のばらつき比較】</strong><br><br>
A社の株価：平均 1,000円、標準偏差 100円<br>
B社の株価：平均 500円、標準偏差 80円<br><br>
CV = 標準偏差 ÷ 平均<br>
A社の CV = 100 ÷ 1,000 = <strong>0.10（10%）</strong><br>
B社の CV = 80 ÷ 500 = <strong>0.16（16%）</strong><br><br>
→ 相対的なばらつきは<strong>B社の方が大きい</strong>！
</div>

<p><strong>相関係数</strong>：2つのデータが「一緒に動くか」を -1〜+1 で表す。</p>

<table>
<thead><tr><th>値の範囲</th><th>意味</th><th>具体例</th></tr></thead>
<tbody>
<tr><td>+0.7〜+1.0</td><td>強い正の相関</td><td>気温↑アイス売上↑</td></tr>
<tr><td>+0.4〜+0.7</td><td>中程度の正の相関</td><td>学習時間と成績</td></tr>
<tr><td>-0.4〜+0.4</td><td>ほぼ相関なし</td><td>血液型と成績</td></tr>
<tr><td>-0.7〜-1.0</td><td>強い負の相関</td><td>気温↓コート売上↑</td></tr>
</tbody>
</table>

<div class="key-point">
<strong>⚠️ 相関は「因果関係」ではない！</strong><br><br>
アイスの売上と溺死者数には正の相関がある。<br>
→ でも「アイスを食べると溺れる」わけではない！<br>
→ 「気温（暑さ）」という第3の要因が両方に影響している
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 2: 確率の基本・ベイズの定理
  // =========================================================
  {
    id: 2,
    title: "確率の基本・ベイズの定理",
    icon: "🎲",
    sections: [
      {
        heading: "2-1. 確率って何？",
        content: `
<p>「明日雨が降る確率は30%」——確率は日常会話でもよく使いますが、数学ではより正確に定義します。</p>

<div class="example-box">
<strong>【確率の基本イメージ】</strong><br><br>
サイコロを1回投げる。全部で6通りの目が出る可能性がある。<br><br>
「3の倍数（3か6）が出る確率」は？<br>
→ 3の倍数の目：3, 6（2通り）<br>
→ 確率 = 2 ÷ 6 = <strong>1/3 ≈ 33%</strong>
</div>

<p><strong>確率の3つのルール（公理）</strong></p>
<ul>
<li>① 確率は必ず 0 以上 1 以下</li>
<li>② 何か必ず起きる：P(全体) = 1</li>
<li>③ 同時に起きない2つの事象は足せる</li>
</ul>

<div class="key-point">
<strong>余事象を使うテクニック</strong><br><br>
「少なくとも1回〜」の確率は余事象を使うと楽！<br><br>
コインを3回投げて「少なくとも1回表」の確率<br>
= 1 - P(全部裏)<br>
= 1 - (1/2)³ = 1 - 1/8 = <strong>7/8</strong>
</div>
`
      },
      {
        heading: "2-2. 加法定理・乗法定理",
        content: `
<p><strong>加法定理</strong>：AまたはBが起こる確率（重なりに注意！）</p>

<div class="example-box">
<strong>【トランプで試してみよう】</strong><br><br>
52枚のトランプから1枚引く。<br><br>
P(ハート) = 13/52<br>
P(絵札 J,Q,K) = 12/52<br>
P(ハートの絵札) = 3/52<br><br>
P(ハートまたは絵札) = 13/52 + 12/52 - 3/52 = <strong>22/52</strong><br><br>
「両方に当てはまる分」を1回引かないと2重に数えてしまう！
</div>

<div class="key-point">
<strong>加法の公式</strong><br><br>
P(A ∪ B) = P(A) + P(B) - P(A ∩ B)<br><br>
AとBが絶対に重ならない（排反）なら：<br>
P(A ∪ B) = P(A) + P(B)（引く必要なし）
</div>

<div class="example-box">
<strong>【乗法定理：コインを2回投げる】</strong><br><br>
1回目が表：P = 1/2<br>
2回目が表：P = 1/2（1回目に関係なし = 独立）<br><br>
両方表が出る確率 = 1/2 × 1/2 = <strong>1/4</strong><br><br>
「独立」＝ 一方の結果がもう一方に影響しない
</div>
`
      },
      {
        heading: "2-3. 条件付き確率",
        content: `
<p>「Bが起きた」という情報があるとき、「Aが起きる確率」はどう変わるでしょうか？</p>

<div class="example-box">
<strong>【具体例で理解する】</strong><br><br>
あるクラス：男子30人、女子20人（計50人）<br>
眼鏡：男子12人、女子8人<br><br>
「全員の中から選んで眼鏡の確率」<br>
= 20/50 = 2/5<br><br>
「女子だと分かっている場合、眼鏡の確率」<br>
= 8/20 = <strong>2/5</strong>（この例では同じ！= 独立）
</div>

<p>条件付き確率の式：\\( P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\)</p>

<div class="key-point">
<strong>式の読み方</strong><br><br>
P(A|B) = 「Bが起きた条件のもとで、Aが起きる確率」<br>
縦棒「|」は「〜という条件で」という意味
</div>
`
      },
      {
        heading: "2-4. ベイズの定理 — 新情報で確率を更新する",
        content: `
<p>ベイズの定理は「新しい証拠が得られたとき、確率をどう更新するか」を教えてくれます。</p>

<div class="example-box">
<strong>【医療検査の例（試験で超頻出！）】</strong><br><br>
・ある病気の有病率 = 1%<br>
・検査の感度（病気あり→陽性）= 90%<br>
・偽陽性率（病気ないのに陽性）= 5%<br><br>
問：「検査が陽性だった場合、本当に病気の確率は？」<br><br>
1,000人で考える：<br>
病気あり：10人 → 陽性 9人<br>
病気なし：990人 → 陽性 50人（偽陽性）<br><br>
陽性全体 = 59人、そのうち本当に病気 = 9人<br><br>
→ 陽性のとき病気の確率 = 9/59 ≈ <strong>15%</strong>
</div>

<div class="key-point">
<strong>驚きのポイント！</strong><br><br>
感度90%の検査で陽性になっても、<br>
実際に病気の確率はわずか<strong>15%</strong>！<br><br>
有病率（1%）が低いと、偽陽性が多くなるため。<br>
これがベイズの定理の核心です。
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 3: 確率分布（離散型）
  // =========================================================
  {
    id: 3,
    title: "確率分布（離散型）",
    icon: "📈",
    sections: [
      {
        heading: "3-1. 確率分布って何？",
        content: `
<p>「確率分布」とは、起こり得る結果それぞれに確率を割り当てた表やグラフのことです。</p>

<div class="example-box">
<strong>【サイコロの確率分布】</strong><br><br>
目の数　　確率<br>
1　　　　1/6<br>
2　　　　1/6<br>
3　　　　1/6<br>
4　　　　1/6<br>
5　　　　1/6<br>
6　　　　1/6<br>
合計　　1（= 100%）<br><br>
これが「離散型確率分布」の基本形です。
</div>

<div class="example-box">
<strong>【期待値の計算：サイコロの場合】</strong><br><br>
E[X] = 1×(1/6) + 2×(1/6) + 3×(1/6) + 4×(1/6) + 5×(1/6) + 6×(1/6)<br>
　　 = 21/6 = <strong>3.5</strong><br><br>
「何回も投げると、平均して3.5の目が出る」という意味
</div>
`
      },
      {
        heading: "3-2. 二項分布 — コイン・くじの問題",
        content: `
<p>二項分布は「n回の試行で成功がk回起きる確率」を求めます。</p>

<div class="example-box">
<strong>【コインを5回投げて表が3回出る確率】</strong><br><br>
①「どの3回が表か」の組み合わせ数：₅C₃ = 10通り<br>
②「表3回、裏2回」の確率：(1/2)³ × (1/2)² = 1/32<br><br>
P(X=3) = 10 × 1/32 = <strong>10/32 ≈ 31%</strong>
</div>

<div class="key-point">
<strong>二項分布の平均と分散（必ず覚える）</strong><br><br>
X ∼ B(n, p) のとき<br>
平均 E[X] = <strong>np</strong><br>
分散 V[X] = <strong>np(1-p)</strong><br><br>
例：B(20, 0.3) → 平均 = 6、分散 = 4.2
</div>
`
      },
      {
        heading: "3-3. ポアソン分布 — 稀な事象のモデル",
        content: `
<p>ポアソン分布は「ある時間・空間で稀な事象が何回起きるか」の分布です。</p>

<div class="example-box">
<strong>【ポアソン分布が使える場面】</strong><br><br>
・1時間にコールセンターに来る電話の件数<br>
・1日に起きる交通事故の件数<br>
・1㎡の布地に含まれる欠陥の数<br><br>
共通点：<br>
✓ 発生確率が低い（稀な事象）<br>
✓ 平均的な発生回数 λ（ラムダ）が分かっている
</div>

<div class="key-point">
<strong>ポアソン分布の超重要な特徴</strong><br><br>
<strong>平均 = 分散 = λ</strong><br><br>
「平均と分散が等しい」— これはポアソン分布だけの特徴！<br>
試験で「平均と分散が等しい」と出たら → ポアソン分布
</div>

<div class="example-box">
<strong>【例題：λ=3のとき、0回の確率は？】</strong><br><br>
P(X=0) = e⁻³ ≈ 0.050 ≈ <strong>5%</strong><br><br>
「平均3件来るのに0件の確率は約5%」
</div>
`
      },
      {
        heading: "3-4. 期待値・分散の計算ルール",
        content: `
<p>期待値と分散には便利な計算ルールがあります。</p>

<div class="example-box">
<strong>【定数を加えたり掛けたりした場合】</strong><br><br>
E[X] = 50、V[X] = 25 のとき<br><br>
全データに10を足す：<br>
E[X + 10] = 50 + 10 = <strong>60</strong><br>
V[X + 10] = <strong>25</strong>（変わらない！）<br><br>
全データを3倍する：<br>
E[3X] = 3 × 50 = <strong>150</strong><br>
V[3X] = 9 × 25 = <strong>225</strong>（3²倍になる）
</div>

<div class="key-point">
<strong>独立なXとYを足したら？</strong><br><br>
E[X + Y] = E[X] + E[Y]（普通に足せる）<br>
V[X + Y] = V[X] + V[Y]（独立なら足せる）
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 4: 確率分布（連続型）
  // =========================================================
  {
    id: 4,
    title: "確率分布（連続型）",
    icon: "📉",
    sections: [
      {
        heading: "4-1. 連続型とは？離散型との違い",
        content: `
<p>離散型は「1,2,3…」のように飛び飛びの値。連続型はどんな値も取り得ます。</p>

<div class="example-box">
<strong>【離散型 vs 連続型】</strong><br><br>
離散型：サイコロの目（1,2,3,4,5,6）<br>
→「目が3の確率」= 1/6（点に確率がある）<br><br>
連続型：人の身長<br>
→「ぴったり170cmの確率」= ほぼ0<br>
→「165〜175cmの確率」= グラフの面積で求める
</div>

<div class="key-point">
<strong>確率密度関数のポイント</strong><br><br>
連続型では「確率 = グラフの面積」<br><br>
f(x) の性質：<br>
・常に0以上：f(x) ≥ 0<br>
・全面積が1：∫f(x)dx = 1
</div>
`
      },
      {
        heading: "4-2. 正規分布 — 最重要の分布",
        content: `
<p>正規分布は統計学で最も重要な分布。「釣り鐘型」の左右対称な形が特徴。</p>

<div class="example-box">
<strong>【正規分布に従うものの例】</strong><br><br>
・多くの人の身長、体重<br>
・製品の重さや大きさ（誤差）<br>
・テストの点数<br><br>
特徴：平均・中央値・最頻値がすべて同じ（= μ）
</div>

<div class="key-point">
<strong>暗記必須！68-95-99.7ルール</strong><br><br>
μ ± 1σ の範囲　→　約 <strong>68%</strong><br>
μ ± 2σ の範囲　→　約 <strong>95%</strong><br>
μ ± 3σ の範囲　→　約 <strong>99.7%</strong>
</div>

<div class="example-box">
<strong>【具体例】平均170cm、SD=10cmの身長</strong><br><br>
160〜180cm（±1σ）→ 約68%の人<br>
150〜190cm（±2σ）→ 約95%の人<br>
190cm以上は上位約2.5%の珍しい身長
</div>
`
      },
      {
        heading: "4-3. 標準化 — どの正規分布も同じ表で計算",
        content: `
<p>様々な正規分布を「標準正規分布」に変換する技が「標準化」です。</p>

<div class="example-box">
<strong>【標準化の手順】</strong><br><br>
X ∼ N(170, 10²) で「180cm以上の確率」を求める<br><br>
Z = (X - μ) / σ = (180 - 170) / 10 = <strong>1.0</strong><br><br>
→ 正規分布表で P(Z > 1.0) を調べる → 約 15.9%
</div>

<div class="key-point">
<strong>試験で使う正規分布の値（暗記推奨）</strong><br><br>
P(Z > 1.645) = 0.05　（片側5%）<br>
P(Z > 1.960) = 0.025（両側5%、95%信頼区間）<br>
P(Z > 2.576) = 0.005（両側1%、99%信頼区間）<br><br>
「95%信頼区間 → 1.96」これだけまず覚えよう！
</div>
`
      },
      {
        heading: "4-4. t分布・χ²分布・F分布",
        content: `
<p>これら3つは検定・推定で使う重要な分布です。</p>

<table>
<thead><tr><th>分布</th><th>形</th><th>いつ使う？</th></tr></thead>
<tbody>
<tr><td><strong>t分布</strong></td><td>正規分布より裾が厚い</td><td>σ未知の平均の検定・推定</td></tr>
<tr><td><strong>χ²分布</strong></td><td>右に歪んだ分布</td><td>分散の検定、適合度検定</td></tr>
<tr><td><strong>F分布</strong></td><td>右に歪んだ分布</td><td>2つの分散の比較、ANOVA</td></tr>
</tbody>
</table>

<div class="key-point">
<strong>t分布の重要な性質</strong><br><br>
自由度が大きくなる（n が大きくなる）ほど、<br>
t分布は<strong>標準正規分布 N(0,1) に近づく</strong>！<br><br>
n ≥ 30 なら t ≈ z として近似できることが多い
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 5: 標本分布・中心極限定理
  // =========================================================
  {
    id: 5,
    title: "標本分布・中心極限定理",
    icon: "🔬",
    sections: [
      {
        heading: "5-1. なぜ「標本」から「母集団」を推定するの？",
        content: `
<p>日本国民全員の平均年収を知りたいとき、全員を調査するのは不可能です。そこで一部（標本）を調べて全体（母集団）を推測します。</p>

<div class="example-box">
<strong>【母集団と標本の関係】</strong><br><br>
母集団：知りたい全体（日本国民全員）<br>
標本　：実際に調べた一部（1000人のアンケート）<br><br>
母平均 μ：本当の平均（知りたい値・計算不可）<br>
標本平均 X̄：標本から計算した平均（計算できる）<br><br>
X̄ を使って μ を推定するのが統計学！
</div>

<div class="key-point">
<strong>標本平均の重要な性質</strong><br><br>
E[X̄] = μ（偏りなし）<br>
V[X̄] = σ²/n（nが大きいほど小さい）<br><br>
標準誤差 SE = σ/√n<br>
→ n が大きいほど X̄ が μ に近づく！
</div>
`
      },
      {
        heading: "5-2. 中心極限定理 — 統計学最大の奇跡",
        content: `
<div class="key-point">
<strong>中心極限定理（超重要！）</strong><br><br>
母集団の分布がどんな形でも、<br>
n が十分大きければ、<br>
標本平均 X̄ の分布は<strong>正規分布に近づく</strong>！<br><br>
X̄ ∼ N(μ, σ²/n)（近似的に）<br><br>
目安：n ≥ 30 で正規分布に近似できることが多い
</div>

<div class="example-box">
<strong>【イメージで理解する】</strong><br><br>
サイコロ（1〜6の一様分布）を例に：<br><br>
1回投げた目の分布：フラット（均等）<br>
5回の平均の分布：少し山型<br>
30回の平均の分布：きれいな正規分布！<br><br>
→ 何を繰り返しても、平均を取ると正規分布になる
</div>

<div class="example-box">
<strong>【実際の使い方】</strong><br><br>
μ=100、σ=20、n=100 のとき<br><br>
X̄ ∼ N(100, 4)（近似）<br>
標準誤差 = 20/√100 = <strong>2</strong><br><br>
「標本平均が98〜102の範囲に入る確率は約68%」
</div>
`
      },
      {
        heading: "5-3. 標準誤差 — 推定の精度",
        content: `
<p>「標準誤差」は標本平均のばらつきを表します。</p>

<table>
<thead><tr><th></th><th>標準偏差 SD</th><th>標準誤差 SE</th></tr></thead>
<tbody>
<tr><td>何のばらつき？</td><td>個々のデータのばらつき</td><td>標本平均のばらつき</td></tr>
<tr><td>公式</td><td>σ</td><td>σ/√n</td></tr>
<tr><td>nが増えると？</td><td>変わらない</td><td>小さくなる（精度↑）</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>【標本サイズの効果】</strong><br><br>
σ = 10 とする<br><br>
n = 25：SE = 10/√25 = <strong>2.0</strong><br>
n = 100：SE = 10/√100 = <strong>1.0</strong><br>
n = 400：SE = 10/√400 = <strong>0.5</strong><br><br>
→ 標本を4倍にすると SE は半分（精度2倍）
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 6: 統計的推定
  // =========================================================
  {
    id: 6,
    title: "統計的推定",
    icon: "🎯",
    sections: [
      {
        heading: "6-1. 点推定 vs 区間推定",
        content: `
<p>母平均μを推定するとき、「ズバリ70点」と答えるか「68〜72点の範囲」と答えるか。</p>

<table>
<thead><tr><th></th><th>点推定</th><th>区間推定</th></tr></thead>
<tbody>
<tr><td>答え方</td><td>1つの値</td><td>値の範囲</td></tr>
<tr><td>例</td><td>「母平均は70点」</td><td>「68〜72点の間」</td></tr>
<tr><td>不確実性</td><td>表現できない</td><td>表現できる</td></tr>
</tbody>
</table>

<div class="key-point">
<strong>良い推定量の条件</strong><br><br>
<strong>不偏性</strong>：E[推定量] = 真の値（的外れでない）<br>
<strong>一致性</strong>：n が大きくなると真の値に近づく<br>
<strong>有効性</strong>：不偏推定量の中で分散が最小
</div>
`
      },
      {
        heading: "6-2. 信頼区間 — 「たぶんこの範囲」",
        content: `
<div class="example-box">
<strong>【σ既知の場合の95%信頼区間】</strong><br><br>
n=100、X̄=75、σ=10（既知）のとき<br><br>
95%CI = X̄ ± 1.96 × (σ/√n)<br>
　　　= 75 ± 1.96 × (10/10)<br>
　　　= 75 ± 1.96<br>
　　　= [<strong>73.04, 76.96</strong>]
</div>

<div class="key-point">
<strong>信頼区間の「よくある誤解」</strong><br><br>
❌ 誤：「母平均がこの区間に入る確率が95%」<br>
✓ 正：「この方法で作ると95%の確率で母平均を含む」
</div>

<div class="example-box">
<strong>【σ未知（実際の状況）の場合】</strong><br><br>
n=25、X̄=80、S=12 のとき（自由度24）<br><br>
95%CI = 80 ± 2.064 × 12/√25<br>
　　　= 80 ± 2.064 × 2.4<br>
　　　= 80 ± 4.95<br>
　　　= [<strong>75.05, 84.95</strong>]
</div>
`
      },
      {
        heading: "6-3. 信頼区間の幅を決める要因",
        content: `
<table>
<thead><tr><th>要因</th><th>大きくなると？</th><th>区間の幅</th></tr></thead>
<tbody>
<tr><td>標本サイズ n</td><td>n が大きい</td><td>狭くなる ✓</td></tr>
<tr><td>標準偏差 σ</td><td>σ が大きい</td><td>広くなる ×</td></tr>
<tr><td>信頼水準</td><td>99%（95%より高い）</td><td>広くなる</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>【標本サイズの効果】</strong><br><br>
σ=10、95%信頼水準での区間の幅：<br><br>
n=25　：幅 = 2×1.96×10/5 = <strong>7.84</strong><br>
n=100　：幅 = 2×1.96×10/10 = <strong>3.92</strong>（半分！）<br>
n=400　：幅 = 2×1.96×10/20 = <strong>1.96</strong>（さらに半分）<br><br>
→ 幅を半分にするには n を4倍にする必要がある
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 7: 統計的仮説検定
  // =========================================================
  {
    id: 7,
    title: "統計的仮説検定",
    icon: "⚖️",
    sections: [
      {
        heading: "7-1. 仮説検定の考え方",
        content: `
<div class="example-box">
<strong>【裁判の例えで理解する】</strong><br><br>
帰無仮説 H₀ = 「無罪（証拠が十分でない）」<br>
対立仮説 H₁ = 「有罪（本当に証明したいこと）」<br><br>
「有罪の証拠が十分なら H₀（無罪）を棄却」<br>
統計でも「データの証拠が十分なら H₀ を棄却」
</div>

<div class="key-point">
<strong>検定の5ステップ</strong><br><br>
①　H₀ と H₁ を設定<br>
②　有意水準 α を決める（5%が多い）<br>
③　検定統計量を計算する<br>
④　p値または棄却域を求める<br>
⑤　p値 &lt; α なら H₀ を棄却
</div>
`
      },
      {
        heading: "7-2. 第一種・第二種の過誤",
        content: `
<table>
<thead><tr><th></th><th>H₀が実は正しい</th><th>H₀が実は間違い</th></tr></thead>
<tbody>
<tr><td><strong>H₀を棄却</strong></td><td>第一種の過誤（α）</td><td>正しい判断 ✓</td></tr>
<tr><td><strong>H₀を採択</strong></td><td>正しい判断 ✓</td><td>第二種の過誤（β）</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>【薬の例え】</strong><br><br>
第一種の過誤（α）：効果がない薬を「効く」と判断<br>
→ 危険な薬を承認してしまう<br><br>
第二種の過誤（β）：効果がある薬を「効かない」と判断<br>
→ 良い薬を承認しない
</div>

<div class="key-point">
<strong>検出力 = 1 - β</strong><br><br>
「本当に効果があるとき正しく検出できる確率」<br><br>
α を小さく → β が大きくなる（トレードオフ）<br>
両方小さくしたい → n を大きくする！
</div>
`
      },
      {
        heading: "7-3. z検定・t検定の使い分け",
        content: `
<div class="example-box">
<strong>【z検定の例（σ既知）】</strong><br><br>
n=100、X̄=498、σ=10、H₀: μ=500<br><br>
z = (498 - 500) / (10/√100) = -2/1 = <strong>-2.0</strong><br><br>
棄却域 |z| > 1.96（両側5%）<br>
|-2.0| = 2.0 > 1.96 → <strong>H₀ を棄却</strong>
</div>

<div class="example-box">
<strong>【t検定の例（σ未知）】</strong><br><br>
n=16、X̄=52、S=8、H₀: μ=50<br><br>
t = (52 - 50) / (8/√16) = 2/2 = <strong>1.0</strong><br><br>
自由度15の t₀.₀₂₅ ≈ 2.131<br>
|1.0| < 2.131 → <strong>H₀ を棄却しない</strong>
</div>
`
      },
      {
        heading: "7-4. p値とχ²検定",
        content: `
<div class="key-point">
<strong>p値の意味</strong><br><br>
p値 = 「H₀が正しいとしたとき、今回以上に極端な結果が起きる確率」<br><br>
p値が小さい → H₀のもとでは稀 → H₀ を疑う<br>
p値 &lt; α → H₀ を棄却
</div>

<div class="example-box">
<strong>【χ² 適合度検定の例】</strong><br><br>
サイコロが公平か？120回投げた結果：<br>
期待値（均等なら20回ずつ）との差を計算<br><br>
χ² = Σ（観測 - 期待）²/期待<br><br>
計算値 &lt; χ²(5)の上側5%点(≈11.07) → 公平といえる
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 8: 分散分析（ANOVA）
  // =========================================================
  {
    id: 8,
    title: "分散分析（ANOVA）",
    icon: "📊",
    sections: [
      {
        heading: "8-1. なぜANOVAが必要？",
        content: `
<div class="example-box">
<strong>【多重比較の問題】</strong><br><br>
3グループを2グループずつ比較すると3回の検定が必要<br><br>
各検定でα=0.05のとき：<br>
「少なくとも1回誤りを犯す確率」<br>
= 1 - (0.95)³ ≈ <strong>14.3%</strong><br><br>
→ 繰り返すほど「偽の有意」が出やすくなる！<br>
→ だからANOVAで一度に検定する
</div>

<div class="key-point">
<strong>ANOVAの帰無仮説</strong><br><br>
H₀：全グループの母平均が等しい（μ₁=μ₂=…=μₖ）<br>
H₁：少なくとも1組のグループ間に差がある<br><br>
ANOVAが有意 → どこかに差がある<br>
→ 多重比較でどこが違うか詳しく調べる
</div>
`
      },
      {
        heading: "8-2. F統計量の意味",
        content: `
<div class="key-point">
<strong>F統計量の意味</strong><br><br>
F = MSB / MSW<br>
　= 群間平均平方 / 群内平均平方<br><br>
「グループ間のばらつき」が「グループ内のばらつき」より<br>
大きいほど F が大きくなる<br><br>
F が大きい → グループ間に本当の差がある可能性が高い
</div>

<div class="example-box">
<strong>【変動の分解：SST = SSB + SSW】</strong><br><br>
SST（全体）= 全データが全体平均からどれだけ離れているか<br>
SSB（群間）= 各グループ平均が全体平均からどれだけ離れているか<br>
SSW（群内）= 各データがそのグループ平均からどれだけ離れているか<br><br>
全体のばらつき = グループ間 + グループ内
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 9: 回帰分析・相関分析
  // =========================================================
  {
    id: 9,
    title: "回帰分析・相関分析",
    icon: "📐",
    sections: [
      {
        heading: "9-1. 回帰分析とは",
        content: `
<p>「広告費が100万円増えたら、売上はいくら増えるか？」このような予測をするのが回帰分析です。</p>

<div class="example-box">
<strong>【単回帰分析のイメージ】</strong><br><br>
広告費（X）：100, 150, 200, 250, 300万円<br>
売上（Y）　：500, 600, 700, 800, 900万円<br><br>
回帰直線：Ŷ = 300 + 2X<br>
→「広告費が1万円増えると売上が2万円増える」
</div>

<div class="key-point">
<strong>最小二乗法とは？</strong><br><br>
「全データと直線の距離の二乗和が最小」になる直線を引く<br><br>
残差 eᵢ = Yᵢ - Ŷᵢ（実測 - 予測）<br>
Σeᵢ² を最小にするβ₀, β₁ を求める
</div>
`
      },
      {
        heading: "9-2. 決定係数 R²",
        content: `
<div class="example-box">
<strong>【R² の意味を直感的に】</strong><br><br>
R² = 0.8 → 「Yのばらつきの80%をモデルで説明できる」<br>
R² = 0.9 → かなり良いモデル<br>
R² = 0.3 → 他の変数も重要かも
</div>

<div class="key-point">
<strong>重回帰の注意点：多重共線性</strong><br><br>
説明変数同士の相関が高すぎると推定が不安定になる<br><br>
VIF（分散拡大係数）≥ 10 が多重共線性の目安<br>
対処：片方の変数を除く など
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 10: ノンパラメトリック検定
  // =========================================================
  {
    id: 10,
    title: "ノンパラメトリック検定",
    icon: "🔄",
    sections: [
      {
        heading: "10-1. ノンパラメトリックとは？",
        content: `
<p>「データが正規分布に従う」という仮定が使えない場合に使う検定です。</p>

<div class="example-box">
<strong>【こんな場合に使う】</strong><br><br>
✓ データが少ない（n &lt; 30など）<br>
✓ 明らかに正規分布に従わない<br>
✓ 順序尺度のデータ（1〜5の評価点など）
</div>

<table>
<thead><tr><th>場面</th><th>パラメトリック</th><th>ノンパラメトリック</th></tr></thead>
<tbody>
<tr><td>2群の独立比較</td><td>t検定</td><td>Mann-Whitney U検定</td></tr>
<tr><td>2群の対応比較</td><td>対応t検定</td><td>Wilcoxon符号順位検定</td></tr>
<tr><td>3群以上</td><td>ANOVA</td><td>Kruskal-Wallis検定</td></tr>
<tr><td>相関の検定</td><td>Pearson相関</td><td>Spearman順位相関</td></tr>
</tbody>
</table>
`
      },
      {
        heading: "10-2. Mann-Whitney U検定の仕組み",
        content: `
<div class="example-box">
<strong>【順位を使って比較する】</strong><br><br>
グループA：3, 5, 7<br>
グループB：1, 4, 9<br><br>
全データを合わせて順位をつける：<br>
1(B)=1位、3(A)=2位、4(B)=3位、5(A)=4位、7(A)=5位、9(B)=6位<br><br>
Aの順位和 = 2+4+5 = 11<br>
Bの順位和 = 1+3+6 = 10<br><br>
→ この順位和の差が統計的に有意かを判定
</div>

<div class="key-point">
<strong>ノンパラのメリット・デメリット</strong><br><br>
✓ メリット：分布の仮定不要、外れ値に強い<br>
✗ デメリット：正規性が満たされる場合はやや検出力が低い
</div>
`
      }
    ]
  },

  // =========================================================
  // Unit 11: 時系列分析の基礎
  // =========================================================
  {
    id: 11,
    title: "時系列分析の基礎",
    icon: "📅",
    sections: [
      {
        heading: "11-1. 時系列データとは？",
        content: `
<p>時系列データとは「時間の順番に並んだデータ」のことです。</p>

<div class="example-box">
<strong>【時系列データの特徴】</strong><br><br>
通常のデータ：各観測が独立<br>
時系列データ：前後の観測が「つながっている」<br><br>
今日の気温は昨日の気温と関係がある！<br>
→ この「つながり」（自己相関）を分析する
</div>

<div class="key-point">
<strong>時系列データの4つの成分</strong><br><br>
T（トレンド）：長期的な増減傾向<br>
S（季節変動）：1年以内の周期的な変動<br>
C（循環変動）：数年周期の景気循環<br>
I（不規則変動）：予測できないランダムな変動
</div>
`
      },
      {
        heading: "11-2. 定常性と自己相関",
        content: `
<div class="example-box">
<strong>【定常 vs 非定常】</strong><br><br>
定常時系列：<br>
・平均が時間によらず一定<br>
・分散が時間によらず一定<br><br>
非定常時系列：<br>
・右肩上がりの株価など<br>
→ 差分を取って定常化する！
</div>

<div class="key-point">
<strong>自己相関とは？</strong><br><br>
「今日の気温」と「1日前の気温」の相関 → ラグ1の自己相関<br>
「今日の気温」と「7日前の気温」の相関 → ラグ7の自己相関<br><br>
コレログラム（ACFのグラフ）で確認する
</div>
`
      },
      {
        heading: "11-3. ARMAモデルの基礎",
        content: `
<div class="key-point">
<strong>ARMAモデルの2つの部品</strong><br><br>
AR（自己回帰）：過去の自分の値で現在を予測<br>
例：「今月の売上 = 先月の0.8倍 + ランダムな変動」<br><br>
MA（移動平均）：過去の誤差で現在を予測<br>
例：「先月の予測外れが今月に影響する」
</div>

<div class="example-box">
<strong>【ARIMA(p,d,q) の意味】</strong><br><br>
p：AR の次数<br>
d：差分の回数（非定常→定常にするため）<br>
q：MA の次数<br><br>
ARIMA(1,1,0)：「1回差分を取ってAR(1)を当てはめる」
</div>

<div class="key-point">
<strong>モデル選択のヒント</strong><br><br>
ACF が q 次でカットオフ → MA(q)<br>
PACF が p 次でカットオフ → AR(p)<br>
AIC が小さいモデルが良いモデル
</div>
`
      }
    ]
  }
];
