d3.csv("athletes_sochi.csv",function(err,Mydata)
      {
            var dataItaly= Mydata.filter(function(d){
                
               return d.country="Italy"
            })
            console.log(dataItaly)
           var myItalySort= d3.nest()
                                .key(function(d) {return d.gender})
                                .key(function(d) {return d.sport})
                                .entries(Mydata)
             console.log(myItalySort)
    d3.select('svg')
        .selectAll('circle')
                .data(myItalySort)
                .enter()
                .append('circle')
                data(myItalySort[0])
                .enter()
                .append('circle')
        
    
    }
      
      
      )