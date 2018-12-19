var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
}
var Frame1 = {
    sotokeima01: {
        attribute: "class",
        position: {
            x: 460, 
            y: 285
        }, 
        duration: 1000
    },
    setting: {
        event: "click"
    }
};
var Frame2 = {
    invkaku: {
        position: {
            x: 460, 
            y: 285
        },
        duration: 1000
    },
    sotokeima01: {
        delay: 1000, 
        fadeout: 2000 
    },
    setting: {
        event: "click"
    }
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
    setting: {
        event: "click"
    }
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
    setting: {
        event: "click"
    }
}
var Frame5 = {
    sotokeima02: {
        attribute: "class",
        position: {
            x: 460, 
            y: 285
        }, 
        duration: 1000
    },
    setting: {
        event: "click"
    }
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
    setting: {
        event: "click"
    }
}
var Frame7 = {
    sotokeima03: {
        attribute: "class",
        position: {
            x: 610, 
            y: 285
        }, 
        duration: 1000
    },
    setting: {
        event: "click"
    }
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
    setting: {
        event: "click"
    }
}
var Frame9 = {
    hisya_flipper: {
        position: {
            x: 387, 
            y: 122
        },
        duration: 1000
    },
    setting: {
        event: "click"
    }
}
var Frame10 = {
    invou: {
        position: {
            x: 532, 
            y: 203
        },
        duration: 1000
    },
    setting: {
        event: "click"
    }
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
    setting: {
        event: "click"
    }
}

var Frames = [Frame1, Frame2, Frame3,Frame4, Frame5, Frame6,Frame7, Frame8, Frame9,Frame10, Frame11];


Frame(Frames);