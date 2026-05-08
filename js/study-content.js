const STUDY_CONTENT = [
  {
    id: 1,
    title: "データの種類と記述統計",
    icon: "📊",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>統計分析を行うには、まず「どんなデータを扱っているか」を正しく理解することが大切です。<br>
データには種類があり、種類によって使える統計手法が変わります。また、データの「中心」や「ばらつき」を数値で表す方法（記述統計）も学びます。</p>

<p>この単元は試験でも毎回出題される基礎中の基礎です。しっかり押さえましょう。</p>
`
      },
      {
        heading: "1. 尺度（スケール）の種類",
        content: `
<p>データの種類は、以下の4つの尺度に分類されます。上に行くほど情報量が少なく、下に行くほど豊富です。</p>

<table>
<thead><tr><th>尺度</th><th>特徴</th><th>具体例</th><th>使える統計量</th></tr></thead>
<tbody>
<tr><td><strong>名義尺度</strong></td><td>分類・区別のみ（順序なし）</td><td>血液型（A/B/O/AB）、性別、都道府県</td><td>最頻値、度数</td></tr>
<tr><td><strong>順序尺度</strong></td><td>順序あり、差の大きさは不明</td><td>満足度（1〜5段階）、学年（1年〜3年）</td><td>最頻値、中央値</td></tr>
<tr><td><strong>間隔尺度</strong></td><td>差に意味あり、0は基準点</td><td>気温（℃）、西暦年</td><td>平均値、分散</td></tr>
<tr><td><strong>比例尺度</strong></td><td>差・比率の両方に意味あり、絶対的な0がある</td><td>身長（cm）、体重（kg）、売上高</td><td>すべての統計量</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>例）気温と体重の違い</strong><br>
「今日は10℃、昨日は5℃」→ 差は5℃（間隔尺度）<br>
「今日は昨日の2倍暑い」とは言いにくい（0℃が「暑さがない」わけではないため）<br><br>
「体重60kgは30kgの2倍重い」→ 比率に意味がある（比例尺度）<br>
体重の0kgは「重さがまったくない」という絶対的な0点です。
</div>

<div class="key-point">
<strong>試験のポイント：</strong><br>
「満足度評価（1〜5）」は順序尺度です。1から2への差と4から5への差が<br>
等しいとは言えないため間隔尺度ではありません。
</div>
`
      },
      {
        heading: "2. 代表値（データの中心を表す値）",
        content: `
<p>データ全体を1つの数値で代表させる値を「代表値」といいます。代表値には3種類あります。</p>

<p><strong>① 平均値（mean）</strong></p>
<p>全データを足して個数で割った値。最もよく使われる代表値。</p>
<p>\\( \\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} = \\frac{1}{n}\\sum_{i=1}^{n} x_i \\)</p>

<div class="example-box">
<strong>例）</strong> テストの点数：60, 70, 80, 90, 50<br>
平均値 = (60 + 70 + 80 + 90 + 50) ÷ 5 = 350 ÷ 5 = <strong>70点</strong>
</div>

<p><strong>② 中央値（median）</strong></p>
<p>データを小さい順に並べたとき、ちょうど真ん中にくる値。</p>
<ul>
<li>データ数が奇数のとき → 真ん中の1つの値</li>
<li>データ数が偶数のとき → 真ん中2つの値の平均</li>
</ul>

<div class="example-box">
<strong>例①（奇数）</strong> データ：50, 60, <strong>70</strong>, 80, 90（5個）<br>
中央値 = 3番目の値 = <strong>70</strong><br><br>
<strong>例②（偶数）</strong> データ：50, 60, <strong>70, 80</strong>, 90, 100（6個）<br>
中央値 = (70 + 80) ÷ 2 = <strong>75</strong>
</div>

<p><strong>③ 最頻値（mode）</strong></p>
<p>最もよく出てくる値（頻度が最も高い値）。カテゴリデータにも使える唯一の代表値。</p>

<div class="example-box">
<strong>例）</strong> データ：2, 3, 3, 5, 3, 7, 3<br>
「3」が4回登場して最多 → 最頻値 = <strong>3</strong>
</div>

<div class="key-point">
<strong>外れ値への強さ：</strong><br>
平均値は外れ値（極端な値）に大きく影響されます。<br>
中央値・最頻値は外れ値の影響を受けにくいため「頑健（ロバスト）」といいます。<br><br>
例）年収：200万, 250万, 300万, 350万, 3000万 の場合<br>
平均 = 820万（実態と乖離）、中央値 = 300万（実態に近い）
</div>

<p><strong>分布の形と代表値の関係：</strong></p>
<table>
<thead><tr><th>分布の形</th><th>代表値の関係</th><th>例</th></tr></thead>
<tbody>
<tr><td>右に歪んだ分布（正の歪み）</td><td>最頻値 ≤ 中央値 ≤ 平均値</td><td>年収分布、株価</td></tr>
<tr><td>左に歪んだ分布（負の歪み）</td><td>平均値 ≤ 中央値 ≤ 最頻値</td><td>—</td></tr>
<tr><td>対称分布（正規分布など）</td><td>平均値 = 中央値 = 最頻値</td><td>身長、テストの点数</td></tr>
</tbody>
</table>
`
      },
      {
        heading: "3. 散布度（データのばらつきを表す値）",
        content: `
<p>代表値だけではデータの全体像は分かりません。「どれくらいばらついているか」を表す散布度も重要です。</p>

<p><strong>① 分散（variance）</strong></p>
<p>各データが平均からどれくらい離れているかの「二乗の平均」。</p>

<p>母分散：\\( \\sigma^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\mu)^2 \\)</p>
<p>標本分散（不偏分散）：\\( s^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2 \\)</p>

<div class="example-box">
<strong>例）</strong> データ：2, 4, 6（平均 = 4）<br>
各偏差：(2-4)² = 4、(4-4)² = 0、(6-4)² = 4<br>
母分散 = (4+0+4) ÷ 3 = 8/3 ≈ 2.67<br>
標本分散 = (4+0+4) ÷ (3-1) = 8/2 = <strong>4</strong>
</div>

<div class="key-point">
<strong>n と n-1 の違い：</strong><br>
データが「母集団全体」なら n で割る（母分散）。<br>
データが「標本（サンプル）」なら n-1 で割る（標本分散・不偏分散）。<br>
試験では、特に断りがない限り n-1 を使うことが多いです。
</div>

<p><strong>② 標準偏差（standard deviation, SD）</strong></p>
<p>分散の正の平方根。データと同じ単位になるため解釈しやすい。</p>
<p>\\( s = \\sqrt{s^2} \\)</p>

<div class="example-box">
<strong>例）</strong> 上の例の標本分散 = 4 → 標準偏差 = √4 = <strong>2</strong><br>
「平均4から平均±2の範囲にデータが集中している」と解釈できます。
</div>

<p><strong>③ 変動係数（CV：Coefficient of Variation）</strong></p>
<p>標準偏差を平均値で割った値。単位の異なるデータのばらつきを比較できる。</p>
<p>\\( CV = \\frac{s}{\\bar{x}} \\)</p>

<div class="example-box">
<strong>例）</strong> A社の株価：平均1000円、SD=100円 → CV = 100/1000 = 0.10（10%）<br>
B社の株価：平均500円、SD=80円 → CV = 80/500 = 0.16（16%）<br>
→ B社の方が相対的なばらつきが大きい（価格が安くてもリスクが高い）
</div>

