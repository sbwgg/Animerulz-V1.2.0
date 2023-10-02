function nextDay(x, i , j){
    var now = new Date(); 
    let present = new Date(); 
    var hours = i;
    var minutes = j;
    var seconds = 0;
    now.setDate(now.getDate() + (x + (7 - now.getDay())) % 7);
    if((now.getHours() > hours || now.getHours() == hours && now.getMinutes() > minutes) && (now.getDate() == present.getDate()))
        now.setDate(now.getDate() + 7);
    now.setMinutes(minutes);
    now.setHours(hours);
    now.setSeconds(0);
    console.log(now);
    return now;
}
function prevDay(x, i, j){
    var now = new Date();  
    let present = new Date();
    var hours = i;
    var minutes = j;
    var seconds = 0;
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(seconds);
    now.setDate(now.getDate() - (x + (now.getDay())) % 7);
    let temp = now.getDate();
    if((present.getHours() < now.getHours() || present.getHours() == now.getHours() && present.getMinutes() < now.getMinutes()) && (present.getDate() == now.getDate()))
        now.setDate(temp - 7);
    return now;
}

function setAnimeTimings(y, i, j){
    try{
        const time_epi = nextDay(y, i, j);
        var ele_nxt_ep_time = document.getElementById("nxt-episode-txt");
        ele_nxt_ep_time.innerHTML = "Estimated next episode on " + time_epi;
    }
    catch{
        const time_epi = prevDay(y, i, j);
        var ele_updated_time = document.getElementById("updated-on-time");
        ele_updated_time.innerHTML = time_epi.getDate() + "/" + (time_epi.getMonth() + 1) + "/" + time_epi.getFullYear();
    }
}


try{
    //for download page
    let present_ani = document.getElementById("a-active-page-tag").textContent;
    // console.log( "'" + present_ani + "'");
    switch(present_ani){
        case "Jujutsu Kaisen 2nd Season" : 
            setAnimeTimings(5, 9, 0);
            break;
        case "One Piece" : 
            setAnimeTimings(0, 9, 0);
            break;
        case "Bleach: Thousand-Year Blood War - The Seperation" : 
            setAnimeTimings(6, 21, 0);
            break;
        case "Zom 100: Bucket List of the Dead" :
            setAnimeTimings(2, 14, 30);
            break;
    }
}
catch{
    //for anime page
    let present_ani_me = document.getElementById("active-page-tag").textContent;
    // console.log( "'" + present_ani_me + "'");
    switch(present_ani_me){
        case "Jujutsu Kaisen 2nd Season" : 
            setAnimeTimings(2, 9, 0);
            break;
        case "One Piece" : 
            setAnimeTimings(0, 9, 0);
            break;
        case "Bleach: Thousand-Year Blood War - The Seperation" : 
            setAnimeTimings(1, 21, 0);
            break;
        case "Zom 100: Bucket List of the Dead" :
            setAnimeTimings(5, 14, 30);
            break;
    }
}