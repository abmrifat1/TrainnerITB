function whileLoop() {
  var check = true;
  var i = 0;
  while (check) {
    if (i === 10) {
      check = false;
    }
    console.log(i);
    i++;
  }
}
// whileLoop();
// groceries=[{item:"veg",itemPrice:20}]

// "Todays shopping : veg-20,pencil-30"

// function doWhileLoop(){
//   var i=1;
//   do{
//     if(i%2===1){
//       console.log(i);
//     }
//     i++;
//   }while(i<=20)
// }
// //doWhileLoop();

// function forLoop(){
//   for(var i=10;i>=1;i--){
//     if(i%2==0){
//       console.log(i);
//     }
//   }
// }
// //forLoop();

function forEachLoop(){
  var data=[null,2,0,undefined,3];
  data.forEach(number => {
    if(number%2==0){
      console.log(number);
    }
  });
}

// forEachLoop()

function ternaryStatement(a,b){
  return large=a>b?a:b;
}
// console.log(ternaryStatement(5,6))


function getData(number){
 const data=0;
  const record={
    name:"sample"
  }
  // record={
  //   name:"test"
  // }
  
  if(number===1){
    return data=22;
  }
 return data;
  // return record;
}
//console.log(getData(1));

// getInfo=()=>{
//   return "info not found";
// }

// console.log(getInfo());

module.exports ={
  returnOddNumber:(number)=>{
  if(number%2==0){
    return true;
  }return false;
}}

// doSomethingWithNumber=(number,functionAsParam)=>{
//  console.log(functionAsParam(number));
// }

// doSomethingWithNumber(34,returnOddNumber);

// replaceSubString("he","H")
// data="hello"
// output="Hllo"
// const educationInfo={
//   hsc:{}
// }

var previous=[7,9]
var newData=["hi","ki"]
var arr=['ssc']

const updateEducation=(newData,previous)=>{
  currentInfo={
    ...previous,
    // ...newData,
  }
  return currentInfo;
}
//console.log(updateEducation(newData,previous))

let student=[["Luke May", 43, "male", "married"],
["Sarah Saw", 54, "female", "single"],
["Magac gose", 51, "male", "single"]
]
var keys = ["name", "age", "gender", "status"];
let objArr=[]
student.forEach(r=>{
  let obj={};

  r.forEach((r,i)=>{
     obj[keys[i]]=r
  })
  //console.log(obj)
  objArr.push(obj)

})
console.log(objArr)


