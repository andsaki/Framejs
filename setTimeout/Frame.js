function Frame(Frames){
    var Frames;
    SP = StartPosition();
    //console.log(SP);
    eventFunction();
};

function StartPosition(){
    var SP = [];
    for(var i = 0; i < Frames.length;i++){
        for (let j in Frames[i]){
            SP.push({
                domname : j,
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

function Conversion(string){
    var bar = string.match(/\d+/);
    var num = Number(bar);
    return num;
};

function DOM(domname){
    dom = $(`#${domname}`);
    return dom;
};

function eventFunction(i){
    var i = typeof i !== 'undefined' ?  i : 0;
    console.log("event")
    /*if (i == 0){
        StartPosition = [];
        for (let j in Frames[i]){
            StartPosition.push({
                x: DOM(j).css('left'), 
                y: DOM(j).css('top')
            });
            console.log(StartPosition);
        };
        console.log("start");
    };*/
    if (Frames[i].setting.event == "auto"){
        asyncFunction(i).then(function (value) {
            // 非同期処理成功
            console.log(value);    // => 'Async Hello world'
        }).catch(function (error) {
            // 非同期処理失敗。呼ばれない
            console.log(error);
        });      
    }else if(Frames[i].setting.event == "click"){  
        //console.log(Frames[i]);
        $(`#${defaultset.next}`).on('click', function() {
            Deal(i);
        });
        $(`#${defaultset.back}`).on('click', function() { 
            Back(i);
        });
        $(`#${defaultset.reset}`).on('click', function() {
            Reset(i,SP);
        });
    };
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

function Reset(i,SP){
    //console.log(SP);
    for (n = 0; n < SP.length; n++){
        x = SP[n].x;
        y = SP[n].y;
        DOM(SP[n].domname).css({left: x, top: y});
        DOM(SP[n].domname).keyframes({
            '100%': {
                opacity: 1
            }
        })
        //console.log(DOM(SP[n].domname));
        $(`#${defaultset.reset}`).off("click");
    };
    $(`#${defaultset.next}`).off("click");
    eventFunction();
};

function asyncFunction(i) {
    // Promiseオブジェクトを返却する.処理成功時にはresolveが呼ばれる
    return new Promise(function (resolve) {
        setTimeout(function () {
            // 成功
            Deal(i);
            resolve('Async Hello world');
        }, 1000);
    });
};

function getPointQB(t,x1,y1,x2,y2,x3,y3) {
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
                var point = getPointQB(current, Conversion(start.x), Conversion(start.y), ctrl.x, ctrl.y, end.x, end.y);
            }else{
                ctrlX = (Conversion(start.x)+end.x)/2;
                ctrlY = (Conversion(start.y)+end.y)/2;
                var point = getPointQB(current, Conversion(start.x), Conversion(start.y), ctrlX, ctrlY, end.x, end.y);
            };
            domname.css({left: point[0], top: point[1]});
        }
    });
};

function Deal(i){
    for (let j in Frames[i]){
        if (`${j}` != "setting"){
            console.log(i,Frames[i][j]);
            if (Frames[i][j].position.x && Frames[i][j].position.y != null){
                var start = { x: DOM(j).css('left'), y: DOM(j).css('top') }; // 開始位置
                var end = Frames[i][j].position; // 終了位置
                var ctrl = Frames[i][j].control; // 制御点
                console.log(start,end);
                if (Frames[i][j].delay == null){
                    Animation(DOM(j),start,ctrl,end,Frames[i][j].duration);
                }else{
                    setTimeout(function(){
                        //console.log(i);
                        Animation(DOM(j),start,ctrl,end,Frames[i-1][j].duration);
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
            /*if (Frame[i][j].rotate != null){
                DOM(j).keyframes({
                    '100%': {
                        rotateX: 180,
                        rotateY: 180, 
                        rotateZ: 180
                    }
                })
            };*/
        };
    };
    i = i + 1;    
    if (i >= Frames.length){
        console.log("end");
    }else{
        $(`#${defaultset.next}`).off("click");
        eventFunction(i);
    };
};

