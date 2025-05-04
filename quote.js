function quote(){
    fetch(`https://zenquotes.io/api/random`)
    .then((result)=> result.json())
    .then((resultjson)=>{
        console.log(resultjson)
        const textbox = document.getElementById("textbox")
        const author = document.getElementById("author")
        const text = document.createElement("p")
        const from = document.createElement("p")
        from.innerHTML = ""
        text.innerHTML = ""
        text.textContent = resultjson[0].q
        from.textContent = "- " + resultjson[0].a

        console.log(text)
        console.log(from)

        textbox.append(text)
        author.appendChild(from)
        

    })

}

quote()

