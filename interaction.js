let area = document.getElementById('interaction-area');
let button = document.getElementById('interaction');

function randomInt(x){
    return Math.floor(Math.random() * x);
}

function map(x, x1, x2, y1, y2){
    return y1 + ((x - x1) * (y2 - y1)) / (x2 - x1) 
}


area.onmousedown = function(e){

    let newDrop = document.createElement('div');
    newDrop.className = 'drop';
    newDrop.style.top = e.layerY + "px";
    newDrop.style.left = e.layerX + "px";

    area.appendChild(newDrop);

    window.setTimeout((element) => {
        element.remove()
    }, 5000, newDrop);
}


button.onmousedown = function(e){
    e.stopPropagation();
    button.style.top = (randomInt(100) - 50) + "px";
    button.style.left = (-randomInt(50)) + "%";
}

