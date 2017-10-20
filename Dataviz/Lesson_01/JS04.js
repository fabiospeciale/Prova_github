var g1=d3.select('svg')
            .append('g')
            .attr('fill','red')
var g2=d3.select('svg')
            .append('g')
            .attr('fill','yellow')
var g3=d3.select('svg')
            .append('g')
            .attr('fill','green')

g1.append('rect')
    .attr('width',50)
    .attr('height',100)
g1.append('text')
    .text('1')
    .attr('x',25)
    .attr('y',120)
    .attr('text-anchor','middle')
g2.append('rect')
    .attr('width',50)
    .attr('height',50)
g2.append('text')
    .text('2')
    .attr('x',25)
    .attr('y',70)
    .attr('text-anchor','middle')
g2.attr('transform','translate(60,50)')
g3.append('rect')
    .attr('width',50)
    .attr('height',50)
g3.append('text')
    .text('2')
    .attr('x',25)
    .attr('y',70)
    .attr('text-anchor','middle')
g3.attr('transform','translate(120,50)')

d3.selectAll('rect')
    .on('click',function(){
        var me=d3.select(this)
        if(me.attr('fill')==='red'){
           me.attr('fill','green')}
        else{me.attr('fill','red')}
           
        
})

