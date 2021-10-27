
handlers = {
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
        scale :4,
        setScale: (event) => {
            event.preventDefault();
            handlers.handleWheelMouse.scale += event.deltaY * -0.01;
            handlers.handleWheelMouse.scale = Math.min(Math.max(.225, handlers.handleWheelMouse.scale), 10);
            console.log(handlers.handleWheelMouse.scale);

            app.grid.style.transform = `scale(${handlers.handleWheelMouse.scale})`;
            //TEST zoom

        },
    },
    handleMouseDown: ()=> {
        app.isSelected = true;
    },  handleMouseUp: ()=> {
        app.isSelected = false;
    },
    handleMouseMove : (e)=> {
        if (app.isSelected) {
            e.target.style.backgroundColor = app.selectedColor;
        }
    },
    handleMouseClick: (e) => {
        e.target.style.backgroundColor = app.selectedColor;
    },
    /**
     * ajoute la class isSelected sur la divColor
     * definie la couleur avec la dataset de la divColor
     */
    handleClickColor: (e) => {
        const divColor = e.target;
        app.selectedColor = e.target.dataset.color;
        console.log('color :',app.selectedColor);
        let colorIsSelected =  document.getElementById('color-picker').getElementsByClassName('isSelected')[0];
        if(colorIsSelected){
            colorIsSelected.classList.replace('isSelected','color');
        }
        divColor.classList.replace('color','isSelected');
    },
    handleExportButton:{
        button : document.querySelector('#export-button'),
        radio : document.getElementsByName('final-size'),

        export : ()=>{
            console.log('radio value',handlers.handleExportButton.radio);
            handlers.handleExportButton.radio.forEach(radioElem => {
                console.log('radioElem',radioElem.checked);
                if(radioElem.checked){
                    console.log('radioElem',radioElem);
                    app.grid.style.width = radioElem.value+'px';
                    app.grid.style.height = radioElem.value+'px';
                }
            });
            app.grid.style.border = 'none';
            /*app.grid.style.width = 32+'px';
            app.grid.style.height = 32+'px';*/
            document.getElementById('modal').style.display='flex';
            // eslint-disable-next-line no-undef
            html2canvas(app.grid).then((canvas) => {
                canvas.backgroundColor = null;
                console.log(canvas);
                document.getElementById('modal__result').appendChild(canvas);
            });
        }
    },
    handlePalettePicker : {
        palettePicker : document.querySelector('#palette-picker'),
        palette: () => {

            colorsPicker.containerColorsPicker.innerHTML='';
            let resultPalette = handlers.handlePalettePicker.palettePicker.value;
            colorsPicker.colors = arrayOfColors[resultPalette];
            console.log('palette selectionnée :',colorsPicker.colors);
            colorsPicker.drawPicker();
        }
    }
};