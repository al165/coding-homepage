const generativeContainer = document.getElementById("generative");
for(let i = 0; i < 15; i++){
    let shape = document.createElement("div");
    shape.classList.add("generative-shape");
    generativeContainer.appendChild(shape);

    let p = i / 14;

    shape.style.transform = "translate(-50%, -50%) rotate(" + (8 * i) + "deg)";
    shape.style.width = (70 - p*30) + "vh";
    shape.style.height = (70 - p*30) + "vh";
    shape.style.borderRadius = (5 + p * 45) + "%";
    shape.style.borderColor = "rgb(255, " + (50 + p*200) + ", " + (50 + p*130) + ")";
    shape.style.backgroundColor = "rgba(255, " + (50 + p*200) + ", " + (50 + p*130) + ", 0.2)";
}
