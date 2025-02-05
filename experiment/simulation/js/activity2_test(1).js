let n_rings;
let all_canvas = `
<canvas style="position: absolute; left: 0; top: 0;"  width="500" height="500" id="mycanvas1">

</canvas>

<canvas style="position: absolute; left:3.5vw; top: 2.7vw;" width="500" height="500" id="mycanvas2">

</canvas>

<canvas style="position: absolute; left: 0;" width="500" height="500" id="mycanvas3">

</canvas>
`;
let all_btns = `
<div style='position: absolute; z-index: 5; width: 20vw; height: 20vw;'>
    <button id='a2-btn-left' ><i class="bi bi-skip-backward"></i></button>
    <button id='a2-btn-fine-left'><i class="bi bi-skip-start"></i></button>
    <button id='a2-btn-right'><i class="bi bi-skip-forward"></i></button>
    <button id='a2-btn-fine-right' ><i class="bi bi-skip-end"></i></button>
    <button id='a2-btn-up' style='transform: rotate(90deg);'><i class="bi bi-skip-backward"></i></button>
    <button id='a2-btn-fine-up' style='transform: rotate(90deg);' ><i class="bi bi-skip-start"></i></button>
    <button id='a2-btn-down'  style='transform: rotate(270deg);' ><i class="bi bi-skip-backward"></i></button> 
    <button id='a2-btn-fine-down' style='transform: rotate(270deg);'  ><i class="bi bi-skip-start"></i></button>
    <button id='re-center' ><i class="bi bi-arrows-move"></i></button>
</div>
`;
let readings = `
    <div id='act2-readings'>
    <p>Main Scale Reading</p>
    <div><input style='width: 15vw; height: 3vw; font-size: 1.5vw;' id='msr-inp' class='form-control' disabled value='000000' /><div>
    <p>Vernier Scale Reading</p>
    <div><input style='width: 15vw; height: 3vw; font-size: 1.5vw;' id='vsr-inp' class='form-control' disabled value='000000' /><div>

    </div>
`;
let my_canvas1;
let my_canvas2;
let my_canvas3;
let my_context1;
let my_context2;
let my_context3;
let scene1;
function activity2_new() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.addtoleftpannel(all_btns);
    pp.addtoleftpannel(readings);
    pp.addtoleftpannel(all_canvas);
    my_canvas1 = document.getElementById('mycanvas1');
    my_canvas2 = document.getElementById('mycanvas2');
    my_canvas3 = document.getElementById('mycanvas3');
    my_context1 = my_canvas1.getContext('2d');
    my_context2 = my_canvas2.getContext('2d');
    my_context3 = my_canvas3.getContext('2d');
    scene1 = new Scene_Canvas(my_canvas1);
    scene1.addcanvas(my_canvas2);
    scene1.addcanvas(my_canvas3);
    window.onload = a2_windowresize;
    window.onresize = a2_windowresize;
    setTimeout(draw_all_canvas, 500);
}
function draw_all_canvas() {
    load_canvas3_images();
    load_canvas2_images();
    load_canvas1_images();
    let right_btn = document.getElementById('a2-btn-right');
    let left_btn = document.getElementById('a2-btn-left');
    let fine_left_btn = document.getElementById('a2-btn-fine-left');
    let fine_right_btn = document.getElementById('a2-btn-fine-right');
    let up_btn = document.getElementById('a2-btn-up');
    let fine_up_btn = document.getElementById('a2-btn-fine-up');
    let down_btn = document.getElementById('a2-btn-down');
    let fine_down_btn = document.getElementById('a2-btn-fine-down');
    let reset = document.getElementById('re-center');
    right_btn.addEventListener("click", move_right);
    left_btn.addEventListener('click', move_left);
    fine_right_btn.addEventListener('click', move_fine_right);
    fine_left_btn.addEventListener('click', move_fine_left);
    up_btn.addEventListener('click', move_up);
    fine_up_btn.addEventListener('click', move_fine_up);
    down_btn.addEventListener('click', move_down);
    fine_down_btn.addEventListener('click', move_fine_down);
    reset.addEventListener('click', re_center);
}
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //canvas mapping
    a2_canvas_mapping();
    //draw scene
    scene1.draw();
    console.log('done');
    // setTimeout(draw_img1_delay, 500);
    // setTimeout(draw_img2_delay, 500);
}
function a2_canvas_size() {
    my_canvas3.width = window.innerWidth * 0.91;
    my_canvas3.height = my_canvas3.width * 1080.0 / 1920 * 0.85;
    lscale = my_canvas3.width / 1920.0;
    my_canvas2.width = window.innerWidth * 0.375;
    my_canvas2.height = window.innerWidth * 0.375;
    console.log(my_canvas2.width, my_canvas2.height);
    my_canvas2.style.borderRadius = '50%';
    my_canvas1.width = window.innerWidth * 0.91;
    my_canvas1.height = my_canvas1.width * 1080.0 / 1920 * 0.85;
    document.getElementById('leftpannel').style.height = (my_canvas3.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
}
function a2_canvas_mapping() {
    my_context1.translate(0, my_canvas1.height);
    my_context1.scale(1, -1);
    my_context2.translate(0, my_canvas2.height);
    my_context2.scale(1, -1);
    my_context3.translate(0, my_canvas3.height);
    my_context3.scale(1, -1);
}
function load_canvas3_images() {
    let bench_img = new Chemistry.Custome_image(bench, new Chemistry.Point(1400, 750), 600 * 1.5, 300 * 1.5, my_canvas3);
    let holder_img = new Chemistry.Custome_image(holder, new Chemistry.Point(1400, 770), 500, 250, my_canvas3);
    let lens_img = new Chemistry.Custome_image(lens, new Chemistry.Point(1400, 770), 500, 250, my_canvas3);
    scene1.add(bench_img);
    scene1.add(holder_img);
    scene1.add(lens_img);
    // my_context1.beginPath();
    // my_context1.moveTo(1, 1);
    // my_context1.lineTo(200, 200);
    // my_context1.stroke();
}
function load_canvas1_images() {
    let dark_background = new Chemistry.Custome_image(dark, new Chemistry.Point(470, 460), 860, 860, my_canvas1);
    scene1.add(dark_background);
}
function load_canvas2_images() {
    let d = [];
    for (let i = 0; i < data.length; i++) {
        d[i] = data[i][1];
    }
    console.log(my_canvas2.width, my_canvas2.height);
    n_rings = new Chemistry.Newtons_Rings(5, d, 'violet', new Chemistry.Point(my_canvas2.width / (2 * lscale) + 5, my_canvas2.height / (2 * lscale)), my_canvas2);
    let mscope_img = new Chemistry.Custome_image(mscope, new Chemistry.Point(my_canvas2.width / (2 * lscale), my_canvas2.height / (2 * lscale)), 860, 860, my_canvas2);
    let x_line = new Chemistry.Line(100, my_canvas2.height / (2 * lscale), 700, my_canvas2.height / (2 * lscale), my_canvas2);
    let y_line = new Chemistry.Line(my_canvas2.width / (2 * lscale) + 5, 100, my_canvas2.width / (2 * lscale) + 5, 700, my_canvas2);
    scene1.add(n_rings);
    scene1.add(mscope_img);
    scene1.add(x_line);
    scene1.add(y_line);
}
function move_right() {
    n_rings.shift_right();
    scene1.draw();
}
function move_left() {
    n_rings.shift_left();
    scene1.draw();
}
function move_fine_right() {
    n_rings.shift_fine_right();
    scene1.draw();
}
function move_fine_left() {
    n_rings.shift_fine_left();
    scene1.draw();
}
function move_up() {
    n_rings.shift_up();
    scene1.draw();
}
function move_fine_up() {
    n_rings.shift_fine_up();
    scene1.draw();
}
function move_down() {
    n_rings.shift_down();
    scene1.draw();
}
function move_fine_down() {
    n_rings.shift_fine_down();
    scene1.draw();
}
function re_center() {
    n_rings.re_center();
    scene1.draw();
}
function add_readings_text() {
}
activity2_new();
//# sourceMappingURL=activity2_test.js.map