var usn = prompt("Enter your usn");
let pattern = /^1[Nn][Tt][0-9]{2}[A-Za-z]{2}[0-9]{3}$/g;
if(pattern.test(usn)) 
    alert("Usn is correct");
else 
    alert("Wrong usn format");

// var inpu=prompt("Enter Usn")
// var r=/^1[Nn][Tt][0-9]{2}[A-Za-z]{2}[0-9]{3}$/g
// if(r.test(inpu))
//     alert("Valid Usn")
// else
//     alert("Inavlid Usn")