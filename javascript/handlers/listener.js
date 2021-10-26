/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let listener = {
    handleScrollBoard: (e) => {
        e.preventDefault();
        console.log(e.deltaY); // 53 || -53
        if (e.deltaY > 0) {
            zoom.inputZoom.value +=2;
        }if (e.deltaY < 0) {
            zoom.inputZoom.value -=2;
        }
        app.drawGrid();
    },
       handleRowClick : (e)=> {
        e.target.style.backgroundColor = 'grey';
    },
};