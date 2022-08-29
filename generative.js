let shapes = document.getElementsByClassName('generative-shape');

for(let i = 0; i < shapes.length; i++){
    let shape = shapes[i];
    let p = i / (shapes.length - 1);

    shape.style.transform = "translate(-50%, -50%) rotate(" + (8 * i) + "deg)";
    shape.style.width = (70 - p*30) + "vh";
    shape.style.height = (70 - p*30) + "vh";
    shape.style.borderRadius = (5 + p * 45) + "%";
    shape.style.borderColor = "rgb(255, " + (50 + p*200) + ", " + (50 + p*130) + ")";
    shape.style.backgroundColor = "rgba(255, " + (50 + p*200) + ", " + (50 + p*130) + ", 0.2)";
}