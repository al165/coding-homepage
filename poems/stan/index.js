
function calculate_values (){
const left_value = document.getElementById('left-container').clientWidth;
document.getElementById('left-value').innerText = (`${left_value} px`) ;



const right_value = document.getElementById('right-container').clientWidth;
document.getElementById('right-value').innerText = (`${right_value} px`) ;
    
}

setInterval(calculate_values,2000);