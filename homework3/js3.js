document.addEventListener("DOMContentLoaded", function() {
    
    const mousecoordinate = document.getElementById("mousetresh");

    document.addEventListener("mousetresh", function (event) {
        const x = event.clientX;
        const y = event.clientY;
    
        mousecoordinate.textContent = `X: ${x}, Y: ${y}`;
    });

});