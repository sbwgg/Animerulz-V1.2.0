// import Hls from 'https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js';
// import Plyr from 'https://cdn.plyr.io/3.6.2/plyr.js';


let startTime = new Date().getTime();
const animeType = getAnimeType();
const animeName = document.getElementById("a-active-page-tag").textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").trim();
let data;
let presentEpisodeData;
let existingAudio;
let existingServer;
const url =  new URL(window.location.href);
const searchParams = window.location.search;
const urlParams = new URLSearchParams(searchParams);
//get url params
let urlData = {
    episodeNumber : urlParams.get('ep'),
    audio : urlParams.get('aud'),
};

if(!urlData.episodeNumber){
    let animeLastClickedEpisodeNew = localStorage.getItem(`${animeName}-last-clicked-episode`);
    if(!animeLastClickedEpisodeNew)
        animeLastClickedEpisodeNew = 1;
    let lastClickedAnimeAudio =  localStorage.getItem(`presentAudioAnimerulzAnime-${animeName}`);
    if(!lastClickedAnimeAudio)
        lastClickedAnimeAudio = 'jap'
    urlData.episodeNumber = animeLastClickedEpisodeNew;
    urlData.audio = lastClickedAnimeAudio
    existingAudio = lastClickedAnimeAudio;
    changeUrl(animeLastClickedEpisodeNew);
}
let max = 0;


getAnime();



function getAnime(){
    let request = new XMLHttpRequest();
    request.open("get", "details.json", true);
    request.send();
    request.onload = function() {
        if(this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText);
            data = response;
            setAnime();
        }
    }
}

function setAnime(){
    Object.keys(data).forEach(episodes => {
        if(max < Number(episodes))
            max = Number(episodes);
    });
    //for storing episodes keys
    if(animeType === 'long'){
        setLongEpisodes(urlData.episodeNumber);
    }else{
        setShortEpisodes(urlData.episodeNumber);
    }
    setServers(urlData.episodeNumber);
    
    presentEpisodeData = data[urlData.episodeNumber];
    // let presentAnimeAudioCode = 'presentAudioAnimerulzAnime-' + animeName;
    let presentAnimeServerCode = 'presentServerAnimerulzAnime-' + animeName;
    // existingAudio = localStorage.getItem(presentAnimeAudioCode);
    existingServer = localStorage.getItem(presentAnimeServerCode);
    if(existingServer)
        setActiveServers(urlData.audio, urlData.episodeNumber, existingServer);
    else setActiveServers(urlData.audio, urlData.episodeNumber);

    setEpisodeNumber();
    //default options
    setDefaultOptions();
}

function setEpisodeNumber(){
    document.getElementById("episode-number-in-video").innerText = urlData.episodeNumber;
    let fillerAlertTag = document.querySelector('.filler-alert');
    if(data[urlData.episodeNumber].isFiller)
        fillerAlertTag.innerHTML = `( <i class="fa-solid fa-skull-crossbones fa-fade"></i> filler episode)`;
    else fillerAlertTag.innerHTML = "";
}

function setDefaultOptions(){
    if(!localStorage.getItem('autoPlay'))
        localStorage.setItem("autoPlay", true);
    if(!localStorage.getItem('autoPlayNext'))
        localStorage.setItem("autoPlayNext", true);
    if(!localStorage.getItem('autoSkipIntro'))
        localStorage.setItem("autoSkipIntro", true);

    if(localStorage.getItem('autoPlay') == 'true')
        document.querySelector(".autoplay.control .indicator").innerText = 'on';
    else document.querySelector(".autoplay.control .indicator").innerText = 'off';
    if(localStorage.getItem('autoPlayNext') == 'true')
        document.querySelector(".autoplaynext.control .indicator").innerText = 'on';
    else document.querySelector(".autoplaynext.control .indicator").innerText = 'off';
    if(localStorage.getItem('autoSkipIntro') == 'true')
        document.querySelector(".autoskipintro.control .indicator").innerText = 'on';
    else document.querySelector(".autoskipintro.control .indicator").innerText = 'off';
}


//Returns anime type long or short
function getAnimeType(){
    return document.querySelector('html').getAttribute("anime-type");
}

