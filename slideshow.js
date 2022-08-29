
let slideshows = document.getElementsByClassName("slideshow");
console.log(slideshows.length);

for(let show of slideshows){
	let slides = show.children;
	for(let slide of slides){
		slide.style.display = "none";
	}
	slides[0].style.display = "block";
	show.onclick = function(event){
		console.log(event.layerX);
		const width = show.clientWidth;
		if(event.layerX > show.clientWidth/2){
    		for(let i = 0; i < slides.length; i++){
        		if(slides[i].style.display == "block" && i < slides.length-1){
            		slides[i].style.display = "none";
            		slides[i+1].style.display = "block";
            		break;
        		}
    		}
		} else {
    		for(let i = 0; i < slides.length; i++){
        		if(slides[i].style.display == "block" && i >= 1){
            		slides[i].style.display = "none";
            		slides[i-1].style.display = "block";
            		break;
        		}
    		}
		}
	}
}
