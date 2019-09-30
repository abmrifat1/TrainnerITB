class Animal{
    constructor(name,type){
this.name=name;
this.type=type;
    }
}

// let bird=new Animal("tweet","small bird");

this.amount=500;
Animal.prototype.numLegs=2



const getAmount=()=>{
    return this.amount;
}
let number=2
//console.log(getAmount());
// console.log(number instanceof Number);
//console.log(bird.numLegs);


// const getObjectProperties=(object)=>{
//     for(let eachKey in object){
//         console.log(object[eachKey]);
//     }
// }
//getObjectProperties(bird);

const getObjectProperties=object=>{
   let totalValue="";
   for(let eachKey in object){
    totalValue+=object[eachKey];
}
return replace(totalValue,(totalValue.length-1),".")

}
const replace=(str,index,value)=>{
    let newStr=str.split("");
    newStr[index]=value;
    return newStr.join("");
}

// console.log(getObjectProperties(bird));


const printName=()=>{
    name="test";
return name}

//getName(bird,tweet);

// const dig = (obj, target) =>
//   target in obj
//     ? obj[target]
//     : Object.values(obj).reduce((acc, val) => {
//         if (acc !== undefined) return acc;
//         if (typeof val === 'object') return dig(val, target);
//       }, undefined);

const data = {
    level1: {
      level2: {
        level3: 'some data'
      }
    }
  };

  let bird={
    info:{
        name:{
            value:"tweet"
        }
    }
}
const getData=(obj,key)=>{
    if(key in obj){
       return obj[key]
    }else{
       return Object.values(obj).reduce((acc,val)=>{
          if(acc!==undefined) return acc;
            if(typeof val==="object") return getData(val,key);
        },undefined)
    }
}


console.log(getData(bird,"name"))

