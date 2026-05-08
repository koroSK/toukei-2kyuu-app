const STUDY_CONTENT = [
  {
    id: 1,
    title: "データの種類と記述統計",
    icon: "📊",
    sections: [
      {
        heading: "尺度の種類",
        content: `データには4種類の尺度があります。

<table>
<thead><tr><th>尺度</th><th>特徴</th><th>例</th><th>使える統計</th></tr></thead>
<tbody>
<tr><td><strong>名義尺度</strong></td><td>カテゴリの区別のみ</td><td>血液型、性別</td><td>最頻値</td></tr>
<tr><td><strong>順序尺度</strong></td><td>順序あり、差に意味なし</td><td>満足度評価、等級</td><td>最頻値、中央値</td></tr>
<tr><td><strong>間隔尺度</strong></td><td>差に意味あり、比率に意味なし</td><td>気温（℃）、西暦</td><td>平均、分散</td></tr>
<tr><td><strong>比例尺度</strong></td><td>絶対ゼロあり、比率に意味あり</td><td>身長、体重、売上</td><td>全ての統計量</td></tr>
</tbody>
</table>`
      },
      {
        heading: "代表値",
        content: `<strong>平均値（mean）</strong>：\\( \\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i \\)

<strong>中央値（median）</strong>：データを昇順に並べたとき中央の値
- n が奇数：\\(\\frac{n+1}{2}\\) 番目の値
- n が偶数：\\(\\frac{n}{2}\\) 番目と \\(\\frac{n}{2}+1\\) 番目の平均

<strong>最頻値（mode）</strong>：最も頻度が高い値

<div class="key-point">分布の歪みと代表値の関係：<br>
・右歪み（正の歪み）：最頻値 ≤ 中央値 ≤ 平均<br>
・左歪み（負の歪み）：平均 ≤ 中央値 ≤ 最頻値<br>
・対称分布：平均 = 中央値 = 最頻値</div>`
      },
      {
        heading: "散布度",
        content: `<strong>分散（variance）</strong>

母分散：\\( \\sigma^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\mu)^2 \\)

標本分散（不偏）：\\( s^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2 \\)

<strong>標準偏差（SD）</strong>：\\( s = \\sqrt{s^2} \\)

<strong>変動係数（CV）</strong>：\\( CV = \\frac{s}{\\bar{x}} \\)（単位のない相対的なばらつき）

<strong>四分位範囲（IQR）</strong>：\\( IQR = Q_3 - Q_1 \\)

<div class="key-point">計算の性質：<br>
全データに定数 c を加えると → 平均はc変化、分散・SDは不変<br>
全データを定数 a 倍すると → 平均は a 倍、分散は a² 倍、SDは|a|倍</div>`
      },
      {
        heading: "相関係数",
        content: `<strong>ピアソンの積率相関係数</strong>：

\\( r = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2 \\cdot \\sum(y_i-\\bar{y})^2}} = \\frac{S_{xy}}{S_x \\cdot S_y} \\)

・\\( -1 \\leq r \\leq 1 \\)
・\\( |r| \\) が1に近いほど線形関係が強い
・\\( r = 0 \\) でも非線形の関係はありうる

<strong>偏差値</strong>：\\( T = 50 + 10 \\cdot \\frac{x - \\bar{x}}{s} \\)`
      },
      {
        heading: "歪度と尖度",
        content: `<strong>歪度（skewness）</strong>：\\( \\gamma_1 = \\frac{E[(X-\\mu)^3]}{\\sigma^3} \\)
- \\( \\gamma_1 > 0 \\)：右に歪んだ分布（正の歪み）
- \\( \\gamma_1 < 0 \\)：左に歪んだ分布（負の歪み）

<strong>尖度（kurtosis）</strong>：\\( \\gamma_2 = \\frac{E[(X-\\mu)^4]}{\\sigma^4} - 3 \\)（超過尖度）
- \\( \\gamma_2 > 0 \\)：正規分布より尖っており裾が厚い（例：t分布）
- \\( \\gamma_2 < 0 \\)：正規分布より平坦`
      }
    ]
  },
  {
    id: 2,
    title: "確率の基本・ベイズの定理",
    icon: "🎲",
    sections: [
      {
        heading: "確率の公理",
        content: `確率は以下の3公理を満たす：

1. \\( P(A) \\geq 0 \\) （非負性）
2. \\( P(\\Omega) = 1 \\) （全確率）
3. 排反事象 \\( A_1, A_2, ... \\) に対して \\( P(\\bigcup A_i) = \\sum P(A_i) \\) （加法性）

<strong>加法定理</strong>：\\( P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\)

A, B が排反（\\( A \\cap B = \\emptyset \\)）なら：\\( P(A \\cup B) = P(A) + P(B) \\)`
      },
      {
        heading: "条件付き確率と独立",
        content: `<strong>条件付き確率</strong>：\\( P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0) \\)

<strong>乗法定理</strong>：\\( P(A \\cap B) = P(A|B)P(B) = P(B|A)P(A) \\)

<strong>独立性</strong>：A と B が独立 ⟺ \\( P(A \\cap B) = P(A)P(B) \\)
⟺ \\( P(A|B) = P(A) \\) （B の情報が A に影響しない）

<div class="key-point">排反と独立は別概念！<br>
P(A)>0, P(B)>0 のとき排反ならば独立でない（P(A∩B)=0 だから）</div>`
      },
      {
        heading: "全確率の公式とベイズの定理",
        content: `\\( B_1, B_2, ..., B_k \\) が Ω の分割のとき：

<strong>全確率の公式</strong>：\\( P(A) = \\sum_{i=1}^{k} P(A|B_i)P(B_i) \\)

<strong>ベイズの定理</strong>：

\\( P(B_j|A) = \\frac{P(A|B_j)P(B_j)}{\\sum_{i=1}^{k} P(A|B_i)P(B_i)} \\)

<div class="key-point">医療検査への応用：<br>
・感度（sensitivity）= P(陽性|病気あり) — 真陽性率<br>
・特異度（specificity）= P(陰性|病気なし) — 真陰性率<br>
・陽性的中率（PPV）= P(病気あり|陽性) — ベイズの定理で計算<br><br>
有病率（P(病)）が低いと、感度・特異度が高くても PPV は低くなる</div>`
      }
    ]
  },
  {
    id: 3,
    title: "確率分布（離散型）",
    icon: "📈",
    sections: [
      {
        heading: "主な離散分布のまとめ",
        content: `<table>
<thead><tr><th>分布</th><th>確率関数 P(X=k)</th><th>平均</th><th>分散</th></tr></thead>
<tbody>
<tr><td><strong>二項分布 B(n,p)</strong></td><td>\\( \\binom{n}{k}p^k(1-p)^{n-k} \\)</td><td>np</td><td>np(1-p)</td></tr>
<tr><td><strong>ポアソン分布 Po(λ)</strong></td><td>\\( \\frac{e^{-\\lambda}\\lambda^k}{k!} \\)</td><td>λ</td><td>λ</td></tr>
<tr><td><strong>幾何分布 Geo(p)</strong></td><td>\\( (1-p)^{k-1}p \\)</td><td>1/p</td><td>(1-p)/p²</td></tr>
<tr><td><strong>超幾何分布</strong></td><td>（複雑）</td><td>nK/N</td><td>n·K/N·(N-K)/N·(N-n)/(N-1)</td></tr>
</tbody>
</table>`
      },
      {
        heading: "二項分布",
        content: `<strong>適用条件</strong>：
1. n 回の独立な反復試行
2. 各回の成功確率 p が一定

\\( X \\sim B(n,p) \\) のとき \\( E[X] = np, \\quad V[X] = np(1-p) \\)

<strong>近似</strong>：
- ポアソン近似：n大, p小, np=λ一定 → \\( B(n,p) \\approx Po(np) \\)
- 正規近似：np≥5 かつ n(1-p)≥5 → \\( B(n,p) \\approx N(np, np(1-p)) \\)`
      },
      {
        heading: "ポアソン分布",
        content: `<strong>適用場面</strong>：単位時間（空間）あたりの稀な事象の発生数
例：1時間あたりの電話着信数、1日の交通事故件数

\\( X \\sim Po(\\lambda) \\) のとき \\( E[X] = V[X] = \\lambda \\)（平均=分散が特徴）

<strong>再生性</strong>：\\( X \\sim Po(\\lambda_1), Y \\sim Po(\\lambda_2) \\) が独立なら \\( X+Y \\sim Po(\\lambda_1+\\lambda_2) \\)`
      },
      {
        heading: "期待値と分散の演算",
        content: `<strong>期待値の線形性</strong>（常に成立）：
\\( E[aX + b] = aE[X] + b \\)
\\( E[X + Y] = E[X] + E[Y] \\)（独立でなくても成立）

<strong>分散の演算</strong>：
\\( V[aX + b] = a^2 V[X] \\)

X, Y が<strong>独立</strong>なとき：
\\( V[X + Y] = V[X] + V[Y] \\)

X, Y が<strong>独立でない</strong>とき：
\\( V[X + Y] = V[X] + V[Y] + 2\\text{Cov}(X,Y) \\)`
      }
    ]
  },
  {
    id: 4,
    title: "確率分布（連続型）",
    icon: "📉",
    sections: [
      {
        heading: "確率密度関数（pdf）",
        content: `連続型確率変数 X の確率密度関数 f(x) の条件：
- \\( f(x) \\geq 0 \\)
- \\( \\int_{-\\infty}^{\\infty} f(x)\\,dx = 1 \\)
- \\( P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx \\)

<div class="key-point">f(x) は確率ではなく密度。f(x) > 1 になることもある。P(X=c) = 0（連続型）</div>`
      },
      {
        heading: "正規分布",
        content: `\\( X \\sim N(\\mu, \\sigma^2) \\) の密度関数：
\\( f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma}\\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right) \\)

<strong>標準化</strong>：\\( Z = \\frac{X - \\mu}{\\sigma} \\sim N(0,1) \\)

<strong>68-95-99.7 ルール</strong>：
<table>
<thead><tr><th>範囲</th><th>確率</th></tr></thead>
<tbody>
<tr><td>μ ± 1σ</td><td>約 68.3%</td></tr>
<tr><td>μ ± 2σ</td><td>約 95.4%</td></tr>
<tr><td>μ ± 3σ</td><td>約 99.7%</td></tr>
</tbody>
</table>

<strong>よく使う標準正規分布の値</strong>：
<table>
<thead><tr><th>確率点 z</th><th>P(Z > z)</th><th>用途</th></tr></thead>
<tbody>
<tr><td>1.645</td><td>5%</td><td>片側5%検定</td></tr>
<tr><td>1.960</td><td>2.5%</td><td>両側5%検定 / 95%信頼区間</td></tr>
<tr><td>2.326</td><td>1%</td><td>片側1%検定</td></tr>
<tr><td>2.576</td><td>0.5%</td><td>両側1%検定 / 99%信頼区間</td></tr>
</tbody>
</table>

<strong>再生性</strong>：X ∼ N(μ₁,σ₁²), Y ∼ N(μ₂,σ₂²) が独立 ⟹ X+Y ∼ N(μ₁+μ₂, σ₁²+σ₂²)`
      },
      {
        heading: "その他の重要な連続分布",
        content: `<table>
<thead><tr><th>分布</th><th>平均</th><th>分散</th><th>主な用途</th></tr></thead>
<tbody>
<tr><td><strong>一様分布 U(a,b)</strong></td><td>(a+b)/2</td><td>(b-a)²/12</td><td>乱数生成の基礎</td></tr>
<tr><td><strong>指数分布 Exp(λ)</strong></td><td>1/λ</td><td>1/λ²</td><td>待ち時間・寿命モデル</td></tr>
<tr><td><strong>χ²(n)</strong></td><td>n</td><td>2n</td><td>分散の検定・区間推定</td></tr>
<tr><td><strong>t(n)</strong></td><td>0(n>1)</td><td>n/(n-2)(n>2)</td><td>平均の検定・区間推定</td></tr>
<tr><td><strong>F(m,n)</strong></td><td>n/(n-2)(n>2)</td><td>—</td><td>分散の比較・ANOVA</td></tr>
</tbody>
</table>`
      },
      {
        heading: "χ²分布・t分布・F分布の導出",
        content: `<strong>χ²分布</strong>：\\( X_1,...,X_n \\overset{iid}{\\sim} N(0,1) \\) のとき \\( \\sum X_i^2 \\sim \\chi^2(n) \\)

<strong>t分布</strong>：\\( Z \\sim N(0,1), V \\sim \\chi^2(n) \\) が独立のとき \\( T = \\frac{Z}{\\sqrt{V/n}} \\sim t(n) \\)

<strong>F分布</strong>：\\( U \\sim \\chi^2(m), V \\sim \\chi^2(n) \\) が独立のとき \\( F = \\frac{U/m}{V/n} \\sim F(m,n) \\)

<div class="key-point">重要な関係：<br>
・t(n)² = F(1,n)<br>
・n→∞ で t(n) → N(0,1)<br>
・X ∼ χ²(n) のとき X/n → 1（大数の法則）</div>`
      }
    ]
  },
  {
    id: 5,
    title: "標本分布・中心極限定理",
    icon: "🔬",
    sections: [
      {
        heading: "標本の基本",
        content: `母集団（平均μ, 分散σ²）からサイズnの標本 \\( X_1,...,X_n \\) を抽出

<strong>標本平均</strong>：\\( \\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i \\)
\\( E[\\bar{X}] = \\mu, \\quad V[\\bar{X}] = \\frac{\\sigma^2}{n} \\)

<strong>標準誤差（SE）</strong>：\\( SE = \\frac{\\sigma}{\\sqrt{n}} \\)

<strong>不偏標本分散</strong>：\\( S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2 \\)
\\( E[S^2] = \\sigma^2 \\)（不偏性）`
      },
      {
        heading: "中心極限定理",
        content: `<strong>中心極限定理（CLT）</strong>：

母集団の分布によらず、n が十分大きいとき：
\\( \\bar{X} \\overset{approx}{\\sim} N\\left(\\mu, \\frac{\\sigma^2}{n}\\right) \\)

すなわち \\( Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\overset{approx}{\\sim} N(0,1) \\)

<div class="key-point">n≥30 で概ね近似が成立するとされる（分布の形による）<br>
大数の法則（LLN）：n→∞ で X̄ → μ（確率収束）— CLT とは別概念</div>`
      },
      {
        heading: "正規母集団の標本分布",
        content: `母集団が \\( N(\\mu, \\sigma^2) \\) のとき正確に成立：

<table>
<thead><tr><th>統計量</th><th>分布</th><th>条件</th></tr></thead>
<tbody>
<tr><td>\\(\\bar{X}\\)</td><td>\\(N(\\mu, \\sigma^2/n)\\)</td><td>常に</td></tr>
<tr><td>\\(\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}\\)</td><td>\\(N(0,1)\\)</td><td>σ既知</td></tr>
<tr><td>\\(\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\)</td><td>\\(t(n-1)\\)</td><td>σ未知</td></tr>
<tr><td>\\(\\frac{(n-1)S^2}{\\sigma^2}\\)</td><td>\\(\\chi^2(n-1)\\)</td><td>常に</td></tr>
<tr><td>\\(\\frac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\)</td><td>\\(F(n_1-1, n_2-1)\\)</td><td>2標本独立</td></tr>
</tbody>
</table>`
      }
    ]
  },
  {
    id: 6,
    title: "統計的推定",
    icon: "🎯",
    sections: [
      {
        heading: "推定量の性質",
        content: `<strong>不偏性</strong>：\\( E[\\hat{\\theta}] = \\theta \\)（系統的な偏りがない）

<strong>一致性</strong>：\\( n \\to \\infty \\) で \\( \\hat{\\theta} \\overset{p}{\\to} \\theta \\)（十分大きい標本で真値に近づく）

<strong>有効性</strong>：不偏推定量の中で分散が最小（BLUE: Best Linear Unbiased Estimator）

<strong>最尤推定量（MLE）</strong>：尤度関数 \\( L(\\theta) = \\prod f(x_i; \\theta) \\) を最大にする \\( \\hat{\\theta} \\)

<table>
<thead><tr><th>母数</th><th>不偏推定量</th><th>MLE</th></tr></thead>
<tbody>
<tr><td>μ</td><td>\\(\\bar{X}\\)</td><td>\\(\\bar{X}\\)</td></tr>
<tr><td>σ²</td><td>\\(S^2 = \\frac{\\sum(X_i-\\bar{X})^2}{n-1}\\)</td><td>\\(\\hat{\\sigma}^2 = \\frac{\\sum(X_i-\\bar{X})^2}{n}\\)（偏り有）</td></tr>
</tbody>
</table>`
      },
      {
        heading: "信頼区間",
        content: `<strong>母平均μの信頼区間</strong>

σ既知（z検定）：\\( \\bar{X} \\pm z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}} \\)

σ未知（t検定）：\\( \\bar{X} \\pm t_{\\alpha/2}(n-1) \\cdot \\frac{S}{\\sqrt{n}} \\)

<strong>母比率pの信頼区間</strong>（大標本）：
\\( \\hat{p} \\pm z_{\\alpha/2}\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} \\)

<strong>母分散σ²の信頼区間</strong>：
\\( \\left[\\frac{(n-1)S^2}{\\chi^2_{\\alpha/2}(n-1)},\\; \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}(n-1)}\\right] \\)

<div class="key-point">信頼区間の正しい解釈：<br>
「この方法で多数の信頼区間を作れば、(1-α)×100%の区間が真の母数を含む」<br>
「母数がこの区間にある確率が95%」ではない（頻度論的解釈）</div>`
      },
      {
        heading: "標本サイズの決定",
        content: `母平均の推定で幅 2d 以下の 95% 信頼区間を得るのに必要な n：
\\( n \\geq \\left(\\frac{z_{\\alpha/2} \\cdot \\sigma}{d}\\right)^2 \\)

母比率の推定（p = 0.5 は最大サイズを与える）：
\\( n \\geq \\left(\\frac{z_{\\alpha/2}}{2d}\\right)^2 \\quad (p=0.5 \\text{ のとき}) \\)`
      }
    ]
  },
  {
    id: 7,
    title: "統計的仮説検定",
    icon: "⚖️",
    sections: [
      {
        heading: "検定の枠組み",
        content: `<table>
<thead><tr><th></th><th>H₀が真</th><th>H₀が偽</th></tr></thead>
<tbody>
<tr><td><strong>H₀を棄却</strong></td><td>第一種の過誤（α）<br>有意水準</td><td>正しい判定<br>（検出力 = 1-β）</td></tr>
<tr><td><strong>H₀を棄却しない</strong></td><td>正しい判定</td><td>第二種の過誤（β）</td></tr>
</tbody>
</table>

<strong>p値</strong>：H₀が真という仮定のもとで、観測値以上に極端な統計量が得られる確率
- p < α → H₀を棄却（有意）
- p ≥ α → H₀を棄却しない（有意でない）`
      },
      {
        heading: "主要な検定の整理",
        content: `<table>
<thead><tr><th>場面</th><th>検定</th><th>統計量の分布</th></tr></thead>
<tbody>
<tr><td>1標本平均（σ既知）</td><td>z検定</td><td>N(0,1)</td></tr>
<tr><td>1標本平均（σ未知）</td><td>1標本t検定</td><td>t(n-1)</td></tr>
<tr><td>2標本平均（等分散）</td><td>2標本t検定</td><td>t(n₁+n₂-2)</td></tr>
<tr><td>2標本平均（不等分散）</td><td>Welch t検定</td><td>t(Welch自由度)</td></tr>
<tr><td>対応のある2標本</td><td>対応t検定</td><td>t(n-1)</td></tr>
<tr><td>等分散の検定</td><td>F検定</td><td>F(n₁-1, n₂-1)</td></tr>
<tr><td>母分散の検定</td><td>χ²検定</td><td>χ²(n-1)</td></tr>
<tr><td>適合度</td><td>χ²適合度検定</td><td>χ²(k-1)</td></tr>
<tr><td>独立性（クロス表）</td><td>χ²独立性検定</td><td>χ²((r-1)(c-1))</td></tr>
</tbody>
</table>`
      },
      {
        heading: "t 検定の検定統計量",
        content: `<strong>1標本t検定</strong>：
\\( T = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}} \\sim t(n-1) \\)

<strong>2標本t検定（等分散）</strong>：
\\( T = \\frac{\\bar{X}_1 - \\bar{X}_2}{S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}} \\sim t(n_1+n_2-2) \\)

\\( S_p^2 = \\frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2} \\)（プールされた分散）

<strong>対応のあるt検定</strong>：差 \\( d_i = X_{2i} - X_{1i} \\) として
\\( T = \\frac{\\bar{d}}{S_d/\\sqrt{n}} \\sim t(n-1) \\)`
      },
      {
        heading: "χ² 検定",
        content: `<strong>適合度検定</strong>：
\\( \\chi^2 = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i} \\sim \\chi^2(k-1) \\)

<strong>独立性検定（r×c表）</strong>：
\\( \\chi^2 = \\sum_{i,j} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}} \\sim \\chi^2((r-1)(c-1)) \\)

期待度数：\\( E_{ij} = \\frac{(\\text{i行の合計})(\\text{j列の合計})}{\\text{総計}} \\)

<div class="key-point">注意：期待度数が5未満のセルがある場合は<br>
→ カテゴリ統合 または Fisherの正確確率検定（2×2）を使用</div>`
      }
    ]
  },
  {
    id: 8,
    title: "分散分析（ANOVA）",
    icon: "📊",
    sections: [
      {
        heading: "一元配置 ANOVA の構造",
        content: `k 群、第 i 群の観測値 \\( Y_{ij} \\)（j=1,...,nᵢ）のモデル：
\\( Y_{ij} = \\mu + \\alpha_i + \\varepsilon_{ij} \\)

H₀：\\( \\alpha_1 = \\alpha_2 = ... = \\alpha_k = 0 \\)（全群の母平均が等しい）

<strong>平方和の分解</strong>：\\( SS_T = SS_B + SS_W \\)

<table>
<thead><tr><th>変動要因</th><th>平方和</th><th>自由度</th><th>平均平方</th></tr></thead>
<tbody>
<tr><td>群間（Between）</td><td>SSB</td><td>k-1</td><td>MSB = SSB/(k-1)</td></tr>
<tr><td>群内（Within）</td><td>SSW</td><td>N-k</td><td>MSW = SSW/(N-k)</td></tr>
<tr><td>全体</td><td>SST</td><td>N-1</td><td>—</td></tr>
</tbody>
</table>

\\( F = \\frac{MSB}{MSW} \\sim F(k-1, N-k) \\)（H₀のもとで）`
      },
      {
        heading: "多重比較",
        content: `ANOVA が有意 → どの群間に差があるか特定

<strong>主な多重比較法</strong>：
<table>
<thead><tr><th>方法</th><th>特徴</th></tr></thead>
<tbody>
<tr><td>Tukey HSD</td><td>全ペア比較、FWER制御、一般的</td></tr>
<tr><td>Bonferroni</td><td>各検定のαをα/kに、保守的</td></tr>
<tr><td>Scheffé</td><td>全対比に対して有効、最も保守的</td></tr>
<tr><td>Dunnett</td><td>対照群との比較に特化</td></tr>
</tbody>
</table>`
      },
      {
        heading: "二元配置 ANOVA",
        content: `2つの因子 A, B を同時に考慮：
\\( Y_{ijk} = \\mu + \\alpha_i + \\beta_j + (\\alpha\\beta)_{ij} + \\varepsilon_{ijk} \\)

検定する仮説：
1. 因子Aの主効果：\\( \\alpha_i = 0 \\)（全 i）
2. 因子Bの主効果：\\( \\beta_j = 0 \\)（全 j）
3. 交互作用効果：\\( (\\alpha\\beta)_{ij} = 0 \\)（全 i,j）

<div class="key-point">交互作用が有意な場合：<br>
因子Aの効果が因子Bの水準によって異なる。<br>
グラフで折れ線が交差する場合に見られる。<br>
交互作用が有意なとき主効果の解釈には注意が必要。</div>`
      }
    ]
  },
  {
    id: 9,
    title: "回帰分析・相関分析",
    icon: "📐",
    sections: [
      {
        heading: "単回帰分析",
        content: `モデル：\\( Y_i = \\beta_0 + \\beta_1 X_i + \\varepsilon_i \\)

最小二乗推定量：
\\( \\hat{\\beta}_1 = \\frac{S_{xy}}{S_{xx}} = \\frac{\\sum(X_i-\\bar{X})(Y_i-\\bar{Y})}{\\sum(X_i-\\bar{X})^2} \\)

\\( \\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1\\bar{X} \\)

<div class="key-point">回帰直線は必ず (X̄, Ȳ) を通る</div>

<strong>決定係数</strong>：\\( R^2 = \\frac{SS_R}{SS_T} = 1 - \\frac{SS_E}{SS_T} \\in [0,1] \\)
（単回帰ではピアソン相関係数 r の二乗に等しい）`
      },
      {
        heading: "重回帰分析",
        content: `モデル：\\( Y = \\beta_0 + \\beta_1 X_1 + ... + \\beta_p X_p + \\varepsilon \\)

<strong>調整済み R²</strong>：変数追加のペナルティ付き決定係数
\\( R_{adj}^2 = 1 - \\frac{SS_E/(n-p-1)}{SS_T/(n-1)} \\)

変数を追加するほど R² は増えるが R²_adj は必ずしも増えない。

<strong>多重共線性</strong>：説明変数間の相関が高い状態
- 診断：VIF（分散膨張係数）≥ 10 が目安
- 対処：変数の削除、主成分分析、Ridge回帰`
      },
      {
        heading: "回帰分析の前提と診断",
        content: `<strong>OLS の前提（Gauss-Markov）</strong>：
1. 線形性：\\( E[\\varepsilon] = 0 \\)
2. 等分散性：\\( V[\\varepsilon_i] = \\sigma^2 \\)
3. 独立性：\\( \\text{Cov}(\\varepsilon_i, \\varepsilon_j) = 0 \\)
4. （正規性：検定のため）\\( \\varepsilon \\sim N(0, \\sigma^2) \\)

<strong>残差プロットによる診断</strong>：
- 残差 vs 予測値：等分散性・線形性
- QQプロット：正規性
- 残差 vs 時間（順序）：独立性`
      }
    ]
  },
  {
    id: 10,
    title: "ノンパラメトリック検定",
    icon: "🔄",
    sections: [
      {
        heading: "ノンパラメトリック検定の概要",
        content: `<strong>使う場面</strong>：
- 正規分布の仮定が疑わしいとき
- 順序尺度データのとき
- 標本サイズが小さいとき
- 外れ値の影響を避けたいとき

<strong>対応表</strong>：
<table>
<thead><tr><th>パラメトリック</th><th>ノンパラメトリック</th></tr></thead>
<tbody>
<tr><td>独立2標本t検定</td><td>Mann-Whitney U検定</td></tr>
<tr><td>対応t検定</td><td>Wilcoxon符号順位検定</td></tr>
<tr><td>一元配置ANOVA</td><td>Kruskal-Wallis検定</td></tr>
<tr><td>反復測定ANOVA</td><td>Friedman検定</td></tr>
<tr><td>Pearson相関</td><td>Spearman順位相関</td></tr>
</tbody>
</table>`
      },
      {
        heading: "主なノンパラメトリック検定",
        content: `<strong>Mann-Whitney U 検定</strong>：
2群のデータを合わせて順位付けし、各群の順位和を比較。
H₀：2群の分布に差がない

<strong>Wilcoxon 符号順位検定</strong>：
ペアの差の絶対値に順位をつけ、正・負の順位和を比較。
H₀：差の中央値が0

<strong>Kruskal-Wallis 検定</strong>：
全データを合わせて順位付けし、各群の平均順位を比較。
H₀：全群の分布に差がない

<strong>Spearman の順位相関係数</strong>：
\\( r_s = 1 - \\frac{6\\sum d_i^2}{n(n^2-1)} \\)（di は順位差）`
      }
    ]
  },
  {
    id: 11,
    title: "時系列分析の基礎",
    icon: "📅",
    sections: [
      {
        heading: "時系列の成分",
        content: `時系列 Yₜ = Tₜ + Sₜ + Cₜ + Iₜ（加法モデル）

<table>
<thead><tr><th>成分</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>トレンド（T）</strong></td><td>長期的な傾向</td><td>人口増加</td></tr>
<tr><td><strong>季節変動（S）</strong></td><td>1年以内の周期的変動</td><td>夏の電力需要増</td></tr>
<tr><td><strong>循環変動（C）</strong></td><td>数年周期の変動</td><td>景気循環</td></tr>
<tr><td><strong>不規則変動（I）</strong></td><td>残差・ランダム</td><td>突発的事件</td></tr>
</tbody>
</table>`
      },
      {
        heading: "定常性と自己相関",
        content: `<strong>（弱）定常性の条件</strong>：
1. \\( E[Y_t] = \\mu \\)（時間によらず一定）
2. \\( V[Y_t] = \\sigma^2 \\)（時間によらず一定）
3. \\( \\text{Cov}(Y_t, Y_{t-k}) = \\gamma(k) \\)（ラグkのみに依存）

<strong>自己相関関数（ACF）</strong>：
\\( \\rho(k) = \\frac{\\text{Cov}(Y_t, Y_{t-k})}{V[Y_t]} \\)

<strong>偏自己相関関数（PACF）</strong>：中間ラグの影響を除いた自己相関`
      },
      {
        heading: "ARMAモデル",
        content: `<strong>AR(p)：自己回帰モデル</strong>
\\( Y_t = \\phi_1 Y_{t-1} + ... + \\phi_p Y_{t-p} + \\varepsilon_t \\)

定常条件：AR(1) では \\( |\\phi_1| < 1 \\)

<strong>MA(q)：移動平均モデル</strong>
\\( Y_t = \\varepsilon_t + \\theta_1 \\varepsilon_{t-1} + ... + \\theta_q \\varepsilon_{t-q} \\)

<strong>ARMA(p,q)</strong>：AR と MA の組み合わせ

<strong>ARIMA(p,d,q)</strong>：d回差分してARMA(p,q)を適用
- d=1：1回差分（ランダムウォーク等の非定常を定常化）

<div class="key-point">モデル選択の目安：<br>
・ACF が q ラグ以降でカットオフ → MA(q)<br>
・PACF が p ラグ以降でカットオフ → AR(p)<br>
・両方が徐々に減衰 → ARMA(p,q)</div>`
      }
    ]
  }
];
