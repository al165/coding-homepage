let projects = [
    {
        name: "mihaela",
        link: "https://editor.p5js.org/MihaelaBojinova/full/x1btNf6fr",
    },
    {
        name: "jakob",
        link: "https://editor.p5js.org/jakble/full/_B9fMOowD",
    },
    {
        name: "luca",
        link: "https://editor.p5js.org/al165/full/0VMOeMdJn",
    },
    {
        name: "cliff",
        link: "https://editor.p5js.org/al165/full/WLxHtYGA6",
    },
    {
        name: "melody",
        link: "https://editor.p5js.org/al165/full/fo_Nk9oV1",
    },
    {
        name: "pijus",
        link: "https://editor.p5js.org/al165/full/lS1DuAcb9",
    },
    {
        name: "pablo",
        link: "https://editor.p5js.org/pablotariq/full/Na8PYyuyr",
    }
];

let gifs = [
    "images/aniBoxOfCrayons.gif",
    "images/artpalgalbut.gif",
    "images/Back_and_forth02.gif",
    "images/balloons_confetti_md_wht.gif",
    "images/cmpterhpymed_w.gif",
    "images/computer_e-mail.gif",
    "images/construction.gif",
    "images/cool.gif",
    "images/globe.gif",
    "images/loading1.gif",
    "images/Rainbow-gif3.gif",
    "images/smile01.gif",
    "images/star.gif",
    "images/studentatcomputer.gif",
    "images/Titulo_artgallery2.gif",
    "images/web0.gif",
    "",
];

let backgrounds = [
    "images/backgrounds/bgbluetext.jpg",
    "images/backgrounds/bgpastelstreaks.jpg",
    "images/backgrounds/bgsatin.jpg",
    "images/backgrounds/clouds.gif",
    "images/backgrounds/south_art_bg.gif",
    "images/backgrounds/watermovingunderpicyes.gif",
    "images/backgrounds/yildizart.gif",
];

let colours = [
    "red",
    "blue",
    "white",
    "yellow",
    "white",
    "green",
]

let projectTitles = [];
let gifElements = [];
let jumbleTimeout;
let popupOpen = false;
const popup = document.querySelector("#popup");
const close = document.querySelector("#close");
let iframe = document.createElement("iframe");

for(const p of projects){
    let title = document.createElement("a");
    title.innerHTML = p.name;
    title.addEventListener("mousedown", (event) => {
        popupOpen = true;
        popup.classList.add("open");
        popup.classList.remove("closed");
        iframe.src = p.link;
        popup.appendChild(iframe);
        popup.querySelector("#popup-title").innerHTML = `student: ${p.name}`;
    })

    projectTitles.push(title);
    document.body.appendChild(title);
}

close.addEventListener("mouseup", (event) => {
    popup.classList.add("closed");
    popup.classList.remove("open");
    iframe.remove();
})

function jumbleNames(){
    for(const title of projectTitles){
        title.style.top = (20 + Math.random() * 60) + "%";
        title.style.left = (10 + Math.random() * 80) + "%";

        title.classList = [];

        if(Math.random() < 0.1){
            title.classList.add("flashing");
        } 
        
        if(Math.random() < 0.2){
            title.classList.add("rotating");
            title.style.animationDuration = 2.0 + Math.random()*3 + "s";
        }

        title.style.color = colours[Math.floor(Math.random() * colours.length)];
        title.style.fontSize = (32 + Math.random()*20) + "pt";
    }

    jumbleTimeout = setTimeout(jumbleNames, 8000);

    if(Math.random() < 0.8){
        document.body.style.background = `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`
    } else {
        document.body.style.background = "black";
    }

    while(gifElements.length){
        let gif = gifElements.pop()
        gif.remove();
    }

    for(let i = 0; i < 3; i++){
        if(Math.random() < 0.3 || i == 0){
            let gif = document.createElement("img");
            gif.src = gifs[Math.floor(Math.random() * gifs.length)];
            gif.classList.add("gif");
            gif.style.top = (20 + Math.random() * 70) + "%";
            gif.style.left = (10 + Math.random() * 80) + "%";
            document.body.appendChild(gif);
            gifElements.push(gif);
        }
    }

    document.querySelector("h2").style.top = (40 + Math.random() * 40) + "%";
    document.querySelector("h2").style.left = (10 + Math.random() * 80) + "%";
}

jumbleNames();

document.addEventListener("mousemove", (event) => {
    clearTimeout(jumbleTimeout);
    jumbleTimeout = setTimeout(jumbleNames, 4000);
})
