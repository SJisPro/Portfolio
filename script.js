const texts = ["AI ML Enthusiast", "Software Developer", "Tech Explorer"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typrWriter() {
  if (charIndex < texts[textIndex].length) {
    textElements.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typrWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    setTimeout(typrWriter, 500);
  }
}

window.onload = typrWriter;
