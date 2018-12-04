var btn = document.getElementById('button');

var Frame1 = {
    /*event: "click",*/
    A: { dom: $("#R0"), x: 365, y: 275, duration: "1s" },
    PC: { dom: $("#LP"), y: 55, delay: "1s", duration: "1s" },
}
var Frame2 = {
    /*event: "click",*/
    SP: { dom: $("#RP"), y: -55, duration: "1s" },
    B: { dom: $("#R1"), x: 365, y: 165, delay: "1s", duration: "1s" },
    PC: { dom: $("#LP"), y: 110, delay: "2s" },
}
var Frame3 = {
    /*event: "click",*/
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

var Frames = [Frame1, Frame2, Frame3, Frame4];


function Conversion(sec){
    var bar = sec.match(/\d+/);
    var second = Number(bar) * 1000;
    return second;
}

function StartAnime(){
    Frame();
}

var i = 0;
function Frame(){
    btn.onclick = function(event){
        for (let j in Frames[i]){
            console.log(i);
            if (Frames[i][j].x && Frames[i][j].y != null){
                Frames[i][j].dom.css({"transform": "translate(" + Frames[i][j].x + "px," + Frames[i][j].y + "px)"});
            }else if (Frames[i][j].x == null){
                if (Frames[i][j].y != null){
                    Frames[i][j].dom.css({"transform": "translateY(" + Frames[i][j].y + "px)"});
                }
            }else if (Frames[i][j].y == null){
                if (Frames[i][j].x != null){
                    Frames[i][j].dom.css({"transform": "translateX(" + Frames[i][j].x + "px)"});
                }
            }
            if (Frames[i][j].duration != null){
                Frames[i][j].dom.css({"transition-duration": Frames[i][j].duration});
            }
            if (Frames[i][j].delay != null){
                Frames[i][j].dom.css({"transition-delay": Frames[i][j].delay});
            }
            if (Frames[i][j].fadein != null){
                Frames[i][j].dom.append(Frames[i][j].content);
                Frames[i][j].dom.keyframes({
                    '0%': {
                        opacity: 0
                    },
                    '100%': {
                        opacity: 1
                    }
                }, {
                    duration: Conversion(Frames[i][j].fadein),           
                    count: 1                  
                })
                Frames[i][j].fadein = null;
            }else if (Frames[i][j].fadeout != null){
                Frames[i][j].dom.keyframes({
                    '0%': {
                        opacity: 1
                    },
                    '100%': {
                        opacity: 0
                    }
                }, {
                    duration: Conversion(Frames[i][j].fadeout),           
                    count: 1,  
                    fill: "forwards"           
                })
            };
        };
        i = i + 1;    
        if (i >= Frames.length){
            return "end"
        }else{
            Frame();
        }
    }
}

StartAnime();


