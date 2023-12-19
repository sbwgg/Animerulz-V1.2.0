const container = document.querySelector('.sub-sub-container-d-d');


function setContinueWatchingAnime(){
const continueWatchingDataAA = localStorage.getItem('continueWatching');

   if(!continueWatchingDataAA|| JSON.parse(continueWatchingDataAA).length === 0){
      container.innerHTML = `<div class="sub-sub-container-d-u">
                              <span>No Animes in Continue Watching</span>
                           </div>`
  }
  else{
   let continueWatchingDataA = JSON.parse(continueWatchingDataAA);
   let tempData = "";
   let counteR = 0;
   for(let i = continueWatchingDataA.length - 1; i >= 0; i --){
      let animeNameForHome = continueWatchingDataA[i].animeName;
      let newName = animeNameForHome.replace(/[^a-zA-Z0-9]/g, "")
      let tempName = newName.toLowerCase();
      let animeEpisodeNumberForHome = localStorage.getItem(newName.toLowerCase() + '-last-clicked-episode');
      if(!animeEpisodeNumberForHome){
         animeEpisodeNumberForHome = 1;
      }
      let checkLastAudio = localStorage.getItem(`presentAudioAnimerulzAnime-${tempName}`);
      let checkLastServer = localStorage.getItem(`presentServerAnimerulzAnime-${tempName}`);
      let timingsHtml;
      let timeIndicatorHtml;
      if((checkLastAudio == 'jap' || checkLastAudio == 'eng') && checkLastServer != 'Awesome Stream'){
         let animePrevTime = Number(localStorage.getItem(`${tempName.toLowerCase()}-prev-time`)).toFixed(0);
         let fullVideoTime = Number(localStorage.getItem(`${tempName.toLowerCase()}-full-time`)).toFixed(0);
         let animePrevTimeMinutes = Math.floor(animePrevTime / 60);
         animePrevTimeMinutes  = animePrevTimeMinutes < 10 ? `0${animePrevTimeMinutes}` : animePrevTimeMinutes;
         let animePrevTimeSeconds = animePrevTime % 60;
         animePrevTimeSeconds = animePrevTimeSeconds < 10 ? `0${animePrevTimeSeconds}` : animePrevTimeSeconds;
         let fullVideoTimeMinutes = Math.floor(fullVideoTime / 60);
         let fullVideoTimeSeconds = fullVideoTime % 60;
         fullVideoTimeSeconds = fullVideoTimeSeconds < 10 ? `0${fullVideoTimeSeconds}` : fullVideoTimeSeconds;
         let prevIndicatorWidth = (animePrevTime / fullVideoTime) * 100;
         
         timingsHtml = `
         <div class="timings-info-continue-watching">
            <div class="prev-time color-o">${animePrevTimeMinutes}:${animePrevTimeSeconds}</div>
            <div class="divider-time color-white-n"><span>/</span></div>
            <div class="full-time color-white-n">${fullVideoTimeMinutes}:${fullVideoTimeSeconds}</div>
         </div>
      `
         timeIndicatorHtml = `
         <div class="time-progression-continue-watching">
            <div class="full-time-continue-watching indicator-time"></div>
            <div class="prev-time-continue-watching indicator-time" style="width:${prevIndicatorWidth}%"></div>
         </div>
      `
      }else{
         timingsHtml = '<div class="timings-info-continue-watching"></div>';
         timeIndicatorHtml = '<div class="time-progression-continue-watching"></div>';
      }

      tempData += `<div class="anime-continue-watching">
      <div class="remove-anime-container" onclick="removeAnimeFromContinueWatching(${i})">
                              <button>remove</button>
                           </div>
            <a class="anchor-to-continue-watching" onclick="rearrangeAnimes(${counteR + 1})" title="Continue Watching ${animeNameForHome}"  href="../${animeNameForHome.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}/Watch-Now/">
            <div class="anime-data-continue-watching__">
                  <div class="anime-info-continue-watching">
                     
                     <div class="anime-name-cont-watching__">
                        <h3>${animeNameForHome}</h3>
                     </div>
                  </div>
                  <div class="timer-continue-watching small-txt">
                     <div class="timer-info-continue-watching">
                        <div class="episode-number-continue-watching color-white-n">
                           <span>Ep-${animeEpisodeNumberForHome}</span>
                        </div>
                        ${timingsHtml}
                     </div>
                     ${timeIndicatorHtml}
                  </div>
               </div>
               <div class="data_cont-watching__">
               <div class="anime-hover-div-a-a large-txt">
                        <i class="fa-solid fa-play"></i>
                  </div>
                  <div class="image-container-a-a">
                        <img src="${continueWatchingDataA[i]['animeImage']}" alt="${animeNameForHome}">
                  </div>
               </div>
               
            </a>
         </div>`;
         counteR ++;
   }
   container.innerHTML = `
   <div class="sub-sub-container-u">
                        ${tempData}
                  </div>`
  }
}

setContinueWatchingAnime();



function removeAnimeFromContinueWatching(index){
   const continueWatchingDataAA = localStorage.getItem('continueWatching');

    let continueWatchingDataA = JSON.parse(continueWatchingDataAA);
   //  let indexToRemove = continueWatchingDataA.length - index - 1;
    continueWatchingDataA.splice(index, 1);

    localStorage.setItem('continueWatching', JSON.stringify(continueWatchingDataA));

    setContinueWatchingAnime();
}

function rearrangeAnimes(index){
   const continueWatchingDataAA = localStorage.getItem('continueWatching');

   let continueWatchingDataA = JSON.parse(continueWatchingDataAA);
   let changePositionOf = continueWatchingDataA[continueWatchingDataA.length - index];
   continueWatchingDataA.splice(continueWatchingDataA.length - index, 1);
   continueWatchingDataA.push(changePositionOf);
   localStorage.setItem("continueWatching", JSON.stringify(continueWatchingDataA));
}
