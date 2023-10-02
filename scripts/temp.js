const animeNameee = document.getElementById("a-active-page-tag").textContent.toLowerCase();
console.log(animeNameee);



const longAnimes = ['one piece',
'naruto',
'naruto shippuden',
'bleach',
'black clover',
'boruto : naruto next generation',
'hunter x hunter',
'dragon ball z',
'dragon ball super',
'dragon ball',
'dragon ball z kai',
'dragon ball gt'];

const shortAnimes = ['demon slayer kimetsu no yaiba',
'demon slayer mugen train arc',
'demon slayer mt.natagumo arc',
'demon slayer hashira meeting arc',
'demon slayer siblings bond',
'demon slayer entertainment district arc',
'demon slayer swordsmith village arc',
'fullmetal alchemist : brotherhood',
'death note',
'hells paradise',
'attack on titan',
'attack on titan season 2',
'attack on titan season 3 part 1',
'attack on titan season 3 part 2',
'attack on titan final season part 1',
'attack on titan final season part 2',
'attack on titan final season part 3',
'my hero academia',
'my hero academia season 2',
'my hero academia season 3',
'my hero academia season 4',
'my hero academia season 5',
'my hero academia season 6',
'mashle',
'my star',
'blue lock',
'chainsaw man',
'dr stone',
'dr stone : stone wars',
'dr stone : ryuusui',
'dr stone : new world',
'tokyo revengers',
'tokyo revengers : christmas showdown',
'vinland saga',
'vinland saga : season 2',
'steins;gate',
'jujutsu kaisen',
'jujutsu kaisen 0 movie',
'jujutsu kaisen season 2',
'one punch man',
'one punch man season 2',
'cowboy bebop',
'berserk',
'berserk season 2',
'one piece film red',
'one punch man specials',
'one punch man season 2 specials',
'bleach : thousand year blood war arc',
'bleach : tybw season 2',
'bleach : the sealed sword frenzy',
'bleach the movie : hell verse',
'bleach the movie : memories of nobody',
'bleach the movie : the diamonddust rebellion',
'bleach the movie : fade to black',
'dr. stone: stone wars eve of the battle special feature',
'one piece film gold',
'one piece movie 1',
'one piece episode skypiea',
'one piece film stampede',
'one piece 3d stravat chase',
'naruto movie 1 : ninja clash in the land of snow',
'naruto : shippuden movie 6 : road to ninja',
'naruto : shippuden movie 4 : the lost tower',
'naruto movie : the last',
'dragon ball super : super hero',
'dragon ball super : broly',
'my hero academia heroes rising',
'dr stone : stone wars eve of the battle special feature',
'black clover sword of the wizard king',
'zom 100',
'fire force',
'fire force season 2',
'my dress up darling',
'ranking of kings',
'tokyo 24th ward',
'summer time',
'radiant',
'radiant season 2',
'darling in the franxx',
'the ancient magus bride',
'the ancient magus bride season 2',
'ao ashi',
'black rock shooter dawn fall',
'toilet bound hanako kun',
'miss kuroitsu from the monster development department',
"akebi's sailor uniform"];

