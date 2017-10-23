// fare una pie chart con la proporzione dell'eta degli atleti


d3.csv('athletes_sochi.csv',function(err,data)
       {
       
       
       console.log(data)
       
    var byAge= d3.nest()
                    .key(function(d,i)
                    {
                        return d.age    
                    })
                    .sortKeys(d3.ascending)
                    .entries(data)
    console.log(byAge)
    
    //var maxlength= d3.max(function (d,i) { return byAge.values.len})
    
    //console.log(maxlength)
    
/*var pieScala=d3.scaleLinear()
                    .domain([0,230])
                    .range([0,100])
 */   
//definiscio solo la funzione e il dataset viene referenziato una volta che lo invoco
    var myPie= d3.pie() 
                .value(function(d,i){
                       return d.values.length
                       })

// passandogli il dataset ho collegato il dataset byAge con la variabile d usata nella funzione myPie
var pieDataset=myPie(byAge)
                       
    console.log(pieDataset)

var myArc = d3.arc()
                .innerRadius(function(d,i){return 10})
                .outerRadius(function(d,i){return 100})
 
/*
non  necessario passare una scala, la ristrutturazione del dataset lo fa in automatico
var pieScala=d3.scaleLinear()
                    .domain([0,230])
                    .range([0,100])

*/
var colors = d3.scaleOrdinal(d3.schemeCategory20) // mi permette di generare una scala di colori 

d3.select('svg')
    .selectAll('path')
    .data(pieDataset)
    .enter()
    .append('path')
    .attr('transform','translate(120,120)')
    .attr('d',function(d,i){
                return myArc(d)// il dataset che ho creato conterra gli attributi necessari a arc per funzionare correttamet
        })
    .style('fill',function(d,i)
            {
                return colors(i)
            }
          )

    
    
    
    
    
    
})
