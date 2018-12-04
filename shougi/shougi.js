var btn = document.getElementById('button');

var Frame1 = {
    /*event: "click",*/
    ryuma: {x: -78, y: 78, duration: "1s" },
}
var Frame2 = {
    /*event: "click",*/
    ou: {x: -78, y: -78, duration: "1s" },
    ryuma: {delay: "1s", fadeout: "2s" },
}
var Frame3 = {
    /*event: "click",*/
    sotokinn: {x: -290, y: -78 ,duration: "1s"},
}

var Frames = [Frame1, Frame2, Frame3];


function Conversion(sec){
    var bar = sec.match(/\d+/);
    var second = Number(bar) * 1000;
    return second;
}

function StartAnime(){
    Frame();
}

function DOM(domname){
    dom = $(`#${domname}`);
    return dom;
}

var i = 0;
function Frame(){
    btn.onclick = function(event){
        for (let j in Frames[i]){
            console.log(j)
            if (Frames[i][j].x && Frames[i][j].y != null){
                DOM(j).css({"transform": "translate(" + Frames[i][j].x + "px," + Frames[i][j].y + "px)"});
            }else if (Frames[i][j].x == null){
                if (Frames[i][j].y != null){
                    DOM(j).css({"transform": "translateY(" + Frames[i][j].y + "px)"});
                }
            }else if (Frames[i][j].y == null){
                if (Frames[i][j].x != null){
                    DOM(j).css({"transform": "translateX(" + Frames[i][j].x + "px)"});
                }
            }
            if (Frames[i][j].duration != null){
                DOM(j).css({"transition-duration": Frames[i][j].duration});
            }
            if (Frames[i][j].delay != null){
                DOM(j).css({"transition-delay": Frames[i][j].delay});
            }
            if (Frames[i][j].fadein != null){
                DOM(j).append(Frames[i][j].content);
                DOM(j).keyframes({
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
                DOM(j).keyframes({
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
            }
        }
        i = i + 1;    
        if (i >= Frames.length){
            return "end"
        }else{
            Frame();
        }
    }
}

StartAnime();


