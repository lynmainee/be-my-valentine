const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let scaleFactor = 1.0;

yesBtn.addEventListener("click", () => {
 
  const audio = new Audio("Twirly Tops - The Green Orbs.mp3");
   
  question.innerHTML = "Yay! HEHEHEHHEHEHE.<br>I love you, my forever valentine <3";
  gif.src = "giphy.gif";
  yesBtn.style.display = "none"; 
  noBtn.style.display = "none";
  audio.play();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  scaleFactor += 0.1;
  yesBtn.style.transform = `scale(${scaleFactor})`;
});
