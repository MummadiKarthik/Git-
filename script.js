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

if(!Array.prototype.filters){
     Array.prototype.filters=function(call){
        let sa=[];
        for(let i=0;i<this.length;i++){
            sa.push(call(this[i]));
        }
        return sa;
    }
}

 let s={
    name:"karthik",
    id:24
}
if(!Function.prototype.bind){
    Function.prototype.bind=function(context,...args){

     context.display = this;
     let fn=context.display;
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
let as=[9,23,14,74]
let ap=s.filters(kaar)

console.log(ap)

let sd=new Function('a','b','return a+b');
console.log(sd(34,34))
