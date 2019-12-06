setInterval(() => {
    var d= new Date();
    var hour= d.getHours();
    var minu=d.getMinutes();
    var sc=d.getSeconds();
    var timeleft= 24*60*60-(hour*60*60+minu*60+sc);
    var potime= timeleft/(24*60*60)*100;
    var percent=Math.round(potime*100)/100;
    console.log(potime);
    document.getElementById('timeleft').innerHTML=timeleft+' second';
    document.getElementById('clock').innerHTML=d.toLocaleTimeString();
    document.getElementById('percent').innerHTML=`${percent}%`
    document.getElementById('bar').style.width=`${potime}%`;
}, 1000);

function day(){
    document.getElementById('barcontain').style.display='flex';
    document.getElementById('maincontain').style.display='flex';
    document.getElementById('lifebtn').style.display='flex';
    document.getElementById('daybtn').style.display='none';
    document.getElementById('bar2contain').style.display='none';
    document.getElementById('maincontain2').style.display='none';
}

function life(){
    document.getElementById('barcontain').style.display='none';
    document.getElementById('maincontain').style.display='none';
    document.getElementById('lifebtn').style.display='none';
    document.getElementById('daybtn').style.display='flex';
    document.getElementById('bar2contain').style.display='flex';
    document.getElementById('maincontain2').style.display='flex';
}
setInterval(() => {
    var today=new Date();
    var day=today.getDay();
    var month=today.getMonth();
    var year=today.getFullYear();
    var hour= today.getHours();
    var minu=today.getMinutes();
    var sc=today.getSeconds();
    var dead=new Date(2099,5,7);
    var yeard=dead.getFullYear();
    var birth=new Date(2003,5,7);
    var yearb=birth.getFullYear();

    var totaltime=(yeard-yearb)*365*24*60*60 + 20*24*60*60;
    var timepass= hour*60*60+minu*60+sc+ (month-1)*30*24*60*60 + (day-1)*24*60*60 + (year-yearb-1)*365*24*60*60 + Math.trunc((year-yearb-1)/4)*24*60*60;
    var percent= timepass/totaltime*100;
    var rper=Math.round(percent*100)/100;
    
    document.getElementById('timeleft2').innerHTML=totaltime-timepass +' second';
    document.getElementById('clock2').innerHTML=today.toLocaleTimeString();
    document.getElementById('percent2').innerHTML=`${rper}%`;
    document.getElementById('bar2').style.width=`${percent}%`;
}, 1000);
