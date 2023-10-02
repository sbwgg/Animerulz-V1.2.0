setTimeout(preloaderDisplayNone, 1000);
window.addEventListener("load", function(){
    preloaderDisplayNone();
    setAnimesInTrendingHover();
});
    function preloaderDisplayNone(){
        try{
            var loader = document.getElementById("preloader");
            // if(loader != null && loader != undefined)
            loader.style.display = "none";    
        }
        catch{}
    }

//for  clearing continue watching data
if(localStorage.clearContinueWatching1 == undefined){
    localStorage.clear("continueWatching");
    localStorage.setItem("clearContinueWatching1", "True");
}
//for scroller to top
const scrollDivToTop_ = document.getElementsByClassName("scroll-to-top-div")[0];
scrollDivToTop_.setAttribute("onclick", "scrollToTopDiv()");
scrollDivToTop_.innerHTML = `<div class="scroll-to-topp">
<i class="fa-solid fa-angle-up"></i>
</div>`;


function scrollToTopDiv(){
    document.getElementById("main").scrollIntoView();
}


//for navbar
function nav_bar_cust(){
    let old_nav;
    let new_nav = 0;
    window.onscroll = function(){
        var nav = document.getElementById("nav-bar-id");
        var search_bar = document.getElementById("search-input");
        var navRect = nav.getBoundingClientRect();
        var search_icon = document.getElementById("search-icon");
        var windowVerticalScroll = window.scrollY;
        var search_field = document.getElementById("search-input");

        if((navRect.top-windowVerticalScroll) < "-250"){
            nav.style.backgroundColor = "#000000";
        }
        else{
           nav.style.backgroundColor = "#00000066";
        }
        old_nav = new_nav;
        new_nav = windowVerticalScroll;
        // console.log(windowVerticalScroll);
        // console.log(navRect.top-windowVerticalScroll > 100);
        if(new_nav > old_nav && navRect.top-windowVerticalScroll < "-500"){
            nav.style.marginTop = "-140px";
            // console.log("in")
            // search_bar.style.display = "none";
        }
        else{
            nav.style.marginTop = "0";
        }


        let scrollToTopDivElement = document.getElementsByClassName("scroll-to-top-div")[0];

        let scrolledAmount = window.scrollY;
        let head = document.getElementsByTagName("head")[0];
        var headRect = head.getBoundingClientRect();
        var windowVerticalScrollNew = window.scrollY;

        let verticalHeight = window.innerHeight;
        if(headRect.top - windowVerticalScrollNew < verticalHeight - 1.5 * verticalHeight){
            scrollToTopDivElement.style.right = "40px";
        }
        else{
            scrollToTopDivElement.style.right = '-50px';
        }
    };
}
//for checking whether it is download page or anime page
var temp = document.getElementsByClassName("anchor-for-back-page");

// if ((temp == null) ||(temp != null && temp.textContent.toLowerCase() != "watching online")){
// if(temp != null)    
nav_bar_cust();
    //for anime pageb
// }
// else{
try{
    document.getElementById("a-home-anchor-tag").setAttribute("href", "https://Animerulz.in/");
    var activeAnime = document.getElementById("a-active-page-tag");
    activeAnime.setAttribute("href", "https://Animerulz.in/" + activeAnime.textContent.replace(/[^a-zA-Z0-9]/g, "").toLowerCase());
}
catch{}
try{
    // console.log(localStorage.getItem("lastClickedButtonOnePiece")
    let check = document.getElementsByClassName("active-page-tag-season")[0];
    let activeAnimeNew;
    if(check === undefined){
        activeAnimeNew = document.getElementById("active-page-tag").textContent.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        // console.log(activeAnimeNew);
    }
    // console.log(document.getElementsByClassName("btns-in-data")[0].getElementsByTagName("a")[0]);
    let activeAnimeNewEpi = localStorage.getItem("lastClickedButton" + activeAnimeNew).split("-")[2];
    if (activeAnimeNewEpi == undefined)
        activeAnimeNewEpi = 1;
    document.getElementsByClassName("btns-in-data")[0].getElementsByTagName("a")[0].setAttribute("href", "/" + activeAnimeNew +  "/Watch-Now/?ep=" + activeAnimeNewEpi + "&aud=" + localStorage.getItem("lastClickedButtonAudio" + activeAnimeNew)); 
    // document.getElementsByClassName('button-read-manga')[0].setAttribute("onclick", "window.open('https://mangareader.to/')");
}
catch{}

try{
    if(document.getElementById("home-anchor-tag") != null)
    document.getElementsByClassName("nav-image")[0].setAttribute("onclick", "window.open('https://animerulz.in/home','_self')");
}
catch{}

