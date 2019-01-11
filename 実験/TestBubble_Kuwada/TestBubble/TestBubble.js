t = 400;
a = 100;
b = 200;
c = 300;
d = 400;
ab = (a + b)/2;
bc = (b + c)/2;
cd = (c + d)/2;
up = t - 100;
down = t + 100;
sides = 50;

var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
    //allevent: "click",
};

var init = {
    one: {
        position: {x: b, y: t},
        fillcolor: "GhostWhite",
        width: sides,
        height: sides,
        shadow: 0.6
    },
    three: {
        position: {x: c, y: t},
        fillcolor: "GhostWhite",
        width: sides,
        height: sides,
        shadow: 0.6
    },
    five: {
        position: {x: d, y: t},
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
    },
};

var Frame1 = {
    one: {
        fillcolor:"red"
    },
    seven: {
        fillcolor:"red"
    },
    setting: {
        event: "click"
    }
};
var Frame2 = {
    one: {
        duration: 2000,
        position: {x: a, y: t},
        control: {x: (a+b)/2, y: t+100}
    },
    seven: {
        duration: 2000,
        position: {x: b, y: t},
        control: {x: (a+b)/2, y: t-100}
    },
    setting: {
        event: "auto",
        interval:500
    }
};
var Frame3 = {
    one: {
        fillcolor:"white"
    },
    seven: {
        fillcolor:"white"
    },
    setting: {
        event: "auto",
        interval:500
    }
};
var Frame4 = {
    three: {
        fillcolor:"red"
    },
    seven: {
        fillcolor:"red"
    },
    setting: {
        event: "click"
    }
};
var Frame5 = {
    three: {
        duration: 2000,
        position: {x: b, y: t},
        control: {x: (b+c)/2, y: t+100}
    },
    seven: {
        duration: 2000,
        position: {x: c, y: t},
        control: {x: (b+c)/2, y: t-100}
    },
    setting: {
        event: "auto",
        interval:500
    }
};
var Frame6 = {
    three: {
        fillcolor:"white"
    },
    seven: {
        fillcolor:"white"
    },
    setting: {
        event: "auto",
        interval:500
    }
};
var Frame7 = {
    five: {
        fillcolor:"red"
    },
    seven: {
        fillcolor:"red"
    },
    setting: {
        event: "click"
    }
};
var Frame8 = {
    five: {
        duration: 2000,
        position: {x: c, y: t},
        control: {x: (c+d)/2, y: t+100}
    },
    seven: {
        duration: 2000,
        position: {x: d, y: t},
        control: {x: (c+d)/2, y: t-100}
    },
    setting: {
        event: "auto",
        interval:500
    }
};
var Frame9 = {
    five: {
        fillcolor:"white"
    },
    seven: {
        fillcolor:"white"
    },
    setting: {
        event: "auto",
        interval:500
    }
};

Frames = [Frame1,Frame2,Frame3,Frame4,Frame5,Frame6,Frame7,Frame8,Frame9];

Frame(Frames);