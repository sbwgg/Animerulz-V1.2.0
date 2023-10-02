const animeFromURL = window.location.search;
const urlParams = new URLSearchParams(animeFromURL);
const animeContainerSearch = document.getElementsByClassName("result-items-in-container___")[0];

if(urlParams.size == 0){
    window.location.replace('/home');
}
// console.log(urlParams);
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
              large
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
    // console.log(data);
    let count = 30;
    let temp = "";
    let animesSearchResult = data.data.Page.media;
    for(let i = 0; i < animesSearchResult.length;i ++ ){
        if(animesSearchResult[i].title.english != null){
        temp = `
        <a href="/${animesSearchResult[i].title.english.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")}" title="${animesSearchResult[i].title.english}" class="main-data__container">
            <div class="anime-info__res">
                <div class="anime-des___">
                    <div class="anime-epi___">Episodes-${animesSearchResult[i].episodes}</div>
                    <div class="anime-type___">${animesSearchResult[i].format}</div>
                </div>
                <div class="anime-name__">
                    <h2>${animesSearchResult[i].title.english}</h2>
                </div>
            </div>
        </a>
    `;
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "result-item-in-container___");
    divElement.style = `background:linear-gradient(0deg, rgba(0,0,0,9) 0%,rgba(0,0,0,0.9) 20%,rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.3) 100%), url(${animesSearchResult[i].coverImage.large}); background-size:100% auto;background-repeat:no-repeat;`;
    divElement.innerHTML = temp;
    animeContainerSearch.appendChild(divElement);
    }
}
}
function handleError(e){
    console.log(e);
}
}
let searchAnime = urlParams.get("anime");
document.getElementsByClassName("txt-header-search-wrapper")[1].textContent = searchAnime;
getDataFromAnilist(searchAnime);