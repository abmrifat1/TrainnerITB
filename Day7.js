// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("done"),1000);
// }).then(result=>4*4).catch(error=>{
//     console.log(error+" error");
// })
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("error happened"),10000);
}).catch(error=>{
    console.log(error);
 })
// console.log(promise);
// promise.then(result=>console.log(result+" what"))

// promise.then(result=>console.log(result))

const getData=async()=>"Sample"
getData().then(result=>console.log(result))

const doSomething=async()=>{
    let something=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(15),1000)
    })
    const data= await something;
    console.log(data);
}
doSomething();

// [1,2,3,4,5,6,6]=arr.slice(2)=[3,4,5,6,6]=arr.slice(2)=[3,4,5,6,6]
// [1,2,3,4,5,6,6]=arr.splice(2)=[3,4,5,6,6]=arr.splice(2)=[5,6,6]

class Book{
    constructor (aurthor){
        this.aurthor=aurthor;
    }
       get writer(){
        return this.aurthor;
    }

      set newWriter(updateAuthoe){
        this.aurthor=updateAuthoe;
    }
}
const book=new Book('kazi nojrul');
console.log(book.writer);
book.newWriter='robi thakur';
console.log(book.writer)