if(longAnimes.includes(animeNameee))
{
    console.log(animeNameee);
    let video_container = document.getElementsByClassName("main-container-video-sec-1")[0];
      var element = document.createElement("div");
      video_container.prepend(element);
      video_container.getElementsByTagName("div")[0].setAttribute("class", "preloader-for-video");
      document.getElementsByClassName("preloader-for-video")[0].innerHTML = '<div class="preloader-for-video"><div class="spinner-box"><div class="circle-border"><div class="circle-core"></div></div>  </div></div>';

const key_value_from_url = window.location.search;
const urlParams = new URLSearchParams(key_value_from_url);
let epi_num = urlParams.get("ep");
let epi_aud = urlParams.get("aud");

let long_anime_file = new XMLHttpRequest();
long_anime_file.open("get", "/scripts/JSON/long-anime.json", true);
long_anime_file.send();

document.getElementById("episode-number-in-video").innerHTML = epi_num;
let anime = document.getElementById("a-active-page-tag");
// let animeNew = anime.replace(" ","");

long_anime_file.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var episodes_section = document.getElementById("episodes-in-section");
        let long_anime_data = JSON.parse(this.responseText);
        // console.log(anime.textContent);
        let current_long_anime_data = long_anime_data[anime.textContent];
        let current_long_anime_epi_num = current_long_anime_data['jap']['no_epi'];
        var episodes_numbers = document.getElementById("episodes-numbers");
        let temp = "";
        let outputNew = "";
        let min_range;
        let max_range;

        min_range = Math.floor(epi_num / 100) * 100;
        // console.log(Math.floor(epi_num / 100));
        if(epi_num % 100 == 0)
            min_range -= 100;
        max_range = min_range + 100;
        if (max_range > current_long_anime_epi_num)
            max_range=current_long_anime_epi_num;
        min_range ++;
        episodes_numbers.innerHTML = " " + min_range + "-" + max_range;
        anime = anime.textContent.replace(/[^a-zA-Z0-9]/g, "");
        for(let i = min_range; i <= max_range; i++){
            if(i == epi_num){
                temp = "<div class='episode active' id='" + anime + "-episode-" + i + "'>" + i + "</div>";
            }else{ 
                var temp_1 = 'window.open("https://animerulz.in/' + anime + "/Watch-Now/?ep=" + i + '&aud=' + epi_aud + '", "_self")';
                temp = "<div class='episode' id='" + anime + "-episode-" + i + "' onclick='" + temp_1 + "'>" + i +"</div>" ;
                // temp = "<div class='episode' id='episode-" + i + "'>" + i +"</div>" ;
            }
            outputNew += temp;
        }
        episodes_section.innerHTML = outputNew;

        var tempNew;
        outputNew = "";
        let i = 1;
        for(i = 1 ; i < current_long_anime_epi_num ; i += 100){
            if(i + 100 <= current_long_anime_epi_num){
                if( epi_num >= i && epi_num < i + 100)
                    temp = "<div class='active'><span> Episodes : " + min_range + "-" + max_range + "</span></div>";
                else {
                    temp_1 = "'https://animerulz.in/" + anime + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self'";
                    tempNew = 'onclick="window.open(' + temp_1 + ')"';
                    temp = "<div " + tempNew + "><span> Episodes : " + i + "-" + (i + 99) + "</span></div>";
                }
            }
            else{
                if( epi_num >= i && epi_num <= i + 100)
                    temp = "<div class='active'><span> Episodes : " + min_range + "-" + current_long_anime_epi_num + "</span></div>";
                else {
                    temp_1 = "'https://animerulz.in/" + anime + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self'";
                    tempNew = 'onclick="window.open(' + temp_1 + ')"';
                    temp = "<div " + tempNew + "><span> Episodes : " + i + "-" + current_long_anime_epi_num + "</span></div>";
                }
            }
            outputNew += temp;
        }

        var episodes_numbers_new = document.getElementsByClassName("episodes-selection-div")[0];
        episodes_numbers_new.innerHTML = outputNew;

        if(epi_num != 1)
            document.getElementsByClassName("button-1")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + (epi_num - 1) + "&aud=" + epi_aud + "', '_self')"); 
        if(epi_num != current_long_anime_epi_num)
            document.getElementsByClassName("button-2")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + (Number(epi_num) + 1) + "&aud=" + epi_aud + "', '_self')"); 

        //for setting video and audio buttons
        let current_long_anime_epi_num_dub = current_long_anime_data["eng"]['no_epi'];
        var audios_div = document.getElementsByClassName("audios")[0];
        outputNew = "";

        try{
            if( epi_num <= current_long_anime_data['mul']['no_epi']){
                outputNew += "<div class='audio' name='mul'>Multi</div>";
                document.getElementsByClassName("multi-audio-des")[0].innerHTML = '<span><strong class="str-audio-mul">This Video Source has multi audio</strong> - Use <svg class="svg-mul-audio" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg> to change Audio track.</span>';
            }
        }
        catch{}
        if(epi_num <= current_long_anime_epi_num){
            outputNew += "<div class='audio' name='jap'>Subbed</div>";
            if(epi_num <= current_long_anime_epi_num_dub){
                outputNew += "<div class='audio' name='eng'>Dubbed</div>";
            }
            try{
                if( epi_num <= current_long_anime_data['hin']['no_epi'])
                    outputNew += "<div class='audio' name='hin'>Hindi</div>";
            }
            catch{}
            try{
                if( epi_num <= current_long_anime_data['tel']['no_epi'])
                outputNew += "<div class='audio' name='tel'>Telugu</div>";
            }
            catch{}
            try{
                if( epi_num <= current_long_anime_data['tam']['no_epi'])
                    outputNew += "<div class='audio' name='tam'>Tamil</div>";
            }
            catch{}
            try{
                if( epi_num <= current_long_anime_data['mal']['no_epi'])
                    outputNew += "<div class='audio' name='mal'>Malayalam</div>";
            }
            catch{}
            try{
                if( epi_num <= current_long_anime_data['ben']['no_epi'])
                    outputNew += "<div class='audio' name='ben'>Bengali</div>";
            }
            catch{};
            audios_div.innerHTML = outputNew;
        }
        try{
            document.getElementsByName(epi_aud)[0].classList.add("active-aud");
        }
        catch{
            // console.log("Hello");
            let anime_audios = document.getElementsByClassName("audio")[0];
            temp = "https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=" + anime_audios.getAttribute("name") ;
            window.open(temp, "_self");
        }
        
        try{
            if(epi_aud != 'jap')
                document.getElementsByName("jap")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=jap', '_self')");
            if(epi_aud != 'eng')
                document.getElementsByName("eng")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=eng', '_self')");
            }
        catch{};
        try{
            if(epi_aud != 'tel')
            document.getElementsByName("tel")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tel', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'hin')
            document.getElementsByName("hin")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=hin', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'tam')
            document.getElementsByName("tam")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tam', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'mal')
            document.getElementsByName("mal")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=mal', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'ben')
            document.getElementsByName("ben")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=ben', '_self')");
        }
        catch{};
        var video_player = document.getElementsByTagName('iframe')[0];
        if(epi_aud == "jap" || epi_aud == "eng"){
            let current_long_anime_data_video_link = current_long_anime_data[epi_aud]['link'];
            video_player.setAttribute("src", current_long_anime_data_video_link + epi_num);  
        }
        else{
            video_player.setAttribute("src", "https://sbrapid.com/e/" + current_long_anime_data[epi_aud]["links"][epi_num - 1] + ".html");
        }     
        try{
            if(epi_aud == "jap" || epi_aud == "eng")
                document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('" + current_long_anime_data[epi_aud]["down_links"][epi_num - 1] + "')");
            else 
                document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://sbrapid.com/d/" +  current_long_anime_data[epi_aud]["links"][epi_num - 1] + ".html')");
        }
        catch{};
    }
}

