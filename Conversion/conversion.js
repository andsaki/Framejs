var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
    allevent: "click",
    //interval: 1000
};

var init = {
    R0: {
        layer: 2,
        position: {
            x: 100, y: 130
        }
    }
};

var Frame1 = {
    R0: {
        position: {
            x: 365, y: 275
        },
        duration: 1000 
    },
    LP: { 
        position: {
            x: 55, y: 0
        },
        delay: 1000, 
        duration: 1000 
    }
};
var Frame2 = {
    SP: { dom: $("#RP"), y: -55, duration: "1s" },
    B: { dom: $("#R1"), x: 365, y: 165, delay: "1s", duration: "1s" },
    PC: { dom: $("#LP"), y: 110, delay: "2s" },
}
var Frame3 = {
    SP: { dom: $("#RP"), y: -110 },
    B: { dom: $("#R1"), x: 410, y: 220 },
    MINUS: { dom: $("#sub"), x: 495, y: 405, delay: "1s", fadein: "3s", content: "-" },
}
var Frame4 = {
    /*event: "click",*/
    A: { dom: $("#R0"), fadeout: "2s"},
    MINUS: { dom: $("#sub"), fadeout: "2s"},
    B:{ dom: $("#R1"), fadeout: "2s" },
    C: { dom: $("#R2"), x: 470, y: 405, fadein: "4s", content: "-10" },
    PC: { dom: $("#LP"), y: 165 },
}　

var Frames = [Frame1];


Frame(Frames);