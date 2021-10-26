/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let listener = {
    wheelMouseChange :()=> app.board.addEventListener('wheel', handlers.handleWheelMouse.setScale),
    inputRangeYChange : () => handlers.handlePixelX.inputRangeX.addEventListener('input', handlers.handlePixelX.setPixelXLabel),
    inputRangeXChange : ()=>handlers.handlePixelY.inputRangeY.addEventListener('input', handlers.handlePixelY.setPixelYLabel),
};


