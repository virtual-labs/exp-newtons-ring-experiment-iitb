let all_canvas = `
<canvas width="500" height="500" id="mycanvas1">

</canvas>

<canvas style="position: absolute; left: 0;" width="500" height="500" id="mycanvas2">

</canvas>

<canvas style="position: absolute; left: 0;" width="500" height="500" id="mycanvas3">

</canvas>
`;
let my_canvas1;
let my_canvas2;
let my_canvas3;
let my_context1;
let my_context2;
let my_context3;
function activity2_new() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.addtoleftpannel(all_canvas);
    setTimeout(draw_al_canvas, 500);
}
function draw_al_canvas() {
    my_canvas1 = document.getElementById('mycanvas1');
    my_canvas2 = document.getElementById('mycanvas2');
    my_canvas3 = document.getElementById('mycanvas3');
    my_context1 = my_canvas1.getContext('2d');
    my_context2 = my_canvas2.getContext('2d');
    my_context3 = my_canvas3.getContext('2d');
    my_context1.beginPath();
    my_context1.moveTo(1, 1);
    my_context1.lineTo(200, 200);
    my_context1.stroke();
}
activity2_new();
//# sourceMappingURL=activity2_new.js.map