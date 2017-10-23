torta =[1,2,3]
console.log(torta)
var myPie= d3.pie()
                .value(function(d,i)
                    {
                        return d   
                    
                    })

var mydatapie=myPie(torta)
console.log(mydatapie)
var myArc= d3.arc()
                .innerRadius(10)
                .outerRadius(200)

d3.select('svg')
    .append('path')
    .attr('transform','translate(120,120)')
    .attr('d',myArc({endAngle:Math.PI,startAngle:Math.PI/2}))
d3.select('svg')
    .append('path')
    .attr('transform','translate(120,120)')
    .attr('d',myArc({startAngle:0,endAngle:Math.PI/2}))