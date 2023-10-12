let index = 1;
let index2 = 1;
showSlides(index);
showSlides2(index2);


function nextSlide(n){
    showSlides(index+=n);
}


function currentSlide(n){
    showSlides(index=n);
}


function nextSlide2(n){
  showSlides2(index2+=n);
}


function currentSlide2(n){
  showSlides2(index2=n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = " block";
  dots[index-1].className += " active";
  captionText.innerHTML = dots[index-1].alt;
}

function showSlides2(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder2");
  let dots = document.getElementsByClassName("Demo");
  let captionText = document.getElementById("caption2");
  if (n > slides.length) {index2 = 1}
  if (n < 1) {index2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index2-1].style.display = " block";
  dots[index2-1].className += " active";
  captionText.innerHTML = dots[index2-1].alt;
}