//to set long anime episodes
function setLongEpisodes(presentEpisode){
    let lowerLimit = Math.floor(presentEpisode / 100) * 100 + 1;
    let upperLimit = Math.ceil(presentEpisode / 100) * 100 ;
    lowerLimit = lowerLimit > upperLimit ? lowerLimit - 100 : lowerLimit;
    
    // let allEpisodeKeys = [];

    // allEpisodeKeys = allEpisodeKeys.sort(function(a,b){return a - b});
    setLongAnimeEpisodes(lowerLimit, upperLimit, presentEpisode);
    if(max > urlData.episodeNumber)
        setNextEpisodeButtonLongAnime(lowerLimit, upperLimit, presentEpisode);
    else 
        document.querySelector(".control.next-episode").style.display = 'none';
    if(urlData.episodeNumber > 1)
        setPreviousEpisodeButtonLongAnime(lowerLimit, upperLimit, presentEpisode);
    else
        document.querySelector(".control.prev-episode").style.display = 'none';

    let episodesSelectionDiv = document.createElement('div');
    episodesSelectionDiv.setAttribute("class", 'sec-2');

    let temp = "";
    let i;
    for(i = 1 ; i < max - 100 ; i += 100){
        if(presentEpisode >= i && presentEpisode < i + 100){
            temp += `<div class="active" onclick="setLongAnimeEpisodes(${i}, ${i + 99}, ${presentEpisode})"><span>Episodes : ${i}-${i + 99}</span></div>`;
        }else{
            temp += `<div onclick="setLongAnimeEpisodes(${i}, ${i + 99}, ${presentEpisode})"><span>Episodes : ${i}-${i + 99}</span></div>`;
        }
    }
    if(presentEpisode >= i && presentEpisode <= max){
        temp += `<div class="active" onclick="setLongAnimeEpisodes(${i}, ${max}, ${presentEpisode})"><span>Episodes : ${i}-${max}</span></div>`;
    }else{
        temp += `<div onclick="setLongAnimeEpisodes(${i}, ${max}, ${presentEpisode})"><span>Episodes : ${i}-${max}</span></div>`;
    }

    episodesSelectionDiv.innerHTML = `
    <span>Episodes :</span><span id="episodes-numbers"></span>
    <i class="fa-solid fa-chevron-down small-t"></i>
    <div class="episodes-selection-div">${temp}</div>
    `;
    let episodesNumberSelectionDiv = document.getElementsByClassName('episodes-list-sec')[0];
    if(episodesNumberSelectionDiv.getElementsByTagName("div").length >= 2)
        episodesNumberSelectionDiv.innerHTML = `<div class="sec-1">
        <span>List of episodes :</span>
      </div>`
    episodesNumberSelectionDiv.appendChild(
        episodesSelectionDiv
    );
}

//to set episodes selection div
function setLongAnimeEpisodes(lowerLimit, upperLimit, presentEpisode){
    let animeVisitedEpisodesKey = animeName + '-visited-episodes';
    let animeLastClickedEpisodeKey = animeName + '-last-clicked-episode';
    let animeVisitedEpisodes = localStorage.getItem(animeVisitedEpisodesKey);
    let visitedEpisodeNumbers ;
    if(!animeVisitedEpisodes){
        visitedEpisodeNumbers = [];
        localStorage.setItem(animeVisitedEpisodesKey, JSON.stringify(visitedEpisodeNumbers));
    }else{
        visitedEpisodeNumbers = JSON.parse(animeVisitedEpisodes);
    }
    let episodesHtml = '';
    Object.keys(data).sort(function(a, b) {return a - b}).forEach(episode => {
        if(lowerLimit <= Number(episode) && upperLimit >= Number(episode)){
            let fillerFlag = "";
            let isVisited = "";
            if(data[episode].isFiller)
                fillerFlag = 'filler-episode';
            if(Number(episode) == presentEpisode){
                if(!visitedEpisodeNumbers.includes(episode))
                    visitedEpisodeNumbers.push(episode);
                localStorage.setItem(animeLastClickedEpisodeKey, presentEpisode);
                localStorage.setItem(animeVisitedEpisodesKey, JSON.stringify(visitedEpisodeNumbers));
                episodesHtml += `<div class='episode active ${fillerFlag}' title="${data[episode]["title"]}" id='` + animeName + "-episode-" + episode + `'>` + episode + "</div>";
            }
            else{
                if(visitedEpisodeNumbers.includes(episode))
                    isVisited = 'visited-episode'
                episodesHtml += `<div class='episode ${fillerFlag} ${isVisited}' title="${data[episode].title}" id='` + animeName + "-episode-" + episode + `'  onclick='setNewEpisodeLongAnime(${lowerLimit}, ${upperLimit}, ${episode})'>` + episode + "</div>";
            }
        }
    });
    let episodeSection = document.querySelector("#episodes-in-section");
    episodeSection.setAttribute("style", 'grid-template-columns: repeat(auto-fit, 55px);');
    episodeSection.innerHTML = episodesHtml;
    let activeEpisode = episodeSection.querySelector(".active");
    if(activeEpisode)
        scrollToActiveEpisode(episodeSection, activeEpisode);
}