try{
    document.getElementsByClassName("second-nav")[0].style.backgroundPositionX = "center";
}
catch{}




// setInterval(removeAds, 5000);

function change_dub(n){
    let element = document.getElementsByClassName("select-items-dub")[n - 1];
    let element2 = document.getElementsByClassName("anime-item-set")[n - 1];
    document.querySelector(".select-items-dub.active-dub").classList.remove("active-dub");
    document.querySelector(".anime-item-set.active-item-set").classList.remove("active-item-set");
    element.classList.add("active-dub");
    element2.classList.add("active-item-set");
}


function setAnimeInWatchList(){
    try{let watchListButton = document.getElementsByClassName("button-read-manga")[0];
    let animesInWatchList = localStorage.getItem("watchList");
    let animeName = document.getElementsByTagName("h1")[0].textContent;

    if(animesInWatchList != undefined){
        let animesInWatchListData = JSON.parse(animesInWatchList);

        animesInWatchListData.forEach(function(animeInWatchListData) {
            if(animeInWatchListData.animeName === animeName){
                watchListButton.innerText = "View WatchList";
                watchListButton.setAttribute("onclick", "window.open('https://animerulz.in/watchlist', '_self')");
            }
        })
    }}
    catch{}
}

setTimeout(setAnimeInWatchList, 500);

function addAnimeToList(){
    let watchListButton = document.getElementsByClassName("button-read-manga")[0];
    let notificationContainer = document.createElement('div');
    notificationContainer.setAttribute("class", "pop-up-watch-list-notification");
    notificationContainer.innerHTML = `
   <div class="content-notification-watch-list">
      <span>Anime Added to Watch List</span>
   </div>`;
    document.getElementsByTagName("body")[0].appendChild(notificationContainer);
    // notificationContainer.style.opactiy = "1 !important";
    watchListButton.textContent = "View Watch List";
    watchListButton.setAttribute("onclick", "window.open('https://animerulz.in/WatchList/', '_self')");
    let animeLink = window.location.href;
    let animeName = document.getElementsByTagName("h1")[0].textContent;
    let animeImageUrl = document.getElementsByClassName("image-in-container-image-div")[0].getAttribute("src");

    if(localStorage.watchList == undefined){
        let animeDataWatchList = [
            {
                animeLink : animeLink,
                animeName : animeName,
                animeImageUrl : animeImageUrl
            }
        ]

        let animeData_ = JSON.stringify(animeDataWatchList);

        localStorage.setItem("watchList", animeData_);
    }else{
        let animeDataWatchList = 
            {
                animeLink : animeLink,
                animeName : animeName,
                animeImageUrl : animeImageUrl
            }


        let animeLocalData = localStorage.getItem("watchList");
        let anime___ = JSON.parse(animeLocalData);

        for(let i = 0; i < anime___.length; i ++){
            if(anime___[i].animeName === animeDataWatchList.animeName){
                anime___.splice(i, 1);
                break;
            }
        }
        anime___.push(animeDataWatchList);

        localStorage.setItem("watchList", JSON.stringify(anime___));
    }
    setTimeout(removeNotificationContainer, 3000);
}

function removeNotificationContainer(){
    document.getElementsByClassName("pop-up-watch-list-notification")[0].style.display = "none";
}

//for continue watching anime in home page
function addAnimeToQueue(){
    let animeImage__ = document.getElementsByClassName("image-in-container-image-div")[0].getAttribute("src");
    let animeName__ = document.getElementById("active-page-tag").textContent;
    let animeUrl__ = window.location.href;

    if(localStorage.continueWatching == undefined){
        let animeDataCV = [
            {
                animeName : animeName__,
                animeImage : animeImage__,
            }
        ];
        localStorage.setItem("continueWatching", JSON.stringify(animeDataCV));
    }else{
        let animeDataCV = {
            animeName : animeName__,
            animeImage : animeImage__,
        };
        let existingAnimeData = localStorage.getItem("continueWatching");

        let convertedExistingData = JSON.parse(existingAnimeData);

        for(let i = 0; i < convertedExistingData.length; i ++){
            if(convertedExistingData[i].animeName === animeDataCV.animeName){
                convertedExistingData.splice(i, 1);
                break;
            }
        }
        convertedExistingData.push(animeDataCV);

        localStorage.setItem("continueWatching", JSON.stringify(convertedExistingData));
    }
}

