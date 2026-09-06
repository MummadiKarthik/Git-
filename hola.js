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