function scrollToActiveEpisode(ele, element){
    let distanceFromTop = element.offsetTop;
    if(distanceFromTop > 600)
        ele.scrollTo(0, element.offsetTop - ele.offsetTop)
}
function setNewEpisodeLongAnime(lowerLimit, upperLimit, presentEpisode){
    setLongAnimeEpisodes(lowerLimit, upperLimit, presentEpisode);
    setServers(presentEpisode);
    urlData.episodeNumber = presentEpisode;
    setEpisodeNumber();

    let prevEpisodeBtn = document.querySelector(".control.prev-episode");
    let nxtEpisodeBtn = document.querySelector(".control.next-episode");
    if(Number(presentEpisode) > 1){
        prevEpisodeBtn.style.display = 'flex';
        setPreviousEpisodeButtonLongAnime(lowerLimit, upperLimit, presentEpisode);
    }
    else
        prevEpisodeBtn.style.display = 'none';
    if(max > presentEpisode){
        nxtEpisodeBtn.style.display ='flex';
        setNextEpisodeButtonLongAnime(lowerLimit, upperLimit, presentEpisode);
    }
    else
        document.querySelector(".control.next-episode").style.display = 'none';

    let presentAnimeAudioCode = 'presentAudioAnimerulzAnime-' + animeName;
    let presentAnimeServerCode = 'presentServerAnimerulzAnime-' + animeName;
    existingAudio = localStorage.getItem(presentAnimeAudioCode);
    existingServer = localStorage.getItem(presentAnimeServerCode);
    if(existingAudio){
        if(existingServer)
            setActiveServers(existingAudio, urlData.episodeNumber, existingServer);
        else setActiveServers(existingAudio, urlData.episodeNumber);
    }
    else
        setActiveServers(urlData.audio, urlData.episodeNumber);
    changeUrl(presentEpisode);
}

function changeUrl(presentEpisode){
    // Modify the search parameters
    urlParams.set('ep', presentEpisode);
    urlParams.set('aud', existingAudio);
    // Update the URL
    history.pushState({}, '', `${url.pathname}?${urlParams.toString()}`);
}

function setShortEpisodes(presentEpisode){
    let animeVisitedEpisodesKey = animeName + '-visited-episodes';
    let animeLastClickedEpisodeKey = animeName + '-last-clicked-episode';
    let animeVisitedEpisodes = localStorage.getItem(animeVisitedEpisodesKey);
    let visitedEpisodeNumbers ;
    if(!animeVisitedEpisodes){
        visitedEpisodeNumbers = [];
        localStorage.setItem(animeVisitedEpisodesKey, JSON.stringify(visitedEpisodeNumbers));
    }else{
        visitedEpisodeNumbers = JSON.parse(animeVisitedEpisodes);
    }
    let temp = "";
    let first = 1;
    let second = 2;
    console.log(max);
    Object.keys(data).sort(function(a, b){ return a - b}).forEach(episode => {
        if(first == 1){
            first = 2;
            second = 1;
        }else{
            first = 1;
            second = 2;
        }
        let fillerFlag = "";
        let isVisited = "";
        if(data[episode].isFiller)
            fillerFlag = 'filler-episode';
        if(episode == presentEpisode){
            if(!visitedEpisodeNumbers.includes(episode))
                visitedEpisodeNumbers.push(episode);
            localStorage.setItem(animeLastClickedEpisodeKey, presentEpisode);
            localStorage.setItem(animeVisitedEpisodesKey, JSON.stringify(visitedEpisodeNumbers));
            temp += ` <div class="episode-short ${fillerFlag}" title="${data[episode].title}"><div class="short-anime-ep active-episode" id="` + animeName + '-episode-' + episode + '"> ' + 
            '<div class="short-anime-num episode-alternate-' + first + '">' + episode + '</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + data[episode].title + '</span><i class="fa-regular fa-circle-play play-svg"></i></div></div></div>';
        }
            
        else{
            if(visitedEpisodeNumbers.includes(episode))
                isVisited = 'visited-episode'
            temp += `<div class="episode-short ${fillerFlag}" title="${data[episode].title}" onclick="setNewShortAnimeEpisode(${episode})"><div class="short-anime-ep ${isVisited}"  id="${animeName}-episode-${episode}"><div class="short-anime-num episode-alternate-${first}">${episode}</div><div class="short-anime-name episode-alternate-${second}"><span>${data[episode].title}</span></div></div></div>`;
        }
    });


    let episodeSection = document.querySelector("#episodes-in-section");
    episodeSection.setAttribute("style", 'grid-template-columns: 100%;grid-gap:0 0;');
    episodeSection.innerHTML = temp;
    let activeEpisode = episodeSection.querySelector(".active-episode");
    if(activeEpisode)
        scrollToActiveEpisode(episodeSection, activeEpisode);

    if(presentEpisode < max)
        setNextEpisodeButtonShortAnime(presentEpisode);
    else
        document.querySelector(".control.next-episode").style.display = 'none';
    if(presentEpisode > 1)
        setPreviousEpisodeButtonShortAnime(presentEpisode);
    else
        document.querySelector(".control.prev-episode").style.display = 'none';
}

