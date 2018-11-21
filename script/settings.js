function changeSettings() {
    if ( document.getElementById('changeSettings').style.display === 'none'){
        document.getElementById('changeSettings').style.display = 'block';
    }else{
        document.getElementById('changeSettings').style.display = 'none';
    }

}

function changeTheme() {
    if ( document.getElementById('selectTheme').style.display === 'none'){
        document.getElementById('selectTheme').style.display = 'block';
    }else{
        document.getElementById('selectTheme').style.display = 'none';
    }
}

function changeToLightTheme() {
    document.getElementById("lightStyle").href="styles/lightTheme.css";
    document.getElementById('selectTheme').style.display = 'none';
    document.getElementById('changeSettings').style.display = 'none';
    document.getElementById('selectLang').style.display = 'none';
}
function changeToDarkTheme() {
    document.getElementById("lightStyle").href="styles/darkTheme.css";
    document.getElementById('selectTheme').style.display = 'none';
    document.getElementById('changeSettings').style.display = 'none';
    document.getElementById('selectLang').style.display = 'none';
}

function changeLang() {
    if ( document.getElementById('selectLang').style.display === 'none'){
        document.getElementById('selectLang').style.display = 'block';
    }else{
        document.getElementById('selectLang').style.display = 'none';
    }
}

const language = [
    {
        name: 'English',
        str: {
            titleHeader: 'Paint App',
            titleColor: "Color",
            titleFigure: 'Figure',
            rectangle: 'rectangle',
            circle:'circle',
            hexagon:'hexagon',
            pen:'Pen',
            titleSize:'Size',
            titleStatus:'Status',
            titleColorText:'Color:',
            titleSettings:'Settings',
            change:'Change',
            themeBtn:'Theme',
            lightTheme:'Light',
            darkTheme:'Dark',
            LangBtn:'Language',
            enLang:'English',
            ruLang:'Russian',
            titleCoordinates:'Coordinates: ',
            addTab:'add Tab',
            addLayer:'add Layer'
        }
    },
    {
        name: 'Russian',
        str: {
            titleHeader: 'Приложение Пейнт',
            titleColor: "Цвет",
            titleFigure: 'Фигура',
            rectangle: 'прямоугольник',
            circle:'круг',
            hexagon:'шестиугольник',
            pen:'Ручка',
            titleSize:'Размер',
            titleStatus:'состояние',
            titleColorText:'Цвет:',
            titleSettings:'Настройки',
            change:'Изменить',
            themeBtn:'Тема',
            lightTheme:'Светлая',
            darkTheme:'Темная',
            LangBtn:'Язык',
            enLang:'Английский',
            ruLang:'Русский',
            titleCoordinates:'Координаты: ',
            addTab:'Добавить вкладку',
            addLayer:'Добавить слой'
        }
    }
];

function changeToEnglish() {
    let arr = language[0]["str"];
    for (let key in arr){
        document.getElementById(key).innerText = arr[key];
    }
    // let spanTab = document.getElementsByClassName('spanTab').innerHTML = 'Вкладка';
    let spanTab = document.getElementsByClassName('spanTab').length;
    for (let i = 0; i < spanTab; i++) {
        document.getElementsByClassName('spanTab')[i].innerHTML = 'Tab-';
    }
    let spanLayer = document.getElementsByClassName('spanLayer').length;
    for (let i = 0; i < spanLayer; i++) {
        document.getElementsByClassName('spanLayer')[i].innerHTML = 'Layer-';
    }

    document.getElementById('selectLang').style.display = 'none';
    document.getElementById('changeSettings').style.display = 'none';
    document.getElementById('language').innerText = 'en';
    document.getElementById('selectLang').style.display = 'none';
    document.getElementById('selectTheme').style.display = 'none';
}

function changeToRussian() {
    var arr = language[1]["str"];
    for (let key in arr){
        document.getElementById(key).innerText = arr[key];
    }
    let spanTab = document.getElementsByClassName('spanTab').length;
    for (let i = 0; i < spanTab; i++) {
        document.getElementsByClassName('spanTab')[i].innerHTML = 'Вкладка-';
    }
    let spanLayer = document.getElementsByClassName('spanLayer').length;
    for (let i = 0; i < spanLayer; i++) {
        document.getElementsByClassName('spanLayer')[i].innerHTML = 'Слой-';
    }

    document.getElementById('selectLang').style.display = 'none';
    document.getElementById('changeSettings').style.display = 'none';
    document.getElementById('language').innerText = 'ru';
    document.getElementById('selectLang').style.display = 'none';
    document.getElementById('selectTheme').style.display = 'none';
}

