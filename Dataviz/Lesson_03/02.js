/*
plottare l'eta degli atleti nel file athletes_sochi.csv
*/

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
    
    var max= d3.max(function (d,i) { return d})
    var maxY= d3.max(function (d,i) { return d.value.lenght})
    console.log(maxY)
    
    var AsseX=d3.scaleLinear()
                    .range([0,200])
                    .domain([0,55])
    
    var AsseY=d3.scaleLinear()
                    .range([200,0])// devo invertire il mapping
                    .domain([0,230])
    
    var myArea = d3.area()
                    .x(function(d,i){
                   return AsseX(d.key)
                       
                       })
                    .y1(function (d,i){
                        
                        return  AsseY(d.values.length)
                    })
                    .y0(function (d,i){
                        return 200
                    })
    
    var MyasseX=d3.axisBottom(AsseX)
                    .ticks(10)
    var MyasseY=d3.axisLeft(AsseY)
                    .ticks(10)
    
    d3.select('svg')
        .append('g')
        .attr('transform','translate(50,200)')
        .call(MyasseX)
    
    d3.select('svg')
        .append('g')
        .attr('transform','translate(50,0)')
        .call(MyasseY)
    
    d3.select('svg')
        .append('path')
        .attr('d',myArea(byAge))
    
    
// aggiunta di cerchi per i data point
    
    
    d3.select('svg')
        .selectAll('circle')
        .data(byAge)
        .enter()
        .append('circle')
        .attr('r',3)
        .attr('fill','red')
        .attr('cx',function(d,i){
        return AsseX(d.key)
        
                })
      .attr('cy',function(d,i){
        return  AsseY(d.values.length)
        
    })
    

})