<p><strong>④ 四分位数と四分位範囲（IQR）</strong></p>
<p>データを小さい順に並べて4等分する境界値が四分位数です。</p>
<ul>
<li>Q1（第1四分位数）：下から25%の位置</li>
<li>Q2（第2四分位数）：下から50%の位置 ＝ 中央値</li>
<li>Q3（第3四分位数）：下から75%の位置</li>
<li>四分位範囲（IQR）= Q3 − Q1</li>
</ul>
<p>IQRは外れ値の影響を受けにくいばらつきの指標です。箱ひげ図の「箱」の幅がIQRを表しています。</p>
`
      },
      {
        heading: "4. 相関係数",
        content: `
<p>2つの変数がどれくらい「一緒に動くか」を表す指標が相関係数です。</p>

<p>ピアソンの積率相関係数：</p>
<p>\\( r = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2 \\cdot \\sum(y_i-\\bar{y})^2}} \\)</p>

<table>
<thead><tr><th>r の値</th><th>解釈</th></tr></thead>
<tbody>
<tr><td>0.7 ≤ r ≤ 1.0</td><td>強い正の相関</td></tr>
<tr><td>0.4 ≤ r &lt; 0.7</td><td>中程度の正の相関</td></tr>
<tr><td>0.0 ≤ r &lt; 0.4</td><td>弱い正の相関またはほぼなし</td></tr>
<tr><td>-0.4 ≤ r &lt; 0.0</td><td>弱い負の相関またはほぼなし</td></tr>
<tr><td>-0.7 ≤ r &lt; -0.4</td><td>中程度の負の相関</td></tr>
<tr><td>-1.0 ≤ r &lt; -0.7</td><td>強い負の相関</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>具体例：</strong><br>
・気温とアイスクリームの売上 → r ≈ +0.9（強い正の相関）<br>
・気温とコートの売上 → r ≈ −0.8（強い負の相関）<br>
・血液型と成績 → r ≈ 0（ほぼ相関なし）
</div>

<div class="key-point">
<strong>重要：相関と因果は別物！</strong><br>
相関関係があっても、因果関係があるとは限りません。<br>
例）アイスの売上と溺死者数は相関するが、アイスが溺死の原因ではない。<br>
→「気温」という第3の変数（交絡変数）が両方に影響しているから。
</div>

<p><strong>偏差値</strong>：\\( T = 50 + 10 \\times \\frac{x - \\bar{x}}{s} \\)</p>
<p>平均点を取ると偏差値50、平均より1標準偏差上なら偏差値60になります。</p>
`
      }
    ]
  },

  {
    id: 2,
    title: "確率の基本・ベイズの定理",
    icon: "🎲",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>「確率」は統計学の土台となる考え方です。試験で直接問われるだけでなく、後の推定・検定にも必要な知識です。</p>

<p>この単元では「確率の計算ルール」と「条件が変わると確率がどう変わるか（ベイズの定理）」を学びます。<br>
医療検査の精度評価など、実務でも使われる重要な概念です。</p>
`
      },
      {
        heading: "1. 確率の基本ルール",
        content: `
<p><strong>事象（event）</strong>：確率を考える対象（「サイコロで1が出る」など）</p>
<p><strong>全事象 Ω</strong>：起こりうる全ての結果の集合</p>

<p>確率 P(A) は次の3つの公理を満たします：</p>
<ul>
<li>① P(A) ≥ 0（確率は0以上）</li>
<li>② P(Ω) = 1（必ず何かが起こる）</li>
<li>③ A と B が排反（同時に起こらない）なら P(A∪B) = P(A) + P(B)</li>
</ul>

<p><strong>余事象</strong>：A が起こらない事象 Aᶜ</p>
<p>\\( P(A^c) = 1 - P(A) \\)</p>

<div class="example-box">
<strong>例）</strong> サイコロを1回投げて偶数が出る確率<br>
偶数：{2, 4, 6} → 6面中3面<br>
P(偶数) = 3/6 = 1/2<br><br>
余事象「奇数」= 1 − 1/2 = 1/2<br><br>
<strong>「少なくとも1回〜」は余事象を使うと楽！</strong><br>
例）コインを3回投げて「少なくとも1回表が出る確率」<br>
= 1 − P(全部裏) = 1 − (1/2)³ = 1 − 1/8 = <strong>7/8</strong>
</div>

<p><strong>加法定理（Addition Rule）</strong></p>
<p>\\( P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\)</p>
<p>A と B が排反のとき：\\( P(A \\cup B) = P(A) + P(B) \\)</p>

<div class="example-box">
<strong>例）</strong> トランプ1枚を引く。「ハート」または「絵札」が出る確率<br>
P(ハート) = 13/52、P(絵札) = 12/52、P(ハートの絵札) = 3/52<br>
P(ハート∪絵札) = 13/52 + 12/52 − 3/52 = 22/52 = <strong>11/26</strong>
</div>
`
      },
      {
        heading: "2. 条件付き確率と独立性",
        content: `
<p><strong>条件付き確率</strong>：B が起きたという条件のもとで、A が起きる確率</p>
<p>\\( P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0) \\)</p>

<div class="example-box">
<strong>例）</strong> 100人中、男性60人・女性40人。男性のうち喫煙者は30人。<br>
「男性である」という条件のもとで喫煙者の確率<br>
P(喫煙者|男性) = P(男性かつ喫煙者) / P(男性) = (30/100) / (60/100) = 30/60 = <strong>1/2</strong>
</div>

<p><strong>乗法定理</strong>：\\( P(A \\cap B) = P(A|B) \\cdot P(B) \\)</p>

<div class="example-box">
<strong>例）</strong> 赤玉3個・白玉2個の袋から2個取り出す（非復元）。2個とも赤の確率<br>
1回目が赤：P = 3/5<br>
2回目も赤（1回目赤の条件のもと、残り赤2個/全4個）：P = 2/4 = 1/2<br>
P(両方赤) = 3/5 × 1/2 = <strong>3/10</strong>
</div>

<p><strong>独立性</strong>：B の情報が A の確率に影響しないとき「A と B は独立」といいます。</p>
<p>A と B が独立 ⟺ \\( P(A \\cap B) = P(A) \\times P(B) \\)</p>

<div class="key-point">
<strong>「排反」と「独立」の違い（試験頻出！）</strong><br>
・排反：A と B が同時に起こらない（P(A∩B) = 0）<br>
・独立：A の起不起が B の確率に影響しない<br><br>
P(A)>0、P(B)>0 なら、排反なら独立ではない。（同時に起こらないという情報は確率に影響するから）
</div>
`
      },
      {
        heading: "3. 全確率の公式とベイズの定理",
        content: `
<p>「原因」から「結果」の確率を求めるのが通常の確率計算ですが、<br>
<strong>「結果が分かったときに原因を推定する」</strong>のがベイズの定理です。</p>

<p>B₁, B₂, ..., Bₖ が全事象 Ω の分割（互いに排反で全体を覆う）のとき：</p>

<p><strong>全確率の公式</strong>：\\( P(A) = \\sum_{i=1}^{k} P(A|B_i) \\cdot P(B_i) \\)</p>

<p><strong>ベイズの定理</strong>：\\( P(B_j|A) = \\frac{P(A|B_j) \\cdot P(B_j)}{\\sum_{i=1}^{k} P(A|B_i) \\cdot P(B_i)} \\)</p>

<div class="example-box">
<strong>例）医療検査への応用</strong><br>
ある病気の有病率（P(病気)）= 1%<br>
検査の感度（病気のある人が陽性になる確率）= P(陽性|病気) = 95%<br>
検査の特異度（病気のない人が陰性になる確率）= P(陰性|健康) = 90%<br>
→ P(偽陽性) = P(陽性|健康) = 1 − 0.90 = 10%<br><br>
陽性だったとき実際に病気の確率（陽性的中率）は？<br><br>
P(陽性) = P(陽性|病気)×P(病気) + P(陽性|健康)×P(健康)<br>
= 0.95 × 0.01 + 0.10 × 0.99<br>
= 0.0095 + 0.099 = 0.1085<br><br>
P(病気|陽性) = 0.0095 / 0.1085 ≈ <strong>8.8%</strong><br><br>
「陽性でも実際に病気なのは約9人に1人！」感度・特異度が高くても有病率が低いと陽性的中率は低くなります。
</div>

<div class="key-point">
<strong>ベイズの定理の考え方：</strong><br>
事前確率（P(病気) = 1%）＋ 検査結果の情報<br>
→ 事後確率（P(病気|陽性) ≈ 9%）<br><br>
新しい証拠によって確率を「更新」する考え方がベイズ統計学の基本です。
</div>
`
      }
    ]
  },

  {
    id: 3,
    title: "確率分布（離散型）",
    icon: "📈",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>確率変数 X が取りうる値が「0, 1, 2, ...」のように飛び飛びの場合、「離散型確率分布」といいます。</p>

<p>代表的な離散分布（二項分布・ポアソン分布など）のパターンを覚えると、<br>
実際の問題で「この状況はどの分布を使えばいいか」がすぐ分かるようになります。</p>
`
      },
      {
        heading: "1. 期待値（平均）と分散の基本",
        content: `
<p><strong>期待値（平均）</strong>：確率変数の「重み付き平均」</p>
<p>\\( E[X] = \\sum_{i} x_i \\cdot P(X = x_i) \\)</p>

<div class="example-box">
<strong>例）</strong> サイコロ1回の目の期待値<br>
E[X] = 1×(1/6) + 2×(1/6) + 3×(1/6) + 4×(1/6) + 5×(1/6) + 6×(1/6)<br>
= (1+2+3+4+5+6)/6 = 21/6 = <strong>3.5</strong>
</div>

<p><strong>期待値の性質（線形性）</strong>：</p>
<p>\\( E[aX + b] = a \\cdot E[X] + b \\)（a, b は定数）</p>
<p>\\( E[X + Y] = E[X] + E[Y] \\)（独立でなくても成立）</p>

<p><strong>分散</strong>：\\( V[X] = E[(X - E[X])^2] = E[X^2] - (E[X])^2 \\)</p>
<p>\\( V[aX + b] = a^2 \\cdot V[X] \\)</p>
<p>X と Y が独立のとき：\\( V[X + Y] = V[X] + V[Y] \\)</p>
`
      },
      {
        heading: "2. 二項分布 B(n, p)",
        content: `
<p><strong>使う場面</strong>：「n回の独立な試行で成功する回数」を表したいとき</p>

<p><strong>条件</strong>：</p>
<ul>
<li>試行を n 回繰り返す</li>
<li>各試行は独立（前の結果が次に影響しない）</li>
<li>各試行で成功する確率 p が一定</li>
</ul>

<p>\\( P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k} \\)</p>

