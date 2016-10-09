
let s = { // TODO: let matrix / това е матрицата, представена като обект
    rows: 10,
    cols: 10,
    width: 38,
    height: 38
};

let c; //Това е фактически е канваса, демек контролер върху цялата игра
let canvas; // Нека всички променливи които се използват в дадена функция да са изнесени непосредствено преди нея
window.onload = function () {
    canvas = document.getElementById('gCanvas');
    c = canvas.getContext('2d'); // TODO: по-хубави имена на променливите

    c.fillRect(50, 50, 300, 300);
    c.fillStyle = '#000';
    c.fill();

    init();
};

let mX;
let mY;
let clickedX;
let clickedY;
window.onclick = function (e) {
    mX = e.pageX;
    mY = e.pageY;

    if(Math.floor(mX/s.width) < s.cols && Math.floor(mY/s.height) < s.rows){
        clickedX = Math.floor(mX/s.width);
        clickedY = Math.floor(mY/s.height);
        console.log(clickedX + "," + clickedY);
    }
};

let box;
function init() {
    box = new Image();
    box.src = "./img/box.png";
    
    drawCanvas();

}

let x;
let y;
function drawCanvas() {
     c.clearRect(0, 0, 400, 400);

    for(let i = 0;i < s.rows;i++){
        for(let n = 0;n < s.cols;n++){
            x = n * s.width;
            y = i * s.height;
            c.drawImage(box, y, x);
        }
    }
}