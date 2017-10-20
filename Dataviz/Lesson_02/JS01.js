var dataset=[{age:20},
            {age:21},
            {age:-10}]

d3.select('svg')
    .selectAll('rect')
    .data(dataset)
    .enter()
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
