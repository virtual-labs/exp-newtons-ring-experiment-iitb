let colors = [['Violet', 4400 * 1e-8], ['Indigo', 4600 * 1e-8], ['Blue', 5000 * 1e-8], ['Green', 5700 * 1e-8], ['Yellow', 5893 * 1e-8], ['Orange', 6200 * 1e-8], ['Red', 7200 * 1e-8]];
let radius = [50, 100, 200];
let selected_color_lambda = 4400 * 1e-8;
let selected_r = 200;
let selected_n = 1;
let data = [];
calculate_data();
function calculate_data() {
    for (let i = 0; i < 50; i++) {
        data[i] = [];
        data[i][0] = i + 1;
        // dnb
        data[i][1] = Math.sqrt(2 * (2 * (i + 1) - 1) * selected_color_lambda * selected_r);
        // dnd
        data[i][2] = Math.sqrt(4 * (i + 1) * selected_color_lambda * selected_r);
        //for bright ring
        // main scale 
        data[i][3] = Math.floor(parseFloat((data[i][1] / 2).toFixed(3)) / (0.05));
        //vernier scale
        data[i][4] = Math.floor((parseFloat((data[i][1] / 2).toFixed(3)) - data[i][3] * 0.05) * 1000);
        data[i][4] = Math.round(std_deviation(data[i][4]));
        //total reading
        data[i][5] = data[i][3] * 0.05 + data[i][4] * 0.001;
        //for dark ring
        // main scale 
        data[i][6] = Math.floor(parseFloat((data[i][2] / 2).toFixed(3)) / (0.05));
        //vernier scale
        data[i][7] = Math.floor((parseFloat((data[i][2] / 2).toFixed(3)) - data[i][6] * 0.05) * 1000);
        data[i][7] = Math.round(std_deviation(data[i][7]));
        //total reading
        data[i][8] = data[i][6] * 0.05 + data[i][7] * 0.001;
    }
    console.log(data);
}
//# sourceMappingURL=data.js.map