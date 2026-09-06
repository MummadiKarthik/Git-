function kar(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let s=kar(24);
let a=s(35);
console.log(a(26))