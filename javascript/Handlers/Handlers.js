
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
        scale :10,
        //modifie le scale de la grille avec la molette
        //TODO: modifier le scale initial de la grille
        setScale: (event) => {
            event.preventDefault();
            handlers.handleWheelMouse.scale += event.deltaY * -0.01;
            handlers.handleWheelMouse.scale = Math.min(Math.max(.125, handlers.handleWheelMouse.scale), 100);
            app.grid.style.transform = `scale(${handlers.handleWheelMouse.scale})`;
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
            //TODO: controler la gestion de la taille de la grille pour la taille de l'export
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
                document.getElementById('modal__result').appendChild(canvas);
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
    }
};