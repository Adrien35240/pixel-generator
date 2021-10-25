let pixelX = {
    labelX : document.getElementById('label-pixel-x'),
    inputRangeX : document.getElementById('pixel-x'),
    handlePixelX : (e) => {
        pixelX.inputRangeX.value = e.target.value;
        pixelX.labelX.textContent = 'Nombre de pixels X :'+e.target.value;
        app.drawGrid();
    }
};