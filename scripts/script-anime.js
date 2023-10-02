
setTimeout(pageChecker, 500);


function pageChecker(){
    let pageChecker = document.getElementById("active-page-tag-season");
    // console.log(pageChecker.textContent);
    if(pageChecker == null)
        setAnimeHomePage();
    else if(pageChecker.textContent != "Watching online")
        setAnimeHomePage(); 
    else if(pageChecker.textContent.toLowerCase() == "watching online")
        setAnimeDownPage();
}
function setAnimeHomePage(){
    let mainContainer = document.getElementsByClassName("main-container")[0];
    let backgroundContainer = document.getElementsByClassName("background-container")[0];
    // let moreSeasons = document.getElementsByClassName("more-seasons");
    // let secondMainContainer = document.getElementsByClassName("main-container-2")[0];


    backgroundContainer.style.height = mainContainer.offsetHeight + "px";
    // secondMainContainer.style.marginTop = mainContainer.offsetHeight + 40 + "px";
}

function setAnimeDownPage(){
    // document.writeln("IN");
    let mainContainer_1 = document.getElementsByClassName("main")[0];
    let backgroundContainer_2 = document.getElementsByClassName("background-container")[0];

    // bottomContainer.style.position = "relative";
    backgroundContainer_2.style.height = mainContainer_1.offsetHeight + "px";
}



