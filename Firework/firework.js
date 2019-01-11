/*
花火のアニメーション。
初期値は全てinit内で実装。
フレームオブジェクト外で色々計算することでグラフィカルなアニメーションを制作することができた。
*/

particlesize = 5;
launchEndX = 500;
launchEndY = 200;
amount = 50;

// 初期設定
var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
};


var init = {
    launchParticle: {
        width: particlesize,
        height: particlesize,
        fillcolor: "yellow",
        radius: 50,
        position: {
            x: 500,
            y: 800
        }
    },
};

for(var p = 0; p <= amount; p++){
    init["Particle" + p] = {
        width: particlesize,
        height: particlesize,
        layer: 1,
        fillcolor: "yellow",
        radius: 50,
        position: {
            x: launchEndX,
            y: launchEndY,
        }
    };
};

//アニメーション
var Frame1 = {
    launchParticle: {
        position: {
            x: launchEndX,
            y: launchEndY
        },
        duration: 150
    },
    setting: {
        event: "click"
    }
};
var Frame2 = {
    launchParticle: {
        fadeout: 0
    },
    setting: {
        event: "auto"
    }
};

for(var p = 1; p <= amount; p++){
    Frame2["Particle" + p] = {
        fadein: 0
    };
};

var Frame3 = {
    setting: {
        event: "auto"
    }
}

for(var p = 1; p <= amount; p++){
    r = 200;
    cr = r * 0.8;
    PI_2 = 2 * Math.PI;
    radian = PI_2/amount * p;
    Frame3["Particle" + p] = {
        position: {
            x: r * Math.cos(radian) + launchEndX,
            y: r * Math.sin(radian) + launchEndY
        },
        control: {
            x: cr * Math.cos(radian) + launchEndX,
            y: cr * Math.sin(radian) + launchEndY - 100
        },
        duration: 1000,
        fadeout: 1200
    };
    console.log(Frame3["Particle" + p].position);
    console.log(Frame3["Particle" + p].control);
};

var Frames = [Frame1,Frame2,Frame3];

Frame(Frames);

