//random dog pic 
function randomdog(){
    for(let i = 0; i < 8; i++){
      let index = 1;
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((result)=> result.json())
        .then((resultjson) => {
            //console.log(resultjson);

            const container = document.getElementById("slideshow_container")
            //console.log(container)
            const slide = document.createElement("div")
            slide.className = "myslides fade"
            slide.innerHTML = `<img src="${resultjson.message}" style="width:80%; height:500px; text-align: center; margin-left:200px">`;
            if (i != 0){               
                 slide.style.display = "none"
            }

            container.appendChild(slide)


            if (i === 8) {
              showSlides(slideIndex);
            }

        })
    }
}
let slideIndex = 1
randomdog();



///////////////////////////////////////////////////////////
//slideshow


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
  fetch(`https://dogapi.dog/api/v2/breeds`)
  .then((result)=> result.json())
  .then((resultjson)=> {
    console.log(resultjson)

    const btncontainer = document.getElementById("dogbreedbtn")
    resultjson.data.forEach((breed) => {
      const btn = document.createElement("button")
      btn.className = "button-24"
      btn.type= "button"
      btn.textContent = breed.attributes.name

      btncontainer.appendChild(btn)
      console.log(btncontainer)
      btn.addEventListener("click",()=>{
        // containers //
        const factsection = document.getElementById("dog-facts")
        const namesec = document.getElementById("name-breed")
        const descr = document.getElementById("descr")
        const maxs = document.getElementById("max")
        const mins = document.getElementById("min")
 
        namesec.innerHTML = ""
        descr.innerHTML = ""
        maxs.innerHTML = ""
        mins.innerHTML = ""

        ////// name /////////
        breedname = document.createElement("h2")
        breedname.className= "name-text"
        breedname.textContent = "Name: "+ breed.attributes.name

        namesec.appendChild(breedname)
        namesec.style.display= "block"
       

        ///// description /////
        facttext = document.createElement("h3")
        facttext.className = "fact-text"
        facttext.textContent = "Description: " + breed.attributes.description

        descr.appendChild(facttext)
        descr.style.display= "block"
        //// max //// 
        maxlife = document.createElement("h3")
        maxlife.className = "fact-text"
        maxlife.textContent = "Max life: " + breed.attributes.life.max

        maxs.appendChild(maxlife)
        maxs.style.display= "block"
        /// min // 
        minlife = document.createElement("h3")
        minlife.className = "fact-text"
        minlife.textContent = "Min Life: " + breed.attributes.life.min

        mins.appendChild(minlife)
        mins.style.display= "block"
        
        factsection.style.display = "block"

      })
      });



  })

}


dogsapi();


