d3.csv('athletes_sochi.csv',function(err,MyData)
       {
            if(err){
                        console.log(err)
                        return
                    }
            console.log(MyData)

            var maxWeight=d3.max(MyData, function(d)
                                {
                                    return +d.weight
                                })
            var maxHeigt=d3.max(MyData, function(d)
                                {
                                    return +d.height
                                })
            console.log(maxHeigt)
            var mapX=d3.scaleLinear()
                        .range([20,400])
                        .domain([0,maxWeight])

            var mapY = d3.scaleLinear()
                        .domain([0,maxHeigt])
                        .range([400,0])/// ho invertito la scala in maniera da ribaltare l'asse Y dove lo zero si trovava in alto anziche in basso

            d3.select('svg')
                .selectAll('circle')
                .data(MyData)
                .enter()
                .append('circle')
                .attr('r',3)
                .attr('cx', function(d,i){
                        return mapX(d.weight)
                        })
                 .attr('cy', function(d,i){
                        return mapY(d.height)
                    })   
                .style('opacity', .1)
            
var myAxis = d3.axisBottom(mapX)
                    .ticks(5)// indica il numero di barrette che voglio disegnare sull'asse
var myYAxis=d3.axisLeft(mapY)
                    .ticks(10)

            d3.select('svg')
                .append('g')
               .attr('transform', 'translate(20,10)')
                .call(myAxis)
            d3.select('svg')
                .append('g')
                .attr('transform','translate(30,0)')
                .call(myYAxis)


    
        })






console.log('prima')