var video_player = document.getElementById("video-player");
// console.log(video_player.offsetHeight, video_player.offsetWidth);
if(screen.width <= 940){
  var video_player_width = video_player.offsetWidth;
  video_player.style.height = 0.559 * video_player_width + "px";
//   console.log(video_player.offsetHeight, video_player.offsetWidth);
}


function scrollToDiv() {
    var mainDivision = document.getElementsByClassName("content")[0];
        var division = document.getElementsByClassName("active")[1];
        if(division == undefined)
            var division = document.getElementsByClassName("active-episode")[0];
        // console.log(division);
  
        // division.scrollIntoView({ behavior: 'auto' });
      mainDivision.scrollTo(0, division.offsetTop - mainDivision.offsetTop);
    //   console.log(division.offsetTop);
    // console.log(division);
      // var normalView = document.getElementsByClassName("")[0].scrollIntoView();
  }
  
  setTimeout(scrollToDiv, 500);
  
let episode_div;
episode_div = document.querySelector(".main-container-video-sec-2 .body .body-cont .content");
if(screen.width >= 450)
    episode_div.setAttribute("style", "grid-template-columns: repeat(auto-fit, 55px);");
else
    episode_div.setAttribute("style", "grid-template-columns: repeat(auto-fit, minmax(30px, 15%));");


//for storing local episode data

      // Function to handle button clicks
      function handleClick(event) {
        // Store the clicked button's ID and color in local storage
        localStorage.setItem('lastClickedButton' + anime , event.target.id);
        let temporaryDataVar1 = localStorage.getItem('continueWatching');
        let temporaryDataVar = JSON.parse(temporaryDataVar1);
        console.log(temporaryDataVar);
        let animeDataNew;
        let lastIndex = temporaryDataVar.length - 1
        animeDataNew = {
            "animeName" : temporaryDataVar[lastIndex].animeName,
            "animeImage" : temporaryDataVar[lastIndex].animeImage,
            "animeEpisodeNumber" : temporaryDataVar[lastIndex].animeEpisodeNumber
        }
        temporaryDataVar.splice(lastIndex, 1);
        //for clicked episode id
        let animeEpisodeNumber_ = event.target.id.split("-");
        let animeEpisodeNumber__ = animeEpisodeNumber_[animeEpisodeNumber_.length - 1];
        animeDataNew.animeEpisodeNumber = Number(animeEpisodeNumber__);
        temporaryDataVar.push(animeDataNew);
        let convertedData = JSON.stringify(temporaryDataVar);
        localStorage.setItem("continueWatching", convertedData);
        localStorage.setItem(event.target.id, "visited-episode");
        
        // Change the color of the clicked button
        event.target.classList.add("visited-episode");
        // event.target.style.color = "#ffffffcc";
      }
      function handleClickAudio(event) {
        // Store the clicked button's ID and color in local storage
        localStorage.setItem('lastClickedButtonAudio' + anime , event.target.id);
        
        // Change the color of the clicked button
        event.target.classList.add("visited-audio");
        // event.target.style.color = "#ffffffcc";
      }
      // Add click event listeners to all buttons
      function setEpisodesData(){
        var buttons = document.querySelectorAll('.episode');
        buttons.forEach(function(button) {
            button.addEventListener('click', handleClick);
            
            // Check if the button has a stored color and update it
            if (localStorage.getItem(button.id) === "visited-episode") {
            button.classList.add("visited-episode");
            // button.target.style.color = "#ffffffcc";
            }
        });
        
        let active_epi = document.querySelector(".active.episode");
        // console.log(anime);
        localStorage.setItem('lastClickedButton' + anime, active_epi.id);
        localStorage.setItem(active_epi.id, "visited-episode");
        let active_aud = document.querySelector(".active-aud.audio");
        localStorage.setItem('lastClickedButtonAudio' + anime, active_aud.getAttribute("name"));
        // localStorage.setItem(active_epi.id, "visited-);
        // console.log(active_aud);
        // Retrieve the last clicked button and update its color
        var lastClickedButtonId = localStorage.getItem('lastClickedButton' + anime);
        if (lastClickedButtonId) {
            var lastClickedButton1 = document.getElementById(lastClickedButtonId);
            lastClickedButton1.classList.add("visited-episode");
        }
        // active_aud.style.backgroundColor = "#faa300";
    }

      setTimeout(setEpisodesData, 500);

}


