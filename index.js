const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const FileSystem = require("fs");

CSVToJSON().fromFile("./data.csv").then(source => {
   //creating source.json
    FileSystem.writeFile('data.json', JSON.stringify(source, null, 4), (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON array is saved.");
            });
        });
    // end to source.json        
//             function getFields(input, field) {
//                 var output = [];
//                 for (var i=0; i < input.length ; ++i){
//                     output.push(input[i][field]);
//                 }
//                 return output;
//             }
//     //calling function for seasonalmatches     
//             var result = getFields(source, "season");
//             var count = {};
//             result.forEach(function(i) { count[i] = (count[i]||0) + 1;});        
//             FileSystem.writeFile('seasonMatches.json', JSON.stringify(count, null, 4), (err) => {
//                 if (err){
//                     throw err;
//                 }
//                 console.log("JSON array is saved.");
//     });
//     //end to seasonMatches.json
 
//           catch(err => {
//                                      // log error if any
//             console.log(err);
//  });
