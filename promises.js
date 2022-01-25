// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();
// function upperString(name){
//     console.log(name.toUpperCase());
// }

// function reversedString(name){
//     console.log(name.split("").reverse().join(""));
 
// }

// function handleName(name,callback){
//     callback(name);
// }
// handleName("jhansi",upperString);
// handleName("jhansi",reversedString);



// let doproject = new Promise((resolve, reject) => {
//     //doing the project
//     let isprojectdone = true;
//     if (isprojectdone) {
//       resolve("Project is done");
//     } else {
//       reject("Project is not done");
//     }
//   });
  
//   let attendTechnical = new Promise((resolve, reject) => {
//     //attending the technical
//     let isattending = true;
//     if (isattending) {
//       resolve("Technical round is cleared");
//     } else {
//       reject("Technical round is not cleared");
//     }
//   });
  
//   let attendHrRound = new Promise((resolve, reject) => {
//     //attending the HR round
//     let isattending = false;
//     if (isattending) {
//       resolve("HR round is cleared");
//     } else {
//       reject("HR round is not cleared");
//     }
//   });
  
  // call the promise and chain the promises
  // doproject.then((msg) => {
  //   let themsg = `${msg}`;
  //   attendTechnical.then((msg) => {
  //     themsg += `${msg}`;
  //     attendHrRound
  //       .then((msg) => {
  //         themsg += `${msg}`;
  //         console.log(`${themsg}.FInally You have got the job`);
  //       })
  //       .catch((msg) => {
  //         console.log(`${msg}`);
  //       })
  //       .catch((msg) => {
  //         console.log(`${msg}`);
  //       })
  //       .catch((msg) => {
  //         console.log(`${msg}`);
  //       });
  //   });
  // });
  
  // Promise.all=>
  // it method takes an array of promises and return a promise
  // 1.resolved if all promises are fullfilled
  // 2.if one of promise gets rejected then all promise will get rejected
  
  // Syntax:
  // Promise.all([promise1,promise2,promise3])
  
//   const promisecollection = Promise.all([
//     doproject,
//     attendTechnical,
//     attendHrRound,
//   ]);
//   promisecollection
//     .then(function (result) {
//       console.log(result);
//       console.log("All promises are resolved");
//     })
//     .catch(function (err) {
//       console.log(err);
//       console.log("All promises are rejected");
//     });



let roomClean=new Promise((resolve, reject)=>{
  let isroomClean=true
   if(isroomClean){
       resolve("Room is cleaned")
   }
   else{
       reject("Room is not cleaned")
   }

})

let removeGarbage=new Promise((resolve, reject) => {
    let isremoveGarbage=true
    if(isremoveGarbage){
        resolve("Garbage is removed")
    }
    else{
        reject("Garbage is not removed")
    }
})

let getthePrice=new Promise((resolve, reject) => {
   let isgetthePrice=true
    if(isgetthePrice)
    {
        resolve("Got the Price")

    }
    else{
       reject("Oops!! You didn't get the price")
    }
})


//Using promises all

// let promiseArray=Promise.race([roomClean,removeGarbage,getthePrice]);
// let promiseArray=Promise.allSettled([roomClean,removeGarbage,getthePrice]);
let promiseArray=Promise.all([roomClean,removeGarbage,getthePrice]);
promiseArray
.then((result) => {
    console.log(result)
    console.log("All promises are resolved")
})
.catch((err) => {
    console.log(err)
    console.log("All promises are rejected")
})




// using promise chain 


// roomClean.then((result) => {
//     let theresult=`${result}`;
//     removeGarbage.then((result) => {
//         theresult +=`${result}`;
//         getthePrice.then((result)=>{
//             theresult+=`${result}`;
//             console.log(`${theresult}.Finnaly You got the Money`);
//         })
//         .catch((result)=>{
//             console.log(`${result}`);
//         })
//         .catch((result)=>{
//             console.log(`${result}`);
//         })
//         .catch((result)=>{
//             console.log(`${result}`);
//         })
// });
// });





// const  dog_btn=document.getElementById("dog_btn");
// const dog_result=document.getElementById("dog_result");
// dog_btn.addEventListener("click",function(){

// fetch("https://dog.ceo/api/breeds/image/random").then((response)=>{
//     response.json().then((data)=>{
//         dog_result.innerHTML=`<img src="${data.message}">`;

//     });

// })



// });


// let btn=document.getElementById("btn");
// let data=document.getElementById("data");



// const url="https://www.breakingbadapi.com/api/quote/random";
// btn.addEventListener("click", async ()=>{


//     data.innerHTML="Loading....."
//     //logic should be here

//     try{


//         let result=await fetch(url);
//         let object=await result.json()
//         // console.log(object[0].author);
        
//         data.innerHTML=`<div class="container"><h1>${object[0].author}</h1>
//         <p>${object[0].quote}</p>
//         <p>${object[0].series}</p>
//         </div>
//         `

//     }catch(error){
//         console.log(error)
//     }


// });
let btn=document.getElementById("btn");
let data=document.getElementById("data");


const url="https://randomuser.me/api/?gender=female&results=10";
let result=await fetch(url);
let results=await result.json()
        // console.log(object[0].author);
        
        data.innerHTML=`<div class="container">
        ${results[0].name.first}
        ${results[0].name.last}
        ${results[0].pictures.largest}
        </div>

        `

