const pageType = document.getElementsByTagName("html")[0].getAttribute('page-type');


setTimeout(preloaderDisplayNone, 1000);
window.addEventListener("load", function(){
    if(pageType != 'a-main' && pageType != 'b-sub')
    setMoreMenu();
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
function setMoreMenu(){
    document.getElementsByClassName("more-menu")[0].innerHTML = `
    
   <div class="close-this-a large-txt" onclick="hide_menu()">
   <div class="close-a-b-c">
    <i class="fa-solid fa-xmark">
    </i>
   </div>
  </div>
  <div class="main-container-in-menu">
   <div class="main-header-new-a">
    <div class="data-div-a-b-c">f
     <div class="anime-main-txt-a-a large-txt">
      <span>
       Animerulz
      </span>
     </div>
     <div class="version-txt-a-a">
      <span>
       Version 1.2.0
      </span>
     </div>
    </div>
   </div>
   <div class="more-data-for-menu">
    <div class="more-data-in-menu">
     <div class="data-in-menu first-data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/home">
       <span>
        HOME
       </span>
      </a>
     </div>
     <div class="data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/watchlist">
       <span>
        My Watch List
       </span>
       <svg class="svg-icon-on-menu" fill="rgba(255,255,255,0.8)" id="left-arrow" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z">
        </path>
       </svg>
      </a>
     </div>
     <div class="data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/subbedanime">
       <span>
        SUBBED
       </span>
       <svg class="svg-icon-on-menu" fill="rgba(255,255,255,0.8)" id="left-arrow" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z">
        </path>
       </svg>
      </a>
     </div>
     <div class="data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/dubbedanime">
       <span>
        DUBBED
       </span>
       <svg class="svg-icon-on-menu" fill="rgba(255,255,255,0.8)" id="left-arrow" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z">
        </path>
       </svg>
      </a>
     </div>
     <div class="data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/hindiddubbed">
       <span>
        HINDI DUBBED
       </span>
       <svg class="svg-icon-on-menu" fill="rgba(255,255,255,0.8)" id="left-arrow" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z">
        </path>
       </svg>
      </a>
     </div>
     <div class="data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/telugudubbed">
       <span>
        TELUGU DUBBED
       </span>
       <svg class="svg-icon-on-menu" fill="rgba(255,255,255,0.8)" id="left-arrow" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z">
        </path>
       </svg>
      </a>
     </div>
     <div class="data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/tamildubbed">
       <span>
        TAMIL DUBBED
       </span>
       <svg class="svg-icon-on-menu" fill="rgba(255,255,255,0.8)" id="left-arrow" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z">
        </path>
       </svg>
      </a>
     </div>
     <div class="data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/malayalamdubbed">
       <span>
        MALAYALAM DUBBED
       </span>
       <svg class="svg-icon-on-menu" fill="rgba(255,255,255,0.8)" id="left-arrow" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z">
        </path>
       </svg>
      </a>
     </div>
     <div class="data-in-menu">
      <a class="anchor-in-menu" href="https://animerulz.in/bangalidubbed">
       <span>
        BENGALI DUBBED
       </span>
       <svg class="svg-icon-on-menu" fill="rgba(255,255,255,0.8)" id="left-arrow" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z">
        </path>
       </svg>
      </a>
     </div>
     <div class="more-in-data-in-menu">
      <div class="data-in-menu-2 first-item">
       <a class="anchor-in-menu" href="https://animerulz.in/trendinganime">
        <!-- <i class="fa-solid fa-fire" style="color: #d23232;"></i> -->
        <i class="fa-solid fa-fire fa-beat fa-sm" style="color: #c03535;">
        </i>
        <span>
         Trending Anime
        </span>
       </a>
      </div>
      <div class="data-in-menu-2 second-item">
       <a class="anchor-in-menu" href="https://animerulz.in/topairing">
        <!-- <i class="fa-solid fa-arrow-trend-up" style="color: #209720;"></i> -->
        <!-- <i class="fa-regular fa-arrow-trend-up fa-beat fa-sm" style="color: #1f9720;"></i> -->
        <i class="fa-solid fa-arrow-trend-up fa-beat fa-sm" style="color: #1f9720;">
        </i>
        <span>
         Top Airing
        </span>
       </a>
      </div>
      <div class="data-in-menu-2 third-item">
       <a class="anchor-in-menu" href="https://animerulz.in/bestratedanime">
        <!-- <i class="fa-thin fa-user" style="color: #1c347d;"></i> -->
        <i class="fa-solid fa-star fa-beat fa-sm" style="color: #C3AC7B;">
        </i>
        <span>
         Best Rated Anime
        </span>
       </a>
      </div>
      <div class="data-in-menu-2 fourth-item">
       <a class="anchor-in-menu" href="https://animerulz.in/mostviewedanime">
        <!-- <i class="fa-light fa-eye fa-beat fa-sm"></i> -->
        <i class="fa-solid fa-eye fa-beat fa-sm">
        </i>
        <span>
         Most Viewed Anime
        </span>
       </a>
      </div>
      <div class="data-in-menu-2 fifth-item">
       <a class="anchor-in-menu" href="https://animerulz.in/bestmovies">
        <i class="fa-sharp fa-solid fa-video fa-sm fa-beat">
        </i>
        <span>
         Best Movies
        </span>
       </a>
      </div>
     </div>
     <div class="genres_div_">
      <div class="genres_header_div">
       <span class="more-anime-txt-genres">
        <b>
         Genres
        </b>
       </span>
      </div>
      <div class="container-genres_div">
       <div class="genres-div-data-container">
        <a class="genres_anchor_" href="https://animerulz.in/genres/action">
         Action
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/drama">
         Drama
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/psychological">
         Psychological
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/romance">
         Romance
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/comedy">
         Comedy
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/sliceoflife">
         Slice of Life
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/scifi">
         Sci-Fi
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/supernatural">
         Supernatural
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/ecchi">
         Ecchi
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/mystery">
         Mystery
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/sports">
         Sports
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/music">
         Music
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/mecha">
         Mecha
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/adventure">
         Adventure
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/thriller">
         Thriller
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/horror">
         Horror
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/fantasy">
         Fantasy
        </a>
        <a class="genres_anchor_" href="https://animerulz.in/genres/mahoushoujo">
         Mahou Shoujo
        </a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="close-me-div" onclick="hide_menu()">
  </div>
 `
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
    watchListButton.setAttribute("onclick", "window.open('https://animerulz.in/watchlist/', '_self')");
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

 const menuData = document.getElementsByClassName("main-container-in-menu")[0];
 const menu = document.getElementsByClassName("more-menu")[0];

 function show_menu(){
    menuData.setAttribute("style", "animation: slideIn 0.4s ease-in-out both;");
    menu.style.display = "flex";
 }
 function hide_menu(){
    menuData.setAttribute("style", "animation: slideOut 0.4s ease-in-out both;");
    setTimeout(() => {
        menu.style.display = "none";
    }, 300)
 }


function setTrendingAnimeInSearch(){
    let trendingAnimeInSearchContainer = document.getElementsByClassName("list-search-trending")[0];
    let trendingAnime = [
        "One Piece","Tokyo Revengers Season 3", "Jujutsu Kaisen Season 2", "Bleach Thousand Year Blood War Season 2", "Zom 100"
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
    // console.log(animesHover);
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
    let nextEpisodeData;
    let studioName;
    let animeHref = animesHover[index].getElementsByTagName("a")[0].getAttribute("href")
    try{
        if(animeHref[animeHref.length - 1] != "/"){
            animeHref += "/";
        }
    }
    catch{
        animeHref = null;
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
        nextEpisodeData = "Next Episode-" + newData['nextAiringEpisode']['episode'] + " in " + daysUntilAir + "d " + hoursUntilAir + "h";
    }else{
        if(newData['episodes'])
            nextEpisodeData = 'FINISHED';
        else
            nextEpisodeData = 'COMING SOON';
    }
    let animeFinalLink = animeHref ? `${animeHref}Watch-Now/?ep=${lastEpisode}&aud=jap` : ''
    let btnText = lastEpisode ? `<i class="fa-solid fa-circle-play small-font"></i> Watch Now` : `Coming Soon`;
    let anchorToAnime = btnText == `<i class="fa-solid fa-circle-play small-font"></i> Watch Now` ? `href="${animeFinalLink}"` : "";
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
    <a ${anchorToAnime} title="${newData['title']['english']}"><button>
    ${btnText}
    </button></a>
 </div>`;
}
function handleError(e){
    console.log(e);
}
}





//for setting anime episodes 
try{
    if(document.getElementsByClassName('time-index')[0]){
        let animeId = document.getElementsByTagName("html")[0].getAttribute('id');
    async function getDataFromAnilist3(animeKey){
        let query = `
        query ($id: Int) { # Define which variables will be used in the query (id)
            Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
              id
              episodes
                  studios {
                    edges {
                  node
                  {
                    name
                  }
                    }
                  }
                  nextAiringEpisode {
                    timeUntilAiring
                    episode
                  }
                  endDate{
                    year
                    month
                    day
                  }
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
        setAnimeCurrentEpisodes(data['data']['Media']);
        setUpdatedTime(data['data']['Media']);
    }
    function handleError(e){
        console.log(e);
    }
    }
    if(pageType == 'a-main')
        getDataFromAnilist3(animeId);

    function setAnimeCurrentEpisodes(data){
        // console.log(data);
        let animeSubEpisodes = document.querySelector(".list-ele-b-h.subbed-anime-txt__").getElementsByTagName("span")[0];
        let currentSubEpisodes;
        if(data['nextAiringEpisode']['episode']){
            currentSubEpisodes = data['nextAiringEpisode']['episode'] - 1;
        }else{
            currentSubEpisodes = data['episodes'];
        }
        animeSubEpisodes.innerText = currentSubEpisodes;
    }
    function setUpdatedTime(data){
        let animeUpdatedTimeElement = document.querySelector(".time-index");
        if(data['endDate']['year']){
            animeUpdatedTimeElement.innerHTML = `<i class="fa-solid fa-clock"></i>&nbsp;<span>Updated on ${data['endDate']['year']}/${data['endDate']['month']}</span>`; 
        }else{
            // animeUpdatedTimeElement.innerText
            let timeUntilAir = data['nextAiringEpisode']['timeUntilAiring'] / 3600;
            let daysUntilAir = Math.floor(timeUntilAir / 24);
            let tempoo = 6 - daysUntilAir;
            if(tempoo != 0)
                animeUpdatedTimeElement.innerHTML = `<i class="fa-solid fa-clock"></i>&nbsp;<span>Updated ${tempoo} days ago - New Episode ${data['nextAiringEpisode']['episode'] - 1} is Uploaded</span>`;
            else
                animeUpdatedTimeElement.innerHTML = `<i class="fa-solid fa-clock"></i>&nbsp;<span>Updated today - New Episode ${data['nextAiringEpisode']['episode'] - 1} is Uploaded</span>`;
        }
    }
}
    
}catch{}

try{
    if(!document.getElementsByClassName("time-index")[0]){
        let animeId = document.getElementsByTagName("html")[0].getAttribute('id');
        async function getDataFromAnilist4(animeKey){
            let query = `
            query ($id: Int) { # Define which variables will be used in the query (id)
                Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
                  id
                      nextAiringEpisode {
                        timeUntilAiring
                        episode
                      }
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
            setAnimeNextEpisodeData(data['data']['Media']);
        }
        function handleError(e){
            console.log(e);
        }
        }
        if(pageType == 'b-sub')
            getDataFromAnilist4(animeId);

        function setAnimeNextEpisodeData(data){
            let animeNextAiringEpisodeDivision;
            let tempDiv = document.getElementsByClassName("nxt-episode-info")[0];
            if(tempDiv){
                animeNextAiringEpisodeDivision = tempDiv;
            }
            let nextAiringEpisodeData = data['nextAiringEpisode'];
            if(nextAiringEpisodeData){
                let timeUntilAir = nextAiringEpisodeData['timeUntilAiring'] / 3600;
                let daysUntilAir = Math.floor(timeUntilAir / 24);
                let hoursUntilAir = Math.floor(timeUntilAir % 24);
                let nextEpisodeDataNew;
                if(daysUntilAir != 0){
                    if(daysUntilAir == 1)
                        nextEpisodeDataNew = "Next Episode - " + nextAiringEpisodeData['episode'] + " Airing in " + daysUntilAir + " day " + hoursUntilAir + " hours";
                    else
                        nextEpisodeDataNew = "Next Episode - " + nextAiringEpisodeData['episode'] + " Airing in " + daysUntilAir + " days " + hoursUntilAir + " hours";
                }else
                    nextEpisodeDataNew = "Next Episode - " + nextAiringEpisodeData['episode'] + " Airing in " + hoursUntilAir + " hours";
                if(!tempDiv){
                    let temppDivision = document.createElement('div');
                    temppDivision.setAttribute('class', "nxt-episode-info");
                    document.getElementsByClassName("main-container-video-sec-1")[0].appendChild(temppDivision);
                    animeNextAiringEpisodeDivision = temppDivision;
                }
                animeNextAiringEpisodeDivision.innerHTML = `<i class="fa-regular fa-face-grin-stars fa-bounce"></i>&nbsp; <span id="nxt-episode-txt">
                    ${nextEpisodeDataNew} 
                </span>`
            }else{
                animeNextAiringEpisodeDivision.style.display = 'none';
            }
        }
    }
}
catch(e){
    console.log(e);
}