//for more menu section
function disableScroll(){
    document.getElementsByTagName("body")[0].style.position = "fixed";
 }
 function enableScroll(){
    document.getElementsByTagName("body")[0].style.position = "initial"; 
 }

 function show_menu(){
    let menu = document.getElementsByClassName("more-menu")[0];
    menu.style.marginLeft = "0";
    // disableScroll();
 }
 function hide_menu(){
    let menu = document.getElementsByClassName("more-menu")[0];
    menu.style.marginLeft = "-100vw";
    // enableScroll();
 }


function setTrendingAnimeInSearch(){
    let trendingAnimeInSearchContainer = document.getElementsByClassName("list-search-trending")[0];
    let trendingAnime = [
        "One Piece", "Jujutsu Kaisen Season 2", "Bleach Thousand Year Blood War Season 2", "Zom 100", "Demon Slayer Swordsmith Village Arc"
    ]
    let temppp = "";
    let counterrr = 0;
    trendingAnime.forEach((animee) => {
        temppp += `
        <li class="element-search-tr__" onclick="window.open('https://animerulz.in/search/?anime=${animee}', '_self')" id="ele-${counterrr}"><svg class="arrow-element-in-search__" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg><span class="txt">${animee}</span></li>
        `;
        counterrr ++;
    });
    trendingAnimeInSearchContainer.innerHTML = temppp;
} 

setTrendingAnimeInSearch();



const moreSeasonsOfThisSection = document.querySelectorAll(".anime-seasons-items__");
const wholeMoreSeasonsContainer = document.getElementsByClassName("more-season-anime-container__")[0];
if(wholeMoreSeasonsContainer != undefined){
    if(moreSeasonsOfThisSection.length == 0)
        wholeMoreSeasonsContainer.style.display = "none";
    else
        for(let i = 0 ; i < moreSeasonsOfThisSection.length; i ++){
            moreSeasonsOfThisSection[i].style.backgroundRepeat = "no-repeat";
            moreSeasonsOfThisSection[i].style.backgroundSize = "100%";
        }
}

const commentSection = document.getElementsByClassName("data-comment-section_")[0];

function setCommentSection(){
    try
        {let commentSectionButtonNew = document.querySelector(".show-more-comments button");
        // let commentSection = document.getElementsByClassName("data-comment-section_")[0];

        if(commentSection.offsetHeight <= 1000){
            commentSectionButtonNew.style.display = "none";
        }else{
            commentSection.style.maxHeight = "1000px";
        }
        commentSectionButtonNew.setAttribute("onclick", "moreCommentsNew()");}
        catch{}
}

setTimeout(setCommentSection, 3000);


function moreCommentsNew() {
    // let commentSection = document.getElementsByClassName("data-comment-section_")[0];
    let buttonShowMore = document.querySelector(".comment-section_ .show-more-comments button");  
    
    commentSection.removeAttribute("style");
    buttonShowMore.innerHTML = "show less";
    buttonShowMore.setAttribute("onclick", "lessCommentsNew()");
}
function lessCommentsNew(){
    // let commentSection = document.getElementsByClassName("data-comment-section_")[0];
    let buttonShowMore = document.querySelector(".comment-section_ .show-more-comments button");

    commentSection.style.maxHeight = "1000px";
    buttonShowMore.innerHTML = "show more";
    buttonShowMore.setAttribute('onclick', "moreCommentsNew()");
}


try{
    document.querySelectorAll(".follow-icons a")[2].setAttribute("href", "https://t.me/animerulz_xyz");
    document.querySelectorAll(".follow-icons a")[6].setAttribute("href", "https://t.me/animerulz_xyz");
}
catch{}



//for hovering animes
function setAnimesInTrendingHover(){
    let animeHover = document.getElementsByClassName("anime-in-trending")[0];
    if(animeHover){
        const animesHover = document.getElementsByClassName("anime-in-trending");
        if(window.innerWidth >= 900)
        {
            for(let i = 0; i < animesHover.length; i ++){
                animesHover[i].addEventListener("mouseover", () => {
                    showHoverDiv(animesHover, i);
                });
                animesHover[i].addEventListener("mouseout", () => {
                    hideHoverDiv(animesHover, i);
                });
            }
        }    
    }else{
        setTimeout(setAnimesInTrendingHover, 2000);
    }
}

