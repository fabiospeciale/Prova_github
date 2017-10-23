//d3.json() mi carica un dataset in formato json

d3.json('countries.geo.json',function(err,data){
    
    console.log(data)
    
    var projection= d3.geoMercator()
        .scale((500+1)/2/Math.PI)
        .translate([250,250])
    
    var genPath= d3.geoPath()
                        .projection(projection)
    
    var colors =d3.scaleOrdinal(d3.schemeCategory20)
    d3.select('svg')
        .selectAll('path')
        .data(data.features) // mappare l'elenco di path con il dataset che deve essere un array, osservando data si vede che featurs contiene le nazioni
        .enter()
        .append('path')
        .attr('d', function(d,i){
        
        return genPath(d)
    })
    .style('fill',function(d,i){
        
        return colors(d.id)   // se passo a colors l'indice e faccio una funzione che colora al passaggio del mouse non riesco a rimetterlo al colore originario, se ho mappato al colore 'id invece si
    })
    
    
})