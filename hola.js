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
let s=[9,23,14,74]
let p=s.maps(kar)

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

function kaar(a){
   return a%2==0?0:a;
}
let as=[9,23,14,74]
let ap=s.filters(kaar)

console.log(ap)

let sd=new Function('a','b','return a+b');
console.log(sd(34,34))
