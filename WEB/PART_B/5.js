function flightbook()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var x=prompt("Have You Booked flight?\ny/n")==='y'?true:false
            if(x)
            {
                console.log("Flight Booked");
                resolve("Flight Booked");
            }
                
            else    
            reject(new Error("Error In booking Flight"))
        },1000)
    })
}
function hotelbook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var x = prompt("Have You Booked Hotel?\ny/n") === "y" ? true : false;
       if (x) {
         console.log("Hotel Booked");
         resolve("Hotel Booked");
       } else reject(new Error("Error In booking Hotel"));
    }, 2000);
  });
}

flightbook().then(()=>{
    return hotelbook()
}
).then(()=>{
    console.log("Successfull Booking")
}).catch((error)=>{
    console.log(error)
})