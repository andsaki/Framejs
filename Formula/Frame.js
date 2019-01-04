function Frame(Frames){
    var Frames;
    setCSS();
    SP = StartPosition();
    console.log(SP);
    ZI = ZIndex();
    fc = fadecheck();
    console.log(fc);
    eventFunction();
};

function setCSS(){
    for (let fr0 in init){
        console.log(init[fr0]);
        for (let css in init[fr0]){
            if (css == "layer"){
                DOM(fr0).css({
                    "z-index": init[fr0].layer
                });
                console.log(init[fr0].layer);
                console.log(DOM(fr0));
            };
            if (css == "position"){
                DOM(fr0).css({
                    left: init[fr0].position.x,
                    top: init[fr0].position.y
                });
            };
            if (css == "width"){
                DOM(fr0).css({
                    width: init[fr0].width
                });
            };
            if (css == "height"){
                DOM(fr0).css({
                    height: init[fr0].height
                });
            };
            if (css == "fillcolor"){
                DOM(fr0).css({
                    background: init[fr0].fillcolor
                });
            };
            if (css == "radius"){
                DOM(fr0).css({
                    "border-radius": init[fr0].radius + "%"
                });
            };
            if (css == "img"){
                DOM(fr0).css({
                    "background-image": "url(" + init[fr0].img + ")",
                    "background-size": "cover"
                });
            };
            if (css == "shadow"){
                DOM(fr0).css({
                    filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0," + init[fr0].shadow + "))"
                });
            };
            DOM(fr0).css({
                position: "absolute"
            });         
        };
    };
};

function StartPosition(){
    var SP = [];
    for(var i = 0; i < Frames.length;i++){
        for (let j in Frames[i]){
            SP.push({
                domname: j,
                x: DOM(j).css('left'), 
                y: DOM(j).css('top')
            });
        };
    };
    //console.log(StartPosition);
    SP = Duplication(SP);
    //console.log(StartPosition);
    return SP
};

function fadecheck(){
    fade = [];
    for(var i = 0; i < Frames.length;i++){
        for (let j in Frames[i]){
            if (Frames[i][j].fadein != null){
                fade.push({
                    domname: j,
                    state: "fadein"
                });
            };
        };
    };
    //console.log(fade);
    var DupFade = Duplication(fade)
    console.log(DupFade);
    console.log(DupFade);
    for(var n = 0; n < DupFade.length;n++){
        //DOM(DupFade[n].domname).css('opacity',0);
        DOM(DupFade[n].domname).animate({opacity: '0'}, 0);
    };
    
    return DupFade
};

function Duplication(overlapped){
    // 重複を削除したリスト
    var values = [];
    var no_overlapped = overlapped.filter(e => {
        if (values.indexOf(e["domname"]) === -1) {
            // values に値が存在しない要素のみをフィルタリング
            values.push(e["domname"]); 
            return e  
        }
    });
    no_overlapped.some(function(v, n){
        if (v.domname == "setting"){
            no_overlapped.splice(n,1);   
        }; 
    });
    return no_overlapped
};

function ZIndex(){
    haveRotate = [];
    for(var i = 0; i < Frames.length;i++){
        for (let key in Frames[i]){
            if (Frames[i][key].rotate != null){
                haveRotate.push({
                    domname: key,
                    front: Frames[i][key].rotate.front, 
                    back: Frames[i][key].rotate.back
                });
                now_idx =  DOM(key).css("z-index");
                console.log(now_idx);
                if (now_idx == "auto"){
                    now_idx = 0;
                }
                front_idx = Number(now_idx) + 1;
                back_idx = now_idx;
                //console.log(now_idx);
                DOM(key).css({
                    //"transition": "0.6s",
                    "-webkit-transform-style": "preserve-3d",
                    "-moz-transform-style": "preserve-3d",
                    "-o-transform-style": "preserve-3d",
                    "transform-style": "preserve-3d"
                });
                DOM(Frames[i][key].rotate.front).css({
                    "z-index": "" + front_idx,
                    "-webkit-backface-visibility": "hidden",
                    "-moz-backface-visibility": "hidden",
                    "-o-backface-visibility": "hidden",
                    "backface-visibility": "hidden",
                    position: "absolute"
                    //"transform": "rotateY(-180deg)"
                });
                DOM(Frames[i][key].rotate.back).css({
                    "z-index": "" + back_idx,
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden",
                    "-moz-backface-visibility": "hidden",
                    "-o-backface-visibility": "hidden",
                    position: "absolute"
                });
            };
        };
    };
    haveRotate = Duplication(haveRotate)
    console.log(haveRotate);
    return haveRotate
};

function Conversion(string){
    var bar = string.match(/\d+/);
    var num = Number(bar);
    return num;
};

function StringConversion(num){
    var string = num/1000;
    return string;
}

function DOM(domname){
    dom = $(`#${domname}`);
    return dom;
};

