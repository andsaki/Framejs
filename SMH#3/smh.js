/* 
初期値は全てCSSで指定
次のフレームに遷移するのに毎回クリックや時間などのイベントを書き、入れ子にしていかないといけない
遅延処理をする時は毎回非同期処理をしなければならない。
resetやbackを機能をつけるときに初期値の情報を保存する関数とNフレーム目までを並べて保存し
それぞれのフレームまで戻る関数を作らなきゃならない。
曲線の軌跡を定義する関数を書かなきゃならない。
面と裏を入れ替えるエフェクトを作らなきゃならない。
ライブラリを使わない場合一つのアニメーションにしか対応できない。
*/

var L0 = $("#L0");
var L1 = $("#L1");
var LP = $("#LP");
var R0 = $("#R0");
var R1 = $("#R1");
var R2 = $("#R2");
var RP = $("#RP");
var sub = $("#sub");
$("#button").click(function(e){
    L0.css({"transform": "translate(0px,-260px)"});
    R0.css({"transform": "translate(0px,-220px)"});
    LP.css({"transform": "translate(0px,55px)"});
    $("#button").click(function(e){
        RP.css({"transform": "translate(0px,-55px)"});
        L1.css({"transform": "translate(0px,-520px)"});
        R1.css({"transform": "translate(0px,-275px)"});
        LP.css({"transition-delay": "2s"});
        LP.css({"transform": "translate(0px,110px)"});
        $("#button").click(function(e){
            RP.css({"transform": "translate(0px,0px)"});
            R1.css({"transform": "translate(40px,-220px)"});
            sub.css({"transform": "translate(0px,-220px)"});  
            R0.fadeOut(2000);
            R1.fadeOut(2000);
            sub.fadeOut(2000);
            setTimeout(function(){
                R2.append("-10");   
            },3000);
        });
        $("#button").click(function(e){
            LP.css({"transition-delay": "4s"});
            LP.css({"transform": "translate(0px,165px)"});
        });
        
    });
});