<table>
<thead><tr><th></th><th>値</th></tr></thead>
<tbody>
<tr><td>平均（期待値）</td><td>\\( E[X] = np \\)</td></tr>
<tr><td>分散</td><td>\\( V[X] = np(1-p) \\)</td></tr>
<tr><td>標準偏差</td><td>\\( \\sqrt{np(1-p)} \\)</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>例）</strong> コインを10回投げて表が出る回数 X ∼ B(10, 0.5)<br>
平均 = 10 × 0.5 = <strong>5回</strong><br>
分散 = 10 × 0.5 × 0.5 = <strong>2.5</strong><br>
標準偏差 = √2.5 ≈ 1.58<br><br>
「ちょうど3回表が出る確率」<br>
P(X=3) = ₁₀C₃ × (0.5)³ × (0.5)⁷ = 120 × (0.5)¹⁰ ≈ 0.117
</div>

<div class="key-point">
<strong>正規分布で近似できる条件：</strong><br>
np ≥ 5 かつ n(1-p) ≥ 5 のとき B(n,p) ≈ N(np, np(1-p))
</div>
`
      },
      {
        heading: "3. ポアソン分布 Po(λ)",
        content: `
<p><strong>使う場面</strong>：「単位時間（または単位面積）に発生する稀な事象の回数」を表したいとき</p>

<p><strong>代表的な例：</strong></p>
<ul>
<li>1時間に届くメールの件数</li>
<li>1日に起きる交通事故の件数</li>
<li>1㎡の布地に含まれる欠陥の数</li>
</ul>

<p>\\( P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!} \\quad (k = 0, 1, 2, ...) \\)</p>

<table>
<thead><tr><th></th><th>値</th></tr></thead>
<tbody>
<tr><td>平均</td><td>\\( E[X] = \\lambda \\)</td></tr>
<tr><td>分散</td><td>\\( V[X] = \\lambda \\)（平均＝分散！）</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>例）</strong> コールセンターに平均 λ=3 件/分の電話が来るとする。<br>
0件来る確率：P(X=0) = e⁻³ × 3⁰ / 0! = e⁻³ ≈ <strong>0.050</strong>（約5%）<br>
2件来る確率：P(X=2) = e⁻³ × 3² / 2! = e⁻³ × 4.5 ≈ <strong>0.224</strong>（約22%）
</div>

<div class="key-point">
<strong>二項分布とポアソン分布の関係：</strong><br>
n が大きく p が小さい（稀な事象）とき、np = λ とすると：<br>
B(n, p) ≈ Po(λ)<br><br>
例）1000人中1人が発症する病気で、100人を観察 → B(100, 0.001) ≈ Po(0.1)
</div>
`
      },
      {
        heading: "4. 幾何分布・超幾何分布",
        content: `
<p><strong>幾何分布 Geo(p)</strong>：「初めて成功するまでの試行回数」の分布</p>
<p>\\( P(X = k) = (1-p)^{k-1} \\cdot p \\quad (k = 1, 2, 3, ...) \\)</p>
<p>平均 = 1/p、分散 = (1-p)/p²</p>

<div class="example-box">
<strong>例）</strong> 当選確率20%のガチャを「初めて当たるまで回す」回数 X ∼ Geo(0.2)<br>
平均 = 1/0.2 = <strong>5回</strong>で初めて当たる（期待値）<br>
3回目で初めて当たる確率 = (0.8)² × 0.2 = 0.128
</div>

<p><strong>超幾何分布</strong>：有限母集団から非復元抽出する場合の成功数の分布</p>
<p>N 個中 K 個が「当たり」の母集団から n 個取り出したときの当たり数</p>

