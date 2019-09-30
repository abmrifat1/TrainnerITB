let data=[2,3,4,5,6,6];
let newData=data.map((item,index)=>{
    //console.log(`${index}: ${item}`);
     return item*2;
}).filter(item=> item%2===0).reduce((x,y)=> x+y);

console.log(newData,data);

//(()=> console.log(3))();

// const engineers=[
//     {
//         sector:"computer",
//         career:"programmer",
//         company:"itb",
//         salary:10000
//     },
//     {
//         sector:"computer",
//         career:"programmer",
//         company:"itb",
//         salary:11000
//     },
//     {
//         sector:"computer",
//         career:"programmer",
//         company:"itb",
//         salary:12000
//     },
// ]
// let collection=[];
// const dataWithoutDuplicate=data.reduce((a,b)=>{
//     console.log(a+b);
//   })
// console.log(collection);



