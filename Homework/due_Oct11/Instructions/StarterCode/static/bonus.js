// d3.json("samples.json").then(function(data) {
//     console.log(data);
//  });


const dataPromise = d3.json("samples.json");
    console.log(dataPromise);



function unpack(rows, index) {
    return rows.map(function(row){
        return row[index]
    });
}

var sample_data = d3.json("samples.json");

function buildPlot() {
  d3.json("samples.json").then(function(data) {  
    var name = data.metadata.id;
    var ids = data.samples.otu_ids;
    var labels = data.samples.otu_labels;
    var values = data.samples_values;

    var bar_data = [
        {
          y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
          x:values.slice(0,10).reverse(),
          text:labels.slice(0,10).reverse(),
          type:"bar",
          orientation:"h"
    
        }
      ];

      var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
      };
    
      Plotly.newPlot("bar", bar_data, barLayout);
  
    })
}
buildPlot()



    //  var samples = data.samples;
//         var resultsArray = samples.filter(sampleObject => 
//             sampleObject.id == sample);
//         var result = resultsArray[0];
//         var ids = result.otu_ids;
//         var labels = result.otu_labels;
//         var values = result.sample_values;