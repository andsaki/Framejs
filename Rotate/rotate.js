var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
}
var Frame1 = {
    flipper: {
        position: {x: 500, y: 400}, 
        attribute: "class",
        duration: 2000,
        rotate: {front: "kaku", back: "ryuma"}
    },
    kinn: {
        position : {x: 500, y: 200}, 
        control: {x: 300, y: 100}, 
        duration: 1000,
    },
    setting: {
        event: "click",
    }
}
var Frame2 = {
    flipper: {
        position: {x: 400, y: 300}, 
        attribute: "class",
        duration: 1000,
        fadeout: 2000,
    },
    kinn: {
        position : {x: 500, y: 600}, 
        duration: 1000,
    },
    setting: {
        event: "click",
    }
}
var Frames = [Frame1, Frame2];

Frame(Frames);