function setNewShortAnimeEpisode(presentEpisode){
    setShortEpisodes(presentEpisode);
    setServers(presentEpisode);
    urlData.episodeNumber = presentEpisode;
    setEpisodeNumber();

    
    let prevEpisodeBtn = document.querySelector(".control.prev-episode");
    let nxtEpisodeBtn = document.querySelector(".control.next-episode");
    if(Number(presentEpisode) > 1){
        prevEpisodeBtn.style.display = 'flex';
        setPreviousEpisodeButtonShortAnime(presentEpisode);
    }
    else
        prevEpisodeBtn.style.display = 'none';
    if(max > presentEpisode){
        nxtEpisodeBtn.style.display ='flex';
        setNextEpisodeButtonShortAnime(presentEpisode);
    }
    else
        document.querySelector(".control.next-episode").style.display = 'none';

    let presentAnimeAudioCode = 'presentAudioAnimerulzAnime-' + animeName;
    let presentAnimeServerCode = 'presentServerAnimerulzAnime-' + animeName;
    existingAudio = localStorage.getItem(presentAnimeAudioCode);
    existingServer = localStorage.getItem(presentAnimeServerCode);
    if(existingAudio){
        if(existingServer)
            setActiveServers(existingAudio, urlData.episodeNumber, existingServer);
        else setActiveServers(existingAudio, urlData.episodeNumber);
    }
    else
        setActiveServers(urlData.audio, urlData.episodeNumber);
    changeUrl(presentEpisode);
}

function setServers(presentEpisode){
    if(data[presentEpisode]){
        let source = data[presentEpisode].source;
        let totalServers = "";
        let temp = '';
        let otherLanguages = {
            "Telugu" : 'tel',
            "Tamil" :'tam',
            "Hindi" : "hin",
            "Malayalam" : "mal",
            "Bengali" : "ben",
            "Multi" : 'mul',
            "Multi480" : 'mul480',
            "Multi720" : 'mul720',
            "Multi1080" : 'mul1080' 
        }
        if(source.hasOwnProperty('OTHER LANGUAGES')){
            Object.keys(source['OTHER LANGUAGES']).forEach(server => {
                temp += `<div class="button-a-b-cc server-btn-a small-t" role="button" lan="${otherLanguages[server]}" onclick="callSetActiveServers('${otherLanguages[server]}', ${presentEpisode}, ${null})">
                            <span class="bold">${server}</span>
                        </div>`
            });
            temp = `<div class="video-s-audio-section border-bottom other-languages-server">
                    <div class="audio-info-a">
                    <div class="audio-txt-a-b audio-btn-a-a medim-t-s">
                        <span class="bold">OTHER LANGUAGES :</span>
                        </div>
                    </div>
                    <div class="audio-servers-a"><div class="servers-div">${temp}</div></div>
                    </div></div>`;
        }
        totalServers += temp;
        temp = ""
        if(source.hasOwnProperty('SUBBED')){
            Object.keys(source['SUBBED']).forEach(server => {
                temp += `<div class="button-a-b-cc server-btn-a small-t" role="button" lan="jap" onclick="callSetActiveServers('jap', '${presentEpisode}', '${server}')">
                            <span class="bold">${server}</span>
                        </div>`
            });
            temp = `<div class="video-s-audio-section border-bottom subbed-server">
                    <div class="audio-info-a">
                    <div class="audio-txt-a-b audio-btn-a-a medim-t-s">
                    <i class="fas fa-closed-captioning mr-1 icon-sub-dub_ small-t"></i>&nbsp;&nbsp;<span class="bold">SUBBED :</span>
                        </div>
                    </div>
                    <div class="audio-servers-a"><div class="servers-div">${temp}</div></div>
                    </div></div>`;
        }
        totalServers += temp;
        temp = ""
        if(source.hasOwnProperty('DUBBED')){
            Object.keys(source['DUBBED']).forEach(server => {
                temp += `<div class="button-a-b-cc server-btn-a small-t" role="button" lan="eng" onclick="callSetActiveServers('eng', '${presentEpisode}', '${server}')">
                            <span class="bold">${server}</span>
                        </div>`
            });
            temp = `<div class="video-s-audio-section border-bottom dubbed-server">
                    <div class="audio-info-a">
                    <div class="audio-txt-a-b audio-btn-a-a medim-t-s">
                    <i class="fas fa-microphone mr-1 icon-sub-dub_"></i>&nbsp;&nbsp;<span class="bold">DUBBED :</span>
                        </div>
                    </div>
                    <div class="audio-servers-a"><div class="servers-div">${temp}</div></div>
                    </div></div>`;
        }
        totalServers += temp;
        document.querySelector('.video-a').innerHTML = totalServers;
    }else{
        let keys = Object.keys(data);
        presentEpisode = keys[0];
        urlData.episodeNumber = presentEpisode;
        // let presentAnimeAudioCode = 'presentEpisodeAnimerulzAnime-' + animeName;
        // let presentAnimeServerCode = 'presentServerAnimerulzAnime-' + animeName;
        // localStorage.setItem(presentAnimeAudioCode, presentEpisode);
        existingAudio = urlData.audio;
        if(animeType == 'short')
            setShortEpisodes(presentEpisode);
        else
            setLongEpisodes(presentEpisode);
        setServers(keys[0]);
        changeUrl(presentEpisode)
    }
}


