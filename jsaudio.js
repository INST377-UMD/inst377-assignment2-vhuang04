if (annyang) {
    console.log('making commands')
    var commands = {
        "Hello": greetings,
        'Change the color to :color' : changeColor,
        'Navigate to Home Page' : toHomePage,
        'Navigate to Stocks' : toStocks,
        'Navigate to Dogs' : toDogs,
        'Lookup :stock' : lookupStocks
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
function lookupStocks(){
    
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





