//costruzione di una piechart

var dataset=[3,4,50,3,40]
var myPie= d3.pie() 
                .value(function(d,i){
                       return d
                       })
var pieDataset=myPie(dataset)
                       
    console.log(myPie(dataset))

var myArc = d3.arc()
                .innerRadius(function(d,i){return 0})
                .outerRadius(function(d,i){return 100})


var colors = d3.scaleOrdinal(d3.schemeCategory10) // mi permette di generare una scala di colori 
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
