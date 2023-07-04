var inp=prompt("Enter sentence");
let r=/\d{2}\/\d{2}\/\d{4}/

alert(inp);
var n=inp.match(r);
if(n)
    alert("Found at "+n[0])
else
    alert("not exist")
