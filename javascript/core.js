/* eslint-disable no-undef */
let app =
{
    board : document.getElementById('board'),
    grid: document.getElementById('grid'),
    drawGrid : () => {
        app.grid.innerHTML = '';
        for(let lineIndex = 0;lineIndex<pixelY.inputRangeY.value;lineIndex++){
            const line = document.createElement('div');
            line.classList.add('line');
            app.grid.appendChild(line);
            for(let rowIndex = 0;rowIndex<pixelX.inputRangeX.value;rowIndex++) {
                const row = document.createElement('div');
                line.style.height = zoom.inputZoom.value+'px';
                row.style.width = zoom.inputZoom.value+'px';
                row.style.height = zoom.inputZoom.value+'px';
                row.classList.add('row');
                row.addEventListener('click',listener.handleRowClick);
                line.appendChild(row);
            }
        }
    },
 
    init: () => {
        app.board.addEventListener('wheel', listener.handleScrollBoard);
        pixelX.inputRangeX.addEventListener('input', pixelX.handlePixelX);
        pixelY.inputRangeY.addEventListener('input', pixelY.handlePixelY);
        zoom.inputZoom.addEventListener('input', zoom.handleZoom);
        app.drawGrid();
    }
};


document.addEventListener('DOMContentLoaded', app.init());