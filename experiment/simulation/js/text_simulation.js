let n_ring;
let x_line;
let y_line;
let canvas1;
let canvas2;
// now we have canvas1, canvas2, canvas
let context1;
let context2;
// now we have context1, context2, context
let dark_bg;
function activity2() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    load_buttons();
    // adding main canvas
    pp.addcanvas('mycanvas');
    canvas = pp.canvas;
    context = canvas.getContext('2d');
    scene = new Scene();
    let bench_img = new Chemistry.Custome_image(bench, new Chemistry.Point(1400, 600), 600, 300, canvas);
    let holder_img = new Chemistry.Custome_image(holder, new Chemistry.Point(1400, 600), 300, 600, canvas);
    let lens_img = new Chemistry.Custome_image(lens, new Chemistry.Point(1400, 600), 600, 300, canvas);
    let mscope_img = new Chemistry.Custome_image(mscope, new Chemistry.Point(400, 380), 750, 750, canvas);
    // x_line = new Chemistry.Line(200, 380, 600, 380, canvas);
    // y_line = new Chemistry.Line(400, 180, 400, 580, canvas);
    scene.add(bench_img);
    scene.add(holder_img);
    scene.add(lens_img);
    // scene.add(mscope_img);
    // scene.add(x_line);
    // scene.add(y_line);
    // adding two canvas 
    // setTimeout(draw_img1_delay,1000);
    // setTimeout(draw_img2_delay, 1000);
    // let dark_bg = new Chemistry.Custome_image(dark, new Chemistry.Point(50, 50), 1000, 1000, canvas1);
    // dark_bg.draw();
    // let right_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a2-btn-right');
    // let left_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a2-btn-left');
    // let fine_left_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a2-btn-fine-left');
    // let fine_right_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a2-btn-fine-right');
    // let up_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a2-btn-up');
    // let fine_up_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a2-btn-fine-up');
    // let down_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a2-btn-down');
    // let fine_down_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a2-btn-fine-down');
    // let reset: HTMLButtonElement = <HTMLButtonElement> document.getElementById('re-center');
    // right_btn.addEventListener("click", move_right);
    // left_btn.addEventListener('click', move_left);
    // fine_right_btn.addEventListener('click', move_fine_right);
    // fine_left_btn.addEventListener('click', move_fine_left);
    // up_btn.addEventListener('click', move_up);
    // fine_up_btn.addEventListener('click', move_fine_up);
    // down_btn.addEventListener('click', move_down);
    // fine_down_btn.addEventListener('click', move_fine_down);
    // reset.addEventListener('click', re_center);
    // window.onload = a2_windowresize;
    // window.onresize = a2_windowresize;
    // a2_windowresize();
}
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //canvas mapping
    a2_canvas_mapping();
    //draw scene
    scene.draw();
    setTimeout(() => {
        context1.beginPath();
        context1.moveTo(1, 1);
        context1.lineTo(300, 300);
        context1.lineWidth = 2;
        context1.strokeStyle = 'black';
        context1.stroke();
    }, 500);
    console.log('done');
    // setTimeout(draw_img1_delay, 500);
    // setTimeout(draw_img2_delay, 500);
}
function a2_canvas_size() {
    canvas.width = window.innerWidth * 0.91;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
    //    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    //    document.getElementById('leftpannel').style.margin = '0';
    //    canvas1.width=window.innerWidth*0.45;
    //    canvas1.height=canvas.width*1080.0/1920;
    //    canvas2.width=window.innerWidth*0.45;
    //    canvas2.height=canvas.width*1080.0/1920;
}
function a2_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
    //    context1.translate(0,canvas1.height);
    //    context1.scale(1,-1);
    //    context2.translate(0,canvas2.height);
    //    context2.scale(1,-1);
}
function load_buttons() {
    let d = [];
    for (let i = 0; i < data.length; i++) {
        d[i] = data[i][1];
    }
    let a2_btns = `


    
   

    <canvas style='position: absolute; left: 0; top: 0; border: 2px solid black;' width='600' height='600' id='canvas-dark-bg'></canvas>

    <canvas style='position: absolute; left: 0; top: 0;' width='600' height='600' id='canvas-n-rings'></canvas>
    </div>
    `;
    pp.addtoleftpannel(a2_btns);
    // pp.addtoleftpannel(`<canvas style='position: absolute;' width='500' height='500' id='canvas-dark-bg'></canvas>`);
    // pp.addtoleftpannel(`<canvas style='position: absolute;'  width='500' height='500' id='canvas-n-rings'></canvas>`);
    canvas1 = document.getElementById('canvas-dark-bg');
    canvas2 = document.getElementById('canvas-n-rings');
    context2 = canvas2.getContext('2d');
    n_ring = new Chemistry.Newtons_Rings(5, d, 'violet', canvas2);
    // context2 = n_ring.context;
    dark_bg = new Chemistry.Custome_image(dark, new Chemistry.Point(100, 100), 100, 100, canvas1);
    context1 = dark_bg.context;
}
function move_right() {
    n_ring.shift_right();
    scene.draw();
}
function move_left() {
    n_ring.shift_left();
    scene.draw();
}
function move_fine_right() {
    n_ring.shift_fine_right();
    scene.draw();
}
function move_fine_left() {
    n_ring.shift_fine_left();
    scene.draw();
}
function move_up() {
    n_ring.shift_up();
    scene.draw();
}
function move_fine_up() {
    n_ring.shift_fine_up();
    scene.draw();
}
function move_down() {
    n_ring.shift_down();
    scene.draw();
}
function move_fine_down() {
    n_ring.shift_fine_down();
    scene.draw();
}
function re_center() {
    n_ring.re_center();
    scene.draw();
}
function draw_img1_delay() {
    dark_bg.draw();
}
function draw_img2_delay() {
    n_ring.draw();
}
activity2();
// <div style='position: absolute; left: 10px; top: 25px;'>
// <button id='a2-btn-left' >left</button>
// <button id='a2-btn-fine-left' >fine left</button>
// <button id='a2-btn-right'>right</button>
// <button id='a2-btn-fine-right' >fine right</button>
// <button id='a2-btn-up' >up</button>
// <button id='a2-btn-fine-up' >fine up</button>
// <button id='a2-btn-down' >down</button>
// <button id='a2-btn-fine-down' >fine down</button>
// <button id='re-center' >re center</button>
//# sourceMappingURL=text_simulation.js.map