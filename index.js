    const hour=document.querySelector("#hour");
    const min=document.querySelector("#min");
    const sec=document.querySelector("#sec");
    console.log("Server is running");
    setInterval(function(){
    
    var d=new Date();
    var hr=d.getHours()*30+d.getMinutes()/2;
    var mn=d.getMinutes()*6;
    var sc=d.getSeconds()*6+4;
    hour.style.transform=`rotate(${hr}deg)`;
    min.style.transform=`rotate(${mn}deg)`;
    sec.style.transform=`rotate(${sc}deg)`;
    },1000);
