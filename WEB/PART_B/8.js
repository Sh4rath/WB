var inp = prompt("Enter email");
var r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (r.test(inp)) alert("Valid");
else alert("Invalid");
