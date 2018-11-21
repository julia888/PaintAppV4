function addLayer() {
    let count = document.querySelector(".active").getAttribute("value");
    let blockLayer = document.getElementById('blockLayer' + count);
    let countLayer = blockLayer.children.length;
    countLayer++;

    countLayerFunc();

    //фабрика слоев
    function funcAddLayer() {
        //блок для нового таба
        this.div = document.createElement('div');
        //событие для блока
        this.att = document.createAttribute("onclick");
        this.att.value = "openCanvas(event, 'canvasId-"+ count + '-' + countLayer+"')";
        //событие для таба
        this.div.setAttributeNode(this.att);
        //текст таба
        this.text = document.createTextNode('Layer-'+ count + '-' +countLayer);
        this.text = document.createTextNode('Layer-');
        //кнопка в табе
        this.btn = document.createElement('BUTTON');
        //текст для таба
        this.span = document.createElement('span');
        this.span.className = 'spanLayer';
        this.countText = document.createTextNode(count +'-' +countLayer);
        this.span.appendChild(this.text);
        this.div.appendChild(this.span);
        this.div.appendChild(this.countText);
        // this.div.appendChild(countLayer);
        //крестик
        this.textBtn = document.createTextNode('\u00D7');
        //крестик в кнопке
        this.btn.appendChild(this.textBtn);
        //класс для кнопки
        this.btn.className = 'btnLayer';
        //событие для кнопки
        this.att2 = document.createAttribute("onclick");
        this.att2.value = "delLayer("+ count + ',' + countLayer+")";
        this.btn.setAttributeNode(this.att2);
        //кнопка для таба
        this.div.appendChild(this.btn);
        //класс таба
        this.div.className = 'divLayer';
        //ид для таба
        this.div.id = 'div'+ count + '-'  + countLayer;
        //блок для всех табов без кнопки аддТаб
        blockLayer.appendChild(this.div);
    }
        funcAddLayer();

    //фабрика канваса
    function funcAddCanvas() {
        let canvas_class = document.getElementById('canvas-' + count);
        this.canvas = document.createElement('canvas');
        this.canvas.width = '1150';
        this.canvas.height = '500';
        this.canvas.className = 'canvas_item';
        this.canvas.id = 'canvasId-'+ count + '-'  + countLayer;
        this.canvas.style.position = 'absolute';
        this.canvas.style.zIndex = countLayer;
        // this.canvas.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        canvas_class.appendChild(this.canvas);
    }


    funcAddCanvas();

    getCanvas();
    addEventListener(document.getElementById('canvasId-' + count + '-'  + countLayer));
}

let countLayer = 0;
function countLayerFunc() {
    countLayer++;
}

function openCanvas(event, canvasId) {
    let index;

    //получение z-index по id где нажали
    let ind = document.getElementById(canvasId).getAttribute('style');
    let arr = ind.split(';');
    index = arr[1].slice(-1);
    index = +index;

    let indx = document.getElementsByClassName("canvas_item");
    for (let i = 0; i < indx.length; i++) {
        indx[i].style.zIndex = i+1;
    }
    let IDIndex = +document.getElementById(canvasId).style.zIndex;
    IDIndex +=100;
    document.getElementById(canvasId).style.zIndex = IDIndex;

    let tablinks = document.getElementsByClassName("divLayer");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active2", "");
    }
    event.currentTarget.className += " active2";
}

function getCanvas() {
    document.getElementsByClassName('canvas-class');
}