var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
}
var Frame1 = {
    kinn: {
        position : {x: 500, y: 200}, 
        control: {x: 300, y: 100}, 
        duration: 1000,
        rotate: 1
    },
    setting: {
        event: "click",
    }
}
var Frame2 = {
    kinn: {
        position: {x: 695, y: 100}, 
        duration: 1000,
    },
    ginn: {
        position: {x: 200, y: 100}, 
        delay: 500, 
        duration: 1000
    },
    setting:{
        event: "click",
    }
}
var Frame3 = {
    kinn: {
        position: {x: 70, y: 10}, 
        duration: 1000, 
        fadeout: 2000,
    },
    setting: {
        event: "click",
    }
}

var Frames = [Frame1, Frame2, Frame3];

Frame(Frames);


