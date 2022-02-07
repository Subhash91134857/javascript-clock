setInterval(displayClock,500)
function displayClock(){
    var time=new Date(); // function for using date
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();

    if(hrs>12){
        hrs=hrs-12;
    }
    if(hrs==0){
        hrs=12;
    }
    document.getElementById('clock').innerText=hrs+':'+min+':'+sec;
}