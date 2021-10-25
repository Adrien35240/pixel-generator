let app =
    {
        grid: document.getElementById('grid'),
        drawGrid : () => {
            app.grid.innerHTML = '';
            for(let lineIndex = 0;lineIndex<app.PixelY.inputRangeY.value;lineIndex++){
                const line = document.createElement('div');
                line.classList.add('line');
                app.grid.appendChild(line);
                for(let rowIndex = 0;rowIndex<app.PixelX.inputRangeX.value;rowIndex++) {
                    const row = document.createElement('div');
                    line.style.height = app.Zoom.inputZoom.value+'px';
                    row.style.width = app.Zoom.inputZoom.value+'px';
                    row.style.height = app.Zoom.inputZoom.value+'px';
                    row.classList.add('row');
                    line.appendChild(row);
                }
            }
        },

        PixelX : {
            labelX : document.getElementById('label-pixel-x'),
            inputRangeX : document.getElementById('pixel-x'),
            handlePixelX : (e) => {
                app.PixelX.inputRangeX.value = e.target.value;
                app.PixelX.labelX.textContent = 'Nombre de pixels X :'+e.target.value;
                app.drawGrid();
            }
        },
        PixelY  : {
            labelY : document.getElementById('label-pixel-y'),
            inputRangeY : document.getElementById('pixel-y'),
            handlePixelY : (e) => {
                app.PixelY.inputRangeY.value = e.target.value;
                app.PixelY.labelY.textContent = 'Nombre de pixels Y :'+e.target.value;
                app.drawGrid();
            }
        },
        Zoom  : {
            zoomLabel : document.getElementById('zoom-label'),
            inputZoom : document.getElementById('zoom'),
            handleZoom : (e) => {
                app.Zoom.inputZoom.value = e.target.value;
                app.Zoom.zoomLabel.textContent = 'Zoom :'+e.target.value;
                app.drawGrid();
            }
        },

        init : () => {
            // eslint-disable-next-line no-undef
            app.PixelX.inputRangeX.addEventListener('input', app.PixelX.handlePixelX);
            // eslint-disable-next-line no-undef
            app.PixelY.inputRangeY.addEventListener('input', app.PixelY.handlePixelY);
            app.Zoom.inputZoom.addEventListener('input', app.Zoom.handleZoom);
            app.drawGrid();
        }
    };


document.addEventListener('DOMContentLoaded', app.init());