function callSetActiveServers(presentAudio, presentEpisode, server){
    urlData.audio = presentAudio;
    let presentAnimeAudioCode = 'presentAudioAnimerulzAnime-' + animeName;
    // let presentAnimeServerCode = 'presentServerAnimerulzAnime-' + animeName;
    localStorage.setItem(presentAnimeAudioCode, presentAudio);
    existingAudio = presentAudio; 
    // existingServer = localStorage.getItem(presentAnimeServerCode);
    setActiveServers(presentAudio, presentEpisode, server);
    changeUrl(presentEpisode);
}

function setActiveServers(presentAudio, presentEpisode, server = 'Vid Streaming'){
    setDownloadBtn();
    let otherLanguages = {
        'tel' : "Telugu",
        'tam' : "Tamil",
        "hin" : "Hindi",
        "mal" : "Malayalam",
        "ben" : "Bengali",
        "mul" : "Multi",
        "mul480" : "Multi480",
        'mul720' : "Multi720",
        'mul1080' : "Multi1080"
    }
    let subDub = {
        eng : 'DUBBED',
        jap : 'SUBBED'    
    }
    if(Object.keys(otherLanguages).includes(presentAudio)){
        if(data[presentEpisode].source['OTHER LANGUAGES']){
            if(data[presentEpisode].source['OTHER LANGUAGES'][otherLanguages[presentAudio]]){
                let activeServerLink = data[presentEpisode].source['OTHER LANGUAGES'][otherLanguages[presentAudio]];
                let videoPlayer = document.querySelector(".video-player");
                videoPlayer.innerHTML = ` <iframe src="${activeServerLink}"
                                                autoplay=1
                                                id="video-player"
                                                class="video-player" allowfullscreen="allowfullscreen" allow="accelerometer;autoplay;encripted-media;gyroscope;picture-in-picture"
                                                webkitallowfullscreen="true" mozallowfullscreen="true"
                                                frameborder="0" scrolling="no"
                                            ></iframe>`;
                setActiveClassForServer(server, presentAudio);
            }else{
                let availableAudioLanguages = data[presentEpisode].source['OTHER LANGUAGES'];
                let keys = Object.keys(availableAudioLanguages);
                if(keys.length){
                    presentAudio = otherLanguages[keys[0]];
                    urlData.audio = presentAudio;
                    let presentAnimeAudioCode = 'presentAudioAnimerulzAnime-' + animeName;
                    // let presentAnimeServerCode = 'presentServerAnimerulzAnime-' + animeName;
                    localStorage.setItem(presentAnimeAudioCode, presentAudio);
                    existingAudio = presentAudio;
                    setActiveServers(presentAudio , presentEpisode, server);
                    changeUrl(presentEpisode);
                }
            }
        }else{
            let availableSources = data[presentEpisode].source;
                let keys = Object.keys(availableSources);
                if(keys.length){
                    presentAudio = otherLanguages[keys[0]];
                    urlData.audio = presentAudio;
                    let presentAnimeAudioCode = 'presentAudioAnimerulzAnime-' + animeName;
                    // let presentAnimeServerCode = 'presentServerAnimerulzAnime-' + animeName;
                    localStorage.setItem(presentAnimeAudioCode, presentAudio);
                    existingAudio = presentAudio;
                    setActiveServers(presentAudio , presentEpisode, server);
                    changeUrl(presentEpisode);
            }
        }
    }
        else if(data[presentEpisode].source[subDub[presentAudio]]){
            if(!data[presentEpisode].source[subDub[presentAudio]][server]){
                let serversAvailable = data[presentEpisode].source[subDub[presentAudio]];
                let keys = Object.keys(serversAvailable);
                let firstServerAvailable = keys[0];
                setActiveServers(presentAudio, presentEpisode, firstServerAvailable);
            } 
            else{
                setPresentAudio(presentAudio);
                setPresentServer(server);
                if(subDub.hasOwnProperty(presentAudio)){
                    if(server == 'Vid Streaming'){
                        let activeServerLink = data[presentEpisode].source[subDub[presentAudio]][server].link;
                        let intro = data[presentEpisode].intro;
                        let outro = data[presentEpisode].outro;
                        let videoPlayer = document.querySelector(".video-player");
                        videoPlayer.innerHTML = '<video style="height:100%;width:100%" controls crossorigin playsinline></video>';
                        setHlsPlayer(activeServerLink, intro, outro);
                    }else if(server == 'Vid Cloud'){
                        let activeServerLink = data[presentEpisode].source[subDub[presentAudio]][server].link;
                        let captionsTrack = data[presentEpisode].source[subDub[presentAudio]][server].captions;
                        let intro = data[presentEpisode].intro;
                        let outro = data[presentEpisode].outro;
                        let videoPlayer = document.querySelector(".video-player");
                        videoPlayer.innerHTML = `<video style="height:100%;width:100%" controls crossorigin playsinline><track kind="captions" label="English captions" src="${captionsTrack}" srclang="en" default/></video>`;
                        setHlsPlayer(activeServerLink, intro, outro);
                    }else if(server == 'Awesome Stream'){
                        let activeServerLink = data[presentEpisode].source[subDub[presentAudio]][server].link;
                        let videoPlayer = document.querySelector(".video-player");
                        videoPlayer.innerHTML = ` <iframe src="${activeServerLink}"
                                                    autoplay=1
                                                    id="video-player"
                                                    class="video-player" allowfullscreen="allowfullscreen" allow="accelerometer;autoplay;encripted-media;gyroscope;picture-in-picture"
                                                    webkitallowfullscreen="true" mozallowfullscreen="true"
                                                    frameborder="0" scrolling="no"
                                                ></iframe>`;
                    }
                }
                else if(presentAudio == 'hin' || presentAudio == 'tel' || presentAudio == 'tam' || presentAudio == 'mal' || presentAudio == 'ben' || presentAudio == 'mul' || presentAudio == 'mul480' || presentAudio == 'mul720' || presentAudio == 'mul1080'){
                    let activeServerLink = data[presentEpisode].source['OTHER LANGUAGES'][otherLanguages[presentAudio]];
                    let videoPlayer = document.querySelector(".video-player");
                    videoPlayer.innerHTML = ` <iframe src="${activeServerLink}"
                                                    autoplay=1
                                                    id="video-player"
                                                    class="video-player" allowfullscreen="allowfullscreen" allow="accelerometer;autoplay;encripted-media;gyroscope;picture-in-picture"
                                                    webkitallowfullscreen="true" mozallowfullscreen="true"
                                                    frameborder="0" scrolling="no"
                                                ></iframe>`;
                }
                setActiveClassForServer(server, presentAudio);
            }
        }else{
            let availableAudios = data[presentEpisode].source;
            let keys = Object.keys(availableAudios);
            let otherLanguages = {
                Telugu : 'tel',
                Tamil :'tam',
                Hindi : "hin",
                Malayalam : "mal",
                Bengali : "ben",
                SUBBED : 'jap',
                DUBBED : 'eng',
                Multi : 'mul',
                Multi480 : 'mul480',
                Multi720 : 'mul720',
                Multi1080 : 'mul1080' 
            }
            if(keys[0] == 'OTHER LANGUAGES'){
                let avaiableSubAudios = data[presentEpisode].source[keys[0]];
                let subKeys = Object.keys(avaiableSubAudios);
                presentAudio = otherLanguages[subKeys[0]]
                
            }else
                presentAudio = otherLanguages[keys[0]];
            urlData.audio = presentAudio;
            let presentAnimeAudioCode = 'presentAudioAnimerulzAnime-' + animeName;
            // let presentAnimeServerCode = 'presentServerAnimerulzAnime-' + animeName;
            localStorage.setItem(presentAnimeAudioCode, presentAudio);
            existingAudio = presentAudio;
            setActiveServers(presentAudio , presentEpisode, server);
            changeUrl(presentEpisode);
        }
}


