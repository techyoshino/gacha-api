//ランダムリンク用フィールド
myTable = new Array(                      // リンク先の登録
"kaisya/kaisya1.html", 
"kaisya/kaisya2.html", 
"kaisya/kaisya3.html",  
//"kaisya/kaisya4.html",       
//"kaisya/kaisya5.html",
//"kaisya/kaisya6.html"
);

//ランダムリンク用JS
function myRndLink(){                      // 適当に選んでリンクする関数
  myRnd = Math.floor(Math.random()*myTable.length); // 0～(myLine-1)の乱数を求める
  location.href = myTable[myRnd];          // リンクする
}

//遷移アニメーションの設定
$(document).ready(function() {
$(".animsition").animsition({
inClass               :   'zoom-in', // ロード時のエフェクト
outClass              :   'zoom-out', //離脱時のエフェクト
/* 全アニメーションの名前
*  Fade: fade-in fade-out fade-in-up fade-out-up fade-in-down fade-out-down fade-in-left fade-out-left fade-in-right fade-out-right
*  Rotate: rotate-in rotate-out
*  Flip: flip-in-x flip-out-x flip-in-y flip-out-y
*  Zoom: zoom-in zoom-out
*/
inDuration            :    1500, //ロード時の演出時間
outDuration           :    800, //離脱時の演出時間
linkElement           :   '.animsition-link', //アニメーションを行う要素
// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
loading               :    true, //ローディングの有効/無効
loadingParentElement  :   'body', //ローディング要素のラッパー
loadingClass          :   'animsition-loading', //ローディングのクラス
unSupportCss          : [ 'animation-duration',
'-webkit-animation-duration',
'-o-animation-duration'
],
overlay               :   false, //オーバーレイの有効/無効
overlayClass          :   'animsition-overlay-slide', //オーバーレイのクラス
overlayParentElement  :   'body' //オーバーレイ要素のラッパー
});
});
