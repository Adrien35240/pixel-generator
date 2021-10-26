
let zoom  = {
    zoomLabel : document.getElementById('zoom-label'),
    inputZoom : document.getElementById('zoom'),
    handleZoom : (e) => {
        zoom.inputZoom.value = e.target.value;
        zoom.zoomLabel.textContent = 'Zoom :'+e.target.value;
        app.drawGrid();
    }
};      