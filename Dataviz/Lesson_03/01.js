var hSvg=300
var wSvg=300
var myData=[2,30,50,200]
var myXscale= d3.scaleLinear()
                .domain([0,myData.length-1])
                .range([0,500])
var max= d3.max(myData,function(d,i){return d})

d3.console(max)
var myYscale= d3.scaleLinear()
                .domain([10,max])
                .range([0,500])

console.log(myYscale(30))
console.log(myXscale(30))
var Myline=d3.line()
                .x(function(d,i) 
                   {
                    return myXscale(i)
                    
                   })
                 .y(function(d,i) 
                   {
                    return 500- myYscale (d)                    
                   })

d3.select ('svg')
      .append('path')
    .attr('d',Myline(myData))

