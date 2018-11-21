function delLayer(count, countLayer) {
    let delField = document.getElementById('div'+ count + '-' +countLayer );
    let parent = document.getElementById('blockLayer' + count);
    parent.removeChild(delField);
    let canvasField = document.getElementById('canvasId-' + count + '-' + countLayer);
    let parentCanvas = document.getElementById('canvas-' + count);
    parentCanvas.removeChild(canvasField);
}