<div class="example-box">
<strong>例）</strong> ロット20個中3個が不良品。5個検査して不良品数を調べる場合<br>
→ 非復元抽出なので超幾何分布を使う（二項分布ではない）<br>
二項分布 B(5, 3/20) は復元抽出を仮定した近似値に過ぎない。
</div>
`
      }
    ]
  },

  {
    id: 4,
    title: "確率分布（連続型）",
    icon: "📉",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>身長・体重・テストの点数のように、連続した値を取るデータには「連続型確率分布」を使います。</p>

<p>統計検定2級で最重要なのは<strong>正規分布</strong>です。<br>
また、後の推定・検定で使う t分布・χ²分布・F分布も理解する必要があります。</p>
`
      },
      {
        heading: "1. 確率密度関数（pdf）の基本",
        content: `
<p>連続型確率変数 X の確率を表す関数が「確率密度関数 f(x)」です。</p>

<p><strong>満たすべき条件：</strong></p>
<ul>
<li>f(x) ≥ 0（常に0以上）</li>
<li>\\( \\int_{-\\infty}^{\\infty} f(x)\\,dx = 1 \\)（全体の面積が1）</li>
<li>\\( P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx \\)（確率 = 面積）</li>
</ul>

<div class="key-point">
<strong>重要：f(x) は確率ではありません！</strong><br>
連続型では P(X = c) = 0（点の面積は0）。<br>
f(x) は「密度」なので、1より大きい値をとることもあります。<br>
確率は必ず「区間の面積」として求めます。
</div>
`
      },
      {
        heading: "2. 正規分布 N(μ, σ²)",
        content: `
<p>最も重要な分布。釣り鐘型の対称な形をしており、μ（平均）と σ²（分散）の2つのパラメータで決まります。</p>

<p>密度関数：\\( f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma}\\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right) \\)</p>

<p><strong>標準化</strong>：どんな正規分布も N(0,1) に変換できます。</p>
<p>\\( Z = \\frac{X - \\mu}{\\sigma} \\sim N(0,1) \\)</p>

<div class="example-box">
<strong>例）</strong> 成人男性の身長 X ∼ N(170, 100)（μ=170cm, σ=10cm）<br>
「180cm以上の人の割合」を求める<br>
Z = (180 − 170) / 10 = 1.0<br>
P(X ≥ 180) = P(Z ≥ 1.0) = 1 − Φ(1.0) = 1 − 0.8413 ≈ <strong>15.9%</strong>
</div>

<p><strong>68-95-99.7 ルール（暗記必須！）</strong></p>
<table>
<thead><tr><th>範囲</th><th>含まれる割合</th></tr></thead>
<tbody>
<tr><td>μ ± 1σ の範囲</td><td>約 68.3%</td></tr>
<tr><td>μ ± 2σ の範囲</td><td>約 95.4%</td></tr>
<tr><td>μ ± 3σ の範囲</td><td>約 99.7%</td></tr>
</tbody>
</table>

<p><strong>よく使う標準正規分布の値（試験に必出）</strong></p>
<table>
<thead><tr><th>z 値</th><th>P(Z &gt; z)</th><th>使う場面</th></tr></thead>
<tbody>
<tr><td>1.645</td><td>5%</td><td>片側5%検定、90%信頼区間</td></tr>
<tr><td>1.960</td><td>2.5%</td><td>両側5%検定、95%信頼区間</td></tr>
<tr><td>2.326</td><td>1%</td><td>片側1%検定、98%信頼区間</td></tr>
<tr><td>2.576</td><td>0.5%</td><td>両側1%検定、99%信頼区間</td></tr>
</tbody>
</table>

<p><strong>再生性</strong>：X ∼ N(μ₁,σ₁²), Y ∼ N(μ₂,σ₂²) が独立なら X+Y ∼ N(μ₁+μ₂, σ₁²+σ₂²)</p>
`
      },
      {
        heading: "3. 検定・推定に使う分布",
        content: `
<p>t分布・χ²分布・F分布は、正規母集団からの標本から導かれる重要な分布です。</p>

<p><strong>t分布 t(n)</strong>：正規分布より裾が厚い対称分布。自由度 n が大きくなると N(0,1) に近づく。</p>

<div class="example-box">
<strong>導出のイメージ：</strong><br>
σ が既知なら Z = (X̄−μ)/(σ/√n) ∼ N(0,1)<br>
σ が未知で S で推定すると T = (X̄−μ)/(S/√n) ∼ t(n−1)<br>
→ 推定誤差の分だけ裾が厚くなる（n が小さいほど不確実性が大きい）
</div>

<p><strong>χ²分布 χ²(n)</strong>：右に歪んだ分布。正の値のみをとる。</p>
<p>\\( X_1,...,X_n \\overset{iid}{\\sim} N(0,1) \\) のとき \\( \\sum X_i^2 \\sim \\chi^2(n) \\)</p>
<p>平均 = n、分散 = 2n</p>

<p><strong>F分布 F(m,n)</strong>：2つのχ²変数の比。常に正の値。等分散検定・ANOVAに使用。</p>

<table>
<thead><tr><th>分布</th><th>使う場面</th></tr></thead>
<tbody>
<tr><td>N(0,1)</td><td>σ既知の平均の検定・推定</td></tr>
<tr><td>t(n−1)</td><td>σ未知の平均の検定・推定</td></tr>
<tr><td>χ²(n−1)</td><td>分散の検定・推定</td></tr>
<tr><td>F(n₁−1, n₂−1)</td><td>等分散検定、ANOVA</td></tr>
</tbody>
</table>
`
      }
    ]
  },

  {
    id: 5,
    title: "標本分布・中心極限定理",
    icon: "🔬",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>実際には母集団全体を調べることは難しいため、一部を「標本」として取り出して母集団を推測します。<br>
この単元では「標本から計算した統計量（標本平均など）がどんな分布に従うか」を学びます。</p>

<p>特に「中心極限定理」は統計学の根幹となる定理で、試験でも必ず出題されます。</p>
`
      },
      {
        heading: "1. 標本統計量の性質",
        content: `
<p>母平均 μ、母分散 σ² の母集団からサイズ n の標本を取り出したとき：</p>

<p><strong>標本平均 X̄ の性質：</strong></p>
<p>\\( E[\\bar{X}] = \\mu \\)（標本平均の期待値は母平均と等しい）</p>
<p>\\( V[\\bar{X}] = \\frac{\\sigma^2}{n} \\)（標準誤差 SE = σ/√n）</p>

<div class="example-box">
<strong>例）</strong> 母平均100、母標準偏差20 の母集団から n=100 の標本を取る<br>
E[X̄] = 100（偏りなし）<br>
SE = 20/√100 = 20/10 = <strong>2</strong><br>
→ 標本平均は「だいたい98〜102の範囲」に収まることが多い
</div>

<p><strong>不偏標本分散</strong>：\\( S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2 \\)</p>
<p>E[S²] = σ²（母分散の不偏推定量）</p>

<div class="key-point">
<strong>標準誤差（SE）と標準偏差（SD）の違い：</strong><br>
・標準偏差 SD = σ：個々のデータのばらつき<br>
・標準誤差 SE = σ/√n：標本平均のばらつき<br>
n が大きいほど SE は小さくなる → 大標本ほど推定精度が上がる
</div>
`
      },
      {
        heading: "2. 中心極限定理（CLT）",
        content: `
<p>統計学で最も重要な定理の一つです。</p>

<p><strong>中心極限定理（Central Limit Theorem）：</strong><br>
母集団の分布がどんな形であっても、n が十分大きければ標本平均の分布は正規分布に近づく。</p>

<p>\\( \\bar{X} \\overset{近似}{\\sim} N\\left(\\mu, \\frac{\\sigma^2}{n}\\right) \\)</p>

<p>標準化すると：\\( Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\overset{近似}{\\sim} N(0,1) \\)</p>

<div class="example-box">
<strong>直感的なイメージ：</strong><br>
サイコロ（1〜6の一様分布）の目の平均は3.5。<br>
1回の目：1〜6のどれかが均等に出る（一様分布）<br>
10個の平均：3前後の値が多くなってくる<br>
100個の平均：ほぼ3.5に近い値になり、正規分布の形に！<br><br>
→ どんな形の分布でも、多数の平均を取ると釣り鐘型（正規分布）になる
</div>

<div class="key-point">
<strong>目安：n ≥ 30 で概ね正規分布に近似できるとされる</strong><br>
ただし元の分布が正規分布から大きく歪んでいる場合はさらに大きな n が必要です。<br><br>
<strong>大数の法則（LLN）との違い：</strong><br>
大数の法則：n→∞ で X̄ → μ（値が母平均に近づく）<br>
中心極限定理：X̄ の「分布の形」が正規分布に近づく
</div>
`
      },
      {
        heading: "3. 正規母集団の標本分布（まとめ）",
        content: `
<p>母集団が N(μ, σ²) に従う場合、以下は近似ではなく「厳密に」成立します：</p>

<table>
<thead><tr><th>統計量</th><th>分布</th><th>条件・用途</th></tr></thead>
<tbody>
<tr><td>\\(\\bar{X}\\)</td><td>\\(N(\\mu, \\sigma^2/n)\\)</td><td>常に</td></tr>
<tr><td>\\(Z = \\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}\\)</td><td>\\(N(0,1)\\)</td><td>σ 既知のとき</td></tr>
<tr><td>\\(T = \\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\)</td><td>\\(t(n-1)\\)</td><td>σ 未知のとき（実務でよく使う）</td></tr>
<tr><td>\\(\\frac{(n-1)S^2}{\\sigma^2}\\)</td><td>\\(\\chi^2(n-1)\\)</td><td>分散の推定・検定</td></tr>
<tr><td>\\(\\frac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\)</td><td>\\(F(n_1-1, n_2-1)\\)</td><td>2標本の等分散検定</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>例）</strong> N(50, 25) から n=9 の標本を取る（μ=50, σ=5）<br>
X̄ の分布：N(50, 25/9) = N(50, 2.78)<br>
SE = 5/√9 = 5/3 ≈ 1.67<br><br>
σ 未知で S を使う場合：T = (X̄ − 50)/(S/3) ∼ t(8)
</div>
`
      }
    ]
  },

  {
    id: 6,
    title: "統計的推定",
    icon: "🎯",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>標本データを使って、母集団の特性（母平均・母比率・母分散）を推測することを「統計的推定」といいます。</p>

<p><strong>推定の種類：</strong></p>
<ul>
<li><strong>点推定</strong>：1つの値で推測する（例：「母平均は約70点」）</li>
<li><strong>区間推定</strong>：「○○から××の間に母平均がある」と幅で推測する</li>
</ul>
`
      },
      {
        heading: "1. 良い推定量の条件",
        content: `
<p>推定量（estimator）θ̂ が「良い推定量」であるための条件：</p>

<table>
<thead><tr><th>性質</th><th>意味</th></tr></thead>
<tbody>
<tr><td><strong>不偏性</strong></td><td>E[θ̂] = θ（系統的な偏りがない）</td></tr>
<tr><td><strong>一致性</strong></td><td>n→∞ で θ̂ → θ（大標本で真値に近づく）</td></tr>
<tr><td><strong>有効性</strong></td><td>不偏推定量の中で分散が最小</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>標本分散の例：</strong><br>
n-1 で割る不偏分散：E[S²] = σ²（不偏）✅<br>
n で割る分散：E[σ̂²] = (n-1)/n × σ² ≠ σ²（過小評価、偏りあり）<br><br>
→ 標本から母分散を推定するなら n-1 で割る不偏分散を使う
</div>

<p><strong>最尤推定量（MLE）</strong>：観測データの「尤度（尤もらしさ）」を最大にするパラメータ推定値</p>

<div class="key-point">
MLEは常に不偏ではありません。<br>
正規分布の母平均の MLE は X̄（不偏）ですが、<br>
母分散の MLE は n で割るもので不偏でありません。
</div>
`
      },
      {
        heading: "2. 信頼区間の求め方",
        content: `
<p><strong>母平均の信頼区間</strong></p>

<p>σ 既知のとき（z 検定に対応）：</p>
<p>\\( \\bar{X} \\pm z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}} \\)</p>

<p>σ 未知のとき（t 検定に対応、実務で多い）：</p>
<p>\\( \\bar{X} \\pm t_{\\alpha/2}(n-1) \\cdot \\frac{S}{\\sqrt{n}} \\)</p>

<div class="example-box">
<strong>例）</strong> n=25、X̄=70、S=10、信頼水準95%<br>
t₀.₀₂₅(24) = 2.064 とする<br>
95%信頼区間 = 70 ± 2.064 × (10/√25)<br>
= 70 ± 2.064 × 2<br>
= 70 ± 4.128<br>
= [65.87, 74.13]<br><br>
→「母平均は約65.9〜74.1の間にある（95%信頼）」と解釈
</div>

<p><strong>母比率の信頼区間</strong>（大標本近似）：</p>
<p>\\( \\hat{p} \\pm z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} \\)</p>

<div class="example-box">
<strong>例）</strong> 400人にアンケートし、200人が「賛成」（p̂ = 0.5）。95%信頼区間は？<br>
SE = √(0.5×0.5/400) = √(0.000625) = 0.025<br>
CI = 0.5 ± 1.96 × 0.025 = 0.5 ± 0.049<br>
= [0.451, 0.549]（45.1%〜54.9%）
</div>

<div class="key-point">
<strong>信頼区間の正しい解釈：</strong><br>
「この方法を繰り返し使って95%信頼区間を多数作ると、そのうち95%が真の母数を含む」<br><br>
✗ 誤り：「この区間に母平均が95%の確率で入っている」<br>
（母平均は固定した定数なので「区間内にある or ない」の2択）
</div>
`
      },
      {
        heading: "3. 区間幅に影響する要因",
        content: `
<table>
<thead><tr><th>変化</th><th>区間幅への影響</th></tr></thead>
<tbody>
<tr><td>信頼水準 95%→99%</td><td>広くなる（より確実にするため）</td></tr>
<tr><td>標本サイズ n を大きくする</td><td>狭くなる（推定精度が上がる）</td></tr>
<tr><td>母標準偏差 σ が大きい</td><td>広くなる（ばらつきが大きい）</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>例）必要な標本サイズの計算</strong><br>
95%信頼区間の半幅を d = ±3 点以内に収めたい。σ = 15 とすると：<br>
n ≥ (z × σ / d)² = (1.96 × 15 / 3)² = (9.8)² = 96.04<br>
→ 少なくとも <strong>n = 97</strong> 人のデータが必要
</div>
`
      }
    ]
  },

  {
    id: 7,
    title: "統計的仮説検定",
    icon: "⚖️",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>「新薬は効果があるか？」「2つのグループに差があるか？」など、<br>
データから仮説を検証する方法が「統計的仮説検定」です。</p>

<p>検定の手順・誤りの種類・p値の解釈は試験の最頻出テーマです。</p>
`
      },
      {
        heading: "1. 検定の手順と基本概念",
        content: `
<p><strong>仮説検定の5ステップ：</strong></p>
<ol>
<li>帰無仮説 H₀ と対立仮説 H₁ を設定する</li>
<li>有意水準 α を決める（通常は 0.05 や 0.01）</li>
<li>適切な検定統計量を計算する</li>
<li>棄却域（または p 値）を求める</li>
<li>H₀ を棄却するか判断する</li>
</ol>

<div class="example-box">
<strong>例）</strong> 「この薬の平均効果は0点（効果なし）」を検定する<br>
H₀：μ = 0（薬の効果なし）← 帰無仮説（否定したい仮説）<br>
H₁：μ ≠ 0（薬の効果あり）← 対立仮説（証明したい仮説）<br>
α = 0.05 で検定 → p < 0.05 なら H₀ 棄却 →「薬は効果がある（有意水準5%）」
</div>

<p><strong>p値の意味：</strong><br>
H₀ が真のもとで、今回のように極端（またはそれ以上）な結果が偶然得られる確率。</p>

<div class="key-point">
<strong>p値の正しい解釈：</strong><br>
✓ 「H₀ が真なら、この結果は偶然起こりにくい確率」= p値<br>
✗ 「H₀ が真である確率」ではない<br>
✗ 「効果の大きさ」を示すものではない（n が大きいと小さな差でも p < 0.05 になる）
</div>
`
      },
      {
        heading: "2. 誤りの種類と検出力",
        content: `
<table>
<thead><tr><th></th><th>H₀ が真（実は差がない）</th><th>H₀ が偽（実は差がある）</th></tr></thead>
<tbody>
<tr><td><strong>H₀ を棄却（有意）</strong></td><td>第一種の過誤 α<br>（偽陽性：実際は効果なしなのに「効果あり」と判断）</td><td>正しい判断<br>（検出力 = 1 − β）</td></tr>
<tr><td><strong>H₀ を棄却しない（非有意）</strong></td><td>正しい判断</td><td>第二種の過誤 β<br>（偽陰性：実際は効果があるのに「効果なし」と判断）</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>医療での例：</strong><br>
第一種の過誤：「効かない薬を『効く』と誤って承認」← 深刻（患者に害）<br>
第二種の過誤：「効く薬を『効かない』と誤って不承認」← 機会損失<br><br>
有意水準 α を厳しくする（α = 0.01）と第一種を減らせるが、第二種が増える。<br>
→ α と β はトレードオフの関係
</div>

<p><strong>検出力（Power）= 1 − β</strong>：本当に差があるとき正しく検出できる確率</p>
<p>検出力を高める方法：</p>
<ul>
<li>標本サイズ n を大きくする（最も効果的）</li>
<li>有意水準 α を大きくする（α と β はトレードオフ）</li>
<li>効果量（差の大きさ）が大きい</li>
</ul>
`
      },
      {
        heading: "3. 主要な検定の使い分け",
        content: `
<table>
<thead><tr><th>場面</th><th>使う検定</th><th>統計量の分布</th></tr></thead>
<tbody>
<tr><td>1標本平均（σ 既知）</td><td>z 検定</td><td>N(0,1)</td></tr>
<tr><td>1標本平均（σ 未知）</td><td>1標本 t 検定</td><td>t(n-1)</td></tr>
<tr><td>独立2標本・等分散</td><td>2標本 t 検定</td><td>t(n₁+n₂-2)</td></tr>
<tr><td>独立2標本・不等分散</td><td>Welch の t 検定</td><td>t(Welch 自由度)</td></tr>
<tr><td>対応のある2標本（前後比較）</td><td>対応 t 検定</td><td>t(n-1)</td></tr>
<tr><td>2標本の分散の等質性</td><td>等分散 F 検定</td><td>F(n₁-1, n₂-1)</td></tr>
<tr><td>度数の適合度</td><td>χ² 適合度検定</td><td>χ²(k-1)</td></tr>
<tr><td>2変数の独立性（クロス表）</td><td>χ² 独立性検定</td><td>χ²((r-1)(c-1))</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>例）t 検定の検定統計量</strong><br>
H₀：μ = 50、X̄ = 53、S = 10、n = 25<br>
T = (X̄ − μ₀) / (S/√n) = (53 − 50) / (10/5) = 3/2 = <strong>1.5</strong><br>
自由度 24 の t 分布での p 値を確認 → p > 0.05 なら非有意
</div>
`
      },
      {
        heading: "4. χ² 検定",
        content: `
<p><strong>χ² 適合度検定</strong>：観測された度数が理論的な分布と合っているかを検定</p>
<p>\\( \\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - E_i)^2}{E_i} \\sim \\chi^2(k-1) \\)</p>

