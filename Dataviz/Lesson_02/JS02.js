var dataset=[{age:20},
            {age:20},
             {age:20}]

function buildMyChart(){
    var myRect = d3.select('svg')
                        .selectAll('rect')
                        .data(dataset)
    
    myRect.enter()
            .append('rect')
            .attr('height',function(d,i){
                return Math.abs(d.age)
                })
            .attr('width',50)
            .attr('x', function(d,i){
                return i*52
            })
            .attr('y', function(d,i) {
                return 120 - Math.max(d.age,0)
            })
            .on('mouseover',function(d,i){
                    d.selected=true //qui creo un nuovo attributo sul rettangolo dove sotto il mouse
                    d3.select(this)
                        .style('fill','yellow')
            })
    //gestisce il rimuovi dell'oggetto
    myRect.exit()
        .remove()
    
    //gestisce l'update
    myRect.attr('height', function(d,i){
                return d.age
        
                })
            .attr('y', function(d,i){ return 120 - d.age
                  })
    
    
}


d3.select('#aggiungi')
    .on('click',function(){
    dataset.push({ age:Math.random() *100})
    buildMyChart()
})
d3.select('#remove')
    .on('click',function(){
    dataset.splice(0,1)
    buildMyChart()
})
d3.select('#update')
    .on('click',function(){
    dataset.forEach(function(d,i){
             d.age=20
    })
    buildMyChart()
})