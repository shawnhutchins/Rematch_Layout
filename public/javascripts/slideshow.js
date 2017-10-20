var slideIndex = 1;
var slideTimer; 
var slideDelay = 5000;
var mySlides = document.getElementsByClassName("mySlides");
showDivs(slideIndex);

function startSlideTimer() {
  slideTimer = setTimeout(function(){
    slideIndex++;
    if ( slideIndex > mySlides.length ) {
      slideIndex = 1;
    }
    showDivs(slideIndex);
  }, slideDelay);
  console.log("timer  set"); 
}

function stopSlideTimer() {
  clearTimeout(slideTimer);
  console.log("clearing the timer");
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  console.log(n + " n at the start");
  console.log(slideIndex + " slideIndex at the start");
  var i;
  var dots = document.getElementsByClassName("demo");
  //if the value passed is larger then there are slides se back to the start
  if (n > mySlides.length) {
    slideIndex = 1;}
  //if the valude passed is less than 1 set to the last slide
  if (n < 1) {
    slideIndex = mySlides.length;
  }
  //make all the slides not visible
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";
  }
  //make the selected slide visible
  console.log(slideIndex + " slideIndex right before error");
  mySlides[slideIndex-1].style.display = "block";

  //removes the w3-white class with nothing making them empty
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", ""); 
  }
  //makes the dot that represents the current slide white
  dots[slideIndex-1].className += " w3-white";
  stopSlideTimer();
  startSlideTimer();
}
