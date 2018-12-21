particlesize = 10;
launchEndX = 500;
launchEndY = 200;

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
        fillcolor: "blue",
        radius: 50,
        position: {
            x: 500,
            y: 800
        }
    },
    Particle01: {
        width: particlesize,
        height: particlesize,
        layer: 1,
        fillcolor: "blue",
        radius: 50,
        position: {
            x: launchEndX,
            y: launchEndY,
        }
    }
}

//アニメーション
var Frame1 = {
    launchParticle: {
        position: {
            x: launchEndX,
            y: launchEndY
        },
        duration: 500
    },
    setting: {
        event: "click"
    }
}
var Frame2 = {
    launchParticle: {
        fadeout: 100
    },
    Particle01: {
        fadein: 0,
    },
    setting: {
        event: "auto"
    }
}
var Frame3 = {
    /*launchParticle: {
        fadein: 100
    },*/
    Particle01: {
        position: {
            x: 300,
            y: 100
        },
        duration: 1000,
        fadeout: 3000
    },
    setting: {
        event: "auto"
    }
}

var Frames = [Frame1,Frame2,Frame3];

Frame(Frames);

