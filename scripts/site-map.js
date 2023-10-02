let lastClickedAnimeLetter;
let siteMapLetters = document.getElementsByClassName("div-show-animes_");
let chivrons = document.getElementsByClassName("right-chivron_");

function showAnimes(letter){
    if(lastClickedAnimeLetter){
        document.getElementById(lastClickedAnimeLetter).style.display = "none";
        chivrons[lastClickedAnimeLetter.charCodeAt(0) - 65].style.transform = "rotate(0)";
        siteMapLetters[lastClickedAnimeLetter.charCodeAt(0) - 65].setAttribute("onclick", `showAnimes('${lastClickedAnimeLetter}')`);
    }

    siteMapLetters[letter.charCodeAt(0) - 65].setAttribute("onclick", `hideAnimes('${letter}')`);
    let allLettersData = document.getElementsByClassName("div-show-animes_");
    let clickedLetterData = document.getElementById(letter);

    chivrons[letter.charCodeAt(0) - 65].style.transform = "rotate(90deg)";
    clickedLetterData.style.display = "block";
    lastClickedAnimeLetter = letter;
    
}

function hideAnimes(letter){
    document.getElementById(letter).style.display = "none";
    if(lastClickedAnimeLetter)
        chivrons[lastClickedAnimeLetter.charCodeAt(0) - 65].style.transform = "rotate(0)";
    siteMapLetters[letter.charCodeAt(0) - 65].setAttribute('onclick', `showAnimes('${letter}')`);
}