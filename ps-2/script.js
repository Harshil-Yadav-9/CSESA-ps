const slides = document.querySelectorAll(".hero img");
const circles = document.querySelectorAll(".rounds-3 button");
const btns = document.querySelectorAll(".btn button");
const img = document.querySelectorAll(".innovation img");
let slideIdx = 0;
let intervalId = null;

const images = [
    "solar-panel.png",
    "powerwall.png",
    "solar-roof.png",
    "megapack.png"
  ];


document.addEventListener("DOMContentLoaded",initializeSlider);
function initializeSlider(){
   if(slides.length > 0){
        slides[slideIdx].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
   }
}
function showSlide(index){
    if(index >= slides.length){
        slideIdx = 0;
    }
    else if(index < 0){
        slideIdx = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIdx].classList.add("displaySlide");
}
function prevSlide(){
    slideIdx--;
    showSlide(slideIdx);
}
function nextSlide(){
    slideIdx++;
    showSlide(slideIdx);
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btns.forEach((b) => b.classList.remove("border"));
        btn.classList.add("border");
    });
});

circles.forEach((circle,index) => {
    circle.addEventListener("click", () => {
        img.forEach((i) => i.classList.remove("displaySlide"));
        img[index].classList.add("displaySlide");
    });
});


