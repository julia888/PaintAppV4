function deleteField(field) {
    let delField = document.getElementById('div' + field);
    let parent = document.getElementById('blockTabs');
    parent.removeChild(delField);
}