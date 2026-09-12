let i=0;
function kar(){
    setInterval(()=>{
        i++;
        postMessage(i);
    },100)
}
kar()