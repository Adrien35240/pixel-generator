
let app =
    {
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
                    row.addEventListener('click',app.handleRowClick);
                    line.appendChild(row);
                }
            }
        },
        handleRowClick : (e)=> {
            e.target.style.backgroundColor = 'grey';

        },
        init : () => {
            pixelX.inputRangeX.addEventListener('input', pixelX.handlePixelX);
            pixelY.inputRangeY.addEventListener('input', pixelY.handlePixelY);
            zoom.inputZoom.addEventListener('input', zoom.handleZoom);
            app.drawGrid();
        }
    };


document.addEventListener('DOMContentLoaded', app.init());