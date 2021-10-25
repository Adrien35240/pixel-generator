let pixelY = {
    labelY : document.getElementById('label-pixel-y'),
    inputRangeY : document.getElementById('pixel-y'),
    handlePixelY : (e) => {
        pixelY.labelY.textContent = 'Nombre de pixels Y :'+e.target.value;
        app.drawGrid();
    }
};
