const texts = ["aJ", "Aj", "AJ", "AHJ", "AAJJJ"];

const ajBlock = document.getElementById('showingHello');

let state = 0;
ajBlock.onclick = (e) => {
  ajBlock.innerHTML = texts[state%texts.length];
  state++;
}