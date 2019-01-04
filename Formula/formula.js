var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
    //allevent: "click",
};

t = 200;
var init = {
    an: {
        position: {x: 100, y: t}
    },
    onehun: {
        position: {x: 300, y: t}
    },
    flipper: {
        position: {x: 350, y: t}
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
        position: {x: 682, y: t}
    },
    cross2: {
        position: {x: 955, y: t}
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
    setting: {
        event: "click"
    }
};
var Frame1 = {
    par1: {
        position: {x: 600, y: t},
        duration: 1000
    },
    three1: {
        position: {x: 629, y: t},
        control: {x: 625, y: 20},
        duration: 1000
    },
    cross1: {
        fadein: 1000
    },
    n: {
        position: {x: 734, y: t},
        duration: 1000
    },
    minus: {
        position: {x: 825, y: t},
        duration: 1000
    },
    three2: {
        position: {x: 900, y: t},
        control: {x: 750, y: 20},
        duration: 1000
    },
    cross2: {
        fadein: 1000
    },
    one: {
        position: {x: 1000, y: t},
        duration: 1000
    },
    par2: {
        position: {x: 1050, y: t},
        duration: 1000
    },
    setting: {
        event: "click"
    }
};
var Frame2 = {
    par1: {
        fadeout: 1000
    },
    cross1: {
        fadeout: 1000
    },
    three1: {
        position: {x: 580, y: t},
        duration: 1000
    },
    n: {
        position: {x: 630, y: t},
        duration: 1000
    },
    minus: {
        position: {x: 700, y: t},
        duration: 1000
    },
    three2: {
        position: {x: 780, y: t},
        duration: 1000
    },
    cross2: {
        fadeout: 1000
    },
    one: {
        fadeout: 1000
    },
    par2: {
        fadeout: 1000
    },
    setting: {
        event: "click"
    }
};
var Frame3 = {
    plus: {
        position: {x: 700, y: t},
        control: {x: 600, y: 20},
        duration: 1000
    },
    three1: {
        position: {x: 780, y: t},
        control: {x: 680, y: 20},
        duration: 1000
    },
    n: {
        position: {x: 830, y: t},
        control: {x: 730, y: 20},
        duration: 1000
    },
    minus: {
        position: {x: 500, y: t},
        duration: 1000
    },
    three2: {
        position: {x: 580, y: t},
        duration: 1000
    },
    setting: {
        event: "click"
    }
};
var Frame4 = {
    three2: {
        position: {x: 400, y: t - 60},
        control: {x: 490, y: 20},
        duration: 1000
    },
    minus: {
        fadeout: 1000
    },
    plus: {
        position: {x: 500, y: t},
        duration: 1000
    },
    three1: {
        position: {x: 580, y: t},
        duration: 1000
    },
    n: {
        position: {x: 630, y: t},
        duration: 1000
    },
    setting: {
        event: "click"
    }
};
var Frame5 = {
    three2: {
        position: {x: 400, y: -200},
        duration: 100
    },
    flipper: {
        rotate: {front: "twenty", back: "seventeen"}
    },
    seventeen: {
        fadein: 100
    },
    twenty: {
        fadeout: 100
    },
    setting: {
        event: "auto"
    }

}

Frames = [Frame1,Frame2,Frame3,Frame4,Frame5];

Frame(Frames);
