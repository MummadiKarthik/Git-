//bro text 

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

function kaar(call){
    let a=24;
    let b=34;
    call(a,b)
}
function bar(a,b){
    console.log(a+b)
}
kaar(bar)
