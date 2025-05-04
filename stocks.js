function stocks(){
    fetch(`https://tradestie.com/api/v1/apps/reddit?date=2022-04-03`)
    .then((result)=> result.json())
    .then((resultjson)=> {
        //console.log(resultjson);

        const stocktable = document.getElementById("stock-table")
        for (let i = 0; i< 5; i++){
            stockObject = resultjson[i]
            const rowtable = document.createElement('tr')
            const ticker = document.createElement('td')
            ticker.className = "tic"
            const comment = document.createElement('td')
            comment.className = "class"
            const picture = document.createElement('td')
            picture.className = "pic"
            const link = document.createElement("a")
            const img = document.createElement("img")


            //// empty string /// 
            ticker.innerHTML = ""
            comment.innerHTML=""
            picture.innerHTML=""

            link.href = `https://finance.yahoo.com/quote/${stockObject.ticker}`
            link.textContent = stockObject.ticker
            link.target = '_blank'

            comment.textContent = stockObject.no_of_comments

            ticker.appendChild(link)
            rowtable.appendChild(ticker)
            rowtable.appendChild(comment)

            if(stockObject.sentiment === "Bullish"){
                picture.innerHTML = `<img src="bull.png" style= "width: 250px; height:250px; text-align: center;">`
            }
            else{
                picture.innerHTML =`<img src="bear.png" style= "width: 250px; height:250px; text-align: center;">`
            }
  
            picture.appendChild(img)
            rowtable.appendChild(picture)


            stocktable.appendChild(rowtable)
            


            //console.log(stocktable)
            //console.log(resultjson[i])

        }

        })
    

}
stocks()

function lookup(){
    const key ='5_8ODLPgh9d0ikMKT7pA4aJmjSrStDeF'
    ticker = document.getElementById('ticker-name').value
    const timespan = parseInt(document.getElementById('days').value)
    const toDate = new Date()
    const fromDate = new Date() 
    fromDate.setDate(toDate.getDate() - timespan)

    const from = fromDate.toISOString().split('T')[0]
    const to = toDate.toISOString().split('T')[0]
    const multiplier = 1

    console.log(from)
    console.log(to)


    fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/${multiplier}/day/${from}/${to}?apiKey=${key}`)
    .then((result)=> result.json())
    .then((resultjson)=> {
        console.log(resultjson)
        

        day_label = resultjson.results.map(item => new Date(item.t).toISOString().split('T')[0])
        prices = resultjson.results.map(item => item.c)

        chartarea = document.getElementById("chart-sec")
        myChart = document.createElement("canvas")
        chartarea.innerHTML = ""

        new Chart(myChart, {
        type: 'line',
        data: {
            labels: day_label,
            datasets: [{
            label: '($) Stock Price',
            data: prices,
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        
        });

        chartarea.appendChild(myChart)
        chartarea.style.display = "block"
        

    })
        
    }

    




