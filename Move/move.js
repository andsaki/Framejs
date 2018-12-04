var A = [];
var B = [];
var moverect = $("#moverect");
$('#inSVG').click(function(e){
    var x = e.clientX;
    var y = e.clientY;
    A.push(x);
    A.push(y);
    console.log(A);
    
    $('#inSVG').click(function(e){
        var a = e.clientX;
        var b = e.clientY;
        B.push(a);
        B.push(b);
        console.log(B);
        moverect.css({"transform": "translate(" + x + "px," + y + "px"});
        console.log(x);
        console.log(y);
        $("#button").click(function(e){
            var px = a - x;
            var py = b - y;
            console.log(px);
            console.log(py);
            moverect.css({"transition-duration": "1s"});
            moverect.css({"transform": "translate(" + a + "px," + b + "px"});
        });
    });
});
