 const jsonData = require('./data.json');


// let result = jsonData.filter(function(json){
//     return json['winner'] === 'Kolkata Knight Riders';
// });
// console.log(result);


// let result = jsonData.reduce()




//season per matches count

// const result = jsonData.reduce((accumulator, currentValue)=>{
//     var key=currentValue['season'];
//     if(accumulator[key]){

//         accumulator[key]++;
//     }else{
//         accumulator[key]=1;
//     }
//     return accumulator;

// },{});
// console.log(result);


const result = jsonData.reduce((accumulator,currentValue)=>{
    var team1 = currentValue['team1'];
    // var team2 = currentValue['team2'];
    var season = currentValue['season'];
        if(accumulator[season]){
        if(accumulator[season][team1]){
          
                accumulator[season][team1]+=1
                
            }
             else{
                accumulator[season][team1]=1;
            }
        }else{
            accumulator[season] = {[team1]:1}
        }
             return accumulator;
 },{});

console.log(result);
    // var kkk = jsonData.reduce((acc,item)=>{
    //     var skey = currentValue['season'];
    //     if(acc[skey]){
    //         acc[skey]++;
    //     }else{
    //         acc[skey]=1;
    //     }
    //     return acc;
    // },{})
    
//     return accumulator
// },{});
// console.log(result);
























// let obj={};
// let count={};
// for(let i=0;i<jsonData.length;i++){
//     if(jsonData[i]['season']==='2017' ){
//         const val=jsonData[i]['team1'];
//         if(val in count){
//             count[val]=count[val]+1;
//         }else{
//             count[val]=1;
//         }
//      }
//      if(jsonData[i]['season']==='2016'){
//         const val=jsonData[i]['team1'];
//         if(val in count){
//             count[val]=count[val]+1;
//         }else{
//             count[val]=1;
//         }
//       }
       
//     if(jsonData[i]['season']==='2017'){
//            obj[jsonData[i]['season']]={count};
// }


// if(jsonData[i]['season']==='2016'){
//     obj[jsonData[i]['season']]={count};
// }
// }

// console.log(obj)