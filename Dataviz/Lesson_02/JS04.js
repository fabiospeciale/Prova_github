/* deve creare per ogni cerchio una etichetta con il nome, per farlo bisogna gestirlo con il gruppo 

ATTENZIONE CHE IL POSIZIONAMENTO VA FATTO SUL GRUPPO E NON SUL CERCHIO QUESTO PERCHE DEVE ESSERE SPOSTATO OLTRE AL CERCHIO ANCHE IL TESTO

ATTENZIONE: C'E UN ERRORE CONTROLLARE CON IL FLE js05 DEL PROF 
*/
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

         var myGroup=   d3.select('svg')
                .selectAll('g')
                .data(MyData)
                .enter()
                .append('g')
               .attr('transform', function(d,i)
                      {
                                    return `translate(${mapX(d.weight)},${mapY(d.height)})`
                        })
    
    
    
    
            myGroup.append('circle')
                .attr('r',3)
                .style('opacity', .1)
              
            myGroup.append('text')
                    .text(function(d,i){ return d.name})
                    .attr('text-anchor','middle')
                    .style('opacity',0)




    my_Group.on('mouseenter', function()
                        {
        
                            d3.select(this)// mi seleziona l'intero gruppo
                                .select('text') //seleziono solo il text contenuto nel gruppo
                                .style('opacity',1)          
                        }  
    my_Group.on('mouseleave', function()
                        {
        
                            d3.select(this)// mi seleziona l'intero gruppo
                                 .select('text') //seleziono solo il text contenuto nel gruppo
                                  .style('opacity',0)          
                        }  
    
    
        })






console.log('prima')