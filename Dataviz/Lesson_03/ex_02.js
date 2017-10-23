var my_data=[1,2,3]

//trasformare il dataset con gli attributi che permettonon di disegnare gli archi

var Pie= d3.pie()
                .value(function(d){return d})

var dataPie=Pie(my_data)

console.log(dataPie)

var myArc=d3.arc()
                .innerRadius(0)
                .outerRadius(100)

//collegare il dataset alla costruzione degli archi in maniera iterativa
color= ['blue','red','black']
d3.select('svg')
    .selectAll('path')
    .data(dataPie)//itero per il dataset arricchito con gli attributi per disegnare i vari archi
    .enter()//di applicare quando nella pagine non sono presenti i path
    .append('path')
    .attr('transform', 'translate(120,120)')//traslo
    .attr('d', function(d){return myArc(d)})// l'attributo d viene valorizzato con i punti resituiti dalla funzione arc
    .style('fill', function(d,i){ return color[i] })