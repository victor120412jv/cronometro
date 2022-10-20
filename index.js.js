var sec=0
var min=0
var interval
function start(){
    interval=setInterval(counter,1000)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0 
    document.getElementById('counter').innerText="00:00"

}   

function pause(){
    clearInterval(interval)
}

function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('counter').innerText=min+':'+sec
}
    