function setActiveClassForServer(server, presentAudio){
    let previousAudio = document.querySelector(".server-btn-a.active");
    if(previousAudio){
        previousAudio.classList.remove('active');
    }
    if(presentAudio == 'eng'){
        let serversAvailable = document.querySelectorAll(".dubbed-server .server-btn-a");
        for(let i = 0; i < serversAvailable.length;i ++){
            if(server == serversAvailable[i].innerText)
                serversAvailable[i].classList.add("active");
        }
    }else if(presentAudio == 'jap'){
        let serversAvailable = document.querySelectorAll(".subbed-server .server-btn-a");
        for(let i = 0; i < serversAvailable.length;i ++){
            if(server == serversAvailable[i].innerText)
                serversAvailable[i].classList.add("active");
        }
    }else{
        let otherLanguages = {
            'tel' : "Telugu",
            'tam' : "Tamil",
            "hin" : "Hindi",
            "mal" : "Malayalam",
            "ben" : "Bengali",
            "mul" : "Multi",
            "mul480" : "Multi480",
            'mul720' : "Multi720",
            'mul1080' : "Multi1080"
        }
        let serversAvailable = document.querySelectorAll(".other-languages-server .server-btn-a");
        for(let i = 0; i < serversAvailable.length;i ++){
            if(otherLanguages[presentAudio] == serversAvailable[i].innerText)
                serversAvailable[i].classList.add("active");
        }
    }
}

function setPresentServer(server){
    var temp = 'presentServerAnimerulzAnime-' + animeName;
    localStorage.setItem(temp, server);
}
function setPresentAudio(audio){
    var temp = 'presentAudioAnimerulzAnime-' + animeName;
    localStorage.setItem(temp, audio);
}

