function asyncFun1()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Function 1 in 1sec");
            resolve();
        },1000)
        
    })
}
function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Function 2 in 2sec");
      resolve();
    }, 2000);
  });
}
function asyncFun3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Function 3 in 3sec");
      resolve();
    }, 3000);
  });
}
asyncFun1()
.then(()=>{
    return asyncFun2()
})
.then(()=>{
    return asyncFun3()
})
.then(()=>{
    console.log("All 3 functions completed")
})
.catch((error)=>{
    console.log("error ")
})