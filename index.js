// Functions 
function add(a,b){
    return a + b;
}
add(3,4);

// function expression
var add1=function(a,b){
    return a + b;
}
add1(4,5);

// ES6 Arrow Functions
const add2=(a,b) => a + b;
const mul =(a,b) => a * b;

var res=mul(4,6);
console.log(res);

// Default parameters values
function demo(a,b,c){

    if(b===undefined){
      b=0;
}
if(c===undefined){
c=0;
}
return a + b + c;
};
let res1= demo(30,50);

const demo2 =(x,y=10,z=20)=>{
    return x + y + z;
}

const result=demo2(40);
console.log(result);

// String concatination
var name =' Anam';
var greeting = 'Happy Birthday';

var message = greeting + name+ ' Have a great year ahead';
console.log(message);

// Templates Literates

const mes = `${name} ${greeting} Have a great year ahead`
console.log(mes);

// array
const arr =[3,5,6,1];
const arry2=[]
for(let i=0;i<=arr.length -1;i++){
    arry2.push(arr[i] * 2)
} 
console.log(arry2);



// Array Helper Method
// Map, find,filter,foreach and reduce

const muly2 = arr.map(function(e){
    console.log(e)
})

const muly4 = arr.map((item)=>{
    return item * 4
})

console.log(arr)
console.log(muly4)