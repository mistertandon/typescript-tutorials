console.log(window.onmousedown);
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent);  //<- Error
    console.log(mouseEvent.buton);  //<- Error
};