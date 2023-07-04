function jumpSearch(a,k)
{
    var n=a.length;
    var s=Math.floor(Math.sqrt(n))
    var p=0;
    while(a[Math.min(s,n)-1]<k)
    {
        p=s;
        s+=Math.floor(Math.sqrt(n));

        if(p>=n)
            return -1;

    }
    while(a[p]<k)
    {
        p++;
        
        if(p>=n)
            return -1;
    }
    if(a[p]==k)
        return 1;
    return -1;

}
let i1=prompt("enter array")
let a=i1.split(' ').sort();
let k=prompt("Enter key")
alert(a)
let x=jumpSearch(a,k)
if(x==1)
    alert("Present")
else
    alert("Absent")