var slideIndex = 1;
showSlidesTwo(slideIndex);
showSlidesOne(slideIndex);

function plusSlides(n) {
  showSlidesTwo(slideIndex = slideIndex + n);
}

function currentSlideOne(n) {
  showSlidesOne(slideIndex = n);
}

function currentSlide(n) {
  showSlidesTwo(slideIndex = n);
}

function showSlidesOne(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesOne");
  var dots = document.getElementsByClassName("slider--toggle--advantages");

  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "off");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className = dots[slideIndex-1].className.replace("off", "active");
}

function showSlidesTwo(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesTwo");
    var dots = document.getElementsByClassName("slider--toggle--review");

    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("activeTwo", "off");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className = dots[slideIndex-1].className.replace("off", "activeTwo");
}
