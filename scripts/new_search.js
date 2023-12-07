const searchContainer = document.querySelector(".search-container");
let searchBox = searchContainer.querySelector(".input-box__");
if(!searchBox)
    searchBox = searchContainer.querySelector(".input-box_");
const trendingAnimeSearch = document.getElementsByClassName("search-results-trending-container__")[0];
const recentSearchesContainer = document.getElementsByClassName("recent-searches-txt-container__")[0];
const anilistContainer = document.getElementsByClassName("anilist-search-container")[0];
const loaderAnilist = document.getElementsByClassName("loader-for-search-results")[0];
const resultsDataContainer = document.getElementsByClassName("anilist-search-data-list")[0];
const searchIcon = document.getElementsByClassName("search-box-icon__")[0];
let key = 0;

if(searchBox.value){
    anilistContainer.style.display = "flex";
}
else{
    trendingAnimeSearch.style.display = "flex";
    // recentSearchesContainer.style.display = "flex";
}

searchBox.onkeyup = (e) => {
    if(e.keyCode == 40){
        if(key == 0)
            selectDownItem();
        else
            selectAnilistDownItem();
    }else if(e.keyCode == 38){
        if(key == 0)
            selectUpItem();
        else 
            selectAnilistUpItem();
    }else if(e.keyCode == 13 && searchBox.value){
        let anime = searchBox.value;
        searchHistory = localStorage.getItem("searchHistory");
        if(searchHistory){
            searchHistory = JSON.parse(searchHistory);
            searchHistory.forEach((item) => {
                if(anime == item)
                    searchHistory.splice(searchHistory.indexOf(anime), 1);
            });
            searchHistory.unshift(anime);
            if(searchHistory.length > 5)
                searchHistory.pop();
        }else searchHistory = [anime];
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

        window.open("/search/?anime=" + anime, "_self");
    }
    else{
        if(e.keyCode == 8 && !searchBox.value){
            key = 0;
            trendingAnimeSearch.style.display = 'flex';
            recentSearchesContainer.style.display = 'flex';
            anilistContainer.style.display = "none";
        }
        else{
            key = 1;
            recentSearchesContainer.style.display = 'none';
            trendingAnimeSearch.style.display = 'none';
            anilistContainer.style.display = "flex";
            // loaderAnilist.style.display = "flex";
            if(searchBox.value.length >= 4){
                // callGetData(searchBox.value);
                setTimeout(getDataFromAnilist(searchBox.value), 500);
            }
            anilistContainer.addEventListener("load", hideLoader());
        }
    }

    if(searchBox.value){
        searchIcon.setAttribute("onclick", "window.open('/search/?anime=" + searchBox.value + "', '_self')");
    }else{

    }
    // let data = e.target.value;
    // document.getElementsByClassName("search-results-container__")[0].innerHTML = data;
}
async function callGetData(searchKey){
    await sleep(500);
    if(searchContainer.querySelector(".input-box__").value == searchKey)
        getDataFromAnilist(searchKey);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function hideLoader(){
    // loaderAnilist.style.display = "none";
}

function selectDownItem(){
    let setActive;
    let activeElement = document.querySelector(".element-search-tr__.active");
    let listElements = document.getElementsByClassName("element-search-tr__");
    if(activeElement == undefined){
        setActive = 0;
    }else{
        let activeElementId = activeElement.getAttribute("id");
        let elementNumber = activeElementId.charAt(activeElementId.length - 1);
        setActive = (Number(elementNumber) + 1) % listElements.length;
        activeElement.classList.remove("active");
    }
    listElements[setActive].classList.add("active");
    searchBox.value = listElements[setActive].textContent;
}
function selectUpItem(){
    let setActive;
    let activeElement = document.querySelector(".element-search-tr__.active");
    let listElements = document.getElementsByClassName("element-search-tr__");
    if(activeElement == undefined){
        setActive = listElements.length - 1;
    }else{
        let activeElementId = activeElement.getAttribute("id");
        let elementNumber = activeElementId.charAt(activeElementId.length - 1);
        setActive = (Number(elementNumber) - 1) % listElements.length;
        activeElement.classList.remove("active");
    }
    listElements[setActive].classList.add("active");
    searchBox.value = listElements[setActive].textContent;
}
function selectAnilistDownItem(){
    let setActive;
    let activeElement = document.querySelector(".item-search-data_.active");
    let listElements = document.getElementsByClassName("item-search-data_");
    if(activeElement == undefined){
        setActive = 0;
    }else{
        let activeElementId = activeElement.getAttribute("id");
        let elementNumber = activeElementId.charAt(activeElementId.length - 1);
        setActive = (Number(elementNumber) + 1) % listElements.length;
        activeElement.classList.remove("active");
    }
    listElements[setActive].classList.add("active");
    searchBox.value = listElements[setActive].getElementsByClassName("anime-name-search-res")[0].textContent;
}
function selectAnilistUpItem(){
    let setActive;
    let activeElement = document.querySelector(".item-search-data_.active");
    let listElements = document.getElementsByClassName("item-search-data_");
    if(activeElement == undefined){
        setActive = listElements.length - 1;
    }else{
        let activeElementId = activeElement.getAttribute("id");
        let elementNumber = activeElementId.charAt(activeElementId.length - 1);
        setActive = (Number(elementNumber) - 1) % listElements.length;
        activeElement.classList.remove("active");
    }
    listElements[setActive].classList.add("active");
    searchBox.value = listElements[setActive].getElementsByClassName("anime-name-search-res")[0].textContent;
}
async function getDataFromAnilist(animeKey){
    let query = `
    query ($searchKey: String, $type: MediaType) {
        Page {
          media(search: $searchKey, type: $type) {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              medium
            }
            format
            averageScore
            episodes
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            nextAiringEpisode {
                timeUntilAiring
                episode
            }
          }
        }
      }
      `
    
// Define our query variables and values that will be used in the query request
var variables = {
    searchKey: animeKey,
    // id: 21,
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
    resultsDataContainer.innerHTML = "";
    let animeCount = 4;
    let requiredAnimeData = data.data.Page.media;
    if(requiredAnimeData.length == 0){
        resultsDataContainer.innerHTML = ` <div class="no-results-found-section">
        <span>No Results Found</span>
     </div>`;
     document.getElementsByClassName("more-results-sec")[0].style.display = "none";
    }
    else{
        let temp;
        for(let i = 0; i < animeCount; i ++){
            let animePresentEpisodes;
            if(requiredAnimeData[i].nextAiringEpisode){
                animePresentEpisodes =  requiredAnimeData[i].nextAiringEpisode['episode'] - 1;
            }else animePresentEpisodes = requiredAnimeData[i].episodes;
            temp = "";
            if(requiredAnimeData[i].title.english != null){
            try{
                temp = `<li class="item-search-data_" id="element-${i}" onclick="openSearchNew('${requiredAnimeData[i].title.english}')">
                <div class="image-data"><img src="${requiredAnimeData[i].coverImage.medium}" alt="" class="img-search-res"></div>
                <div class="search-anime-data-res">
                <div class="head-data-search-res">
                        <span class="anime-name-search-res">${requiredAnimeData[i].title.english}</span>
                </div>
                <div class="bottom-data-search-res">
                    <div class="btm-div-1">
                        <div class="anime-info-search-data">
                            <div class="anime-info-item-search">Episodes : ${animePresentEpisodes}</div>
                            <div class="anime-info-item-search">${requiredAnimeData[i].format}</div>
                            <div class="anime-info-item-search">Score : ${requiredAnimeData[i].averageScore}</div>
                            </div>
                    </div>
                    <div class="btm-div-2">
                        <div class="anime-info-search-data__">
                            <div class="anime-info-item-search__">Start : ${requiredAnimeData[i].startDate.year}</div>
                            <div class="anime-info-item-search__">End : ${requiredAnimeData[i].endDate.year}</div>
                            </div>
                    </div>
                </div>
                </div>
            </li>`;
            }
            catch{
                // i --;
            }
        }
        let listItem = document.createElement("li");
        listItem.innerHTML = temp;
        resultsDataContainer.appendChild(listItem);
        }
        let newTemp = `<div class="data-more-results" onclick='window.open("/search/?anime=${searchBox.value}", "_self")'>
        <span class="text-more-results">More Results</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="svg-more-res" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/></svg>
    </div>`;
        document.getElementsByClassName("more-results-sec")[0].innerHTML = newTemp;
    }
    // console.log(data);
    
    // console.log(data.data.Media.relations.edges[0].node);
    // console.log(data.data.AnimeSearch.media);
}

function handleError(error) {
    // alert('Error, check console');
    console.error(error);
}

}
function show_search_box(){
    let searchContainerDivision = document.getElementsByClassName("search-container")[0];
    searchContainerDivision.style.display = "block"; 
    setTimeout(() => {
        document.getElementsByTagName("input")[0].focus();
    }, 500);  
}
function hideSearchBox(){
    let searchContainerDivision = document.getElementsByClassName("search-container")[0];
    searchContainerDivision.style.display = "none";   
}


function openSearchNew(anime){
    searchHistory = localStorage.getItem("searchHistory");
    if(searchHistory){
        searchHistory = JSON.parse(searchHistory);
        searchHistory.forEach((item) => {
            if(anime == item)
                searchHistory.splice(searchHistory.indexOf(anime), 1);
        });
        searchHistory.unshift(anime);
        if(searchHistory.length > 5)
            searchHistory.pop();
    }else searchHistory = [anime];
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    console.log(`/${anime.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}`);
    window.open(`/${anime.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}`, '_self');
}