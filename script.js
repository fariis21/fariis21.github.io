const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn"); 
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
question. innerHTML = "aaaaaaa, i loveee u moreee peliiiiii";
gif.src =
"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
 });

noBtn.addEventListener("mouseover", () => {
const noBtnRect = noBtn.getBoundingClientRect();
const maxX = window.innerWidth - noBtnRect.width;
const maxY = window.innerHeight - noBtnRect.height;

const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

noBtn.style.left = randomX + "px"; 
noBtn.style.top = randomy + "px"; 
});
