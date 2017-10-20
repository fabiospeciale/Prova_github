var dataset =[3,5,10]
var myRect = d3.select('svg')    
            .selectAll('rect')
            .data(dataset)
            .enter() /* viene applicato ai rettangoli non presenti nel foglio*/
            .append('rect')
            .attr('height',0)
            .attr('width',50)
            .attr('x',0)
            .attr('y',0)


    myRect.transition()
            .duration(3000)
            .attr('height',function(d,i){
                  return d*10})
            .attr('x',function(d,i){ return i*52})
            .attr('y',function(d,i) {return 100- d*10})

    myRect.on('mouseenter', function(){d3.select(this)
                                 .attr('fill','red')})
    myRect.on('mouseleave',function(){d3.select(this)
                                    .attr('fill','yellow')})


/*

PER APPLICARE GLI ON() AI RECT BISOGNA PASSARE PER LE VARIABILI ALTRIENTI VIENE AGITO SULLE TRANSITION ANZICHE SUI RECT, ALLORA DEFINENDO UNA VARIABILE CHE CONTIENE IL RECT, SI PUO MANTENERE LA SELEZIONE
*/