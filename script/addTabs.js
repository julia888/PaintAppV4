function addTab() {
    countLayer = 0;
    let blockTabs = document.getElementById('blockTabs');
    let Layers = document.getElementById('Layers');
    let canvasWrapper = document.getElementById('canvasWrapper');
    countFunc();

    //фабрика табов
    function funcAddTab() {
        //блок для нового таба
        this.div = document.createElement('div');
        //событие для блока
        this.att = document.createAttribute("onclick");
        // this.att.value = "openCanvas(event, 'canvas-"+count+"')";
        this.att.value = "openBlockLayer(event, 'blockLayer"+count+"')";
        //текст таба
        // this.text = document.createTextNode('Tab-'+count);
        this.text = document.createTextNode('Tab-');
        //кнопка в табе
        this.btn = document.createElement('BUTTON');
        //текст для таба
        this.span = document.createElement('span');
        this.span.className = 'spanTab';
        this.span.appendChild(this.text);
        this.countText = document.createTextNode(count);
        this.div.appendChild(this.span);
        this.div.appendChild(this.countText);
        //событие для таба
        this.div.setAttributeNode(this.att);
        //крестик
        this.textBtn = document.createTextNode('\u00D7');
        //крестик в кнопке
        this.btn.appendChild(this.textBtn);
        //класс для кнопки
        this.btn.className = 'btnTab';
        //событие для кнопки
        this.att2 = document.createAttribute("onclick");
        this.att2.value = "deleteField("+count+")";
        this.btn.setAttributeNode(this.att2);
        //кнопка для таба
        this.div.appendChild(this.btn);
        //класс таба
        this.div.className = 'divTab';
        //ид для таба
        this.div.id = 'div' + count;
        //блок для всех табов без кнопки аддТаб
        blockTabs.appendChild(this.div);
        if (count === 1) {
            this.div.className = 'divTab active';
        }else {
            this.div.className = 'divTab';
        }

        this.att3 = document.createAttribute("value");
        this.att3.value = count;
        this.div.setAttributeNode(this.att3);

        // блок слоев
        this.div2 = document.createElement('div');
        this.div2.id = "blockLayer" + count;
        this.div2.className = "blockL";
        this.div2.style.display = 'none';
        Layers.appendChild(this.div2);

        this.canvas_wrapper = document.createElement('div');
        this.canvas_wrapper.className = 'canvas-class';
        this.canvas_wrapper.id = 'canvas-' + count;
        canvasWrapper.appendChild(this.canvas_wrapper);
    }

    funcAddTab();
}

let count = 0;
function countFunc() {
    count++;
}

function openBlockLayer(event, layerName) {

    let tabcontent = document.getElementsByClassName("blockL");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    let num = layerName.slice(-1);

    let canvascontent = document.getElementsByClassName("canvas-class");
    for (let i = 0; i < canvascontent.length; i++) {
        canvascontent[i].style.display = "none";
    }
    document.getElementById('canvas-' + num).style.display = 'block';

    let tablinks = document.getElementsByClassName("divTab");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(layerName).style.display = "flex";
    event.currentTarget.className += " active";
}