function changeAutoPlay(control){
    let indicatorElement = control.querySelector('.indicator');
    indicatorElement.innerText = indicatorElement.innerText == 'on' ? 'off' : 'on';
    let isAutoPlay = localStorage.getItem('autoPlay');
    if(isAutoPlay == 'true')
        localStorage.setItem('autoPlay', false);
    else{
        localStorage.setItem('autoPlay', true);
        let video = document.querySelector("video");
        if(document.getElementsByClassName("plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported"))
            video.click();
    }
}


function changeAutoPlayNext(control){
    let indicatorElement = control.querySelector('.indicator');
    indicatorElement.innerText = indicatorElement.innerText == 'on' ? 'off' : 'on';
    let isAutoPlayNext = localStorage.getItem('autoPlayNext');
    let video = document.querySelector('video');
    if(isAutoPlayNext == 'true'){
        localStorage.setItem('autoPlayNext', false);
        video.removeEventListener('ended', nextEpisode);
    }
    else {
        localStorage.setItem('autoPlayNext', true);
        video.addEventListener('ended', nextEpisode);
    }
}
function changeAutoSkipIntro(control){
    let indicatorElement = control.querySelector('.indicator');
    indicatorElement.innerText = indicatorElement.innerText == 'on' ? 'off' : 'on';
    let isAutoSkipIntro = localStorage.getItem('autoSkipIntro');
    let video = document.querySelector('video');
    // let introStart = data[urlData.episodeNumber].intro.start;
    // let introEnd = data[urlData.episodeNumber].intro.end;
    // let outroStart = data[urlData.episodeNumber].outro.start;
    // let outroEnd = data[urlData.episodeNumber].outro.end;
    if(isAutoSkipIntro == 'true'){
        localStorage.setItem('autoSkipIntro', false);
        video.removeEventListener('timeupdate', setVideoEventListner);
    }
    else {
        localStorage.setItem('autoSkipIntro', true);
        video.addEventListener("timeupdate", setVideoEventListner);
    }
}

function setHlsPlayer(source, intro, outro){
    let isIntro = false;
    let isOutro = false;
    let introStart, introEnd, outroStart, outroEnd;
    if(intro){
        isIntro = true;
        introStart = intro.start;
        introEnd = intro.end;
    }
    if(outro){
        isOutro = true;
        outroStart = outro.start;
        outroEnd = outro.end;
    }
        document.querySelector('.video-player').style.minHeight = 'auto';
        // const source = 'https://www044.vipanicdn.net/streamhls/0b594d900f47daabc194844092384914/ep.1080.1697942773.m3u8';
        const video = document.querySelector('video');
  

        const defaultOptions = {};  
  
        // For more Hls.js options, see https://github.com/dailymotion/hls.js
        const hls = new Hls();
        hls.loadSource(source);
  
        // wFrom the m3u8 playlist, hls parses the manifest and returns
        // all available video qualities. This is important, in this approach,
        // we will have one source on the Plyr player.
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
  
          // Transform available levels into an array of integers (height values).
          const availableQualities = hls.levels.map((l) => l.height)
          availableQualities.unshift(0) //prepend 0 to quality array
  
          // Add new qualities to option
          defaultOptions.quality = {
            default: 0, //Default - AUTO
            options: availableQualities,
            forced: true,
            onChange: (e) => updateQuality(e),
          }
          // Add Auto Label 
          defaultOptions.i18n = {
            qualityLabel: {
              0: 'Auto',
            },
          }
  
          hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
            var span = document.querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span")
            if (hls.autoLevelEnabled) {
              span.innerHTML = `AUTO (${hls.levels[data.level].height}p)`
            } else {
              span.innerHTML = `AUTO`
            }
          })
  
          // Initialize new Plyr player with quality options
          const player = new Plyr(video, defaultOptions);

          player.config.autoplay = true;
        //   player.addEventListener("fullscreenchange", () => {
        //     console.log('fullscreen changed');
        //   });
    
          if(localStorage.getItem("autoPlayNext") == 'true'){
            video.addEventListener('ended', nextEpisode);
          }
          let plyrPlayerElement = document.querySelector(".plyr");
          plyrPlayerElement.addEventListener('dblclick', () => {
            if(!document.fullscreenElement){
                // plyrPlayerElement.requestFullscreen();
                enterVideoFullscreen(plyrPlayerElement);
            }
            else
                // document.documentElement.exitFullscreen();
                exitVideoFullscreen();
          })
          plyrPlayerElement.addEventListener("fullscreenchange", () => {
            // console.log('in');
            try{
                if(document.fullscreenElement == plyrPlayerElement)
                    // document.querySelector('.video-player').setAttribute("style", 'transform: rotate(90deg) !important;');
                    screen.orientation.lock("landscape");
                else
                    // plyrPlayerElement.removeAttribute('style');
                    screen.orientation.lock("portrait");
            }catch{}
          })
          window.addEventListener("orientationchange", () => {
            let windowOrientation = window.orientation;
            if(windowOrientation === 0 || windowOrientation === 100)
                screen.orientation.lock('portrait');
            else
                screen.orientation.lock('landscape');
          })
          video.addEventListener("canplay", () => {  
            let progressBar = document.querySelector(".plyr__progress");
            let duration = video.duration;
            if(isIntro){
                let newE = document.createElement("div");
                newE.setAttribute("class", 'intro-indicator');
                progressBar.prepend(newE);
                newE.style.width = (introEnd - introStart) / duration * 100 + "%";
                newE.style.left = introStart / duration * 100 + "%";
            }
            if(isOutro){
                let newEle = document.createElement("div");
                newEle.setAttribute("class", 'intro-indicator');
                progressBar.prepend(newEle);
                newEle.style.width = (outroEnd - outroStart) / duration * 100 + "%";
                newEle.style.left = outroStart / duration * 100 + "%";
            }
                let isPrevVideoFullScreenChecker = localStorage.getItem("isPrevVideoFullScreen");
                if(isPrevVideoFullScreenChecker == 'true'){
                        let event = new MouseEvent("dblclick");
                        document.querySelector('.plyr').dispatchEvent(event);
                    localStorage.setItem("isPrevVideoFullScreen", false);
                }

            if(localStorage.getItem('autoPlay') == 'true'){
                document.querySelector("video").click();
                player.play();
            }
            
          })
          if(localStorage.getItem("autoSkipIntro") == 'true')
            video.addEventListener('timeupdate', setVideoEventListner);
        });
        
        hls.attachMedia(video);
        window.hls = hls;
  
        function updateQuality(newQuality) {
          if (newQuality === 0) {
            window.hls.currentLevel = -1; //Enable AUTO quality if option.value = 0
          } else {
            window.hls.levels.forEach((level, levelIndex) => {
              if (level.height === newQuality) {
                window.hls.currentLevel = levelIndex;
              }
            });
          }
        };
}

