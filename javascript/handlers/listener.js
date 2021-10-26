/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let listener = {
    scale :1,
    handleScrollBoard: (event) => {
        event.preventDefault();
        listener.scale += event.deltaY * -0.01;

        // Restrict scale
        listener.scale = Math.min(Math.max(.125, listener.scale), 4);
        console.log('scale',listener.scale);
        // Apply scale transform
        app.grid.style.transform = `scale(${listener.scale})`;
    },


    handleRowClick : (e)=> {
        e.target.style.backgroundColor = 'grey';
    },
};