if (annyang) {
    console.log('making commands')
    var commands = {
        "Hello": greetings,
        'Change the color to :color' : changeColor,
        'Navigate to Home Page' : toHomePage,
        'Navigate to Stocks' : toStocks,
        'Navigate to Dogs' : toDogs,
        'Lookup *stock' : lookupStocks,
        'Search *breedname' : breed
    } 
    console.log('done making commands')
}
//// functions 
function greetings(){
    console.log("hello")
    alert("Hello to you!")
    
}

function changeColor(color){
    const body = document.getElementById("back")
    body.style.backgroundColor = color
}
function toHomePage(){
    window.location.href = "homepage.html"
}
function toStocks(){
    window.location.href = "stocks.html"
}
function toDogs(){
    window.location.href = "dogs.html"
}
function lookupStocks(stock){
    const textbox = document.getElementById("ticker-name")
    textbox.value = stock.toUpperCase()
    console.log(stock.toUpperCase())
    
    lookup()
}


function breed(breedname){
    fetch(`https://dogapi.dog/api/v2/breeds`)
    .then((result)=> result.json())
    .then((resultjson)=> {
        console.log(resultjson)
        dogfacts = breedname.toLowerCase()
        console.log(dogfacts.toLowerCase())
        resultjson.data.forEach((dogbreed) => {
            dogbreedname = dogbreed.attributes.name.toLowerCase()
            if(dogfacts== dogbreedname){
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
                breedname.textContent = "Name: "+ dogbreed.attributes.name

                namesec.appendChild(breedname)
                namesec.style.display= "block"
            

                ///// description /////
                facttext = document.createElement("h3")
                facttext.className = "fact-text"
                facttext.textContent = "Description: " + dogbreed.attributes.description

                descr.appendChild(facttext)
                descr.style.display= "block"
                //// max //// 
                maxlife = document.createElement("h3")
                maxlife.className = "fact-text"
                maxlife.textContent = "Max life: " + dogbreed.attributes.life.max

                maxs.appendChild(maxlife)
                maxs.style.display= "block"
                /// min // 
                minlife = document.createElement("h3")
                minlife.className = "fact-text"
                minlife.textContent = "Min Life: " + dogbreed.attributes.life.min

                mins.appendChild(minlife)
                mins.style.display= "block"
                
                factsection.style.display = "block"

            }

        })
    })

}



///////////
annyang.addCommands(commands);
console.log('added commands')



function on(){
    console.log("it is on!");
    annyang.start(); 

}

function off(){
    console.log("it is off!");
    annyang.abort();
}





