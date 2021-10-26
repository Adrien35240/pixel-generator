let handlers = {
    handlePixelY : {
        labelY : document.getElementById('label-pixel-y'),
        inputRangeY : document.getElementById('pixel-y'),
        setPixelYLabel : (e) => {
            handlers.handlePixelY.inputRangeY.value = e.target.value;
            handlers.handlePixelY.labelY.textContent = 'Nombre de pixels Y :'+e.target.value;
            app.drawGrid();
        }
    },
    handlePixelX : {
        labelX : document.getElementById('label-pixel-x'),
        inputRangeX : document.getElementById('pixel-x'),
        setPixelXLabel : (e) => {
            handlers.handlePixelX.inputRangeX.value = e.target.value;
            handlers.handlePixelX.labelX.textContent = 'Nombre de pixels X :'+e.target.value;
            app.drawGrid();
        }
    },
    handleWheelMouse:{
        scale :1,
        setScale: (event) => {
            event.preventDefault();
            handlers.handleWheelMouse.scale += event.deltaY * -0.01;
            handlers.handleWheelMouse.scale = Math.min(Math.max(.125, handlers.handleWheelMouse.scale), 4);
            console.log('scale',handlers.handleWheelMouse.scale);
            app.grid.style.transform = `scale(${handlers.handleWheelMouse.scale})`;
        },
    },
    handleMouseDown: ()=> {
        app.isSelected = true;
        console.log('MouseDown',app.isSelected);
    },  handleMouseUp: ()=> {
        app.isSelected = false;
        console.log('Mouse Up ',app.isSelected);
    },
    handleMouseMove : (e)=> {
        if (app.isSelected) {
            e.target.style.backgroundColor = 'grey';
        }
    },

};