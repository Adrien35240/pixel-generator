listener = {
    wheelMouseChange :() => app.board.addEventListener('wheel', handlers.handleWheelMouse.setScale),
    inputRangeYChange : () => handlers.handlePixelX.inputRangeX.addEventListener('input', handlers.handlePixelX.setPixelXLabel),
    inputRangeXChange : () => handlers.handlePixelY.inputRangeY.addEventListener('input', handlers.handlePixelY.setPixelYLabel),
    exportButtonPress : () => handlers.handleExportButton.button.addEventListener('click',handlers.handleExportButton.export),
    selectPaletteInput : () => document.querySelector('#palette-picker').addEventListener('input',handlers.handlePalettePicker.palette)
};


