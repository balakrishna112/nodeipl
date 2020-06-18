 const data = require('./data.json');

var obj={};
      for(let i=0;i<data.length;i++){
         obj[data[i]['season']]=data[i]['team1'];
     }
     console.log(obj); 
     
// let object = {}

// object['name']='rish';
// {
//     "name":"rish"
// }
// object['age']=22;

// {
// 'name':'rish',
// 'age'"22
// }
// let result ={}
// {
//     object['name'] : object['age']
// }

//  var result=object[['name'],['age']]; 
// result[object['name']]=object['age']
//  console.log(result);
// { 
    //  "rishi": 22 
// }