function eventFunction(i){
    var i = typeof i !== 'undefined' ?  i : 0;
    console.log("event");
    if (i == 0){
        MD = 0;
    }else{
        MD = MaxDuration(i);
    };
    if(defaultset.allevent == "click"){
        $(`#${defaultset.next}`).on('click', function() {
            Deal(i);
        });
        $(`#${defaultset.back}`).on('click', function() { 
            Back(i);
        });
        $(`#${defaultset.reset}`).on('click', function() {
            Reset(SP,haveRotate,fc);
        });
    }else{
        if (defaultset.allevent == "auto" || Frames[i].setting.event == "auto"){
            asyncFunction(i).then(function (value) {
                // 非同期処理成功
                console.log(value);    // => 'Async Hello world'
            }).catch(function (error) {
                // 非同期処理失敗。呼ばれない
                console.log(error);
            });      
        }else if(Frames[i].setting.event == "click"){  
            $(`#${defaultset.next}`).on('click', function() {
                Deal(i);
            });
            $(`#${defaultset.back}`).on('click', function() { 
                Back(i);
            });
            $(`#${defaultset.reset}`).on('click', function() {
                Reset(SP,haveRotate,fc);
            });
        };
    }
};

/*function Back(i){
    i = i - 2;
    for (let j in Frames[i]){
        //console.log(i);
        if (`${j}` != "setting"){
            if (Frames[i][j].position.x && Frames[i][j].position.y != null){
                var start = { x: DOM(j).css('left'), y: DOM(j).css('top') }; // 開始位置
                var end = Frames[i][j].position; // 終了位置
                var ctrl = Frames[i][j].control; // 制御点
                console.log(start);
                if (Frames[i][j].delay == null){
                    Animation(DOM(j),start,ctrl,end,Frames[i][j].duration);
                }else{
                    setTimeout(function(){
                        Animation(DOM(j),start,ctrl,end,Frames[i][j].duration);
                    },Frames[i][j].delay);
                };
            };
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
                    duration: Frames[i][j].fadein,           
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
                    duration: Frames[i][j].fadeout,           
                    count: 1,  
                    fill: "forwards"           
                })
            };
            if (Frame[i][j].rotate != null){
                DOM(j).keyframes({
                    '100%': {
                        rotateX: 180,
                        rotateY: 180, 
                        rotateZ: 180
                    }
                })
            };
        };
    };
    i = i + 1;    
    if (i >= Frames.length){
        console.log("end");
    }else{
        $(`#${defaultset.next}`).off("click");
        eventFunction(i);
    };
};*/

function Reset(SP,haveRotate,DupFade){
    console.log(haveRotate);
    for (k = 0; k < haveRotate.length; k++){
        console.log(k);
        now_idx =  DOM(haveRotate[k].domname).css("z-index");
        front_idx = Number(now_idx) + 1;
        back_idx = now_idx;
        DOM(haveRotate[k].domname).keyframes({
            translateX: DOM(haveRotate[k].domname).width,
            easing: 'ease',
            
        },{
            count: 1,
            duration: 100,
        });      
        DOM(haveRotate[k].front).keyframes({
        },{
            count: 1,
            duration: 100,
        }); 
        DOM(haveRotate[k].front).css({
            "z-index": "" + front_idx
        });      
        DOM(haveRotate[k].back).keyframes({
        },{
            count: 1,
            duration: 100,
        });
        DOM(haveRotate[k].back).css({
            "z-index": "" + back_idx
        });
    }
    
    for (n = 0; n < SP.length; n++){
        x = SP[n].x;
        y = SP[n].y;
        DOM(SP[n].domname).css({left: x, top: y});
        DOM(SP[n].domname).stop().animate({opacity: '1'}, 0);
        //console.log(DOM(SP[n].domname));
        $(`#${defaultset.reset}`).off("click");
    };
    for (m = 0; m < DupFade.length; m++){
        DOM(DupFade[m].domname).stop().animate({opacity: '0'}, 0);
    }
    $(`#${defaultset.next}`).off("click");
    eventFunction();
};

function asyncFunction(i) {
    // Promiseオブジェクトを返却する.処理成功時にはresolveが呼ばれる
    if (defaultset.allevent == "auto"){
        interval = defaultset.interval;
    }else{
        interval = Frames[i].setting.interval;
    }
    return new Promise(function (resolve) {
        setTimeout(function () {
            // 成功
            Deal(i);
            resolve('Async Hello world');
        }, interval);
    });
};

function Trajectory(t,x1,y1,x2,y2,x3,y3) {
    var tp = 1 - t,
        x = t*t*x3 + 2*t*tp*x2 + tp*tp*x1,
        y = t*t*y3 + 2*t*tp*y2 + tp*tp*y1;
    return [x,y];
};

