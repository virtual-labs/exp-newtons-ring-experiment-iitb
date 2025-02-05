let show_opp = false;
function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('<p id="exp-title">Newtons ring experiment to determine the wavelength of light</p>', 3);
    let left_panel_text = `
    <div id="act3-left-content">
    <br>

    <h3 style='background-color: skyblue; text-align: center; font-size: 2.5vw; padding: 5px; border-radius: 5px; color: white;'>Select Color of Light and Radius of Curvature before taking readings</h3>

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


   

        <input disabled type='button' class='btn btn-primary' value="Next" style="margin-left: 3%; width: 20%;" id='act3_button' onclick='go_to_act2();'>

    `;
    pp.addtoleftpannel(left_panel_text);
    load_colors();
    document.getElementById('leftpannel').style.height =
        ((window.innerWidth * 0.91 * 1080.0) / 1920) * 0.85 + 5 + 'px';
    document.getElementById('leftpannel').style.margin = '0';
    document.getElementById('leftpannel').style.overflow = 'auto';
}
function load_colors() {
    let color_options = (document.getElementById('color-dd'));
    color_options.innerHTML = `<option value=''>--Select--</option>`;
    for (let i = 0; i < colors.length; i++) {
        color_options.innerHTML += `<option value='${colors[i][1]}'>${colors[i][0]}</option>`;
    }
}
function set_color() {
    let color = (document.getElementById('color-dd'));
    let r = (document.getElementById('r-dd'));
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
    let r = (document.getElementById('r-dd'));
    //let slider_ele: HTMLInputElement = <HTMLInputElement> document.getElementById('n-inp');
    // if(r.value) {
    //     selected_r = parseInt(r.value);
    if (r.value) {
        selected_r = parseInt(r.value);
        r.disabled = true;
    }
    // } else {
    //     slider_ele.disabled = true;
    // }
    // calculate_data();
    // let btn: HTMLInputElement = <HTMLInputElement> document.getElementById('act3_button');
    // btn.disabled = false;
    calculate_data();
    let btn = (document.getElementById('act3_button'));
    btn.disabled = false;
}
// function set_n() {
//     let n: HTMLInputElement = <HTMLInputElement> document.getElementById('n-inp');
//     let bright: HTMLInputElement = <HTMLInputElement> document.getElementById('brd');
//     let dark: HTMLInputElement = <HTMLInputElement> document.getElementById('drd');
//     let bms: HTMLInputElement = <HTMLInputElement> document.getElementById('bright-ms');
//     let bvs: HTMLInputElement = <HTMLInputElement> document.getElementById('bright-vs');
//     let dms: HTMLInputElement = <HTMLInputElement> document.getElementById('dark-ms');
//     let dvs: HTMLInputElement = <HTMLInputElement> document.getElementById('dark-vs');
//     let show_n: HTMLInputElement = <HTMLInputElement> document.getElementById('show-order');
//     selected_n = parseInt(n.value);
//     show_n.value = 'n = ' +  selected_n.toString();
//     for(let i=0; i<data.length; i++) {
//         if(selected_n == data[i][0]) {
//             bright.value = data[i][1].toFixed(3);
//             dark.value = data[i][2].toFixed(3);
//             bms.value = data[i][3].toString();
//             bvs.value = data[i][4].toString();
//             dms.value = data[i][6].toString();
//             dvs.value = data[i][7].toString();
//         }
//     }
//     let btn: HTMLInputElement = <HTMLInputElement> document.getElementById('act3_button');
//     btn.disabled = false;
// }
function go_to_act2() {
    activity2();
}
//activity3();
//# sourceMappingURL=activity3.js.map