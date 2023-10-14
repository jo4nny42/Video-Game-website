let index,index2,index3,index4,index5,index6,index7 = 1;
showSlides(index);
showSlides2(index2);
showSlides3(index3);
showSlides4(index4);
showSlides5(index5);
showSlides6(index6);
showSlides7(index7);

function currentSlide(n){
    showSlides(index=n);
}

function currentSlide2(n){
  showSlides2(index2=n);
}

function currentSlide3(n){
  showSlides3(index3=n);
}

function currentSlide4(n){
  showSlides4(index4=n);
}

function currentSlide5(n){
  showSlides5(index5=n);
}

function currentSlide6(n){
  showSlides6(index6=n);
}

function currentSlide7(n){
  showSlides7(index7=n);
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

function showSlides3(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder3");
  let dots = document.getElementsByClassName("time3");
  let captionText = document.getElementById("caption3");
  if (n > slides.length) {index3 = 1}
  if (n < 1) {index3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index3-1].style.display = " block";
  dots[index3-1].className += " active";
  captionText.innerHTML = dots[index3-1].alt;
}

function showSlides4(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder4");
  let dots = document.getElementsByClassName("time4");
  let captionText = document.getElementById("caption4");
  if (n > slides.length) {index4 = 1}
  if (n < 1) {index4 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index4-1].style.display = " block";
  dots[index4-1].className += " active";
  captionText.innerHTML = dots[index4-1].alt;
}

function showSlides5(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder5");
  let dots = document.getElementsByClassName("time5");
  let captionText = document.getElementById("caption5");
  if (n > slides.length) {index5 = 1}
  if (n < 1) {index5 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index5-1].style.display = " block";
  dots[index5-1].className += " active";
  captionText.innerHTML = dots[index5-1].alt;
}

function showSlides6(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder6");
  let dots = document.getElementsByClassName("time6");
  let captionText = document.getElementById("caption6");
  if (n > slides.length) {index6 = 1}
  if (n < 1) {index6 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index6-1].style.display = " block";
  dots[index6-1].className += " active";
  captionText.innerHTML = dots[index6-1].alt;
}
function showSlides7(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder7");
  let dots = document.getElementsByClassName("time7");
  let captionText = document.getElementById("caption7");
  if (n > slides.length) {index7 = 1}
  if (n < 1) {index7 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index7-1].style.display = " block";
  dots[index7-1].className += " active";
  captionText.innerHTML = dots[index7-1].alt;
}

function loz(){
  let zelda = document.getElementById("zeldaTimelines");
  if (zelda.style.display === "none"){
    zelda.style.display = "block";
  }else{
    zelda.style.display = "none";
  }
}