else if(shortAnimes.includes(animeNameee)){
    let video_container = document.getElementsByClassName("main-container-video-sec-1")[0];
      var element = document.createElement("div");
      video_container.prepend(element);
      video_container.getElementsByTagName("div")[0].setAttribute("class", "preloader-for-video");
      document.getElementsByClassName("preloader-for-video")[0].innerHTML = '<div class="preloader-for-video"><div class="spinner-box"><div class="circle-border"><div class="circle-core"></div></div>  </div></div>';    
    
    
    const key_value_from_url = window.location.search;
    const urlParams = new URLSearchParams(key_value_from_url);
    let epi_num = urlParams.get("ep");
    let epi_aud = urlParams.get("aud");

    let short_anime_file = new XMLHttpRequest();
    short_anime_file.open("get", "https://vivek0018.github.io/Files.Animerulz/scripts/JSON/short-anime.json", true);
    short_anime_file.send();

    document.getElementById("episode-number-in-video").innerHTML = epi_num;
    let anime = document.getElementById("a-active-page-tag");

    short_anime_file.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var episodes_section = document.getElementById("episodes-in-section");
            let short_anime_data = JSON.parse(this.responseText);
            let current_short_anime_data = short_anime_data[anime.textContent];
            anime = anime.textContent.replace(/[^a-zA-Z0-9]/g, "");
            let current_short_anime_epi_num = current_short_anime_data['jap']['no_epi'];
            let temp = "";
            let temp_1 = "";
            let outputNew = "";
            let first;
            let second;
            let episodesNames = current_short_anime_data['episodes_names'];
            for(let i = 1 ; i <= current_short_anime_epi_num ; i ++){
                if(i % 2 == 0){
                    first = 2;
                    second = 1;
                }
                else{
                    first = 1;
                    second = 2;
                }
                if(i == epi_num){
                    temp = ' <div class="episode-short"><div class="short-anime-ep active-episode" id="' + anime + '-episode-' + i + '"> ' + 
                    '<div class="short-anime-num episode-alternate-' + first + '">' + i + '</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + episodesNames[i-1] + '</span> ' + 
                    '<svg xmlns="http://www.w3.org/2000/svg" class="play-svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100"><switch><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1zM5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path d="M5268.4 2410.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.6-.4-1-1-1H5268.4zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2414.1 5273.3 2413.7 5272.7 2413.7zM5272.7 2417h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2417.5 5273.3 2417 5272.7 2417zM50 2.5C23.8 2.5 2.5 23.8 2.5 50c0 26.2 21.3 47.5 47.5 47.5 26.2 0 47.5-21.3 47.5-47.5C97.5 23.8 76.2 2.5 50 2.5zM67.2 52.8L41.6 69.8c-2.2 1.5-5.1-.1-5.1-2.8V32.9c0-2.6 2.9-4.2 5.1-2.8l25.6 17.1C69.2 48.6 69.2 51.4 67.2 52.8z"/></g></switch></svg> ' + 
                    '</div></div></div>';
                }
                else{
                    temp_1 = "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self')";
                    temp = '<div class="episode-short" onclick="' + temp_1 + '"><div class="short-anime-ep"  id="' + anime + '-episode-' + i + '"><div class="short-anime-num episode-alternate-' + first + '">' + i +'</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + episodesNames[i-1] + '</span></div></div></div>'
                }
                outputNew += temp;
            }
            episodes_section.innerHTML = outputNew;

            if(epi_num != 1)
                document.getElementsByClassName("button-1")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + (epi_num - 1) + "&aud=" + epi_aud + "', '_self')"); 
            if(epi_num != current_short_anime_epi_num)
                document.getElementsByClassName("button-2")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + (Number(epi_num) + 1) + "&aud=" + epi_aud + "', '_self')"); 

            //for setting video and audio buttons
                    //for setting video and audio buttons
            let current_short_anime_epi_num_dub = current_short_anime_data["eng"]['no_epi'];
            var audios_div = document.getElementsByClassName("audios")[0];
            outputNew = "";
            try{
                if( epi_num <= current_short_anime_data['mul']['no_epi']){
                    outputNew += "<div class='audio' name='mul'>Multi</div>";
                    document.getElementsByClassName("multi-audio-des")[0].innerHTML = '<span><strong class="str-audio-mul">This Video Source has multi audio</strong> - Use <svg class="svg-mul-audio" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg> to change Audio track.</span>';
                }
            }
            catch{}
            if(epi_num <= current_short_anime_epi_num){
                outputNew += "<div class='audio' name='jap'>Subbed</div>";
                if(epi_num <= current_short_anime_epi_num_dub){
                    outputNew += "<div class='audio' name='eng'>Dubbed</div>";
                }
                try{
                    if( epi_num <= current_short_anime_data['hin']['no_epi'])
                        outputNew += "<div class='audio' name='hin'>Hindi</div>";
                }
                catch{}
                try{
                    if( epi_num <= current_short_anime_data['tel']['no_epi'])
                    outputNew += "<div class='audio' name='tel'>Telugu</div>";
                }
                catch{}
                try{
                    if( epi_num <= current_short_anime_data['tam']['no_epi'])
                        outputNew += "<div class='audio' name='tam'>Tamil</div>";
                }
                catch{}
                try{
                    if( epi_num <= current_short_anime_data['mal']['no_epi'])
                        outputNew += "<div class='audio' name='mal'>Malayalam</div>";
                }
                catch{}
                try{
                    if( epi_num <= current_short_anime_data['ben']['no_epi'])
                        outputNew += "<div class='audio' name='ben'>Bengali</div>";
                }
                catch{};
                audios_div.innerHTML = outputNew;
            }
            try{
                document.getElementsByName(epi_aud)[0].classList.add("active-aud");
            }
            catch{
                let anime_audios = document.getElementsByClassName("audio")[0];
                temp = "https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=" + anime_audios.getAttribute("name") ;
                window.open(temp, "_self");
            }
            try{
                if(epi_aud != 'mul')
                document.getElementsByName("mul")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=mul', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'jap')
                    document.getElementsByName("jap")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=jap', '_self')");
                if(epi_aud != 'eng')
                    document.getElementsByName("eng")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=eng', '_self')");
                }
            catch{};
            
            try{
                if(epi_aud != 'tel')
                document.getElementsByName("tel")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tel', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'hin')
                document.getElementsByName("hin")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=hin', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'tam')
                document.getElementsByName("tam")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tam', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'mal')
                document.getElementsByName("mal")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=mal', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'ben')
                document.getElementsByName("ben")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=ben', '_self')");
            }
            catch{};
            var video_player = document.getElementsByTagName('iframe')[0];
            if(epi_aud == "jap" || epi_aud == "eng"){
                let current_short_anime_data_video_link = current_short_anime_data[epi_aud]['link'];
                video_player.setAttribute("src", current_short_anime_data_video_link + epi_num);  
            } 
            else{
                video_player.setAttribute("src", "https://sbrapid.com/e/" + current_short_anime_data[epi_aud]["links"][epi_num - 1] + ".html");
            }     
            try{
                if(epi_aud == "jap" || epi_aud == "eng")
                    document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('" + current_short_anime_data[epi_aud]["down_links"][epi_num - 1] + "')");
                else 
                    document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://sbrapid.com/d/" +  current_short_anime_data[epi_aud]["links"][epi_num - 1] + ".html')");
            }
            catch{};
        }
    }

    var video_player = document.getElementById("video-player");
    // console.log(video_player.offsetHeight, video_player.offsetWidth);
    if(screen.width <= 940){
    var video_player_width = video_player.offsetWidth;
    video_player.style.height = 0.559 * video_player_width + "px";
    console.log(video_player.offsetHeight, video_player.offsetWidth);
    }


    function scrollToDiv() {
        var mainDivision = document.getElementsByClassName("content")[0];
            var division = document.getElementsByClassName("active")[1];
            if(division == undefined)
                var division = document.getElementsByClassName("active-episode")[0];
            // console.log(division);
    
            // division.scrollIntoView({ behavior: 'auto' });
        mainDivision.scrollTo(0, division.offsetTop - mainDivision.offsetTop);
        console.log(division.offsetTop);
        // console.log(division);
        // var normalView = document.getElementsByClassName("")[0].scrollIntoView();
    }
    
    setTimeout(scrollToDiv, 500);
    
    let episode_div;
    episode_div = document.querySelector(".main-container-video-sec-2 .body .body-cont .content");
    episode_div.setAttribute("style", "grid-template-columns: 100%;grid-gap:0 0;");

    //for storing local episode data

        // Function to handle button clicks
        function handleClick(event) {
            // Store the clicked button's ID and color in local storage
            localStorage.setItem('lastClickedButton' + anime , event.target.id);
            let temporaryDataVar1 = localStorage.getItem('continueWatching');
        let temporaryDataVar = JSON.parse(temporaryDataVar1);
        console.log(temporaryDataVar);
        let animeDataNew;
        let lastIndex = temporaryDataVar.length - 1
        animeDataNew = {
            "animeName" : temporaryDataVar[lastIndex].animeName,
            "animeImage" : temporaryDataVar[lastIndex].animeImage,
            "animeEpisodeNumber" : temporaryDataVar[lastIndex].animeEpisodeNumber
        }
        temporaryDataVar.splice(lastIndex, 1);
        //for clicked episode id
        let animeEpisodeNumber_ = event.target.id.split("-");
        let animeEpisodeNumber__ = animeEpisodeNumber_[animeEpisodeNumber_.length - 1];
        animeDataNew.animeEpisodeNumber = Number(animeEpisodeNumber__);
        temporaryDataVar.push(animeDataNew);
        let convertedData = JSON.stringify(temporaryDataVar);
        localStorage.setItem("continueWatching", convertedData);
            
            // Change the color of the clicked button
            event.target.classList.add("visited-episode-short-anime");
            // event.target.style.color = "#ffffffcc";
        }
        function handleClickAudio(event) {
            // Store the clicked button's ID and color in local storage
            localStorage.setItem('lastClickedButtonAudio' + anime , event.target.id);
            
            // Change the color of the clicked button
            event.target.classList.add("visited-audio");
            // event.target.style.color = "#ffffffcc";
        }
        // Add click event listeners to all buttons
        function setEpisodesData(){
            var buttons = document.querySelectorAll('.short-anime-ep');
            buttons.forEach(function(button) {
                button.addEventListener('click', handleClick);
                
                // Check if the button has a stored color and update it
                if (localStorage.getItem(button.id) === "visited-episode-short-anime") {
                button.classList.add("visited-episode-short-anime");
                // button.target.style.color = "#ffffffcc";
                }
            });
            
            let active_epi = document.querySelector(".active-episode");
            console.log(anime);
            localStorage.setItem('lastClickedButton' + anime, active_epi.id);
            localStorage.setItem(active_epi.id, "visited-episode-short-anime");
            let active_aud = document.querySelector(".active-aud.audio");
            localStorage.setItem('lastClickedButtonAudio' + anime, active_aud.getAttribute("name"));
            // localStorage.setItem(active_epi.id, "visited-);
            // console.log(active_aud);
            // Retrieve the last clicked button and update its color
            var lastClickedButtonId = localStorage.getItem('lastClickedButton' + anime);
            if (lastClickedButtonId) {
                var lastClickedButton1 = document.getElementById(lastClickedButtonId);
                lastClickedButton1.classList.add("visited-episode-short-anime");
            }
            // active_aud.style.backgroundColor = "#faa300";
        }

        setTimeout(setEpisodesData, 500);
}else{
    let video_container = document.getElementsByClassName("main-container-video-sec-1")[0];
      var element = document.createElement("div");
      video_container.prepend(element);
      video_container.getElementsByTagName("div")[0].setAttribute("class", "preloader-for-video");
      document.getElementsByClassName("preloader-for-video")[0].innerHTML = '<div class="preloader-for-video"><div class="spinner-box"><div class="circle-border"><div class="circle-core"></div></div>  </div></div>';    
    
    
    const key_value_from_url = window.location.search;
    const urlParams = new URLSearchParams(key_value_from_url);
    let epi_num = urlParams.get("ep");
    let epi_aud = urlParams.get("aud");

    let short_anime_file = new XMLHttpRequest();
    short_anime_file.open("get", "details.json", true);
    short_anime_file.send();

    document.getElementById("episode-number-in-video").innerHTML = epi_num;
    let anime = document.getElementById("a-active-page-tag");

    short_anime_file.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var episodes_section = document.getElementById("episodes-in-section");
            let current_short_anime_data = JSON.parse(this.responseText);
            // let current_short_anime_data = short_anime_data[anime.textContent];
            anime = anime.textContent.replace(/[^a-zA-Z0-9]/g, "");
            let current_short_anime_epi_num = current_short_anime_data['jap']['no_epi'];
            let temp = "";
            let temp_1 = "";
            let outputNew = "";
            let first;
            let second;
            let episodesNames = current_short_anime_data['episodes_names'];
            for(let i = 1 ; i <= current_short_anime_epi_num ; i ++){
                if(i % 2 == 0){
                    first = 2;
                    second = 1;
                }
                else{
                    first = 1;
                    second = 2;
                }
                if(i == epi_num){
                    temp = ' <div class="episode-short"><div class="short-anime-ep active-episode" id="' + anime + '-episode-' + i + '"> ' + 
                    '<div class="short-anime-num episode-alternate-' + first + '">' + i + '</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + episodesNames[i-1] + '</span> ' + 
                    '<svg xmlns="http://www.w3.org/2000/svg" class="play-svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100"><switch><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1zM5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path d="M5268.4 2410.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.6-.4-1-1-1H5268.4zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2414.1 5273.3 2413.7 5272.7 2413.7zM5272.7 2417h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2417.5 5273.3 2417 5272.7 2417zM50 2.5C23.8 2.5 2.5 23.8 2.5 50c0 26.2 21.3 47.5 47.5 47.5 26.2 0 47.5-21.3 47.5-47.5C97.5 23.8 76.2 2.5 50 2.5zM67.2 52.8L41.6 69.8c-2.2 1.5-5.1-.1-5.1-2.8V32.9c0-2.6 2.9-4.2 5.1-2.8l25.6 17.1C69.2 48.6 69.2 51.4 67.2 52.8z"/></g></switch></svg> ' + 
                    '</div></div></div>';
                }
                else{
                    temp_1 = "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self')";
                    temp = '<div class="episode-short" onclick="' + temp_1 + '"><div class="short-anime-ep"  id="' + anime + '-episode-' + i + '"><div class="short-anime-num episode-alternate-' + first + '">' + i +'</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + episodesNames[i-1] + '</span></div></div></div>'
                }
                outputNew += temp;
            }
            episodes_section.innerHTML = outputNew;

            if(epi_num != 1)
                document.getElementsByClassName("button-1")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + (epi_num - 1) + "&aud=" + epi_aud + "', '_self')"); 
            if(epi_num != current_short_anime_epi_num)
                document.getElementsByClassName("button-2")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + (Number(epi_num) + 1) + "&aud=" + epi_aud + "', '_self')"); 

            //for setting video and audio buttons
                    //for setting video and audio buttons
            let current_short_anime_epi_num_dub = current_short_anime_data["eng"]['no_epi'];
            var audios_div = document.getElementsByClassName("audios")[0];
            outputNew = "";
            try{
                if( epi_num <= current_short_anime_data['mul']['no_epi']){
                    outputNew += "<div class='audio' name='mul'>Multi</div>";
                    document.getElementsByClassName("multi-audio-des")[0].innerHTML = '<span><strong class="str-audio-mul">This Video Source has multi audio</strong> - Use <svg class="svg-mul-audio" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg> to change Audio track.</span>';
                }
            }
            catch{}
            if(epi_num <= current_short_anime_epi_num){
                outputNew += "<div class='audio' name='jap'>Subbed</div>";
                if(epi_num <= current_short_anime_epi_num_dub){
                    outputNew += "<div class='audio' name='eng'>Dubbed</div>";
                }
                try{
                    if( epi_num <= current_short_anime_data['hin']['no_epi'])
                        outputNew += "<div class='audio' name='hin'>Hindi</div>";
                }
                catch{}
                try{
                    if( epi_num <= current_short_anime_data['tel']['no_epi'])
                    outputNew += "<div class='audio' name='tel'>Telugu</div>";
                }
                catch{}
                try{
                    if( epi_num <= current_short_anime_data['tam']['no_epi'])
                        outputNew += "<div class='audio' name='tam'>Tamil</div>";
                }
                catch{}
                try{
                    if( epi_num <= current_short_anime_data['mal']['no_epi'])
                        outputNew += "<div class='audio' name='mal'>Malayalam</div>";
                }
                catch{}
                try{
                    if( epi_num <= current_short_anime_data['ben']['no_epi'])
                        outputNew += "<div class='audio' name='ben'>Bengali</div>";
                }
                catch{};
                audios_div.innerHTML = outputNew;
            }
            try{
                document.getElementsByName(epi_aud)[0].classList.add("active-aud");
            }
            catch{
                let anime_audios = document.getElementsByClassName("audio")[0];
                temp = "https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=" + anime_audios.getAttribute("name") ;
                window.open(temp, "_self");
            }
            try{
                if(epi_aud != 'mul')
                document.getElementsByName("mul")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=mul', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'jap')
                    document.getElementsByName("jap")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=jap', '_self')");
                if(epi_aud != 'eng')
                    document.getElementsByName("eng")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=eng', '_self')");
                }
            catch{};
            
            try{
                if(epi_aud != 'tel')
                document.getElementsByName("tel")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tel', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'hin')
                document.getElementsByName("hin")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=hin', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'tam')
                document.getElementsByName("tam")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tam', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'mal')
                document.getElementsByName("mal")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=mal', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'ben')
                document.getElementsByName("ben")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=ben', '_self')");
            }
            catch{};
            var video_player = document.getElementsByTagName('iframe')[0];
            if(epi_aud == "jap"){
                let current_short_anime_data_video_link = current_short_anime_data[epi_aud]['link'];
                video_player.setAttribute("src", current_short_anime_data_video_link + epi_num);  
            }else if(epi_aud == "eng"){
                let current_short_anime_data_video_link = current_short_anime_data[epi_aud]['link'];
                video_player.setAttribute("src", current_short_anime_data_video_link + '-' + epi_num);  
            } 
            else{
                video_player.setAttribute("src", "https://sbrapid.com/e/" + current_short_anime_data[epi_aud]["links"][epi_num - 1] + ".html");
            }     
            try{
                if(epi_aud == "jap" || epi_aud == "eng")
                    document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('" + current_short_anime_data[epi_aud]["down_links"][epi_num - 1] + "')");
                else 
                    document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://sbrapid.com/d/" +  current_short_anime_data[epi_aud]["links"][epi_num - 1] + ".html')");
            }
            catch{};
        }
    }

    var video_player = document.getElementById("video-player");
    // console.log(video_player.offsetHeight, video_player.offsetWidth);
    if(screen.width <= 940){
    var video_player_width = video_player.offsetWidth;
    video_player.style.height = 0.559 * video_player_width + "px";
    console.log(video_player.offsetHeight, video_player.offsetWidth);
    }


    function scrollToDiv() {
        var mainDivision = document.getElementsByClassName("content")[0];
            var division = document.getElementsByClassName("active")[1];
            if(division == undefined)
                var division = document.getElementsByClassName("active-episode")[0];
            // console.log(division);
    
            // division.scrollIntoView({ behavior: 'auto' });
        mainDivision.scrollTo(0, division.offsetTop - mainDivision.offsetTop);
        console.log(division.offsetTop);
        // console.log(division);
        // var normalView = document.getElementsByClassName("")[0].scrollIntoView();
    }
    
    setTimeout(scrollToDiv, 500);
    
    let episode_div;
    episode_div = document.querySelector(".main-container-video-sec-2 .body .body-cont .content");
    episode_div.setAttribute("style", "grid-template-columns: 100%;grid-gap:0 0;");

    //for storing local episode data

        // Function to handle button clicks
        function handleClick(event) {
            // Store the clicked button's ID and color in local storage
            localStorage.setItem('lastClickedButton' + anime , event.target.id);
            let temporaryDataVar1 = localStorage.getItem('continueWatching');
        let temporaryDataVar = JSON.parse(temporaryDataVar1);
        console.log(temporaryDataVar);
        let animeDataNew;
        let lastIndex = temporaryDataVar.length - 1
        animeDataNew = {
            "animeName" : temporaryDataVar[lastIndex].animeName,
            "animeImage" : temporaryDataVar[lastIndex].animeImage,
            "animeEpisodeNumber" : temporaryDataVar[lastIndex].animeEpisodeNumber
        }
        temporaryDataVar.splice(lastIndex, 1);
        //for clicked episode id
        let animeEpisodeNumber_ = event.target.id.split("-");
        let animeEpisodeNumber__ = animeEpisodeNumber_[animeEpisodeNumber_.length - 1];
        animeDataNew.animeEpisodeNumber = Number(animeEpisodeNumber__);
        temporaryDataVar.push(animeDataNew);
        let convertedData = JSON.stringify(temporaryDataVar);
        localStorage.setItem("continueWatching", convertedData);
            
            // Change the color of the clicked button
            event.target.classList.add("visited-episode-short-anime");
            // event.target.style.color = "#ffffffcc";
        }
        function handleClickAudio(event) {
            // Store the clicked button's ID and color in local storage
            localStorage.setItem('lastClickedButtonAudio' + anime , event.target.id);
            
            // Change the color of the clicked button
            event.target.classList.add("visited-audio");
            // event.target.style.color = "#ffffffcc";
        }
        // Add click event listeners to all buttons
        function setEpisodesData(){
            var buttons = document.querySelectorAll('.short-anime-ep');
            buttons.forEach(function(button) {
                button.addEventListener('click', handleClick);
                
                // Check if the button has a stored color and update it
                if (localStorage.getItem(button.id) === "visited-episode-short-anime") {
                button.classList.add("visited-episode-short-anime");
                // button.target.style.color = "#ffffffcc";
                }
            });
            
            let active_epi = document.querySelector(".active-episode");
            console.log(anime);
            localStorage.setItem('lastClickedButton' + anime, active_epi.id);
            localStorage.setItem(active_epi.id, "visited-episode-short-anime");
            let active_aud = document.querySelector(".active-aud.audio");
            localStorage.setItem('lastClickedButtonAudio' + anime, active_aud.getAttribute("name"));
            // localStorage.setItem(active_epi.id, "visited-);
            // console.log(active_aud);
            // Retrieve the last clicked button and update its color
            var lastClickedButtonId = localStorage.getItem('lastClickedButton' + anime);
            if (lastClickedButtonId) {
                var lastClickedButton1 = document.getElementById(lastClickedButtonId);
                lastClickedButton1.classList.add("visited-episode-short-anime");
            }
            // active_aud.style.backgroundColor = "#faa300";
        }

        setTimeout(setEpisodesData, 500);

}