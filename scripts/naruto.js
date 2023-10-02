var seasons = document.getElementsByClassName("season-anime");
for(let i = 1; i <= seasons.length; i ++)
    seasons[i-1].setAttribute("onclick", "window.open('https://Animerulz.xyz/Naruto/Season-" + i + "', '_self')");
try{
    document.getElementsByClassName("active-season")[0].removeAttribute("onclick");
}
catch{}

try{
   setAnimeTimingsNaruto();
}
catch{}

function setAnimeTimingsNaruto(){
    var now = new Date(); 
    var time_updated = document.getElementById("updated-on-time-naruto");
    if(time_updated !== null){
        if( 2 <= now.getDay() <= 6)
            time_updated.innerText =  String(now.getDate()) + "/" + String(now.getFullYear()) + " - "  + "9:00 AM";
            console.log(String(now.getDate()) + String(now.getFullYear()) + now.getTime());
    }
}