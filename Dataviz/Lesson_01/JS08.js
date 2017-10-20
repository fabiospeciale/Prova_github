var mydataset=[ 
    {altezza:50, etichetta:"1"},
    {altezza:70, etichetta:"2"} ,
    {altezza:30, etichetta:"3"} ,
    {altezza:10, etichetta:"4"} ,
    {altezza:100, etichetta:"5"} 
              ]


console.log(mydataset)

var my_group=d3.select('svg')
                .selectAll('g')
                .data(mydataset)
                .enter()
                .append('g')
                .attr('transform',function(d,i){ return 'translate('+ i*52 +',0)'  })
                



my_group.append('rect')
    .transition()
    .duration(3000)
    .attr('width',50)
    .attr('height',function(d,i){return d.altezza})
    .attr('y',function(d,i){return 100- d.altezza})

my_group.append('text')
    .text(function(d,i){return d.etichetta})
    .attr('text-anchor','middle')
    .attr('y','120')

my_group.selectAll("rect")
            .on("mouseenter",function(){ 
            d3.select(this)
                .attr('fill','red' )
            })
            .on("mouseleave",function(){ 
            d3.select(this)
                .attr('fill','yellow' )
            })