function setNextEpisodeButtonLongAnime(lowerLimit, upperLimit, presentEpisode){
    document.querySelector('.control.next-episode').setAttribute(
        "onclick",
        `setNewEpisodeLongAnime(${lowerLimit}, ${upperLimit}, ${Number(presentEpisode) + 1})`
    );
}
function setPreviousEpisodeButtonLongAnime(lowerLimit, upperLimit, presentEpisode){
    document.querySelector('.control.prev-episode').setAttribute(
        "onclick",
        `setNewEpisodeLongAnime(${lowerLimit}, ${upperLimit}, ${Number(presentEpisode) - 1})`
    );   
}
function setNextEpisodeButtonShortAnime(presentEpisode){
    document.querySelector('.control.next-episode').setAttribute(
        'onclick',
        `setNewShortAnimeEpisode(${Number(presentEpisode) + 1})` 
    );
}
function setPreviousEpisodeButtonShortAnime(presentEpisode){
    document.querySelector('.control.prev-episode').setAttribute(
        'onclick',
        `setNewShortAnimeEpisode(${Number(presentEpisode) - 1})`
    );
}

function setVideoEventListner(){
    let video = document.querySelector('video');
    let introStart = 0
    let introEnd = 0;
    if(data[urlData.episodeNumber]['intro']){
        introStart = data[urlData.episodeNumber]['intro']['start'];
        introEnd = data[urlData.episodeNumber]['intro']['end'];
    }
    let outro = data[urlData.episodeNumber]['outro'];
    let outroStart = 0;
    let outroEnd = 0;
    if(outro){
        outroStart = outro.start;
        outroEnd = outro.end;
    }
    if((video.currentTime >= introStart && video.currentTime <= introEnd))
          video.currentTime = introEnd;
    else if((video.currentTime >= outroStart && video.currentTime <= outroEnd))
          video.currentTime = outroEnd;
}

function nextEpisode(){
    if(localStorage.getItem("autoPlayNext") == 'true'){
        if(document.fullscreenElement)
            localStorage.setItem("isPrevVideoFullScreen", true);
        }
        document.querySelector(".control.next-episode").click();
}


function setDownloadBtn(){
    let downloadLink;
    if(urlData.audio == 'jap')
        downloadLink =  `https://goone.pro/download?id=${data[urlData.episodeNumber]['downloadLink']['SUBBED']}&typesub=Animerulz Anime SUB&title=${document.querySelector("h2").textContent} Episode ${urlData.episodeNumber}`;
    else downloadLink =  `https://goone.pro/download?id=${data[urlData.episodeNumber]['downloadLink']['DUBBED']}&typesub=Animerulz Anime DUB&title=${document.querySelector("h2").textContent} Episode ${urlData.episodeNumber}`;
    if(downloadLink)
        document.querySelector(".control.download").setAttribute(
            'onclick',
            `window.open("${downloadLink}")`    
        );
}


function enterVideoFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
    // element.style.transform = `translate(90deg)`;
  }

  
  function exitVideoFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
  

  