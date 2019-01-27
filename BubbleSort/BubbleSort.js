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
    one: {
        fillcolor: "yellow",
        duration: 1000,
        scale: 3
    },
    seven: {
        fillcolor: "skyblue",
        duration: 1000
    }
};
var Frame2 = {
    one: {
        fillcolor: "GhostWhite",
        duration: 1000
    },
    three: {
        fillcolor: "red",
        duration: 1000
    },
    seven: {
        fillcolor: "yellow",
        duration: 1000
    }
};
var Frame3 = {
    three: {
        fillcolor: "GhostWhite",
        duration: 1000,
        position: {x: b, y: t},
        control: {x: bc, y: up}
    },
    five: {
        fillcolor: "red",
        duration: 1000,
    },
    seven: {
        fillcolor: "yellow",
        duration: 1000,
        position: {x: c, y: t},
        control: {x: bc, y: down}
    }
};
var Frame4 = {
    five: {
        fillcolor: "GhostWhite",
        duration: 1000,
        position: {x: c, y: t},
        control: {x: cd, y: up}
    },
    seven: {
        fillcolor: "GhostWhite",
        duration: 1000,
        position: {x: d, y: t},
        control: {x: cd, y: down}
    }
};

Frames = [Frame1,Frame2, Frame3,Frame4];

Frame(Frames);