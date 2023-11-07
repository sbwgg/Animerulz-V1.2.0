const continueWatchingContainer = document.getElementsByClassName("continue-watching-division")[0];
const continueWatchingData1 = localStorage.continueWatching;
const continueWatchingData = JSON.parse(continueWatchingData1);


function setContinueWatchingContainer(){
    
    if(continueWatchingData.length != 0){
        let tempData = "";
        let counteR = 0;
        for(let i = continueWatchingData.length - 1; i >= 0; i --){
            let animeNameForHome = continueWatchingData[i].animeName;
            let animeEpisodeNumberForHome = localStorage.getItem(animeNameForHome.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() + '-last-clicked-episode');
            tempData += `<div class="anime-continue-watching" onclick="rearrangeAnimes(${counteR + 1})">
                  <a class="anchor-to-continue-watching" title="Continue Watching ${animeNameForHome}"  href="../${animeNameForHome.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}/Watch-Now/">
                     <div class="data_cont-watching__" style="background: url('${continueWatchingData[i].animeImage}') no-repeat center center;background-size: 100% auto;">
                        <div class="play-btn__">
                           <i class="fa-regular fa-circle-play"></i>
                        </div>
                     </div>
                     <div class="anime-data-continue-watching__">
                        <div class="anime-info-continue-watching">
                           <div class="anime-episodes-count__">
                              <span>Episode-${animeEpisodeNumberForHome}</span>
                           </div>
                           <div class="anime-name-cont-watching__">
                              <h3>${animeNameForHome}</h3>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>`;
               counteR ++;
               if(counteR === 5){
                  break;
               }
        }
        let outputData = `
        <div class="data-continue-watching">
            <div class="header-in-trending">
               <h2>Continue Watching</h2>
            </div>
            <div class="continue-watching-data__">
        ` + tempData + 
        `
        </div>
         </div>
        `;
        continueWatchingContainer.innerHTML = outputData;
    }
}

if(localStorage.continueWatching)
   setContinueWatchingContainer();

function rearrangeAnimes(index){
   let changePositionOf = continueWatchingData[continueWatchingData.length - index];
   continueWatchingData.splice(continueWatchingData.length - index, 1);
   continueWatchingData.push(changePositionOf);
   localStorage.setItem("continueWatching", JSON.stringify(continueWatchingData));
}