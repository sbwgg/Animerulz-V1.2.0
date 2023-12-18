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
            if(!animeEpisodeNumberForHome){
               animeEpisodeNumberForHome = 1;
            }
            tempData += `<div class="anime-continue-watching" onclick="rearrangeAnimes(${counteR + 1})">
                  <a class="anchor-to-continue-watching" title="Continue Watching ${animeNameForHome}"  href="../${animeNameForHome.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}/Watch-Now/">
                     <div class="data_cont-watching__" style="background: url('${continueWatchingData[i].animeImage}') no-repeat center center;background-size: 100% auto;">
                        <div class="play-btn__">
                           <i class="fa-regular fa-circle-play"></i>
                        </div>
                     </div>
                     <div class="anime-episodes-count__">
                              <span>Episode-${animeEpisodeNumberForHome}</span>
                           </div>
                     <div class="anime-data-continue-watching__">
                        <div class="anime-info-continue-watching">
                           
                           <div class="anime-name-cont-watching__">
                              <h3>${animeNameForHome}</h3>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>`;
               counteR ++;
               if(counteR === 6){
                  break;
               }
        }
        let outputData = `
        <div class="data-continue-watching">
            <div class="header-in-trending">
               <h2><i class="fa-solid fa-clock-rotate-left"></i>&nbsp;&nbsp;Continue Watching</h2>
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

function showRightHideLeft(elementsContainer){
   elementsContainer.getElementsByClassName('right-scroll')[0].style.display = 'flex';
   elementsContainer.getElementsByClassName('left-scroll')[0].style.display = 'none';
}
function showLeftHideRight(elementsContainer){
   elementsContainer.getElementsByClassName('right-scroll')[0].style.display = 'none';
   elementsContainer.getElementsByClassName('left-scroll')[0].style.display = 'flex';
}

const scrollLeft = (event) => {
   let targetId = event.target.getAttribute('scroll-id');
   let targetDiv = document.getElementsByClassName("animes-in-container-dubbed")[targetId];
   targetDiv.getElementsByClassName("anime-dubbed__")[3].scrollIntoViewIfNeeded({behavior: 'smooth'});

   // showRightHideLeft(targetDiv.parentNode)
   // document.getElementsByClassName('right-scroll')[targetId].style.display = 'flex';
   // document.getElementsByClassName('left-scroll')[targetId].style.display = 'none';
}
const scrollRight =  (event) => {
   let targetId = event.target.getAttribute('scroll-id');
   let targetDiv = document.getElementsByClassName("animes-in-container-dubbed")[targetId];
   targetDiv.getElementsByClassName("anime-dubbed__")[0].scrollIntoViewIfNeeded({behavior: 'smooth'});

   // showLeftHideRight(targetDiv.parentNode)
   // document.getElementsByClassName('right-scroll')[targetId].style.display = 'none';
   // document.getElementsByClassName('left-scroll')[targetId].style.display = 'flex';
}

try{
   let scrollLeftElements = document.querySelectorAll(".scroll-left");
   for(let i = 0 ; i < scrollLeftElements.length; i ++)
      scrollLeftElements[i].addEventListener('click', scrollLeft)
}
catch{}


try{
   let scrollRightElement = document.querySelectorAll(".scroll-right");
   for(let i = 0; i < scrollRightElement.length; i ++)
      scrollRightElement[i].addEventListener('click', scrollRight)
}
catch{}

let scrolledOrNotDiv = document.getElementsByClassName("animes-in-container-dubbed");
for(let i = 0; i < scrolledOrNotDiv.length; i ++)
   scrolledOrNotDiv[i].addEventListener('scroll', () => {
      if(scrolledOrNotDiv[i].scrollLeft > 150){
         showRightHideLeft(scrolledOrNotDiv[i].parentNode)
      }else{
         showLeftHideRight(scrolledOrNotDiv[i].parentNode)
      }
   })
