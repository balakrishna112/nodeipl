 const data = require('./data.json');

// function getfield(input,field){
//     var output = [];
//     for(var i=0; i < input.length; ++i)
//     {
//          output.push(input[i][field]);
//     }
//     return output;
// }
// const result=getfield(data,'season');
// console.log(result);
// console.log(data.length)

var count={};
 for(let i=0;i<data.length;i++){
     const season=data[i]['season'];
    if(season in count){
           count [season]++;
    }else{
        count[season]=1;
    }
     
    
}
for(let key in count){
    console.log(key,count[key]);
}




             
     

