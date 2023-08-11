let show_opp = false;
function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('Newtons ring experiment to determine the wavelength of light', 3);
    let left_panel_text = `
    <div id="act3-left-content">

    <div>
        <label for="">Choose the Color of Light</label>
        <Select onchange='set_color();' id='color-dd' class="form-select">
            
        </Select>
    </div>

    <div>
        <label for="">Select R (cm) value</label>
        <Select onchange='set_radius();' disabled id='r-dd' class="form-select">
        </Select>
    </div>


    <div>
        <label for="">Set n value</label>
        <input disabled type="range" min='1' max='50' step='1' value="1" id='n-inp' onchange="set_n()" oninput="set_n();">
        <input class='from-control' id='show-order' value='0' disabled />
        <br>

        <label for="">Bright Ring Diameter (cm)</label>
        <input disabled type='text' class='form-control' style="display: inline !important; width: 30%; margin-left: 5%;"  id='brd'>

        <br> <br>

        <label for="">Dark Ring Diameter (cm)</label>
        <input disabled type='text' class='form-control' style="display: inline !important; width: 30%; margin-left: 5%;"  id='drd'>

        


        </div>

        <div>
            <div>
                <label for="">Bright Ring Main Scale Count (0.05)</label>
                <input disabled type="text" id="bright-ms">
            </div>
            <div>
                <label for="">Bright Ring Vernier Scale Count (0.001)</label>
                <input disabled type="text" id="bright-vs">
            </div>
        </div>

        <div>
            <div>
                <label for="">Dark Ring Main Scale Count (0.05)</label>
                <input disabled type="text" id="dark-ms">
            </div>
            <div>
                <label for="">Dark Ring Vernier Scale Count (0.001)</label>
                <input disabled type="text" id="dark-vs">
            </div>
        </div>




        <input disabled type='button' class='btn btn-primary' value="Next" style="margin-left: 3%; width: 20%;" id='act3_button' onclick='go_to_act2();'>

    `;
    pp.addtoleftpannel(left_panel_text);
    load_colors();
    document.getElementById('leftpannel').style.height = (window.innerWidth * 0.91 * 1080.0 / 1920 * 0.85 + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
    document.getElementById('leftpannel').style.overflow = 'auto';
}
function load_colors() {
    let color_options = document.getElementById('color-dd');
    color_options.innerHTML = `<option value=''>--Select--</option>`;
    for (let i = 0; i < colors.length; i++) {
        color_options.innerHTML += `<option value='${colors[i][1]}'>${colors[i][0]}</option>`;
    }
}
function set_color() {
    let color = document.getElementById('color-dd');
    let r = document.getElementById('r-dd');
    if (color.value) {
        selected_color_lambda = parseFloat(color.value);
        if (colors[0][1] == parseFloat(color.value)) {
            selected_ring_color = 'violet';
        }
        else if (colors[1][1] == parseFloat(color.value)) {
            selected_ring_color = 'indigo';
        }
        else if (colors[2][1] == parseFloat(color.value)) {
            selected_ring_color = 'blue';
        }
        else if (colors[3][1] == parseFloat(color.value)) {
            selected_ring_color = 'green';
        }
        else if (colors[4][1] == parseFloat(color.value)) {
            selected_ring_color = 'yellow';
        }
        else if (colors[5][1] == parseFloat(color.value)) {
            selected_ring_color = 'orange';
        }
        else if (colors[6][1] == parseFloat(color.value)) {
            selected_ring_color = 'red';
        }
        console.log(selected_ring_color);
        r.disabled = false;
        r.innerHTML = `<option value=''>--Select--</option>`;
        for (let i = 0; i < radius.length; i++) {
            r.innerHTML += `<option value='${radius[i]}'>${radius[i]}</option>`;
        }
    }
    else {
        r.disabled = true;
    }
}
function set_radius() {
    let r = document.getElementById('r-dd');
    let slider_ele = document.getElementById('n-inp');
    if (r.value) {
        selected_r = parseInt(r.value);
        slider_ele.disabled = false;
    }
    else {
        slider_ele.disabled = true;
    }
    calculate_data();
}
function set_n() {
    let n = document.getElementById('n-inp');
    let bright = document.getElementById('brd');
    let dark = document.getElementById('drd');
    let bms = document.getElementById('bright-ms');
    let bvs = document.getElementById('bright-vs');
    let dms = document.getElementById('dark-ms');
    let dvs = document.getElementById('dark-vs');
    let show_n = document.getElementById('show-order');
    selected_n = parseInt(n.value);
    show_n.value = 'n = ' + selected_n.toString();
    for (let i = 0; i < data.length; i++) {
        if (selected_n == data[i][0]) {
            bright.value = data[i][1].toFixed(3);
            dark.value = data[i][2].toFixed(3);
            bms.value = data[i][3].toString();
            bvs.value = data[i][4].toString();
            dms.value = data[i][6].toString();
            dvs.value = data[i][7].toString();
        }
    }
    let btn = document.getElementById('act3_button');
    btn.disabled = false;
}
function go_to_act2() {
    activity2();
}
//# sourceMappingURL=activity3.js.map