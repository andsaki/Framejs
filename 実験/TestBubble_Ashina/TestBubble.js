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



var Frame0 = {
    seven: {
        duration: 1000,
fillcolor: "Yellow",
    },
    three: {
        duration: 1000,
fillcolor: "Yellow",    },
    setting: {
        event: "click",
       // event: "auto",
     //   interval: 000
    }
};

var Frame1 = {
    seven: {
        duration: 1000,
        position: {x: b, y: t},
        control: {x: (a+b)/2, y: t+100},

    },
    three: {
        duration: 1000,
        position: {x: a, y: t},
        control: {x: (a+b)/2, y: t-100},

    },
    setting: {
        //event: "click",
        event: "auto",
        interval: 1000
    }
};
var Frame2 = {
    seven: {
        duration: 1000,
        fillcolor: "GhostWhite",

    },
    three: {
        duration: 1000,
fillcolor: "GhostWhite",


    },
    setting: {
        //event: "click",
        event: "auto",
        interval: 1000
    }
};

var Frame3 = {
    seven: {
        duration: 1000,
        position: {x: c, y: t},
        control: {x: (b+c)/2, y: t+100}
    },
    five: {
        duration: 1000,
        position: {x: b, y: t},
        control: {x: (b+c)/2, y: t-100}
    },
    setting: {
        //event: "click",
        //event: "auto",
        //interval
    }

};
var Frame3 = {
    seven: {
        duration: 1000,
        position: {x: d, y: t},
        control: {x: (c+d)/2, y: t+100}
    },
    one: {
        duration: 1000,
        position: {x: c, y: t},
        control: {x: (c+d)/2, y: t-100}
    },
    setting: {
        //event: "click",
        event: "auto",
        //interval
    }

};


Frames = [Frame0,Frame1,Frame2,Frame2,Frame3];

Frame(Frames);