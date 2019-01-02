var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
    allevent: "click",
};

t = 200;
var init = {
    an: {
        position: {x: 100, y: t}
    },
    onetwenty: {
        position: {x: 300, y: t}
    },
    plus: {
        position: {x: 500, y: t}
    },
    three1: {
        position: {x: 600, y: t}
    },
    three2: {
        position: {x: 600, y: t}
    },
    cross1: {
        position: {x: 680, y: t}
    },
    cross2: {
        position: {x: 900, y: t}
    },
    par1: {
        position: {x: 650, y: t}
    },
    n: {
        position: {x: 700, y: t},
    },
    minus: {
        position: {x: 800, y: t},
    },
    one: {
        position: {x: 900, y: t},
    },
    par2: {
        position: {x: 950, y: t},
    },
    threeN: {
        position: {x: 680, y: t}
    }
};
var Frame1 = {
    three1: {
        position: {x: 630, y: t},
        control: {x: 625, y: 20},
        duration: 1000
    },
    three2: {
        position: {x: 850, y: t},
        control: {x: 725, y: 20},
        duration: 1000
    },
    n: {
        position: {x: 730, y: t},
        duration: 1000
    },
    par1: {
        position: {x: 600, y: t},
        duration: 1000
    },
    cross1: {
        fadein: 1000
    },
    cross2: {
        fadein: 1000
    },
    one: {
        position: {x: 950, y: t},
        duration: 1000
    },
    par2: {
        position: {x: 1000, y: t},
        duration: 1000
    },
};
var Frame2 = {
    flipper1: {
        rotate: {front: "front1", back: "threeN"}
    },
    threeN: {
        fadein: 0
    },
    three1: {
        fadeout: 0
    },
    cross1: {
        fadeout: 0
    },
    n: {
        fadeout: 0
    },
}

Frames = [Frame1,Frame2];

Frame(Frames);
