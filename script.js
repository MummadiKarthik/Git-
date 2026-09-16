import { PI as L,add as a} from "./bro.js";

console.log(L);
console.log(a(59,23))
if(!Array.prototype.maps){
    Array.prototype.maps=function(call){
        let sa=[];
        for(let i=0;i<this.length;i++){
            sa.push(call(this[i]));
        }
        return sa;
    }
}

function kar(a){
   return a*3;
}
let aas=[9,23,14,74]
let p=aas.maps(kar)

console.log(p)

if(!Array.prototype.filter){
     Array.prototype.filter=function(call){
        let sa=[];
        for(let i=0;i<this.length;i++){
            sa.push(call(this[i]));
        }
        return sa;
    }
}

let as=[9,23,14,74]
let ap=as.filter(kaar)

console.log(ap)


 let s={
    name:"karthik",
    id:24
}
if(!Function.prototype.bind){
    Function.prototype.bind=function(context,...args){

     let fn = this;
      return function(){
        fn.call(context,...args);
        
      }
     }
}
function bro(college, roll){
    console.log("college is "+college+" and roll number is "+roll)

}

let sa=bro.bind(s,"MRITS",34)

sa()
 

function kaar(a){
   return a%2==0?0:a;
}


let sd=new Function('a','b','return a+b');
console.log(sd(34,34))
