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
    allevent: "click",
};

var init = {
    one: {
        position: {x: a, y: t},
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
        position: {x: b, y: t},
        fillcolor: "GhostWhite",
        width: sides,
        height: sides,
        shadow: 0.6
    }
};

var Frame1 = {
    three: {
        duration: 0,
        position: {x: b, y: t},
        control: {x: b, y: t}
    },
    seven: {
        duration: 0,
        position: {x: c, y: t},
        control: {x: c, y: t}
    }
};
var Frame2 = {
    five: {
        duration: 0,
        position: {x: c, y: t},
        control: {x: c, y: t}
    },
    seven: {
        duration: 0,
        position: {x: d, y: t},
        control: {x: d, y: t}
    }
};

Frames = [Frame1,Frame2];

Frame(Frames);