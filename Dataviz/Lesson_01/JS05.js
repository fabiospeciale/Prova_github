var dataset =[3,5]
d3.select('svg')    
    .selectAll('rect')
    .data(dataset)
    .enter() // viene applicato ai rettangoli non presenti nel foglio
    .append('rect')
    .attr('width',50)
    .attr('height',function(d,i){
          return d*10})
    .attr('x',function(d,i){ return i*52})
    .attr('y',function(d,i) {return 100- d*10})
    .on('mouseenter', function(){d3.select(this)
                                    .attr('fill','red')})
    .on('mouseleave',function(){d3.select(this)
                                    .attr('fill','yellow')})