//random dog pic 
function randomdog(){
    for(let i = 0; i < 8; i++){
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((result)=> result.json())
        .then((resultjson) => {
            console.log(resultjson);

            const container = document.getElementById("slideshow_container")
            console.log(container)
            const slide = document.createElement("div")
            slide.className = "myslides fade"
            slide.innerHTML = `<img src="${resultjson.message}" style="width:100%; height:500px;">`;
            if (i != 0){               
                 slide.style.display = "none"
            }

            container.appendChild(slide)

        })
    }
}

window.onload = randomdog;



///////////////////////////////////////////////////////////
//slideshow
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



/////////////////////////////////
//api dogs 

function dogsapi(){
    fetch(``)
}


