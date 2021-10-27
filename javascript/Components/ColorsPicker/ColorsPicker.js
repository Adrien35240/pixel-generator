colorsPicker = {
    containerColorsPicker: document.getElementById('color-picker'),
    colors: arrayOfColors.std,
    drawPicker: () => {
        for (let indexColor = 0; indexColor < colorsPicker.colors.length; indexColor++) {
            const divColor = document.createElement('div');
            divColor.classList.add('color');
            divColor.setAttribute('id', 'color');
            divColor.style.backgroundColor = colorsPicker.colors[indexColor];
            if (colorsPicker.colors[indexColor] === 'transparent') {
                divColor.style.backgroundColor = 'yellow';
            }
            divColor.dataset.color = colorsPicker.colors[indexColor];
            colorsPicker.containerColorsPicker.appendChild(divColor);
            divColor.addEventListener('click', handlers.handleClickColor);
        }
    }
};