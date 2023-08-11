let n_rings;
let msr = 0;
let table;
let num_of_readings = 0;
let msr_show;
let vsr_show;
let new_row = true;
let tab;
let bt_to_activity4 = `<button id="panel1_btn" class="btn btn-primary" onclick="move_to_act4();" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
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
    <p style='margin: 0;'>Main Scale Reading</p>
    <div><input  style='width: 15vw; height: 3vw; font-size: 1.5vw;' id='msr-inp' class='form-control' disabled value='00' /><div>
    <p style='margin: 0;'>Vernier Scale Reading</p>
    <div><input style='width: 15vw; height: 3vw; font-size: 1.5vw;' id='vsr-inp' class='form-control' disabled value='00' /><div>
    <div><button onclick='add_readings();' class='btn btn-success' style='width: 100%; margin: 2px; font-size: 1vw;'>Add Reading</button></div>
    <div><button onclick='delete_readings();' class='btn btn-danger' style='width: 100%; margin: 2px; font-size: 1vw;'>Delete Reading</button></div>

    </div>
`;
let my_canvas1;
let my_canvas2;
let my_canvas3;
let my_context1;
let my_context2;
let my_context3;
let scene1;
function activity2() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.addoffcanvas(4);
    pp.showtitle(`<p id="exp-title" style='width: 25vw;'>Note Readings in table</span><p>`, 3);
    pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(0.5vw + 12px);">
    <p>Use the arrow shown on the simulator to zoom in, zoom out, left and right</p>
    <p>Use double arrow to do fine adjustments</p>
    <p>To take reading a certain point click "add readings" button to add directly to the table</p>
    <p> total reading = <span style='font-size: 1.4vw;'>$$\\frac{(msr_{left} - msr_{right})+((vsr_{left} - vsr_{right})*0.02)}{10} $$</span></p>
     </div>`, 3);
    pp.showtitle(`Observation Table`, 4);
    // load reading talble in right panel
    load_reading_table();
    show_side_panel();
    pp.addtoleftpannel(all_btns);
    pp.addtoleftpannel(readings);
    pp.addtoleftpannel(all_canvas);
    msr_show = document.getElementById('msr-inp');
    msr_show.value = '00';
    vsr_show = document.getElementById('vsr-inp');
    vsr_show.value = '00';
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
    MathJax.typeset();
    a2_windowresize();
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
    document.getElementById('leftpannel').style.height = (my_canvas3.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
    my_canvas2.width = window.innerWidth * 0.375;
    my_canvas2.height = window.innerWidth * 0.375;
    console.log(my_canvas2.width, my_canvas2.height);
    my_canvas2.style.borderRadius = '50%';
    my_canvas1.width = window.innerWidth * 0.91;
    my_canvas1.height = my_canvas1.width * 1080.0 / 1920 * 0.85;
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
    scene1.add(holder_img);
    scene1.add(lens_img);
    scene1.add(bench_img);
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
    n_rings = new Chemistry.Newtons_Rings(5, d, selected_ring_color, new Chemistry.Point(my_canvas2.width / (2 * lscale) + 5, my_canvas2.height / (2 * lscale)), my_canvas2);
    let mscope_img = new Chemistry.Custome_image(mscope, new Chemistry.Point(my_canvas2.width / (2 * lscale), my_canvas2.height / (2 * lscale)), 860, 860, my_canvas2);
    let x_line = new Chemistry.Line(100, my_canvas2.height / (2 * lscale), 700, my_canvas2.height / (2 * lscale), my_canvas2);
    let y_line = new Chemistry.Line(my_canvas2.width / (2 * lscale) + 5, 100, my_canvas2.width / (2 * lscale) + 5, 700, my_canvas2);
    scene1.add(n_rings);
    scene1.add(mscope_img);
    scene1.add(x_line);
    scene1.add(y_line);
}
function move_right() {
    n_rings.shift_left();
    scene1.draw();
    show_main_scale_reading();
}
function move_left() {
    n_rings.shift_right();
    scene1.draw();
    show_main_scale_reading();
}
function move_fine_right() {
    n_rings.shift_fine_left();
    scene1.draw();
    show_main_scale_reading();
}
function move_fine_left() {
    n_rings.shift_fine_right();
    scene1.draw();
    show_main_scale_reading();
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
function show_main_scale_reading() {
    msr = n_rings.stpt.x / (n_rings.multiplier / 2);
    msr = msr / 2;
    let msr_val = Math.floor(parseFloat((msr / 2).toFixed(3)) / (0.05));
    let vsr_val = Math.floor((parseFloat((msr / 2).toFixed(3)) - msr_val * 0.05) * 1000);
    msr_show.value = msr_val.toString();
    vsr_show.value = vsr_val.toString();
}
function load_reading_table() {
    let extra_gear_icon = document.getElementsByClassName('offcanvasbtn')[1];
    extra_gear_icon.innerHTML = '<i class="bi bi-table"></i>';
    extra_gear_icon.style.top = 'calc(5vw + 20px)';
    let heading = ['nth Ring', 'Left MSR', 'left VSR', 'right MSR', 'right VSR', 'total reading'];
    let rows = user_readings;
    tab = new Table(heading, rows);
    table = tab.template;
    pp.addtorightpannel(table, 4);
    tab.draw();
}
function add_readings() {
    if (num_of_readings <= 7) {
        let r1 = msr_show.value;
        let r2 = vsr_show.value;
        if (new_row) {
            user_readings[num_of_readings][1] = r1;
            user_readings[num_of_readings][2] = r2;
            user_readings[num_of_readings][5] = ' ';
            new_row = false;
            tab.draw();
            show_table_panel();
            return;
        }
        else if (!new_row) {
            user_readings[num_of_readings][3] = r1;
            user_readings[num_of_readings][4] = r2;
            user_readings[num_of_readings][5] =
                (((parseInt(user_readings[num_of_readings][1]) - parseInt(user_readings[num_of_readings][3]))
                    + (parseInt(user_readings[num_of_readings][2]) - parseInt(user_readings[num_of_readings][4])) * 0.02) / 10).toFixed(4);
            ;
            new_row = true;
            num_of_readings++;
            tab.draw();
            show_table_panel();
        }
    }
    else {
        alert("You have entered maximum values, now you can move to calculations");
    }
    if (num_of_readings == 8) {
        pp.addtorightpannel(bt_to_activity4, 3);
        show_side_panel();
    }
}
function delete_readings() {
    if (num_of_readings >= 0) {
        if (new_row && num_of_readings == 0) {
            user_readings[num_of_readings][1] = '';
            user_readings[num_of_readings][2] = '';
            tab.draw();
            show_table_panel();
            return;
        }
        else if (new_row && num_of_readings > 0) {
            num_of_readings--;
            new_row = false;
            user_readings[num_of_readings][3] = '';
            user_readings[num_of_readings][4] = '';
            user_readings[num_of_readings][5] = ' ';
            tab.draw();
            show_table_panel();
            return;
        }
        else if (!new_row && num_of_readings == 0) {
            user_readings[num_of_readings][3] = '';
            user_readings[num_of_readings][4] = '';
            user_readings[num_of_readings][5] = ' ';
            new_row = false;
            tab.draw();
            show_table_panel();
            return;
        }
        else if (!new_row && num_of_readings > 0) {
            user_readings[num_of_readings][1] = '';
            user_readings[num_of_readings][2] = '';
            new_row = true;
            tab.draw();
            show_table_panel();
            return;
        }
    }
    else {
        alert("No input values");
    }
}
function show_table_panel() {
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight4"));
    bsOffcanvas.show();
}
function show_side_panel() {
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
}
function move_to_act4() {
    user_data = data;
    for (let i = 0; i < 7; i++) {
        user_data[i][1] = parseFloat(user_readings[i][5]);
        user_data[i][3] = parseInt(user_readings[i][1]) - parseInt(user_readings[i][3]);
        user_data[i][4] = parseInt(user_readings[i][2]) - parseInt(user_readings[i][4]);
    }
    activity4();
}
function fill_test_val() {
    for (let i = 0; i < 8; i++) {
        user_readings[i][1] = '00';
        user_readings[i][2] = '00';
        user_readings[i][3] = '00';
        user_readings[i][4] = '00';
        user_readings[i][5] = '00';
    }
    // num_of_readings = 8;
    // add_readings(); 
    for (let i = 0; i < 8; i++) {
        user_data[i] = [];
        user_data[i][0] = auto_fill_data[i][0];
        user_data[i][1] = auto_fill_data[i][1];
        user_data[i][2] = auto_fill_data[i][2];
        user_data[i][3] = auto_fill_data[i][3];
        user_data[i][4] = auto_fill_data[i][4];
        user_data[i][5] = auto_fill_data[i][5];
        user_data[i][6] = auto_fill_data[i][6];
        user_data[i][7] = auto_fill_data[i][7];
        user_data[i][8] = auto_fill_data[i][8];
        user_data[i][9] = auto_fill_data[i][9];
    }
    activity4();
}
//# sourceMappingURL=activity2.js.map