function Animation(domname,start,ctrl,end,dur){
    $('<div>').css({ left: 0 }).animate({ left: 1 }, {
        duration: dur,
        step: function(current) {
            if (ctrl != null){
                var point = Trajectory(current, Conversion(start.x), Conversion(start.y), ctrl.x, ctrl.y, end.x, end.y);
            }else{
                ctrlX = (Conversion(start.x)+end.x)/2;
                ctrlY = (Conversion(start.y)+end.y)/2;
                var point = Trajectory(current, Conversion(start.x), Conversion(start.y), ctrlX, ctrlY, end.x, end.y);
            };
            domname.css({left: point[0], top: point[1]});
        }
    });
};

function asyncRotate(i,key) {
    // Promiseオブジェクトを返却する.処理成功時にはresolveが呼ばれる
    return new Promise(function (resolve) {
        now_idx =  DOM(key).css("z-index");
        front_idx = now_idx;
        back_idx = Number(now_idx) + 1;
        setTimeout(function () {
            // 成功
            DOM(key).keyframes({
                translateX: DOM(key).width,
                rotateY: 180,    
                easing: 'ease',
                
            },{
                count: 1,
                duration: 100,
            });    
            
            DOM(Frames[i][key].rotate.front).keyframes({
                rotateY: 180,
            },{
                count: 1,
                duration: 100,
            }); 
            DOM(Frames[i][key].rotate.front).css({
                "z-index": "" + front_idx
            });      
            DOM(Frames[i][key].rotate.back).keyframes({
                rotateY: 180,
            },{
                count: 1,
                duration: 100,
            });
            DOM(Frames[i][key].rotate.back).css({
                "z-index": "" + back_idx
            });
            resolve('Async Hello world');
        }, Frames[i][key].duration);
    });
};

function Deal(i){
    for (let key in Frames[i]){
        if (`${key}` != "setting"){
            DOM(key).css("transition", "");
            console.log(i,Frames[i][key]);
            if (Frames[i][key].position != null){
                var start = { x: DOM(key).css('left'), y: DOM(key).css('top') }; // 開始位置
                var end = Frames[i][key].position; // 終了位置
                var ctrl = Frames[i][key].control; // 制御点
                console.log(start,end);
                if (Frames[i][key].delay == null){
                    Animation(DOM(key),start,ctrl,end,Frames[i][key].duration);
                }else{
                    setTimeout(function(){
                        //console.log(i);
                        Animation(DOM(key),start,ctrl,end,Frames[i-1][key].duration);
                    },Frames[i][key].delay);
                };
            };
            if (Frames[i][key].fadein != null){
                //DOM(j).append(Frames[i][j].content);
                DOM(key).stop().animate({opacity: '1'}, Frames[i][key].fadein);
            }else if (Frames[i][key].fadeout != null){
                DOM(key).stop().animate({opacity: '0'}, Frames[i][key].fadeout);
            };
            if (Frames[i][key].rotate != null){
                console.log(Frames[i][key].duration);
                //dur = StringConversion(Frames[i][j].duration);
                //console.log(dur);
                asyncRotate(i,key).then(function (value) {
                    // 非同期処理成功
                    console.log(value);    // => 'Async Hello world'
                }).catch(function (error) {
                    // 非同期処理失敗。呼ばれない
                    console.log(error);
                });         
            };
            if (Frames[i][key].fillcolor != null){
                DOM(key).keyframes({
                    background: Frames[i][key].fillcolor
                },{
                    count: 1,
                    fill: "forwards",
                    duration: Frames[i][key].duration
                });
            };
            /*if (Frames[i][key].bordercolor != null){
                console.log(Frames[i][key].bordercolor)
                DOM(key).keyframes({
                    "border-top-color": Frames[i][key].bordercolor,
                    "border-left-color": Frames[i][key].bordercolor,
                    "border-bottom-color": Frames[i][key].bordercolor,
                    "border-right-color": Frames[i][key].bordercolor
                },{
                    count: 1,
                    fill: "forwards",
                    duration: Frames[i][key].duration
                });
            };*/
        };
    };
    i = i + 1;    
    console.log(i);
    if (i >= Frames.length){
        console.log("end");
    }else{
        $(`#${defaultset.next}`).off("click");
        MD = MaxDuration(i);
        asyncNext(i,MD).then(function (value) {
            // 非同期処理成功
            console.log(value);    // => 'Async Hello world'
        }).catch(function (error) {
            // 非同期処理失敗。呼ばれない
            console.log(error);
        }); 
    };
};

function MaxDuration(i){
    var maxduration = 0;
    k = i - 1;
    //console.log(Frames[k]);
    for (let j in Frames[k]){
        if (Frames[k][j].duration != null){
            console.log(Frames[k][j].duration);
            if (maxduration < Frames[k][j].duration){
                maxduration = Frames[k][j].duration;
            };
        };
    };
    //console.log(maxduration);
    return maxduration
};

function asyncNext(i,MD){
    return new Promise(function (resolve) {
        setTimeout(function () {
            // 成功
            eventFunction(i);
            resolve('Async Hello world');
        }, MD);
    });
};

