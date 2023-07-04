function checkloc(location) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (location === "paris") {
        resolve("Lets take a trip to paris");
      } else reject("Invalid location");
    }, 1000);
  });
}
let userloc = prompt("Enter the loc");
checkloc(userloc)
  .then((result) => {
    console.log("Result" + result);
  })
  .catch((error) => {
    console.log("error :" + error);
  });
