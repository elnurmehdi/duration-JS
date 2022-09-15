var duration = new Date().getHours();
if(duration>6 && duration<=12){
    alert("Good morning");
    document.body.style.background="#faed8f";
}
else if(duration>12 && duration<=18){
    alert("Good afternoon");
    document.body.style.background="#eb63c9";
}
else if(duration>18 && duration<=00){
    alert("Good evening");
    document.body.style.background="#2f2d18";
}
else if(duration>00 && duration<=6){
    alert("Good night");
    document.body.style.background="black";
}