<p><strong>χ² 独立性検定</strong>：2つのカテゴリ変数が独立かどうかを検定（クロス表）</p>
<p>\\( \\chi^2 = \\sum_{i,j} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}} \\sim \\chi^2((r-1)(c-1)) \\)</p>
<p>期待度数：\\( E_{ij} = \\frac{(i行合計) \\times (j列合計)}{総計} \\)</p>

<div class="example-box">
<strong>例）</strong> 男女100人ずつにアンケート。「賛成・反対」の比率に差があるか<br>
2×2 のクロス表 → 自由度 = (2-1)(2-1) = <strong>1</strong><br>
各セルの期待度数が5以上なら χ² 検定を使える<br>
5未満のセルがある場合は Fisher の正確確率検定を使う
</div>
`
      }
    ]
  },

  {
    id: 8,
    title: "分散分析（ANOVA）",
    icon: "📊",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>「3つ以上のグループの平均に差があるか」を一度に検定する方法が「分散分析（ANOVA）」です。</p>

<p>「なぜ複数回 t 検定しないの？」という疑問が出やすいですが、<br>
複数回検定すると偶然有意になる確率が増えてしまう（多重比較問題）ため、<br>
ANOVA で一括検定した後に多重比較を行います。</p>
`
      },
      {
        heading: "1. 一元配置 ANOVA の考え方",
        content: `
<p>H₀：k 群の母平均はすべて等しい（μ₁ = μ₂ = ... = μₖ）</p>

<p><strong>アイデア</strong>：<br>
グループ間のばらつき（群間変動）が、グループ内のばらつき（群内変動）より大きければ<br>
「グループ間に差がある」と判断する。</p>

<p>\\( F = \\frac{\\text{群間変動（MSB）}}{\\text{群内変動（MSW）}} \\sim F(k-1, N-k) \\)</p>

<p>H₀ のもとでは F ≈ 1、群間に差があるほど F が大きくなる。</p>

<table>
<thead><tr><th>変動要因</th><th>平方和</th><th>自由度</th><th>平均平方</th><th>F 統計量</th></tr></thead>
<tbody>
<tr><td>群間（処理）</td><td>SSB</td><td>k − 1</td><td>MSB = SSB/(k-1)</td><td>MSB/MSW</td></tr>
<tr><td>群内（誤差）</td><td>SSW</td><td>N − k</td><td>MSW = SSW/(N-k)</td><td>—</td></tr>
<tr><td>全体</td><td>SST</td><td>N − 1</td><td>—</td><td>—</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>例）</strong> k=3 群（A, B, C 各 10 人）の平均点を比較<br>
N = 30、F 統計量の自由度 = (2, 27)<br>
F(2,27) の上側 5% 点 ≈ 3.35<br>
計算した F > 3.35 なら「3群の平均は等しい」という H₀ を棄却
</div>
`
      },
      {
        heading: "2. 多重比較",
        content: `
<p>ANOVA で「どこかの群に差がある」と分かった後、<br>
「具体的にどの群同士に差があるか」を調べるのが多重比較です。</p>

<table>
<thead><tr><th>方法</th><th>特徴</th><th>使う場面</th></tr></thead>
<tbody>
<tr><td><strong>Tukey HSD</strong></td><td>全ペア比較、バランスのとれた方法</td><td>全組み合わせを比較したい</td></tr>
<tr><td><strong>Bonferroni</strong></td><td>α/k を各検定の基準に。保守的（厳しい）</td><td>少数の比較</td></tr>
<tr><td><strong>Dunnett</strong></td><td>対照群との比較に特化</td><td>プラセボ vs 各処理</td></tr>
</tbody>
</table>

<div class="key-point">
<strong>Bonferroni 補正の例：</strong><br>
3群の全ペア比較（3組）で全体の α = 0.05 を維持したい場合<br>
各検定の有意水準 = 0.05 / 3 ≈ 0.017 を使う
</div>
`
      },
      {
        heading: "3. 二元配置 ANOVA と交互作用",
        content: `
<p>2つの要因（例：薬の種類×性別）が結果に与える影響を同時に検定できます。</p>

<p><strong>検定する仮説（3つ）：</strong></p>
<ol>
<li>因子 A の主効果（例：薬の種類の効果）</li>
<li>因子 B の主効果（例：性別の効果）</li>
<li>A × B の交互作用効果（例：「この薬は男性にだけ効く」のような状況）</li>
</ol>

<div class="example-box">
<strong>交互作用の例：</strong><br>
A 薬は男性に効果大、女性に効果小<br>
B 薬は男性に効果小、女性に効果大<br>
→「薬の種類」の主効果は見えにくいが、「薬×性別」の交互作用は有意になる<br>
→ グラフで折れ線が交差するような場合に交互作用あり
</div>
`
      }
    ]
  },

  {
    id: 9,
    title: "回帰分析・相関分析",
    icon: "📐",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>「X が増えると Y はどれくらい変化するか」を数量的に表す方法が「回帰分析」です。</p>

<p>例：広告費（X）と売上（Y）の関係を式で表して予測する、<br>
身長（X）から体重（Y）を予測する、など。</p>
`
      },
      {
        heading: "1. 単回帰分析",
        content: `
<p>モデル：\\( Y_i = \\beta_0 + \\beta_1 X_i + \\varepsilon_i \\)</p>
<ul>
<li>β₀：切片（X = 0 のときの Y の予測値）</li>
<li>β₁：回帰係数（X が 1 単位増えたときの Y の変化量）</li>
<li>εᵢ：誤差項（説明できない部分）</li>
</ul>

<p><strong>最小二乗法（OLS）</strong>：残差の二乗和 Σ(Yᵢ − Ŷᵢ)² を最小にする β₀, β₁ を求める</p>

<p>\\( \\hat{\\beta}_1 = \\frac{\\sum(X_i-\\bar{X})(Y_i-\\bar{Y})}{\\sum(X_i-\\bar{X})^2} = \\frac{S_{xy}}{S_{xx}} \\)</p>
<p>\\( \\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1 \\bar{X} \\)</p>

<div class="key-point">
<strong>回帰直線は必ず (X̄, Ȳ) を通る！</strong>
</div>

<div class="example-box">
<strong>例）</strong> Sxy = 50、Sxx = 100、X̄ = 5、Ȳ = 30 のとき<br>
β̂₁ = 50/100 = 0.5<br>
β̂₀ = 30 − 0.5 × 5 = 27.5<br>
回帰式：Ŷ = 27.5 + 0.5X<br>
→「X が 1 増えると Y は平均 0.5 増える」と解釈
</div>

<p><strong>決定係数 R²</strong>：回帰モデルの当てはまりの良さを表す指標（0〜1）</p>
<p>\\( R^2 = \\frac{SS_R}{SS_T} = 1 - \\frac{SS_E}{SS_T} \\)</p>
<p>R² = 0.8 なら「Y の変動の80%を X で説明できる」という意味。</p>
<p>単回帰では R² = r²（ピアソン相関係数の二乗）。</p>
`
      },
      {
        heading: "2. 重回帰分析",
        content: `
<p>複数の説明変数（X₁, X₂, ..., Xₚ）を使って Y を予測するモデル。</p>
<p>\\( Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + ... + \\beta_p X_p + \\varepsilon \\)</p>

<p><strong>調整済み R²</strong>：説明変数を増やすだけで R² が上がる問題を修正した指標。<br>
無意味な変数を追加すると調整済み R² は下がる場合がある。</p>

<p><strong>多重共線性（multicollinearity）</strong>：説明変数同士が強く相関している状態</p>

<div class="example-box">
<strong>例）</strong> 「気温」と「最高気温」を同時に説明変数にする<br>
→ ほぼ同じ情報 → 回帰係数の推定が不安定になる<br>
VIF（分散膨張係数）≥ 10 が多重共線性の目安
</div>
`
      },
      {
        heading: "3. 回帰分析の注意点",
        content: `
<p><strong>残差プロットで確認すること：</strong></p>
<ul>
<li>等分散性：残差のばらつきが予測値によらず一定か</li>
<li>線形性：残差にパターン（曲線）がないか</li>
<li>外れ値：極端に大きな残差がないか</li>
</ul>

<div class="key-point">
<strong>「回帰分析で有意でも因果関係とは言えない」理由：</strong><br>
・交絡変数の存在（第三の変数が両方に影響）<br>
・逆の因果関係の可能性<br>
・見かけの相関（偶然の一致）<br><br>
因果関係を示すには、ランダム化比較試験（RCT）などの設計が必要です。
</div>
`
      }
    ]
  },

  {
    id: 10,
    title: "ノンパラメトリック検定",
    icon: "🔄",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>t 検定や ANOVA は「データが正規分布に従う」という仮定に基づいています。<br>
この仮定が満たされないとき（標本が小さい、外れ値がある、順序データなど）に使うのが<br>「ノンパラメトリック検定」です。</p>

<p>特定の分布形を仮定しないため「分布によらない検定」とも呼ばれます。</p>
`
      },
      {
        heading: "1. いつノンパラメトリック検定を使うか",
        content: `
<table>
<thead><tr><th>パラメトリック</th><th>ノンパラメトリック代替</th><th>使う場面</th></tr></thead>
<tbody>
<tr><td>独立2標本 t 検定</td><td>Mann-Whitney U 検定</td><td>正規性が仮定できない、順序データ</td></tr>
<tr><td>対応のある t 検定</td><td>Wilcoxon 符号順位検定</td><td>ペアデータで正規性が怪しい</td></tr>
<tr><td>一元配置 ANOVA</td><td>Kruskal-Wallis 検定</td><td>3群以上で正規性が仮定できない</td></tr>
<tr><td>反復測定 ANOVA</td><td>Friedman 検定</td><td>対応のある3群以上の比較</td></tr>
<tr><td>Pearson 相関</td><td>Spearman 順位相関</td><td>順序データ、外れ値がある</td></tr>
</tbody>
</table>

<div class="key-point">
<strong>ノンパラメトリック検定のデメリット：</strong><br>
正規性が成立しているときにノンパラ検定を使うと、<br>
パラメトリック検定より検出力が落ちる（差を見逃しやすい）。<br><br>
データが正規分布に従うと確認できるなら、パラメトリック検定の方が良い。
</div>
`
      },
      {
        heading: "2. 主な検定の手順",
        content: `
<p><strong>Mann-Whitney U 検定</strong></p>
<ol>
<li>2群のデータを合わせて小さい順に順位をつける</li>
<li>各群の順位の和を計算する</li>
<li>U 統計量を計算し、分布表と比較して判定</li>
</ol>

<div class="example-box">
<strong>例）</strong> A群：3, 5, 7 / B群：1, 4, 9<br>
合わせて昇順：1(B), 3(A), 4(B), 5(A), 7(A), 9(B)<br>
A群の順位：2, 4, 5 → 合計 11<br>
B群の順位：1, 3, 6 → 合計 10
</div>

<p><strong>Spearman の順位相関係数</strong></p>
<p>\\( r_s = 1 - \\frac{6 \\sum d_i^2}{n(n^2-1)} \\)（dᵢ は各データの2変数間の順位差）</p>

<div class="example-box">
<strong>例）</strong> 5人の数学と英語の順位<br>
数学順位：1, 2, 3, 4, 5 / 英語順位：1, 3, 2, 5, 4<br>
d²の合計：0+1+1+1+1 = 4<br>
rₛ = 1 − 6×4 / (5×24) = 1 − 24/120 = 1 − 0.2 = <strong>0.8</strong>
</div>
`
      }
    ]
  },

  {
    id: 11,
    title: "時系列分析の基礎",
    icon: "📅",
    sections: [
      {
        heading: "この単元で学ぶこと",
        content: `
<p>「時系列データ」とは、時間の順番に並んだデータのことです。<br>
例：毎月の売上、毎日の気温、株価など。</p>

<p>通常の統計分析は「データが独立（時間的なつながりがない）」を仮定しますが、<br>
時系列データは前後のデータが関係しています。この特性を考慮した分析が時系列分析です。</p>
`
      },
      {
        heading: "1. 時系列データの構成要素",
        content: `
<p>時系列データは通常、以下の4つの成分に分解できます：</p>

<table>
<thead><tr><th>成分</th><th>説明</th><th>具体例</th></tr></thead>
<tbody>
<tr><td><strong>トレンド（T）</strong></td><td>長期的な増加・減少傾向</td><td>人口増加、物価上昇</td></tr>
<tr><td><strong>季節変動（S）</strong></td><td>1年以内の周期的な変動</td><td>夏の電力需要増、年末の売上増</td></tr>
<tr><td><strong>循環変動（C）</strong></td><td>数年単位の景気循環</td><td>好景気・不景気の繰り返し</td></tr>
<tr><td><strong>不規則変動（I）</strong></td><td>予測できないランダムな変動</td><td>突発的事件の影響</td></tr>
</tbody>
</table>

<div class="example-box">
<strong>例）アイスクリームの月別売上</strong><br>
・毎年少しずつ売上が増加（トレンド↑）<br>
・毎年夏に売上が増え冬に減る（季節変動）<br>
・2〜3年ごとに好調・不調の波（循環変動）<br>
・ある月だけ急に売れた（不規則変動）
</div>
`
      },
      {
        heading: "2. 定常性と自己相関",
        content: `
<p><strong>定常性（stationarity）</strong>：時系列の統計的な性質が時間によって変わらないこと</p>

<p>弱定常性の条件：</p>
<ol>
<li>E[Yₜ] = μ（平均が時間によらず一定）</li>
<li>V[Yₜ] = σ²（分散が時間によらず一定）</li>
<li>Cov(Yₜ, Yₜ₋ₖ) = γ(k)（自己共分散はラグ k のみに依存）</li>
</ol>

<div class="example-box">
<strong>定常 vs 非定常：</strong><br>
・白色雑音（ホワイトノイズ）：各時点が独立、定常。E[Yₜ]=0, V[Yₜ]=σ²<br>
・ランダムウォーク Yₜ = Yₜ₋₁ + εₜ：分散が時間とともに増大 → 非定常<br><br>
株価はランダムウォーク（非定常）のモデルが有名。<br>
差分 ΔYₜ = Yₜ − Yₜ₋₁ = εₜ は定常（白色雑音）。
</div>

<p><strong>自己相関関数（ACF）</strong>：時系列とそのラグ k 期前との相関係数</p>
<p>\\( \\rho(k) = \\frac{\\text{Cov}(Y_t, Y_{t-k})}{V[Y_t]} \\)</p>

<div class="key-point">
<strong>ACF と PACF のモデル選択への使用：</strong><br>
・ACF が q ラグで急に 0 → MA(q) モデルを検討<br>
・PACF が p ラグで急に 0 → AR(p) モデルを検討<br>
・両方が徐々に減衰 → ARMA(p,q) モデルを検討
</div>
`
      },
      {
        heading: "3. ARMAモデルと ARIMA",
        content: `
<p><strong>AR(p)：自己回帰モデル</strong><br>
過去の値 p 期分で現在を予測するモデル。</p>
<p>\\( Y_t = \\phi_1 Y_{t-1} + \\phi_2 Y_{t-2} + ... + \\phi_p Y_{t-p} + \\varepsilon_t \\)</p>

<div class="example-box">
<strong>AR(1) の例：</strong> φ₁ = 0.8<br>
今月の売上 = 0.8 × 先月の売上 + ランダム誤差<br>
→ 過去の売上が高いと今月も高くなる傾向（正の自己相関）
</div>

<p><strong>MA(q)：移動平均モデル</strong><br>
過去の誤差項 q 期分で現在を表現するモデル。</p>
<p>\\( Y_t = \\varepsilon_t + \\theta_1 \\varepsilon_{t-1} + ... + \\theta_q \\varepsilon_{t-q} \\)</p>

<p><strong>ARIMA(p, d, q)</strong>：</p>
<ul>
<li>p：AR の次数</li>
<li>d：差分の次数（非定常データを定常化するために差分を取る回数）</li>
<li>q：MA の次数</li>
</ul>

<div class="example-box">
<strong>ARIMA(1,1,0) の例：</strong><br>
株価（非定常）→ 1回差分（Δ価格）→ 定常化<br>
定常化されたデータに AR(1) を当てはめる<br>
→「前日の価格変化」から「今日の価格変化」を予測
</div>

<p><strong>移動平均（MA）法</strong>：直近 k 期の平均を使って平滑化する手法</p>
<p>（※ ARMAモデルの MA とは別物）</p>
<p>トレンドを把握したり季節変動を除去したりするために使います。</p>
`
      }
    ]
  }
];
