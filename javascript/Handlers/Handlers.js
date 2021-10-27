
handlers = {
    handleInputRadio : {
        button : document.querySelector('#export-button'),
        radio : document.querySelector('.final-size'),
        setGridSize : ()=>{
            handlers.handleExportButton.radio.forEach(Elem => {
                if(Elem.checked){
                    app.grid.style.width = Elem.value+'px';
                    app.grid.style.height = Elem.value+'px';
                    app.sizeGrid = Elem.value;
                    app.drawGrid();
                }
            });
        }
    },
    handleWheelMouse:{
        scale :1,
        setScale: (event) => {
            event.preventDefault();
            handlers.handleWheelMouse.scale += event.deltaY * -0.01;
            handlers.handleWheelMouse.scale = Math.min(Math.max(.125, handlers.handleWheelMouse.scale), 100);
            app.grid.style.transform = `scale(${handlers.handleWheelMouse.scale})`;
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
            handlers.handleExportButton.radio.forEach(radioElem => {
                if(radioElem.checked){
                    app.sizeGrid = radioElem.value+'px';
                    app.sizeGrid = radioElem.value+'px';
                }
            });
            app.grid.style.border = 'none';
            document.getElementById('modal').style.display='flex';
            // eslint-disable-next-line no-undef
            console.log('grid width :',app.grid.style.width);
            html2canvas(app.grid).then((canvas) => {
                canvas.backgroundColor = null;
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
            colorsPicker.drawPicker();
        }
    }
};