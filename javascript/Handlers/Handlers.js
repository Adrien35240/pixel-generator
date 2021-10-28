
handlers = {
    handleInputRadio : {
        button : document.querySelector('#export-button'),
        radio : document.querySelector('.final-size'),
        //definie le nombre de pixels dans la grille
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
        //modifie le scale de la grille avec la molette
        setScale: (event) => {
            event.preventDefault();
            handlers.handleWheelMouse.scale += event.deltaY * -0.03;
            handlers.handleWheelMouse.scale = Math.round(Math.min(Math.max(1, handlers.handleWheelMouse.scale), 100));
            app.grid.style.transform = `scale(${handlers.handleWheelMouse.scale})`;
            console.log('scale : ',handlers.handleWheelMouse.scale);
            console.log('size grid  : ',app.sizeGrid);
        },
    },
    //autorise le changement d'etat d'une case si le click gauche est maintenu
    handleMouseDown: ()=> {
        app.isSelected = true;
    },
    //desactive le changement d'etat d'une case si le click gauche n'est pas maintenu
    handleMouseUp: ()=> {
        app.isSelected = false;
    },
    //change le background-color d'une case si la souris bouge et click gauche maintenu
    handleMouseMove : (e)=> {
        if (app.isSelected) {
            e.target.style.backgroundColor = app.selectedColor;
        }
    },
    //change le background-color d'une case a chaque click de souris
    handleMouseClick: (e) => {
        e.target.style.backgroundColor = app.selectedColor;
    },
    /**
     * ajoute la class isSelected sur la case
     * definie la couleur avec le dataset de la case
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
        //genere une image png a partir de la grille
        export : ()=>{
            handlers.handleExportButton.radio.forEach(radioElem => {
                if(radioElem.checked){
                    app.sizeGrid = radioElem.value+'px';
                    app.sizeCanvas = radioElem.value;
                }
            });
            app.grid.style.border = 'none';
            document.getElementById('modal').style.display='flex';
            app.grid.style.width = app.sizeGrid;
            app.grid.style.height = app.sizeGrid;
            app.grid.style.transform = 'scale(1)';
            html2canvas(app.grid,{backgroundColor:null,width:app.sizeCanvas,height:app.sizeCanvas}).then((canvasResult) => {
                document.getElementById('modal__result').appendChild(canvasResult);
            });
        }
    },
    handlePalettePicker : {
        palettePicker : document.querySelector('#palette-picker'),
        //affiche la palette de couleurs selectionnée
        palette: () => {
            colorsPicker.containerColorsPicker.innerHTML='';
            let resultPalette = handlers.handlePalettePicker.palettePicker.value;
            colorsPicker.colors = arrayOfColors[resultPalette];
            colorsPicker.drawPicker();
        }
    },
    handleGomme: {
        gomme: document.getElementById('gomme'),
        //definie la couleur de la cible du pointeur sur 'transparent' avec le dataset de l'image de gomme
        setGomme: (e) => {
            app.selectedColor = e.target.dataset.color;
        }
    },
    handleBackGround:{
        inputColors : document.querySelector('#background-color'),
        inputOpacity : document.querySelector('#background-opacity'),
        setBackgroundGrid:(e) => {
            console.log('background color',e.target.value);
            app.grid.style.backgroundColor = e.target.value;

        },
        setOpacityGrid:(e) => {
            console.log('opacity value',e.target.value);
            app.grid.style.opacity = e.target.value+'%';
        }
    }
};