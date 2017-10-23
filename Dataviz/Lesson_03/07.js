d3.csv('athletes_sochi.csv', function(err,data){
    
    
    
   var  byAge=d3.nest()
                .key(function(d,i){

                return d.age
            })
            .sortKeys(d3.ascending)
            .entries(data)
    
    console.log(byAge)
    
    
    d3.select('svg')
        .selectAll('rect')
        .data(byAge)
        .enter()
        .append('rect')
        .attr('x', function(d,i){
        
        return i*10
                })
        .attr('width',9)
        .attr('height', function(d,i){
        
        return d.values.length
                })
    
        .attr('y', function(d,i){
        
        return 300 - d.values.length
                })
        .on('mouseenter', function(d,i){
             var male=  d3.sum(d.values,function(c)
                      {
                        if(c.gender == 'Male'){
                            return 1
                        }else {return 0}
                        
                    })
        
                var gender = [male, d.values.length -male]
                var pieGen =d3.pie()
                console.log(pieGen(gender))
                updatePie(pieGen(gender))
                })
        .on('mouseleave',function(d,i)
            {
                d3.select(this)
                    .style('fill','black')
                    })
    
         function updatePie(d)
        {
        var mypie= d3.pie()
                        .value(function(d,i)
                        {
                                
                        })
            
         }
    
})

