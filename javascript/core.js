/* eslint-disable no-undef */
let app =
{
    board : document.getElementById('board'),
    grid: document.getElementById('grid'),
    drawGrid : () => {
        app.grid.innerHTML = '';
        for(let lineIndex = 0;lineIndex<handlers.handlePixelY.inputRangeY.value;lineIndex++){
            const line = document.createElement('div');
            line.classList.add('line');
            app.grid.appendChild(line);
            for(let rowIndex = 0;rowIndex<handlers.handlePixelX.inputRangeX.value;rowIndex++) {
                const row = document.createElement('div');
                row.classList.add('row');
                row.addEventListener('click',handlers.handleRowClick);
                line.appendChild(row);
            }
        }
    },
 
    init: () => {
        listener.wheelMouseChange(),
        listener.inputRangeYChange(),
        listener.inputRangeXChange();
        app.drawGrid();
    }
};


document.addEventListener('DOMContentLoaded', app.init());
