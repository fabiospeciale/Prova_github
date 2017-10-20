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
            var mapX=d3.scaleLinear()
                        .range([0,500])
                        .domain([0,maxWeight])

            var mapY = d3.scaleLinear()
                        .domain([0,maxHeigt])
                        .range([0,500])

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


    
        })






console.log('prima')