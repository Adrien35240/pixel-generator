listener = {
    wheelMouseChange :() => app.board.addEventListener('wheel', handlers.handleWheelMouse.setScale),
    exportButtonPress : () => handlers.handleExportButton.button.addEventListener('click',handlers.handleExportButton.export),
    selectPaletteInput : () => document.querySelector('#palette-picker').addEventListener('input',handlers.handlePalettePicker.palette),
    selectGomme : () => handlers.handleGomme.gomme.addEventListener('click',handlers.handleGomme.setGomme),
    radioGridSizeChange : () =>  {
        handlers.handleExportButton.radio.forEach(Elem => {
            Elem.addEventListener('input',handlers.handleInputRadio.setGridSize);
        });},
};


