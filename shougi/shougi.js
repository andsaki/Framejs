/*
詰将棋のアニメーション
*/

var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
    allevent: "click",
    //interval: 1000
};
var init ={
    bass: {
        img: "../shougi/pic/shyougiban.jpg",
        width: 697,
        height: 750,
        layer: 0,
        position: {
            y: 100
        }
    },
    invou: {
        layer: 1,
        position: {
            x: 532,
            y: 123
        },
        shadow: 0.6
    },
    hisya_flipper: {
        layer: 1,
        position: {
            x: 750,
            y: 280
        },
        shadow: 0.6
    },
    kaku_flipper: {
        layer: 1,
        position: {
            x: 460,
            y: 123
        },
        shadow: 0.6
    },
    invkaku: {
        layer: 1,
        position: {
            x: 532,
            y: 202
        },
        shadow: 0.6
    },
    invryuma: {
        layer: 1,
        position: {
            x: 458,
            y: 125
        },
        shadow: 0.6
    },
    invkinn: {
        layer: 1,
        position: {
            x: 610,
            y: 363
        },
        shadow: 0.6
    },
    keima: {
        width: 65,
        layer: 1,
        position: {
            x: 535,
            y: 360
        },
        shadow: 0.6
    },
    sotokeima01: {
        width: 65,
        layer: 1,
        position: {
            x: 750,
            y: 363
        },
        shadow: 0.6
    },
    sotokeima02: {
        width: 65,
        layer: 1,
        position: {
            x: 750,
            y: 433
        },
        shadow: 0.6
    },
    sotokeima03: {
        width: 65,
        layer: 1,
        position: {
            x: 750,
            y: 503
        },
        shadow: 0.6
    },
    invfu01: {
        layer: 1,
        position: {
            x: 390,
            y: 290
        },
        shadow: 0.6
    },
    invfu02: {
        layer: 1,
        position: {
            x: 537,
            y: 290
        },
        shadow: 0.6
    }
};
var Frame1 = {
    sotokeima01: {
        position: {
            x: 460, 
            y: 285
        }, 
        duration: 1000
    },
};
var Frame2 = {
    invkaku: {
        position: {
            x: 460, 
            y: 285
        },
        duration: 1000,
        layer: 100
    },
    sotokeima01: {
        delay: 1000, 
        fadeout: 2000 
    },
};
var Frame3 = {
    kaku_flipper: {
        position: {
            x: 532, 
            y: 202
        },
        duration: 1000,
        rotate: {
            front: "kaku",
            back: "ryuma"
        }
    },
}
var Frame4 = {
    invkaku:{
        position: {
            x: 532, 
            y: 202
        },
        duration: 1000
    },
    kaku_flipper: {
        delay: 1000, 
        fadeout: 2000
    },
}
var Frame5 = {
    sotokeima02: {
        position: {
            x: 460, 
            y: 285
        }, 
        duration: 1000
    },
}
var Frame6 = {
    invkaku: {
        position: {
            x: 460, 
            y: 285
        },
        duration: 1000
    },
    sotokeima02: {
        delay: 1000, 
        fadeout: 2000 
    },
}
var Frame7 = {
    sotokeima03: {
        position: {
            x: 610, 
            y: 285
        }, 
        duration: 1000
    },
}
var Frame8 = {
    invkinn: {
        position: {
            x: 610, 
            y: 285
        },
        duration: 1000
    },
    sotokeima03: {
        delay: 1000, 
        fadeout: 2000 
    },
}
var Frame9 = {
    hisya_flipper: {
        position: {
            x: 387, 
            y: 122
        },
        duration: 1000
    },
}
var Frame10 = {
    invou: {
        position: {
            x: 532, 
            y: 203
        },
        duration: 1000
    },
}
var Frame11 = {
    hisya_flipper: {
        position: {
            x: 460, 
            y: 122
        },
        duration: 1000,
        rotate: {
            front: "hisya",
            back: "ryuou"
        }
    },
}

var Frames = [Frame1, Frame2, Frame3,Frame4, Frame5, Frame6,Frame7, Frame8, Frame9,Frame10, Frame11];


Frame(Frames);