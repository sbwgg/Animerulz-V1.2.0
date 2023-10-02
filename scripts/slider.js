const slider = document.getElementsByClassName("slider")[0];
let slide_count = 1;
let number_of_anime_in_slider = 8;

  let commonHeight = window.innerWidth / 2.25;
  if(commonHeight > 666){
    commonHeight = 666;
  }
  else if(commonHeight < 300){
    commonHeight = 300;
  }

setGradientDivisionHeights(commonHeight);


function setGradientDivisionHeights(commonHeight){
  let sliderImage = document.getElementsByClassName("img-in-slide");
  for(let i = 0; i < sliderImage.length ; i ++){
    sliderImage[i].style.height  = commonHeight + 5 + "px";
  }
  // let gradientDiv1 = document.getElementsByClassName("gradient-division-1")[0];
  // let gradientDiv2 = document.getElementsByClassName("gradient-division-2")[0];
  // gradientDiv1.style.height = commonHeight + 5 + "px"; 
  // gradientDiv2.style.height = commonHeight + 5 + "px"; 
  // if(window.innerWidth < 1100)
  //     document.getElementsByClassName("slide-change-btns")[0].style.marginTop = commonHeight - 100 + "px" ;
  // else
  // document.getElementsByClassName("slide-change-btns")[0].style.marginTop = commonHeight - 100 + "px" ;
  // if(window.innerWidth <= 1500){
  //   if(window.innerWidth >= 1100)
  //     document.getElementsByClassName("bottom-container")[0].style.paddingTop = commonHeight + "px";
  //   else 
  //   document.getElementsByClassName("bottom-container")[0].style.paddingTop = commonHeight + 100 + "px";
  // }
}

let slide_containers = document.getElementsByClassName("slide-container");
let slide_container_height;
slide_container_height = slide_containers[0].offsetHeight;
let slider_height = document.getElementsByClassName("slider")[0].offsetHeight;
for(let i = 0; i < slide_containers.length ; i ++) {
    if(window.innerWidth > 650)
      slide_containers[i].style.paddingTop = (slider_height - slide_container_height) + "px";
    else 
    slide_containers[i].style.paddingTop = (slider_height - slide_container_height - 80) + "px";
// console.log(slide_container.offsetHeight);
}

const slide = document.getElementsByClassName("slide");
var activeSlide = document.querySelector(".slider");


const slideDot = document.getElementsByClassName("slide-dot");

let count = 0;

setTimeout(callChangeslide, 5000);
function callChangeslide(){
  let slideCount = setInterval(changeSlide, 4000);
}

function changeSlide(){
    slide[count].setAttribute("class", "slide");
    slideDot[count].setAttribute("class", "slide-dot");
    count = (count + 1 ) % 8;
    slide[count].setAttribute("class", "slide active-slide");
    slideDot[count].setAttribute("class", "slide-dot active-slide-dot");
    
}
function changeSlideByDot(x){
    slide[count].setAttribute("class", "slide");
    slideDot[count].setAttribute("class", "slide-dot");
    slide[x-1].setAttribute("class", "slide active-slide");
    slideDot[x-1].setAttribute("class", "slide-dot active-slide-dot");
    
    count = (x-1) % 8;
}
function changeSlideByBtn(y){
    if(y == 1 ){
        previousSlide();
    }else{ 
        nextSlide();
}
}

function previousSlide(){
  // let temp = '@keyframes slideIn{0%{opacity:0.3;clip-path: polygon(0 0, 26% 0, 26% 100%, 0 100%, 0 47%);}25%{opacity:0.5;clip-path: polygon(0 0, 50% 0, 48% 100%, 0 100%, 0 47%);}50%{opacity:0.8;clip-path: polygon(0 0, 67% 0, 64% 100%, 0 100%, 0 47%);}75%{opacity:0.9;clip-path: polygon(0 0, 82% 0, 81% 100%, 0 100%, 0 47%);}100%{opacity:1;}}';
    slide[count].setAttribute("class", "slide");
        slideDot[count].setAttribute("class", "slide-dot");
        if(count != 0){
            // slide[count-1].setAttribute("style", temp);
            slide[count-1].setAttribute("class", "slide active-slide");
            slideDot[count-1].setAttribute("class", "slide-dot active-slide-dot");
            count = (count - 1) % 8;
        }else{
            // slide[5].setAttribute("style", temp);
            slide[7].setAttribute("class", "slide active-slide");
            slideDot[7].setAttribute("class", "slide-dot active-slide-dot");
            count = 7;
        } 
}
function nextSlide(){
  slide[count].setAttribute("class", "slide");
        slideDot[count].setAttribute("class", "slide-dot");
        slide[(count+1) % 8].setAttribute("class", "slide active-slide");
        slideDot[(count+1) % 8].setAttribute("class", "slide-dot active-slide-dot");

        count = (count + 1) % 8;
}


    var touchStartX = 0;
    var touchEndX = 0;

    // Set up touch event handlers
    activeSlide.addEventListener('touchstart', handleTouchStart);
    activeSlide.addEventListener('touchend', handleTouchEnd);

    function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
      touchEndX = event.changedTouches[0].clientX;
      handleSwipe();
    }

    function handleSwipe() {
      if ((touchStartX - touchEndX) > 50){
        nextSlide();
      } else if ((touchEndX - touchStartX) > 50) {
        previousSlide();
      }
    }