function showHoverDiv(animesHover, index){
    let animeTrendingBound;
    if(!animesHover[index].getElementsByClassName("anime-hover-data")[0])
    {
        let newElementHover = document.createElement("div");
        newElementHover.setAttribute("class", "anime-hover-data");
        newElementHover.innerHTML = `
        <div class="loader-hover-data">
                  <div class="loading-animation">
                     <div class="loader-rings"></div>
                  </div>
               </div>`
        animesHover[index].append(newElementHover);
        getDataFromAnilist2(animesHover, Number(animesHover[index].getAttribute("anime-id")), index);
    }
    else{
        animesHover[index].getElementsByClassName("anime-hover-data")[0].style.display = "flex";
    }
    animeTrendingBound = animesHover[index].getBoundingClientRect();
    let windowWidth = window.innerWidth < 1500 ? window.innerWidth : 1500;
    // console.log(windowWidth, extraWidth, (animeTrendingBound.x - 1500) / 2 ,window.innerWidth , window.innerWidth == animeTrendingBound.x);
    // console.log(windowWidth - animeTrendingBound.x - animeTrendingBound.width - 200);
    if(windowWidth - animeTrendingBound.x - animeTrendingBound.width - 400 < 0 ){
        animesHover[index].getElementsByClassName("anime-hover-data")[0].style.left = "-90%";
    }else{
        animesHover[index].getElementsByClassName("anime-hover-data")[0].style.left = "90%";
    }
}
function hideHoverDiv(animesHover, index) {
    try{
        animesHover[index].getElementsByClassName("anime-hover-data")[0].style.display = "none";
    }
    catch{}
}


async function getDataFromAnilist2(animesHover, animeKey, index){
    console.log(animesHover);
    // console.log(animeKey, "in");
    let query = `
    query ($id: Int) { # Define which variables will be used in the query (id)
        Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
          id
          title {
            romaji
            english
            native
          }
          nextAiringEpisode {
            timeUntilAiring
            episode
          }
          format
          episodes
              studios {
                edges {
              node
              {
                name
              }
                }
              }
          meanScore
          genres
        }
      }
      
      `
    
// Define our query variables and values that will be used in the query request
var variables = {
    searchKey: animeKey,
    id: animeKey,
    type: 'ANIME'
};

// Define the config we'll need for our Api request
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make the HTTP Api request
fetch(url, options).then(handleResponse)
                   .then(handleData)
                   .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    // console.log(data);
    let newData = data['data']['Media'];
    let lastEpisode = newData['nextAiringEpisode'] ? newData['nextAiringEpisode']['episode'] - 1 : newData['episodes'];
    let nextEpisodeData = "FINISHED";
    let studioName;
    let animeHref = animesHover[index].getElementsByTagName("a")[0].getAttribute("href");
    if(animeHref[animeHref.length - 1] != "/"){
        animeHref += "/";
    }
    try{
        studioName = newData['studios']['edges'][0]['node']['name'];
    }
    catch{
        studioName = "";
    }
    if(newData['nextAiringEpisode']){
        let timeUntilAir = newData['nextAiringEpisode']['timeUntilAiring'] / 3600;
        let daysUntilAir = Math.floor(timeUntilAir / 24);
        let hoursUntilAir = Math.floor(timeUntilAir % 24);
        nextEpisodeData = "next Episode-" + newData['nextAiringEpisode']['episode'] + " in " + daysUntilAir + "d " + hoursUntilAir + "h";
    }
    animesHover[index].getElementsByClassName("anime-hover-data")[0].innerHTML = `
    <div class="anime-episode-data medium-font">
       <b>${nextEpisodeData}</b>
    </div>
  <div class="anime-info-n small-font">
     <div class="anime-studio">
        ${studioName}
     </div>
     <div class="anime-more-info-n small-font">
        <div class="anim-info-n-i">T.V</div>
        <div class="seperator-div">
           <div class="seperator"></div>
        </div>
        <div class="anim-info-n-i">${lastEpisode} episodes</div>
     </div>
  </div>
  <div class="anime-name">
    <h3>${newData['title']['english'] ? newData['title']['english'] : newData['title']['romaji']}</h3>
    <div class="anime-liked-percent small-font">
     <span>${newData['meanScore']}%</span>
  </div>
</div>
  <div class="anime-genres-n small-font">
     <div class="anime-genre-n">${newData['genres'][0]}</div>
     <div class="seperator-div">
       <div class="seperator"></div>
    </div>
     <div class="anime-genre-n">${newData['genres'][1]}</div>
     <div class="seperator-div">
       <div class="seperator"></div>
    </div>
     <div class="anime-genre-n">${newData['genres'][2]}</div>
  </div>
  <div class="watch-now-hover small-font">
    <a href="${animeHref}Watch-Now/?ep=${lastEpisode}&aud=jap" title="Watch ${newData['title']['english']}"><button>
    <i class="fa-solid fa-circle-play small-font"></i>
    Watch Now
    </button></a>
 </div>`;
}
function handleError(e){
    console.log(e);
}
}
