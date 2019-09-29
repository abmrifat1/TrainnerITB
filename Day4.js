let functionFromOther=require("./Day3");

const record={
    price:55
}
const personalInfo={
    name:"sample",
    age:23,
    info:{
        ...record,
    }
}

//const info=personalInfo;

let data={
    number:22
}

data={
    isNumber:true
}


record['name']="testy"
personalInfo.age=34;
console.log(record);
const info={...personalInfo,...record};
console.log(info);

const collection=[1,2,3,3,4,4];
const number=[...collection,...collection];
console.log(number);


const taskName="test";
const statement=`Currently i am doing ${taskName}`;
console.log(statement);
functionFromOther.returnOddNumber
console.log(functionFromOther.returnOddNumber(23));

 isFound=()=>{
const data=[1,2,3,3];
let isFound=false;
data.forEach(eachData=>{
    if(eachData===3){
        isFound=true
        return isFound;
    }
})
return isFound
 }
 console.log(isFound());