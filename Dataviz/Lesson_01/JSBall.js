d3.select('svg')    
    .append('circle')
    .attr('r','20')
    .attr('cx','60')
    .attr('cy','60')
    .attr('fill','yellow')
    .on('click',function(){
       return d3.select(this)
        .attr('fill','red')
        .transition()
        .duration(1000)
        .attr('cx',function(){
            var me=d3.select(this)
            return me.attr('cx') -2'rs0
       })
        //.attr('cy','160')
        
})