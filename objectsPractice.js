let x={a:{b:2}}
let y=x;

console.log(x,"x----before---assiagning--")

x=1;
console.log(y,x,"y---after x---change");
let z=y.a

console.log(z,"z-------after y.a")
y=3;
console.log(z,"zzzzzagter y=3----")
