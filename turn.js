<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>投手 × VO₂max — Flipbook版</title>

<!-- turn.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.0/turn.min.js"></script>

<style>
body {
  background:#0d1117;
  color:#e5e7eb;
  font-family:'Noto Sans JP',sans-serif;
  margin:0;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
}
#flipbook {
  width:900px;
  height:600px;
}
.page {
  background:#111827;
  border:1px solid #1f2937;
  color:#e5e7eb;
  padding:40px;
  box-sizing:border-box;
}
h2 { color:#60a5fa; margin-top:0; }
p { line-height:1.8; }
@media (max-width:768px){
  body{height:auto; display:block;}
  #flipbook{width:100%; height:auto;}
  .page{height:auto;}
}
</style>
</head>

<body>
<div id="flipbook">
  <div class="page">
    <h2>1. 投手にとってのVO₂maxとは？</h2>
    <p>投手の投球は「一球の力」ではなく、出力を繰り返すための回復速度で決まる。VO₂maxはその回復速度を決定づける“酸素エンジン”。</p>
  </div>

  <div class="page">
    <h2>2. 投球エネルギーの二軸構造</h2>
    <p>ウエイト＝燃やす力／VO₂max＝燃えたあとを立て直す力。両輪が噛み合って初めて「最後まで球質が落ちない投手」が成立する。</p>
  </div>

  <div class="page">
    <h2>3. VO₂maxが高いメリット</h2>
    <ul>
      <li>イニング間・登板間の回復が速い</li>
      <li>終盤でも球速・リリースが安定</li>
      <li>心拍降下が速く、冷静に投げられる</li>
      <li>疲労蓄積が少なく、崩れにくい</li>
    </ul>
  </div>

  <div class="page">
    <h2>4. VO₂maxが低いデメリット</h2>
    <ul>
      <li>回復が遅く疲労が残る</li>
      <li>球速・制球の再現性が低い</li>
      <li>心拍が下がりにくく、緊張が抜けない</li>
      <li>長回・連投に弱い</li>
    </ul>
  </div>

  <div class="page">
    <h2>5. クーパー走換算とエビデンス</h2>
    <p>VO₂max ≒ (距離[m] − 504.9) ÷ 44.73</p>
    <ul>
      <li>3100m → 約58 ml/kg/min</li>
      <li>3200m → 約60 ml/kg/min</li>
    </ul>
    <p>参考：Yang (2014), Gillett (2016), Clingman (2023)</p>
  </div>

  <div class="page">
    <h2>6. 総括</h2>
    <p>出力を生むのがウエイト。出力を戻すのが酸素。両輪が揃って、先発投手は完成する。</p>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded",()=>{
  $("#flipbook").turn({
    width:900,
    height:600,
    autoCenter:true,
    elevation:50,
    gradients:true,
    when:{
      turned:function(e,page){console.log("Page: "+page);}
    }
  });
});
</script>

<!-- jQuery (turn.js依存) -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</body>
</html>
