'use strict';
window.onload = function () {
    init();

};
let fillColor = 'black';
let flag = false;

function init() {
    addTab();
    addLayer();
    const canvas = document.getElementById('canvasId-1-1');//получили элемент
    addEventListener(canvas);

    //получаем значения из localStorage
    //размера
   let size = localStorage.getItem('Size');
    document.getElementById('size').value = size;
    //цвета
    let color = localStorage.getItem('Color');
    document.getElementById('colorName').innerHTML = color;
    document.getElementById('color').style.backgroundColor = color;
    fillColor = color;
    //фигуры
    let  figure = localStorage.getItem('figure');
    document.getElementById('selectFigure').value = figure;
}

//добавление ивент EventListener
function addEventListener(canvas) {
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', mouseMoveHandler);
    canvas.addEventListener('mouseup', stopDraw);
    document.getElementById('input_form').addEventListener("keydown", changeColor);
    // document.getElementById('theme').addEventListener('click', changeTheme);
}

//движение
function mouseMoveHandler(event) {
    const canvas = event.target;
    if (canvas && canvas.getContext) {
        document.getElementById('coordinates').innerHTML = event.offsetX + ':' + event.offsetY;//координаты
    }
}

//выбор фигуры
function setFigure(event) {
    const canvas = event.target;
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        let s = changeSize();
        ctx.fillStyle = fillColor;
        if (document.getElementById('selectFigure').value === "rectangle") {//квадрат
            ctx.fillRect(event.offsetX, event.offsetY, 10 + s, 10 + s);

            let rectangle = "rectangle";
            localStorage.setItem('figure', rectangle);
        } else if (document.getElementById('selectFigure').value === "circle") {//круг
            let circleF = new Path2D();
            circleF.arc(event.offsetX, event.offsetY, 5 + s, 0, 2 * Math.PI);
            ctx.fill(circleF);

            let circle = "circle";
            localStorage.setItem('figure', circle);
        } else {//шестиугольник
            s = s / 5;
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            ctx.lineTo(event.offsetX + 5 * s, event.offsetY + 7 * s);
            ctx.lineTo(event.offsetX + 12 * s, event.offsetY + 7 * s);
            ctx.lineTo(event.offsetX + 17 * s, event.offsetY);
            ctx.lineTo(event.offsetX + 12 * s, event.offsetY - 7 * s);
            ctx.lineTo(event.offsetX + 5 * s, event.offsetY - 7 * s);
            ctx.fill();

            let hexagon = "hexagon";
            localStorage.setItem('figure', hexagon);
        }

    }
}

//меняем размер по ползунку
function changeSize() {
    const canvas = event.target;
    if (canvas && canvas.getContext) {
        let size = document.getElementById("size").value;
        let s = 5 + 2 * size;
        localStorage.setItem('Size', size);
        return s;
    }
}

function startDraw(event) {
    const canvas = event.target;
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        if (flag === true) { //если кисть включена
            let s = changeSize();
            ctx.lineWidth = s / 5;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            canvas.removeEventListener('mousedown', setFigure);
            canvas.addEventListener('mousemove', continueDraw);
        } else { //есди кисть отключена
            canvas.addEventListener('mousedown', setFigure);
        }
    }
}

function continueDraw(event) {
    const canvas = event.target;
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        ctx.strokeStyle = fillColor;
    }
}

function stopDraw(event) {
    const canvas = event.target;
    if (canvas && canvas.getContext) {
        canvas.removeEventListener('mousemove', continueDraw);
    }
    canvas.addEventListener('mousedown', setFigure);
}

//смена цвета
function changeColor(e) {
    if (e.key === 'Enter'){
        fillColor = document.getElementById("input_form").value;
        document.getElementById('colorName').innerHTML = fillColor;
        document.getElementById('color').style.backgroundColor = fillColor;
        localStorage.setItem('Color', fillColor);
    }
}

//включение и отключение кисти
function setPen() {
    if (flag === false) {
        document.getElementById('pen').style.backgroundColor = 'red';
        flag = true;
    } else {
        document.getElementById('pen').style.backgroundColor = '';
        flag = false;
    }
}











