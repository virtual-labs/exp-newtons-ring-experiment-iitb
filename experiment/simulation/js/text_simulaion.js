let n_ring;
function activity2() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    let d = [];
    for (let i = 0; i < data.length; i++) {
        d[i] = data[i][1];
    }
    load_buttons();
    pp.addcanvas('sim');
    canvas = pp.canvas;
    context = canvas.getContext('2d');
    scene = new Scene();
    n_ring = new Chemistry.Newtons_Rings(5, d, 'violet', canvas);
    let bench_img = new Chemistry.Custome_image(bench, new Chemistry.Point(600, 600), 300, 200, canvas);
    let holder_img = new Chemistry.Custome_image(holder, new Chemistry.Point(600, 600), 200, 300, canvas);
    let lens_img = new Chemistry.Custome_image(lens, new Chemistry.Point(600, 600), 300, 200, canvas);
    scene.add(bench_img);
    scene.add(holder_img);
    scene.add(lens_img);
    scene.add(n_ring);
    window.onload = a2_windowresize;
    window.onresize = a2_windowresize;
    a2_windowresize();
    let left_btn = document.getElementById('a2-btn-right');
    console.log(left_btn);
    left_btn.addEventListener("click", move_right);
}
function load_buttons() {
    let a2_btns = `
    <div style='position: absolute; left: 10px; top: 25px;'>
    <button >left</button>
    <button >fine left</button>
    <button id='a2-btn-right'>right</button>
    <button>fine right</button>
    <button >up</button>
    <button >down</button>
    <button >re center</button>
    </div>
    `;
    pp.addtoleftpannel(a2_btns);
}
function move_right() {
    n_ring.shift_right();
    console.log('button clicked');
    scene.draw();
}
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //canvas mapping
    a2_canvas_mapping();
    //draw scene
    scene.draw();
    //  for(let j = 0; j<a1_index.length; j++) {
    //      a1_labels[a1_index[j]].draw();
    //  }
}
function a2_canvas_size() {
    canvas.width = window.innerWidth * 0.91;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
    //    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    //    document.getElementById('leftpannel').style.margin = '0';
}
function a2_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
activity2();
//# sourceMappingURL=text_simulaion.js.map