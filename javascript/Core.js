app =
{
    radioForEvent : null,
    sizeGrid:32,
    selectedColor : 'black',
    pipetteSelected:false,
    //TODO:verifié l'utililisation de cette variable (class de colorspicker)
    isSelected : false,
    board : document.getElementById('board'),
    grid: document.getElementById('grid'),
    //genere la grille
    drawGrid : () => {
        app.grid.innerHTML = '';
        for(let lineIndex = 0;lineIndex<app.sizeGrid;lineIndex++){
            const line = document.createElement('div');
            line.classList.add('line');
            app.grid.appendChild(line);
            for(let rowIndex = 0;rowIndex<app.sizeGrid;rowIndex++) {
                const row = document.createElement('div');
                row.classList.add('row');
                row.addEventListener('click',handlers.handleMouseClick);
                row.addEventListener('mousedown',handlers.handleMouseDown);
                row.addEventListener('mouseup',handlers.handleMouseUp);
                row.addEventListener('mousemove',handlers.handleMouseMove);
                line.appendChild(row);
            }
        }
    },
    //initialisation
    init: () => {
        listener.selectPipette(),
        listener.backgroundGridChange(),
        listener.opacityGridChange(),
        listener.selectGomme(),
        listener.radioGridSizeChange(),
        listener.selectPaletteInput();
        listener.exportButtonPress(),
        listener.wheelMouseChange(),
        colorsPicker.drawPicker(),
        app.drawGrid();
    }
};
document.addEventListener('DOMContentLoaded', app.init());
