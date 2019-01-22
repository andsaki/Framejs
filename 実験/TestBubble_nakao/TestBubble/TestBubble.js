//https://docs.google.com/forms/d/e/1FAIpQLSc9lfKIOcxcUVaPE1Fr7IKI9_I9fseuZY0MlgECGLVUN_stKQ/viewform
t = 400; //縦の座標
a = 100; //左から一番目の座標
b = 200; //左から二番目の座標
c = 300; //左から三番目の座標
d = 400; //左から四番目の座標
sides = 50; //辺の大きさ

//ボタンのカスタマイズ
var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
    //allevent: "click",
};

//アニメーションオブジェクトの初期値
/*・position（座標）
・layer(オブジェクトの層の設定。値が小さいほど下になる。)
・width(横幅)
・height(高さ)
・fillcolor(色)
・radius（角の滑らかさ）
・img(画像を読み込む。パスを書く。自由度が低いので読み込みたい場合はcssの方がいいかも。)
・shadow(影をつける。0から1で指定。)*/
var init = {
    one: {
        position: {x: d, y: t},
        fillcolor: "GhostWhite",
        width: sides,
        height: sides,
        shadow: 0.6
    },
    three: {
        position: {x: b, y: t},
        fillcolor: "GhostWhite",
        width: sides,
        height: sides,
        shadow: 0.6
    },
    five: {
        position: {x: c, y: t},
        fillcolor: "GhostWhite",
        width: sides,
        height: sides,
        shadow: 0.6
    },
    seven: {
        position: {x: a, y: t},
        fillcolor: "GhostWhite",
        width: sides,
        height: sides,
        shadow: 0.6
    }
};

//フレーム処理
/*・position(直線移動)
・control(曲線移動、始点を終点の間の制御点を書くと曲がる)
・fadein(フェードイン、時間を指定)
・fadeout(フェードアウト、時間を指定)
・rotate(回転による変形、{front: 回転前のid,back: 回転後のid})
・duration(アニメーションの時間指定)
・fillcolor(色)
・delay(アニメーションの遅延指定)*/

//1フレーム目
var Frame1 = {
    three: {
        duration: 1000,
        position: {x: a, y: t},
        control: {x: (a+b)/2, y: t+100},
        fillcolor:"lightpink"
    },
    seven: {
        duration: 1000,
        position: {x: b, y: t},
        control: {x: (a+b)/2, y: t-100},
        fillcolor:"lightpink"
    },
    setting: {
        event: "auto",
        //event: "auto",
        //interval: 3000
    }
};
//2フレーム目
var Frame2 = {
  three: {
      fillcolor:"lightyellow"
  },
    five: {
        duration: 1000,
        position: {x: b, y: t},
        control: {x: (b+c)/2, y: t+100},
        fillcolor:"lightpink"
    },
    seven: {
        duration: 1000,
        position: {x: c, y: t},
        control: {x: (b+c)/2, y: t-100},
        fillcolor:"lightpink"
    },
    setting: {
        event: "auto",
        //event: "auto",
        //interval: 3000
    }
};
//3フレーム目
var Frame3 = {
  five: {
      fillcolor:"lightyellow"
  },
    one: {
        duration: 1000,
        position: {x: c, y: t},
        control: {x: (c+d)/2, y: t+100},
        fillcolor:"lightpink"
    },
    seven: {
        duration: 1000,
        position: {x: d, y: t},
        control: {x: (c+d)/2, y: t-100},
        fillcolor:"lightpink"
    },
    setting: {
        event: "auto",
        //event: "auto",
        //interval: 3000
    }
};
var Frame4 = {
    one: {
        fillcolor:"lightyellow"
    },
    seven: {
      fillcolor:"lightyellow"
    },
    setting: {
        event: "auto",
        //event: "auto",
        //interval: 3000
    }
};
Frames = [Frame1,Frame2,Frame3,Frame4];

Frame(Frames);
