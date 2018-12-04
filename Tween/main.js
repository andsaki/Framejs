//アニメーションの実行というか定義というか…
//tween.jsを動かすために必要な宣言
var animate = function(){
    requestAnimationFrame(animate);
    TWEEN.update();
}
animate();
 
 
//使用する各DOMを取得
var A = [];
var B = [];
var btn = document.getElementById('button');
var moverect = document.getElementById("moverect");
var inSVG = document.getElementById("inSVG");

//スコープに関係なく扱えるようにできるため、ここで宣言。
var tw1;
 
 
//#anim1動かすボタンを押したときの挙動
inSVG.onclick = function(event){
    var a = event.clientX;
    var b = event.clientY;
    console.log(a);
    console.log(b);
    inSVG.onclick = function(event){
        var p = event.clientX;
        var q = event.clientY;
        console.log(p);
        console.log(q);
        //スタート時の初期値
        var pos = { x: a ,y: b };
        console.log(pos);
        btn.onclick = function(event){
        //tweenの動きを定義
        tw1 = new TWEEN.Tween(pos)
            //2000ミリ秒後にどうなってるか。
            //この場合初期値10から410に変化する
            .to({ x: p , y: q }, 2000)
            //処理遅延の指定。指定したミリ秒後に実行される
            .delay(500)
            //イージングの指定。種類は色々あります。
            //js本体のソースを見るのが早そう。
            .easing(TWEEN.Easing.Elastic.Out
                )
            //tweenがアップデートされるたびに呼び出される
            .onUpdate(function() {
                //#anim1のstyleを書き換え※②
                moverect.style.x = this.x + 'px';
                moverect.style.y = this.y + 'px';
            })
        
            //アニメーションが終わった時の挙動。
            //ここでは初期位置に戻すようにしてある。
            .onComplete(function(){
                moverect.style.x = '0px';
                moverect.style.y = '0px';
                
            });
            //tweenをスタートさせる。他と同じように上に連結させても良い。
            tw1.start();
            console.log(tw1);
        }
    }
}
 
