function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('Newton’s ring experiment to determine the wavelength of light', 3);
    let col_heading = [`n`, 'Diameter', 'Radius', 'Main Scale (0.05)', 'Vernier Scale (0.001)', 'Total Reading ((MSR*0.05) + (VSR*0.002))', 'Check'];
    let verify_row = [[1, user_data[1 - 1][1].toFixed(3), (user_data[1 - 1][1] / 2).toFixed(3), `${user_data[1 - 1][3]}`, `${user_data[1 - 1][4]}`, `<input class='form-control' id='totalb-inp'>`, `<input class='btn btn-primary' onclick='verify_bright();' value='Verify' >`]];
    let table_2 = new Table2(col_heading, verify_row, "head2", "body2", `Bright Ring for lamda =  ${selected_color_lambda} and R = ${selected_r}`);
    pp.addtoleftpannel(table_2.template);
    table_2.draw();
}
function verify_bright() {
    let val3 = document.getElementById(`totalb-inp`);
    if (!verify_values(parseFloat(val3.value), user_data[0][1])) {
        alert(`please enter total Reading value again`);
        return;
    }
    alert('All Entered Values are correct!!');
    let tab_2_complete = [];
    for (let i = 0; i < 8; i++) {
        tab_2_complete[i] = [];
        tab_2_complete[i][0] = user_data[i][0].toString();
        tab_2_complete[i][1] = user_data[i][3].toString();
        tab_2_complete[i][2] = user_data[i][4].toString();
        tab_2_complete[i][3] = user_data[i][1].toFixed(3);
        tab_2_complete[i][4] = (user_data[i][1] / 2).toFixed(3);
        // tab_2_complete[i][5] = user_data[i][5].toFixed(3);
    }
    pp.clearleftpannel();
    let col_heading = [`n`, 'Main Scale (0.05)', 'Vernier Scale (0.002)', 'Diameter', 'Radius'];
    let table_2 = new Table2(col_heading, tab_2_complete, "head2", "body2", `Bright Ring for lamda =  ${selected_color_lambda} and R = ${selected_r}`);
    pp.addtoleftpannel(table_2.template);
    table_2.draw();
    pp.showdescription('Click Next to calculate value for Dark Ring', 3);
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
    let btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5();" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
    pp.addtorightpannel(btn, 3);
}
// function load_table_3() {
//     pp.clearleftpannel();
//     pp.clearrightpannel();
//     pp.addoffcanvas(3);
//     pp.showtitle('Newton’s ring experiment to determine the wavelength of light', 3);
//     let col_heading = [`n`, 'Diameter', 'Radius', 'Main Scale (0.05)', 'Vernier Scale (0.001)', 'Total Reading ((MSR*0.05) + (VSR*0.001))', 'Check'];
//     let verify_row = [[1, user_data[1-1][2].toFixed(3), (user_data[1-1][2]/2).toFixed(3), `${user_data[1-1][6]}`,`${user_data[1-1][7]}`, `<input class='form-control' id='totald-inp'>`, `<input class='btn btn-primary' onclick='verify_dark();' value='Verify' >`]];
//     let table_3 = new Table2(col_heading, verify_row, "head2", "body2", `Dark Ring for lamda =  ${selected_color_lambda} and R = ${selected_r}`);
//     pp.addtoleftpannel(table_3.template);
//     table_3.draw();
// }
// function verify_dark() {
//     let val3: HTMLInputElement = <HTMLInputElement> document.getElementById(`totald-inp`);
//     // if(!verify_values(parseFloat(val3.value), user_data[1-1][8])) {
//     //     alert(`please Total Reading value again`);
//     //     return;
//     // }
//     // alert('All Entered Values are correct!!');
//     let tab_3_complete = [];
//     for(let i=0; i<8; i++) {
//         tab_3_complete[i] = [];
//         tab_3_complete[i][0] = user_data[i][0].toString();
//         tab_3_complete[i][1] = user_data[i][2].toFixed(3);
//         tab_3_complete[i][2] = (user_data[i][2]/2).toFixed(3);
//         tab_3_complete[i][3] = user_data[i][6].toString();
//         tab_3_complete[i][4] = user_data[i][7].toString();
//         tab_3_complete[i][5] = user_data[i][8].toFixed(3);
//     }
//     pp.clearleftpannel();
//     let col_heading = [`n`, 'Diameter', 'Radius', 'Main Scale (0.05)', 'Vernier Scale (0.001)', 'Total Reading (MSR + VSR*LC)'];
//     let table_3 = new Table2(col_heading, tab_3_complete, "head2", "body2", `Dark Ring for lamda =  ${selected_color_lambda} and R = ${selected_r}`);
//     pp.addtoleftpannel(table_3.template);
//     table_3.draw();
// }
//# sourceMappingURL=activity4.js.map