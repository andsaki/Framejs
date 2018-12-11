var defaultset = {
    next: "next",
    back: "back",
    reset: "reset",
}
var Frame1 = {
    flipper: {
        position: {x: 0, y: 0}, 
        attribute: "class",
        duration: 1000,
        rotate: {front: "kaku", back: "ryuma"}
    },
    setting: {
        event: "click",
    }
}
var Frames = [Frame1];

Frame(Frames);