const animeNameee = document.getElementById("a-active-page-tag").textContent.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");

const longAnimes = ['one piece',
'naruto',
'naruto shippuden',
'bleach',
'black clover',
'boruto : naruto next generation',
'hunter x hunter',
'dragon ball z',
'dragon ball super',
'dragon ball',
'dragon ball z kai',
'dragon ball gt'];

const shortAnimes = ['demon slayer kimetsu no yaiba',
'demon slayer mugen train arc',
'demon slayer mt.natagumo arc',
'demon slayer hashira meeting arc',
'demon slayer siblings bond',
'demon slayer entertainment district arc',
'demon slayer swordsmith village arc',
'fullmetal alchemist : brotherhood',
'death note',
'hells paradise',
'attack on titan',
'attack on titan season 2',
'attack on titan season 3 part 1',
'attack on titan season 3 part 2',
'attack on titan final season part 1',
'attack on titan final season part 2',
'attack on titan final season part 3',
'my hero academia',
'my hero academia 2',
'my hero academia season 3',
'my hero academia season 4',
'my hero academia season 5',
'my hero academia season 6',
'mashle',
'my star',
'blue lock',
'chainsaw man',
'dr stone',
'dr stone : stone wars',
'dr stone : ryuusui',
'dr stone : new world',
'tokyo revengers',
'tokyo revengers : christmas showdown',
'vinland saga',
'vinland saga : season 2',
'steins;gate',
'jujutsu kaisen',
'jujutsu kaisen 0 movie',
'jujutsu kaisen season 2',
'one punch man',
'one punch man season 2',
'cowboy bebop',
'berserk',
'berserk season 2',
'one piece film red',
'one punch man specials',
'one punch man season 2 specials',
'bleach : thousand year blood war arc',
'bleach : tybw season 2',
'bleach : the sealed sword frenzy',
'bleach the movie : hell verse',
'bleach the movie : memories of nobody',
'bleach the movie : the diamonddust rebellion',
'bleach the movie : fade to black',
'dr. stone: stone wars eve of the battle special feature',
'one piece film gold',
'one piece movie 1',
'one piece episode skypiea',
'one piece film stampede',
'one piece 3d stravat chase',
'naruto movie 1 : ninja clash in the land of snow',
'naruto : shippuden movie 6 : road to ninja',
'naruto : shippuden movie 4 : the lost tower',
'naruto movie : the last',
'dragon ball super : super hero',
'dragon ball super : broly',
'my hero academia heroes rising',
'dr stone : stone wars eve of the battle special feature',
'black clover sword of the wizard king',
'zom 100',
'fire force',
'fire force season 2',
'my dress up darling',
'ranking of kings',
'tokyo 24th ward',
'summer time',
'radiant',
'radiant season 2',
'darling in the franxx',
'the ancient magus bride',
'the ancient magus bride season 2',
'ao ashi',
'black rock shooter dawn fall',
'toilet bound hanako kun',
'miss kuroitsu from the monster development department',
"akebi's sailor uniform"];

const newAnimesName = {
    "ben10classic": 13,
    "ben10season02": 13,
    "ben10season03": 13,
    "ben10season04": 10,
    "ben10alienforce": 13,
    "ben10alienforceseason102": 13,
    "ben10alienforceseason03": 20,
    "ben10ultimatealien": 20,
    "ben10ultimatealienseason03": 20,
    "ben10ultimatealienseason02": 12,
    "ben10omniverse": 10,
    "ben10omniverseseason02": 10,
    "ben10omniverseseason03": 10,
    "ben10omniverseseason04": 10,
    "ben10omniverseseason05": 10,
    "ben10omniverseseason06": 10,
    "ben10omniverseseason07": 10,
    "ben10omniverseseason08": 10,
    "ben10reboot": 37,
    "ben10rebootseason03": 30,
    "ben10rebootseason04": 19,
    "ben10rebootseason05": 3,
    "pokemonindigoleague": 52,
    "pokemonadventuresintheorangeislands": 63,
    "pokemonthejohtojourneys": 41,
    "pokemonjohtoleaguechampions": 52,
    "pokemonmasterquest": 64,
    "pokemonadvanced": 40,
    "pokemonadvancedchallenge": 52,
    "pokemonadvancedbattle": 52,
    "pokemonbattlefrontier": 47,
    "pokemondiamondandpearl": 51,
    "pokemondpbattledimension": 52,
    "pokemondpgalacticbattles": 52,
    "pokemondpsinnohleaguevictors": 34,
    "pokemonblackwhite": 48,
    "pokemonbwrivaldestinies": 49,
    "pokemonbwadventuresinunova": 45,
    "pokemontheseriesxy": 48,
    "pokemonxykalosquest": 45,
    "pokemontheseriesxyz": 48,
    "pokemonsunmoon": 43,
    "pokemonsunmoonultraadventures": 48,
    "pokemonsunmoonultralegends": 54,
    "pokemonjourneystheseries": 48,
    "pokemonmasterjourneys": 42,
    "pokemonultimatejourneys": 35,
    "naruto": 220,
    "pokemonzoroarkmasterofillusions": 2,
    "dragonball": 153,
    "dragonballz": 291,
    "dragonballsuper": 131,
    "shinchan": 52,
    "supershiro": 48,
    "doraemon": 52,
    "beybladeburst": 51,
    "beybladeburstevolution": 51,
    "miraculoustalesofladybugcatnoir": 26,
    "slugterra": 13,
    "avengersassemble": 26,
    "theavengersearthsmightiestheroes": 26,
    "futureavengers": 16,
    "ninjahattori1981": 51,
    "ninjahattorireturns": 26,
    "teentitansgo": 26,
    "ultimatespiderman": 26,
    "spiderman": 26,
    "transformersrescuebots": 26,
    "transformersrobotsindisguise": 26,
    "transformerswarforcybertron": 6,
    "transformersprime": 26,
    "avatarthelastairbender": 20,
    "kungfupandathepawsofdestiny": 13,
    "generatorrex": 21,
    "ironmanarmoredadventures": 26,
    "ironman": 13,
    "lovedeathrobots": 18,
    "whatif": 9,
    "phineasandferb": 26,
    "oggyandthecockroaches": 39,
    "digimonadventure": 24,
    "fastfuriousspyracers": 8,
    "gravityfalls": 20,
    "hulkandtheagentsofsmash": 26,
    "kickbuttowskisuburbandaredevil": 20,
    "youngjustice": 26,
    "starwarsresistance": 20,
    "starwarsrebels": 15,
    "starwarsthebadbatch": 16,
    "starwarsvisions": 9,
    "beybladeburstturbo": 51,
    "beybladeburstrise": 26,
    "beybladeburstsurge": 20,
    "beyblademetalfusion": 51,
    "beyblademetalmasters": 51,
    "beyblademetalfury": 39,
    "avatarthelastairbenderseason03": 16,
    "avatarthelastairbenderseason02": 18,
    "generatorrexseason02": 19,
    "generatorrexseason03": 19,
    "ironmanarmoredadventuresseason02": 26,
    "ironmanseason02": 13,
    "lovedeathrobotsseason02": 8,
    "phineasandferbseason02": 39,
    "phineasandferbseason03": 35,
    "phineasandferbseason04": 37,
    "fastfuriousspyracersseason02": 8,
    "fastfuriousspyracersseason03": 8,
    "fastfuriousspyracersseason04": 8,
    "fastfuriousspyracersseason05": 8,
    "gravityfallsseason02": 20,
    "marvelshulkandtheagentsofsmashseason02": 26,
    "kickbuttowskisuburbandaredevilseason02": 32,
    "youngjusticeseason02": 20,
    "starwarsrebelsseason02": 22,
    "starwarsrebelsseason03": 22,
    "starwarsrebelsseason04": 15,
    "shinchanseason15": 52,
    "shinchanseason14": 51,
    "shinchanseason13": 52,
    "shinchanseason12": 53,
    "shinchanseason08": 47,
    "shinchanseason07": 45,
    "shinchanseason06": 52,
    "shinchanseason05": 52,
    "shinchanseason04": 52,
    "shinchanseason03": 52,
    "shinchanseason02": 52,
    "doraemonseason02": 51,
    "doraemonseason03": 52,
    "doraemonseason04": 52,
    "doraemonseason05": 52,
    "doraemonseason06": 52,
    "doraemon2005season04": 36,
    "doraemon2005season06": 32,
    "doraemon2005season07": 34,
    "doraemon2005season08": 36,
    "doraemon2005season09": 19,
    "miraculoustalesofladybugcatnoirseason02": 26,
    "miraculoustalesofladybugcatnoirseason03": 26,
    "miraculoustalesofladybugcatnoirseason05": 9,
    "slugterraseason02": 13,
    "slugterraseason03": 13,
    "slugterraseason04": 13,
    "ultimatespidermanseason02": 26,
    "ultimatespidermanseason03": 26,
    "ultimatespidermanseason04": 26,
    "avengersassembleseason02": 26,
    "avengersassembleseason03": 26,
    "avengersassembleseason04": 25,
    "avengersassembleseason05": 23,
    "theavengersearthsmightiestheroesseason02": 26,
    "ninjahattori1981season02": 52,
    "ninjahattori1981season03": 52,
    "ninjahattori1981season04": 16,
    "ninjahattori1981season05": 53,
    "ninjahattorireturnsseason02": 26,
    "teentitansgoseason02": 26,
    "teentitansgoseason03": 26,
    "teentitansgoseason04": 26,
    "teentitansgoseason05": 26,
    "transformersprimeseason02": 26,
    "transformersprimeseason03": 13,
    "transformersrobotsindisguiseseason02": 13,
    "transformersrobotsindisguiseseason03": 26,
    "transformersrescuebotsseason02": 24,
    "transformersrescuebotsseason03": 28,
    "transformerswarforcybertronseason02": 6,
    "transformerswarforcybertronseason03": 6,
    "thelegendofkorra": 12,
    "johnnytest": 20,
    "guardiansofthegalaxy": 26,
    "americandragonjakelong": 21,
    "kimpossible": 21,
    "beywheelz": 13,
    "kungfupandathepawsofdestinyseason02": 13,
    "fastfuriousspyracersseason06": 12,
    "bigcitygreens": 30,
    "nikoandtheswordoflight": 13,
    "dinogirlgauko": 20,
    "ghostintheshellsac2045": 12,
    "startreklowerdecks": 10,
    "trollhunterstalesofarcadia": 26,
    "3belowtalesofarcadia": 13,
    "wizardstalesofarcadia": 10,
    "bloodofzeus": 8,
    "theincrediblehulk": 13,
    "dotadragonsblood": 8,
    "pacificrimtheblack": 7,
    "hemanandthemastersoftheuniverse": 10,
    "thegutsyfrog": 6,
    "kidcosmic": 10,
    "horridhenry": 26,
    "disenchantment": 10,
    "inspectorgadget": 24,
    "johnnybravo": 19,
    "supastrikas": 13,
    "jurassicworldcampcretaceous": 8,
    "timonpumbaa": 25,
    "tronuprising": 19,
    "starbeam": 8,
    "thelegendofkorraseason02": 14,
    "thelegendofkorraseason03": 13,
    "thelegendofkorraseason04": 13,
    "guardiansofthegalaxyseason02": 25,
    "guardiansofthegalaxyseason03": 26,
    "americandragonjakelongseason02": 31,
    "horridhenryseason05": 21,
    "kimpossibleseason02": 30,
    "kimpossibleseason03": 12,
    "kimpossibleseason04": 21,
    "jurassicworldcampcretaceousseason02": 8,
    "jurassicworldcampcretaceousseason03": 10,
    "supastrikasseason02": 13,
    "supastrikasseason03": 13,
    "supastrikasseason04": 13,
    "supastrikasseason05": 13,
    "timonpumbaaseason02": 21,
    "disenchantmentseason02": 10,
    "disenchantmentseason03": 10,
    "starbeamseason02": 8,
    "starbeamseason03": 9,
    "starbeamseason04": 16,
    "nikoandtheswordoflightseason02": 10,
    "dinogirlgaukoseason02": 19,
    "trollhunterstalesofarcadiaseason02": 13,
    "trollhunterstalesofarcadiaseason03": 13,
    "3belowtalesofarcadiaseason02": 13,
    "johnnybravoseason03": 13,
    "johnnybravoseason04": 17,
    "theincrediblehulkseason02": 8,
    "thelastkidsonearthseason02": 10,
    "thelastkidsonearthseason03": 10,
    "thegutsyfrogseason04": 1,
    "kidcosmicseason02": 8,
    "jurassicworldcampcretaceousseason04": 11,
    "ben10alienswarm": 1,
    "ben10destroyallaliens": 1,
    "ben10raceagainsttime": 1,
    "ben10secretoftheomnitrix": 1,
    "miraculousworldnewyorkunitedheroez": 1,
    "miraculousworldshanghaithelegendofladydragon": 1,
    "slugterraghoulfrombeyond": 1,
    "slugterraintotheshadows": 1,
    "slugterrareturnoftheelementals": 1,
    "slugterraslugfushowdown": 1,
    "theadventuresoftintin": 1,
    "thespongebobsquarepantsmovie": 1,
    "thewitchernightmareofthewolf": 1,
    "transformersprimebeasthunterspredaconsrising": 1,
    "beybladethemoviefiercebattle": 1,
    "beybladevsthesunsolblazethescorchinghotinvader": 1,
    "doraemonstandbyme2": 1,
    "evangelion111youarenotalone": 1,
    "evangelion222youcannotadvance": 1,
    "evangelion3010thriceuponatime": 1,
    "evangelion333youcannotredo": 1,
    "pokemonthemovieblackvictiniandreshiram": 1,
    "pokemonarceusandthejeweloflife": 1,
    "pokemonthemovie2000": 1,
    "pokemonthemoviediancieandthecocoonofdestruction": 1,
    "pokemontheriseofdarkrai": 1,
    "pokemondestinydeoxys": 1,
    "pokemonthemoviedetectivepikachu": 1,
    "pokemonthemoviegenesectandthelegendawakened": 1,
    "shinchanpursuitoftheballsofdarkness": 1,
    "sinbadnightathighnoonandthewondergate": 1,
    "sinbadtheflyingprincessandthesecretisland": 1,
    "sinbadthemagicallampandthemovingisland": 1,
    "pokemongiratinaandtheskywarrior": 1,
    "pokemonthemoviehoopaandtheclashofages": 1,
    "pokemonthemovieichooseyou": 1,
    "pokemonjirachiwishmaker": 1,
    "pokemonthemoviekyuremvstheswordofjustice": 1,
    "pokemonlucarioandthemysteryofmew": 1,
    "pokemonthefirstmoviemewtwostrikesback": 1,
    "pokemonrangerandthetempleofthesea": 1,
    "pokemonthemoviesecretsofthejungle": 1,
    "pokemonheroeslatioslatias": 1,
    "pokemonthemoviethepowerofus": 1,
    "pokemonthemoviespelloftheunown": 1,
    "pokemonthemovievolcanionandthemechanicalmarvel": 1,
    "pokemonthemoviemewtwostrikesbackevolution": 1,
    "alteredcarbonresleeved": 1,
    "howlsmovingcastle": 1,
    "myneighbortotoro": 1,
    "spiritedaway": 1,
    "ben10versustheuniversethemovie": 1,
    "theloudhousemovie": 1,
    "pokemonthemoviecelebithevoiceoftheforest": 1,
    "mydressupdarling": 12,
    "dragonballzkai": 79,
    "mylittleponyanewgeneration": 1,
    "ponyo": 1
}

const selfLongAnimes = [
    'fairy tail',
    'fairy tail series 2',
    "boruto naruto next generations"
]

if(longAnimes.includes(animeNameee)){
    callLongAnimeDirect();
}else if(shortAnimes.includes(animeNameee)){
    callShortAnimeDirect();
}else{
    if(selfLongAnimes.includes(animeNameee))
        callLongAnimeInDirect();
    else
        callShortAnimeInDirect();
}

function callLongAnimeDirect(){
    let request = new XMLHttpRequest();
    request.open("get", "/scripts/JSON/long-anime.json", true);
    request.send();
    request.onload = function() {
        if(this.readyState == 4 && this.status == 200){
            let animeData = JSON.parse(this.responseText);
            let anime = document.getElementById("a-active-page-tag");
            setLongAnimes(animeData[anime.textContent]);
        }
    }
}
function callLongAnimeInDirect(){
    let request = new XMLHttpRequest();
    request.open("get", "details.json", true);
    request.send();
    request.onload = function() {
        if(this.readyState == 4 && this.status == 200){
            let animeData = JSON.parse(this.responseText);
            setLongAnimes(animeData);
        }
    }
}
function callShortAnimeDirect(){
    let request = new XMLHttpRequest();
    request.open("get", "/scripts/JSON/short-anime.json", true);
    request.send();
    request.onload = function() {
        if(this.readyState == 4 && this.status == 200){
            let animeData = JSON.parse(this.responseText);
            let anime = document.getElementById("a-active-page-tag");
            setShortAnimes(animeData[anime.textContent]);
        }
    }
}
function callShortAnimeInDirect(){
    let request = new XMLHttpRequest();
    request.open("get", "details.json", true);
    request.send();
    request.onload = function() {
        if(this.readyState == 4 && this.status == 200){
            let animeData = JSON.parse(this.responseText);
            setShortAnimes(animeData);
        }
    }
}



//for long anime
function setLongAnimes(long_anime_data)
{
    // console.log(animeNameee);
    let video_container = document.getElementsByClassName("main-container-video-sec-1")[0];
      var element = document.createElement("div");
      video_container.prepend(element);
      video_container.getElementsByTagName("div")[0].setAttribute("class", "preloader-for-video");
      document.getElementsByClassName("preloader-for-video")[0].innerHTML = '<div class="preloader-for-video"><div class="spinner-box"><div class="circle-border"><div class="circle-core"></div></div>  </div></div>';
    //for setting preloader for episodes section
    let episodesContainer_ = document.getElementsByClassName("main-container-video-sec-2")[0];
    let newElement = document.createElement("div");
    newElement.setAttribute("class", "preloader-for-video-episodes-section");
    newElement.innerHTML = `<div class="spinner-box_"><div class="circle-border"><div class="circle-core_"></div></div>  </div>`;
    episodesContainer_.prepend(newElement);

const key_value_from_url = window.location.search;
const urlParams = new URLSearchParams(key_value_from_url);
let epi_num = urlParams.get("ep");
let epi_aud = urlParams.get("aud");
// let flagg;

document.getElementById("episode-number-in-video").innerHTML = epi_num;
let anime = document.getElementById("a-active-page-tag");
// let animeNew = anime.replace(" ","");


        var episodes_section = document.getElementById("episodes-in-section");
        // console.log(anime.textContent);
        let current_long_anime_epi_num;
        let current_short_anime_data = long_anime_data;
            if(current_short_anime_data['jap'] != undefined)
                current_long_anime_epi_num = current_short_anime_data['jap']['no_epi'];
            else if(current_short_anime_data['eng'] != undefined)
                current_long_anime_epi_num = current_short_anime_data['eng']['no_epi'];
            else if(current_short_anime_data['hin'] != undefined)
                current_long_anime_epi_num = current_short_anime_data['hin']['no_epi'];
            else if(current_short_anime_data['tel'] != undefined)
                current_long_anime_epi_num = current_short_anime_data['tel']['no_epi'];
            else if(current_short_anime_data['tam'] != undefined)
                current_long_anime_epi_num = current_short_anime_data['tam']['no_epi'];
            else if(current_short_anime_data['mal'] != undefined)
                current_long_anime_epi_num = current_short_anime_data['mal']['no_epi'];
            else if(current_short_anime_data['ben'] != undefined)
                current_long_anime_epi_num = current_short_anime_data['ben']['no_epi'];

        var episodes_numbers = document.getElementById("episodes-numbers");
        let temp = "";
        let outputNew = "";
        let min_range;
        let max_range;

        min_range = Math.floor(epi_num / 100) * 100;
        if(epi_num % 100 == 0)
            min_range -= 100;
        max_range = min_range + 100;
        if (max_range > current_long_anime_epi_num)
            max_range=current_long_anime_epi_num;
        min_range ++;
        episodes_numbers.innerHTML = " " + min_range + "-" + max_range;
        anime = anime.textContent.replace(/[^a-zA-Z0-9]/g, "");
        for(let i = min_range; i <= max_range; i++){
            if(i == epi_num){
                temp = "<div class='episode active' id='" + anime + "-episode-" + i + "'>" + i + "</div>";
            }else{ 
                var temp_1 = 'window.open("https://animerulz.in/' + anime.toLowerCase() + "/Watch-Now/?ep=" + i + '&aud=' + epi_aud + '", "_self")';
                temp = "<div class='episode' id='" + anime + "-episode-" + i + "' onclick='" + temp_1 + "'>" + i +"</div>" ;
                // temp = "<div class='episode' id='episode-" + i + "'>" + i +"</div>" ;
            }
            outputNew += temp;
        }
        episodes_section.innerHTML = outputNew;
        try{
            document.getElementsByClassName("preloader-for-video-episodes-section")[0].style.display = "none";
        }
        catch{}
        var tempNew;
        outputNew = "";
        let i = 1;
        for(i = 1 ; i < current_long_anime_epi_num ; i += 100){
            if(i + 100 <= current_long_anime_epi_num){
                if( epi_num >= i && epi_num < i + 100)
                    temp = "<div class='active'><span> Episodes : " + min_range + "-" + max_range + "</span></div>";
                else {
                    temp_1 = "'https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self'";
                    tempNew = 'onclick="window.open(' + temp_1 + ')"';
                    temp = "<div " + tempNew + "><span> Episodes : " + i + "-" + (i + 99) + "</span></div>";
                }
            }
            else{
                if( epi_num >= i && epi_num <= i + 100)
                    temp = "<div class='active'><span> Episodes : " + min_range + "-" + current_long_anime_epi_num + "</span></div>";
                else {
                    temp_1 = "'https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self'";
                    tempNew = 'onclick="window.open(' + temp_1 + ')"';
                    temp = "<div " + tempNew + "><span> Episodes : " + i + "-" + current_long_anime_epi_num + "</span></div>";
                }
            }
            outputNew += temp;
        }

        var episodes_numbers_new = document.getElementsByClassName("episodes-selection-div")[0];
        episodes_numbers_new.innerHTML = outputNew;

        if(epi_num != 1)
            document.getElementsByClassName("button-1")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + (epi_num - 1) + "&aud=" + epi_aud + "', '_self')"); 
        if(epi_num != current_long_anime_epi_num)
            document.getElementsByClassName("button-2")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + (Number(epi_num) + 1) + "&aud=" + epi_aud + "', '_self')"); 

        //for setting video and audio buttons
        var audios_div = document.getElementsByClassName("audios")[0];
        outputNew = "";
        let newEpiNum;
        try{
            //to store episode number in 001 format
            if( 1 <= epi_num && epi_num <= 9)
                newEpiNum = "00" + epi_num + ""
            else if(10 <= epi_num && epi_num <= 99)
                newEpiNum = "0" + epi_num
            else
                newEpiNum = (" " +  epi_num ).replace(" ", "");
            if(current_short_anime_data['mul'][newEpiNum]){
                // flagg = 1;
                if(current_short_anime_data['mul'][newEpiNum]['mul'])
                    outputNew += "<div class='audio' name='mul'>Multi</div>";
                else
               { if(current_short_anime_data['mul'][newEpiNum]['h'])
                    outputNew += "<div class='audio' name='mul1080'>Multi(1080p)</div>";
                if(current_short_anime_data['mul'][newEpiNum]['n'])
                    outputNew += "<div class='audio' name='mul720'>Multi(720p)</div>";
                if(current_short_anime_data['mul'][newEpiNum]['l'])
                    outputNew += "<div class='audio' name='mul480'>Multi(480p)</div>";}
            }
        }
        catch{}
        try{
            if(epi_num <= current_short_anime_data['jap']['no_epi'])
                outputNew += "<div class='audio' name='jap'>Japanese</div>";
    }
    catch{
        try{
            if(epi_num <= current_short_anime_data['jap2']['no_epi'])
                outputNew += "<div class='audio' name='jap'>Japanese</div>";
        }
        catch{}
    }
            try{
                if(epi_num <= current_short_anime_data['eng']['no_epi'])
                    outputNew += "<div class='audio' name='eng'>English</div>";
        }
        catch{
            try{
                if(epi_num <= current_short_anime_data['eng2']['no_epi'])
                    outputNew += "<div class='audio' name='eng'>English</div>"
            }
            catch{}
        }
            try{
                if( epi_num <= Number(current_short_anime_data['hin']['no_epi']))
                    outputNew += "<div class='audio' name='hin'>Hindi</div>";
            }
            catch{}
            try{
                if( epi_num <= Number(current_short_anime_data['tel']['no_epi']))
                outputNew += "<div class='audio' name='tel'>Telugu</div>";
            }
            catch{}
            try{
                if( epi_num <= Number(current_short_anime_data['tam']['no_epi']))
                    outputNew += "<div class='audio' name='tam'>Tamil</div>";
            }
            catch{}
            try{
                if( epi_num <= Number(current_short_anime_data['mal']['no_epi']))
                    outputNew += "<div class='audio' name='mal'>Malayalam</div>";
            }
            catch{}
            try{
                if( epi_num <= Number(current_short_anime_data['ben']['no_epi']))
                    outputNew += "<div class='audio' name='ben'>Bengali</div>";
            }
            catch{};
            audios_div.innerHTML = outputNew;
            // setMultiAudioDes();
        try{
            document.getElementsByName(epi_aud)[0].classList.add("active-aud");
        }
        catch{
            // console.log("Hello");
            let anime_audios = document.getElementsByClassName("audio")[0];
            temp = "/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=" + anime_audios.getAttribute("name") ;
            window.open(temp, "_self");
        }
        
        try{
            if(epi_aud != 'jap')
                document.getElementsByName("jap")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=jap', '_self')");
            }
        catch{};
        try{
            if(epi_aud != 'eng')
            document.getElementsByName("eng")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=eng', '_self')");
        }
        catch{}
        try{
            if(epi_aud != 'mul')
            document.getElementsByName("mul")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul', '_self')");
        }
        catch{}
        try{
            if(epi_aud != 'mul1080')
            document.getElementsByName("mul1080")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul1080', '_self')");
        }
        catch{}
        try{
            if(epi_aud != 'mul720')
            document.getElementsByName("mul720")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul720', '_self')");
        }
        catch{}
        try{
            if(epi_aud != 'mul480')
            document.getElementsByName("mul480")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul480', '_self')");
        }
        catch{}
        try{
            if(epi_aud != 'tel')
            document.getElementsByName("tel")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=tel', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'hin')
            document.getElementsByName("hin")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=hin', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'tam')
            document.getElementsByName("tam")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=tam', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'mal')
            document.getElementsByName("mal")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mal', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'ben')
            document.getElementsByName("ben")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=ben', '_self')");
        }
        catch{};
        var video_player = document.getElementsByTagName('iframe')[0];
        let currentVideoQuality;
        if(epi_aud == "jap"){
            if(current_short_anime_data['jap'] != undefined){
                let current_short_anime_data_video_link = current_short_anime_data['jap']['link'];
                video_player.setAttribute("src", current_short_anime_data_video_link + epi_num);  
            }else{
                let current_short_anime_data_video_link = current_short_anime_data['jap2']['link'];
            let newEpiNum1;
            if (current_short_anime_data['jap2']['no_epi'] > 100 || current_short_anime_data['jap2']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['jap2']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
                let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
            current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=jap";
            video_player.setAttribute("src", current_short_anime_data_video_link);
            }
        }
        else if(epi_aud == "eng"){
            if(current_short_anime_data['eng'] != undefined){
                let current_short_anime_data_video_link = current_short_anime_data['eng']['link'];
                video_player.setAttribute("src", current_short_anime_data_video_link + epi_num);  
            }else{
                let current_short_anime_data_video_link = current_short_anime_data['eng2']['link'];
            let newEpiNum1;
            if (current_short_anime_data['eng2']['no_epi'] > 100 || current_short_anime_data['eng2']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['eng2']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
                let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
            current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=eng";
            video_player.setAttribute("src", current_short_anime_data_video_link);
            }
        }
        else if(epi_aud == 'tel'){
            let current_short_anime_data_video_link = current_short_anime_data['tel']['link'];
            let newEpiNum1;
            if (current_short_anime_data['tel']['no_epi'] > 100 || current_short_anime_data['tel']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['tel']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
                let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
            current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=tel";
            video_player.setAttribute("src", current_short_anime_data_video_link);
        }
        else if(epi_aud == 'tam'){
            let current_short_anime_data_video_link = current_short_anime_data['tam']['link'];
            let newEpiNum1;
            if (current_short_anime_data['tam']['no_epi'] > 100 || current_short_anime_data['tam']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['tam']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
                let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
            current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=tam";
            video_player.setAttribute("src", current_short_anime_data_video_link);
        }
        else if(epi_aud == 'ben'){
            let current_short_anime_data_video_link = current_short_anime_data['ben']['link'];
            let newEpiNum1;
            if (current_short_anime_data['ben']['no_epi'] > 100 || current_short_anime_data['ben']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['ben']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
                let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
            current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=ben";
            video_player.setAttribute("src", current_short_anime_data_video_link);
        }
        else if(epi_aud == 'mal'){
            let current_short_anime_data_video_link = current_short_anime_data['mal']['link'];
            let newEpiNum1;
            if (current_short_anime_data['mal']['no_epi'] > 100 || current_short_anime_data['mal']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['mal']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
                let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
            current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=mal";
            video_player.setAttribute("src", current_short_anime_data_video_link);
        }
        else if(epi_aud == 'hin'){
            let current_short_anime_data_video_link = current_short_anime_data['hin']['link'];
            let newEpiNum1;
            if (current_short_anime_data['hin']['no_epi'] > 100 || current_short_anime_data['hin']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['hin']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
                let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
            current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=hin";
            video_player.setAttribute("src", current_short_anime_data_video_link);
        }
        else{
            let activeAudName = document.getElementsByClassName("active-aud")[0].getAttribute("name");
            if(activeAudName === 'mul')
                currentVideoQuality = 'mul';
            else if(activeAudName === 'mul1080')
                currentVideoQuality = 'h'
            else if(activeAudName === 'mul720')
                currentVideoQuality = 'n'
            else if(activeAudName === 'mul480')
                currentVideoQuality = 'l'
            video_player.setAttribute("src", "https://filelions.live/v/" + current_short_anime_data['mul'][newEpiNum][currentVideoQuality]);
        }

        let tempAudioForDownloadBtn;
        if(epi_aud == 'tel' || epi_aud == 'tam' || epi_aud == 'hin' || epi_aud == 'mal' || epi_aud == 'ben'){
            tempAudioForDownloadBtn = getFirstAudio();
        }
        try{
            if(epi_aud == "jap" || epi_aud == "eng")
                document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('" + current_short_anime_data[epi_aud]["down_links"][epi_num - 1] + "')");
            else{
                if(tempAudioForDownloadBtn)
                    if(tempAudioForDownloadBtn == 'mul1080')
                        document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://filelions.live/d/" +  current_short_anime_data['mul'][newEpiNum]['h'] + "')");
                    else if(tempAudioForDownloadBtn == 'mul720')
                        document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://filelions.live/d/" +  current_short_anime_data['mul'][newEpiNum]['n'] + "')");
                    else if(tempAudioForDownloadBtn == 'mul480')
                        document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://filelions.live/d/" +  current_short_anime_data['mul'][newEpiNum]['l'] + "')");
                else
                    document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://filelions.live/d/" +  current_short_anime_data['mul'][newEpiNum][currentVideoQuality] + "')");
            }
        }
        catch{};
    

function getFirstAudio(){
    let firstAvailableAudio = document.querySelector(".audios");
    if(firstAvailableAudio)
        return document.querySelector(".audios .audio").getAttribute("name");
    else
        setTimeout(1000, getFirstAudio);
}

var video_player = document.getElementById("video-player");
// console.log(video_player.offsetHeight, video_player.offsetWidth);
if(screen.width <= 940){
  var video_player_width = video_player.offsetWidth;
  video_player.style.height = 0.559 * video_player_width + "px";
//   console.log(video_player.offsetHeight, video_player.offsetWidth);
}


function scrollToDiv() {
    var mainDivision = document.getElementsByClassName("content")[0];
    var division = document.getElementsByClassName("active")[1];
    if(division == undefined)
        var division = document.getElementsByClassName("active-episode")[0];
        // console.log(division);
  
        // division.scrollIntoView({ behavior: 'auto' });
    try{
        mainDivision.scrollTo(0, division.offsetTop - mainDivision.offsetTop);
        }
    catch{}    //   console.log(division.offsetTop);
    // console.log(division);
      // var normalView = document.getElementsByClassName("")[0].scrollIntoView();
  }
  
  setTimeout(scrollToDiv, 500);
  
let episode_div;
episode_div = document.querySelector(".main-container-video-sec-2 .body .body-cont .content");
if(screen.width >= 450)
    episode_div.setAttribute("style", "grid-template-columns: repeat(auto-fit, 55px);");
else
    episode_div.setAttribute("style", "grid-template-columns: repeat(auto-fit, minmax(30px, 15%));");


//for storing local episode data

      // Function to handle button clicks
      function handleClick(event) {
        // Store the clicked button's ID and color in local storage
        localStorage.setItem('lastClickedButton' + anime , event.target.id);
        let temporaryDataVar1 = localStorage.getItem('continueWatching');
        let temporaryDataVar = JSON.parse(temporaryDataVar1);
        let animeDataNew;
        let lastIndex = temporaryDataVar.length - 1
        animeDataNew = {
            "animeName" : temporaryDataVar[lastIndex].animeName,
            "animeImage" : temporaryDataVar[lastIndex].animeImage
        }
        temporaryDataVar.splice(lastIndex, 1);
        //for clicked episode id
        let animeEpisodeNumber_ = event.target.id.split("-");
        let animeEpisodeNumber__ = animeEpisodeNumber_[animeEpisodeNumber_.length - 1];
        animeDataNew.animeEpisodeNumber = Number(animeEpisodeNumber__);
        temporaryDataVar.push(animeDataNew);
        let convertedData = JSON.stringify(temporaryDataVar);
        localStorage.setItem("continueWatching", convertedData);
        localStorage.setItem(event.target.id, "visited-episode");
        
        // Change the color of the clicked button
        event.target.classList.add("visited-episode");
        // event.target.style.color = "#ffffffcc";
      }
      function handleClickAudio(event) {
        // Store the clicked button's ID and color in local storage
        localStorage.setItem('lastClickedButtonAudio' + anime , event.target.id);
        
        // Change the color of the clicked button
        event.target.classList.add("visited-audio");
        // event.target.style.color = "#ffffffcc";
      }
      // Add click event listeners to all buttons
      function setEpisodesData(){
        var buttons = document.querySelectorAll('.episode');
        buttons.forEach(function(button) {
            button.addEventListener('click', handleClick);
            
            // Check if the button has a stored color and update it
            if (localStorage.getItem(button.id) === "visited-episode") {
            button.classList.add("visited-episode");
            // button.target.style.color = "#ffffffcc";
            }
        });
        
        try{
            let active_epi = document.querySelector(".active-episode");
            // let active_epi
            // if(active_epi_ == null)
            //     active_epi = getActiveEpisode();
        // console.log(anime);
        localStorage.setItem('lastClickedButton' + anime, active_epi.id);
        localStorage.setItem(active_epi.id, "visited-episode");
        let active_aud = document.querySelector(".active-aud.audio");
        localStorage.setItem('lastClickedButtonAudio' + anime, active_aud.getAttribute("name"));
        // localStorage.setItem(active_epi.id, "visited-);
        // console.log(active_aud);
        // Retrieve the last clicked button and update its color
        var lastClickedButtonId = localStorage.getItem('lastClickedButton' + anime);
        if (lastClickedButtonId) {
            var lastClickedButton1 = document.getElementById(lastClickedButtonId);
            lastClickedButton1.classList.add("visited-episode");
        }
        }
        catch{}
    }

      setTimeout(setEpisodesData, 500);

    //to get active episode
    function getActiveEpisode(){
        let active_epi__ = document.querySelector(".active-episode");
        if(active_epi__ != null)
            return active_epi__
        else
            return getActiveEpisode();
    }

    // for setting description about multi audio
    function setMultiAudioDes(){
        let flagg = 0;
        let avaiableAudios = document.querySelectorAll(".audio");
        // console.log(avaiableAudios);
        avaiableAudios.forEach(function(audioAvail){
            if(audioAvail.getAttribute("name") === "mul1080"){
                flagg = 1;
            }
        })
         if (flagg == 1){
            let multiAudioDes = document.createElement("div");

            multiAudioDes.setAttribute("class", "audio-container-multi-audio-des");

            multiAudioDes.innerHTML = "<span class='multi-text-high'>Multi</span> Audio has Hindi, Telugu, Tamil, Malayalam, Bengali - Use 🎧 in Video to change audio track.";
          
            document.getElementsByClassName("audio-container")[0].appendChild(multiAudioDes);
        }
    }

    
}




//for short anime 
function setShortAnimes(short_anime_data){
   
    document.querySelector(".episodes-list-sec .sec-2").style.display = "none";

    let video_container = document.getElementsByClassName("main-container-video-sec-1")[0];
      var element = document.createElement("div");
      video_container.prepend(element);
      video_container.getElementsByTagName("div")[0].setAttribute("class", "preloader-for-video");
      document.getElementsByClassName("preloader-for-video")[0].innerHTML = '<div class="preloader-for-video"><div class="spinner-box"><div class="circle-border"><div class="circle-core"></div></div>  </div></div>';    
    //for setting preloader for episodes section
    let episodesContainer_ = document.getElementsByClassName("main-container-video-sec-2")[0];
    let newElement = document.createElement("div");
    newElement.setAttribute("class", "preloader-for-video-episodes-section");
    newElement.innerHTML = `<div class="spinner-box_"><div class="circle-border"><div class="circle-core_"></div></div>  </div>`;
    episodesContainer_.prepend(newElement);
    
    const key_value_from_url = window.location.search;
    const urlParams = new URLSearchParams(key_value_from_url);
    let epi_num = urlParams.get("ep");
    let epi_aud = urlParams.get("aud");

  

    document.getElementById("episode-number-in-video").innerHTML = epi_num;
    let anime = document.getElementById("a-active-page-tag");
    if(newAnimesName.hasOwnProperty(animeNameee)){
        Object.keys(short_anime_data).forEach( lang => {
            short_anime_data[lang]['no_epi'] = newAnimesName[animeNameee];
        });
}


            var episodes_section = document.getElementById("episodes-in-section");
            let current_short_anime_data = short_anime_data;
            // console.log(current_short_anime_data);
            let current_short_anime_epi_num;
            anime = anime.textContent.replace(/[^a-zA-Z0-9]/g, "");
            if(current_short_anime_data['jap'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['jap']['no_epi'];
            else if(current_short_anime_data['eng'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['eng']['no_epi'];
            else if(current_short_anime_data['hin'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['hin']['no_epi'];
            else if(current_short_anime_data['tel'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['tel']['no_epi'];
            else if(current_short_anime_data['tam'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['tam']['no_epi'];
            else if(current_short_anime_data['mal'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['mal']['no_epi'];
            else if(current_short_anime_data['ben'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['ben']['no_epi'];
            else if(current_short_anime_data['jap2'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['jap2']['no_epi'];
            else if(current_short_anime_data['eng2'] != undefined)
                current_short_anime_epi_num = current_short_anime_data['eng2']['no_epi'];
            if(current_short_anime_epi_num < Number(epi_num))
                window.open(`https://animerulz.in/${animeNameee}/Watch-Now/?ep=1&aud=${epi_aud}`, "_self");
            let temp = "";
            let temp_1 = "";
            let outputNew = "";
            let first;
            let second; 
            let episodesNames = current_short_anime_data['episodes_names'];
            let episodeNameNew;
            for(let i = 1 ; i <= current_short_anime_epi_num ; i ++){
                if(i % 2 == 0){
                    first = 2;
                    second = 1;
                }
                else{
                    first = 1;
                    second = 2;
                }
                if(episodesNames){
                    if(!episodesNames[i - 1])
                        episodeNameNew = `Episode ${i}`;
                    else
                        episodeNameNew = episodesNames[i - 1];
                }else{
                    episodeNameNew = `Episode ${i}`;
                }
                if(i == epi_num){
                    temp = ' <div class="episode-short"><div class="short-anime-ep active-episode" id="' + anime + '-episode-' + i + '"> ' + 
                    '<div class="short-anime-num episode-alternate-' + first + '">' + i + '</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + episodeNameNew + '</span> ' + 
                    '<svg xmlns="http://www.w3.org/2000/svg" class="play-svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100"><switch><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1zM5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path d="M5268.4 2410.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.6-.4-1-1-1H5268.4zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2414.1 5273.3 2413.7 5272.7 2413.7zM5272.7 2417h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2417.5 5273.3 2417 5272.7 2417zM50 2.5C23.8 2.5 2.5 23.8 2.5 50c0 26.2 21.3 47.5 47.5 47.5 26.2 0 47.5-21.3 47.5-47.5C97.5 23.8 76.2 2.5 50 2.5zM67.2 52.8L41.6 69.8c-2.2 1.5-5.1-.1-5.1-2.8V32.9c0-2.6 2.9-4.2 5.1-2.8l25.6 17.1C69.2 48.6 69.2 51.4 67.2 52.8z"/></g></switch></svg> ' + 
                    '</div></div></div>';
                }
                else{
                    temp_1 = "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self')";
                    temp = '<div class="episode-short" onclick="' + temp_1 + '"><div class="short-anime-ep"  id="' + anime + '-episode-' + i + '"><div class="short-anime-num episode-alternate-' + first + '">' + i +'</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + episodeNameNew + '</span></div></div></div>'
                }
                outputNew += temp;
            }
            episodes_section.innerHTML = outputNew;
            try{
                document.getElementsByClassName("preloader-for-video-episodes-section")[0].style.display = "none";
            }
            catch{}

            if(epi_num != 1)
                document.getElementsByClassName("button-1")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + (epi_num - 1) + "&aud=" + epi_aud + "', '_self')"); 
            if(epi_num != current_short_anime_epi_num)
                document.getElementsByClassName("button-2")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + (Number(epi_num) + 1) + "&aud=" + epi_aud + "', '_self')"); 
            let newEpiNum;
            //for setting video and audio buttons
            var audios_div = document.getElementsByClassName("audios")[0];
            outputNew = "";
            try{
                //to store episode number in 001 format
                if( 1 <= epi_num && epi_num <= 9)
                    newEpiNum = "0" + epi_num + ""
                else if(10 <= epi_num && epi_num <= 99)
                    newEpiNum = "" + epi_num
                else
                    newEpiNum = (" " +  epi_num ).replace(" ", "");
                // console.log(newEpiNum);
                if(current_short_anime_data['mul'][newEpiNum]){
                    if(current_short_anime_data['mul'][newEpiNum]['mul'])
                        outputNew += "<div class='audio' name='mul'>Multi</div>";
                    else
                   { if(current_short_anime_data['mul'][newEpiNum]['h'])
                        outputNew += "<div class='audio' name='mul1080'>Multi(1080p)</div>";
                    if(current_short_anime_data['mul'][newEpiNum]['n'])
                        outputNew += "<div class='audio' name='mul720'>Multi(720p)</div>";
                    if(current_short_anime_data['mul'][newEpiNum]['l'])
                        outputNew += "<div class='audio' name='mul480'>Multi(480p)</div>";}
                }
            }
            catch{}
            try{
                if(epi_num <= current_short_anime_data['jap']['no_epi'])
                    outputNew += "<div class='audio' name='jap'>Japanese</div>";
        }
        catch{
            try{
                if(epi_num <= current_short_anime_data['jap2']['no_epi'])
                    outputNew += "<div class='audio' name='jap'>Japanese</div>";
            }
            catch{}
        }
                try{
                    if(epi_num <= current_short_anime_data['eng']['no_epi'])
                        outputNew += "<div class='audio' name='eng'>English</div>";
            }
            catch{
                try{
                    if(epi_num <= current_short_anime_data['eng2']['no_epi'])
                        outputNew += "<div class='audio' name='eng'>English</div>"
                }
                catch{}
            }
                try{
                    if( epi_num <= Number(current_short_anime_data['hin']['no_epi']))
                        outputNew += "<div class='audio' name='hin'>Hindi</div>";
                }
                catch{}
                try{
                    if( epi_num <= Number(current_short_anime_data['tel']['no_epi']))
                    outputNew += "<div class='audio' name='tel'>Telugu</div>";
                }
                catch{}
                try{
                    if( epi_num <= Number(current_short_anime_data['tam']['no_epi']))
                        outputNew += "<div class='audio' name='tam'>Tamil</div>";
                }
                catch{}
                try{
                    if( epi_num <= Number(current_short_anime_data['mal']['no_epi']))
                        outputNew += "<div class='audio' name='mal'>Malayalam</div>";
                }
                catch{}
                try{
                    if( epi_num <= Number(current_short_anime_data['ben']['no_epi']))
                        outputNew += "<div class='audio' name='ben'>Bengali</div>";
                }
                catch{};
                audios_div.innerHTML = outputNew ;
                // setMultiAudioDes();
            try{
                document.getElementsByName(epi_aud)[0].classList.add("active-aud");
            }
            catch{
                let anime_audios = document.getElementsByClassName("audio")[0];
                temp = "/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=" + anime_audios.getAttribute("name") ;
                window.open(temp, "_self");
            }
            try{
                if(epi_aud != 'mul')
                document.getElementsByName("mul")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'jap')
                    document.getElementsByName("jap")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=jap', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'eng')
                    document.getElementsByName("eng")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=eng', '_self')");
            }
            catch{}
            try{
                if(epi_aud != 'mul')
                document.getElementsByName("mul")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul', '_self')");
            }
            catch{}
            try{
                if(epi_aud != 'mul1080')
                document.getElementsByName("mul1080")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul1080', '_self')");
            }
            catch{}
            try{
                if(epi_aud != 'mul720')
                document.getElementsByName("mul720")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul720', '_self')");
            }
            catch{}
            try{
                if(epi_aud != 'mul480')
                document.getElementsByName("mul480")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mul480', '_self')");
            }
            catch{}
            try{
                if(epi_aud != 'tel')
                document.getElementsByName("tel")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=tel', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'hin')
                document.getElementsByName("hin")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=hin', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'tam')
                document.getElementsByName("tam")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=tam', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'mal')
                document.getElementsByName("mal")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=mal', '_self')");
            }
            catch{};
            try{
                if(epi_aud != 'ben')
                document.getElementsByName("ben")[0].setAttribute("onclick", "window.open('https://animerulz.in/" + anime.toLowerCase() + "/Watch-Now/?ep=" + epi_num + "&aud=ben', '_self')");
            }
            catch{};
            var video_player = document.getElementsByTagName('iframe')[0];
            if(epi_aud == "jap"){
                if(current_short_anime_data['jap'] != undefined){
                    let current_short_anime_data_video_link = current_short_anime_data['jap']['link'];
                    video_player.setAttribute("src", current_short_anime_data_video_link + epi_num);  
                }else{
                    let current_short_anime_data_video_link = current_short_anime_data['jap2']['link'];
                let newEpiNum1;
                if (current_short_anime_data['jap2']['no_epi'] > 100 || current_short_anime_data['jap2']['no_epi'] == 1) {
                    if(epi_num >= 1 && epi_num <= 9)
                        newEpiNum1 =  '00' + epi_num;
                    else if(epi_num >= 10 && epi_num <= 99)
                        newEpiNum1 = '0' + epi_num
                    else
                        newEpiNum1 = epi_num
                }else if(current_short_anime_data['jap2']['no_epi'] > 9){
                    if(epi_num >= 1 && epi_num <= 9)
                        newEpiNum1 = '0' + epi_num;
                    else
                        newEpiNum1 = epi_num;
                }else
                    newEpiNum1 = epi_num
                    let pokemonCheckerList;
                    if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                        let tempppp = current_short_anime_data_video_link.split('=');
                        pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                        current_short_anime_data_video_link = '';
                        for(let it = 0; it < pokemonCheckerList.length; it ++)
                            current_short_anime_data_video_link += pokemonCheckerList[it];
                    }
                current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=jap";
                video_player.setAttribute("src", current_short_anime_data_video_link);
                }
            }
            else if(epi_aud == "eng"){
                if(current_short_anime_data['eng'] != undefined){
                    let current_short_anime_data_video_link = current_short_anime_data['eng']['link'];
                    video_player.setAttribute("src", current_short_anime_data_video_link + epi_num);  
                }else{
                    let current_short_anime_data_video_link = current_short_anime_data['eng2']['link'];
                let newEpiNum1;
                if (current_short_anime_data['eng2']['no_epi'] > 100 || current_short_anime_data['eng2']['no_epi'] == 1) {
                    if(epi_num >= 1 && epi_num <= 9)
                        newEpiNum1 =  '00' + epi_num;
                    else if(epi_num >= 10 && epi_num <= 99)
                        newEpiNum1 = '0' + epi_num
                    else
                        newEpiNum1 = epi_num
                }else if(current_short_anime_data['eng2']['no_epi'] > 9){
                    if(epi_num >= 1 && epi_num <= 9)
                        newEpiNum1 = '0' + epi_num;
                    else
                        newEpiNum1 = epi_num;
                }else
                    newEpiNum1 = epi_num
                let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
                current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=eng";
                video_player.setAttribute("src", current_short_anime_data_video_link);
                }
            } 
            else if(epi_aud == 'tel'){
                let current_short_anime_data_video_link = current_short_anime_data['tel']['link'];
                let newEpiNum1;
                if (current_short_anime_data['tel']['no_epi'] > 100 || current_short_anime_data['tel']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['tel']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
            let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
                current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=tel";
                video_player.setAttribute("src", current_short_anime_data_video_link);
            }
            else if(epi_aud == 'tam'){
                let current_short_anime_data_video_link = current_short_anime_data['tam']['link'];
                let newEpiNum1;
                if (current_short_anime_data['tam']['no_epi'] > 100 || current_short_anime_data['tam']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['tam']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
            let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
                current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=tam";
                video_player.setAttribute("src", current_short_anime_data_video_link);
            }
            else if(epi_aud == 'ben'){
                let current_short_anime_data_video_link = current_short_anime_data['ben']['link'];
                let newEpiNum1;
                if (current_short_anime_data['ben']['no_epi'] > 100 || current_short_anime_data['ben']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['ben']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
            let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
                current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=ben";
                video_player.setAttribute("src", current_short_anime_data_video_link);
            }
            else if(epi_aud == 'mal'){
                let current_short_anime_data_video_link = current_short_anime_data['mal']['link'];
                let newEpiNum1;
                if (current_short_anime_data['mal']['no_epi'] > 100 || current_short_anime_data['mal']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['mal']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
            let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=' , 'pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
                current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=mal";
                video_player.setAttribute("src", current_short_anime_data_video_link);
            }
            else if(epi_aud == 'hin'){
                let current_short_anime_data_video_link = current_short_anime_data['hin']['link'];
                let newEpiNum1;
                if (current_short_anime_data['hin']['no_epi'] > 100 || current_short_anime_data['hin']['no_epi'] == 1) {
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 =  '00' + epi_num;
                else if(epi_num >= 10 && epi_num <= 99)
                    newEpiNum1 = '0' + epi_num
                else
                    newEpiNum1 = epi_num
            }else if(current_short_anime_data['hin']['no_epi'] > 9){
                if(epi_num >= 1 && epi_num <= 9)
                    newEpiNum1 = '0' + epi_num;
                else
                    newEpiNum1 = epi_num;
            }else
                newEpiNum1 = epi_num
            let pokemonCheckerList;
                if(current_short_anime_data_video_link.split("?")[1].split('=')[1].split('-')[0] == 'pokemon'){
                    let tempppp = current_short_anime_data_video_link.split('=');
                    pokemonCheckerList = [tempppp[0], '=pokmon', tempppp[1].slice(7, tempppp[1].length)];
                    current_short_anime_data_video_link = '';
                    for(let it = 0; it < pokemonCheckerList.length; it ++)
                        current_short_anime_data_video_link += pokemonCheckerList[it];
                }
                current_short_anime_data_video_link = current_short_anime_data_video_link + newEpiNum1 + "&lang=hin";
                video_player.setAttribute("src", current_short_anime_data_video_link);
            }
            else{
                let activeAudName = document.getElementsByClassName("active-aud")[0].getAttribute("name");
                if(activeAudName === 'mul')
                    currentVideoQuality = 'mul';
                else if(activeAudName === 'mul1080')
                    currentVideoQuality = 'h'
                else if(activeAudName === 'mul720')
                    currentVideoQuality = 'n'
                else if(activeAudName === 'mul480')
                    currentVideoQuality = 'l'
                video_player.setAttribute("src", "https://filelions.live/v/" + current_short_anime_data['mul'][newEpiNum][currentVideoQuality]);
            }
    
            let tempAudioForDownloadBtn;
            if(epi_aud == 'tel' || epi_aud == 'tam' || epi_aud == 'hin' || epi_aud == 'mal' || epi_aud == 'ben'){
                tempAudioForDownloadBtn = getFirstAudio();
            }
            try{
                if(epi_aud == "jap" || epi_aud == "eng")
                    document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('" + current_short_anime_data[epi_aud]["down_links"][epi_num - 1] + "')");
                else{
                    if(tempAudioForDownloadBtn)
                        if(tempAudioForDownloadBtn == 'mul1080')
                            document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://filelions.live/d/" +  current_short_anime_data['mul'][newEpiNum]['h'] + "')");
                        else if(tempAudioForDownloadBtn == 'mul720')
                            document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://filelions.live/d/" +  current_short_anime_data['mul'][newEpiNum]['n'] + "')");
                        else if(tempAudioForDownloadBtn == 'mul480')
                            document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://filelions.live/d/" +  current_short_anime_data['mul'][newEpiNum]['l'] + "')");
                    else
                        document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://filelions.live/d/" +  current_short_anime_data['mul'][newEpiNum][currentVideoQuality] + "')");
                }
            }
            catch{};
    
    function getFirstAudio(){
        let firstAvailableAudio = document.querySelector(".audios");
        if(firstAvailableAudio)
            return document.querySelector(".audios .audio").getAttribute("name");
        else
            setTimeout(1000, getFirstAudio);
    }
    
    var video_player = document.getElementById("video-player");
    // console.log(video_player.offsetHeight, video_player.offsetWidth);
    if(screen.width <= 940){
    var video_player_width = video_player.offsetWidth;
    video_player.style.height = 0.559 * video_player_width + "px";
    console.log(video_player.offsetHeight, video_player.offsetWidth);
    }


    function scrollToDiv() {
        var mainDivision = document.getElementsByClassName("content")[0];
            var division = document.getElementsByClassName("active")[1];
            if(division == undefined)
                var division = document.getElementsByClassName("active-episode")[0];
            // console.log(division);
    
            // division.scrollIntoView({ behavior: 'auto' });
            try{
                mainDivision.scrollTo(0, division.offsetTop - mainDivision.offsetTop);
                }
                catch{}        // console.log(division.offsetTop);
        // console.log(division);
        // var normalView = document.getElementsByClassName("")[0].scrollIntoView();
    }
    
    setTimeout(scrollToDiv, 500);
    
    let episode_div;
    episode_div = document.querySelector(".main-container-video-sec-2 .body .body-cont .content");
    episode_div.setAttribute("style", "grid-template-columns: 100%;grid-gap:0 0;");

    //for storing local episode data

        // Function to handle button clicks
        function handleClick(event) {
            // Store the clicked button's ID and color in local storage
            localStorage.setItem('lastClickedButton' + anime , event.target.id);
            let temporaryDataVar1 = localStorage.getItem('continueWatching');
        let temporaryDataVar = JSON.parse(temporaryDataVar1);
        // console.log(temporaryDataVar);
        let animeDataNew;
        let lastIndex = temporaryDataVar.length - 1
        animeDataNew = {
            "animeName" : temporaryDataVar[lastIndex].animeName,
            "animeImage" : temporaryDataVar[lastIndex].animeImage,
            "animeEpisodeNumber" : temporaryDataVar[lastIndex].animeEpisodeNumber
        }
        temporaryDataVar.splice(lastIndex, 1);
        //for clicked episode id
        let animeEpisodeNumber_ = event.target.id.split("-");
        let animeEpisodeNumber__ = animeEpisodeNumber_[animeEpisodeNumber_.length - 1];
        animeDataNew.animeEpisodeNumber = Number(animeEpisodeNumber__);
        temporaryDataVar.push(animeDataNew);
        let convertedData = JSON.stringify(temporaryDataVar);
        localStorage.setItem("continueWatching", convertedData);
            
            // Change the color of the clicked button
            event.target.classList.add("visited-episode-short-anime");
            // event.target.style.color = "#ffffffcc";
        }
        function handleClickAudio(event) {
            // Store the clicked button's ID and color in local storage
            localStorage.setItem('lastClickedButtonAudio' + anime , event.target.id);
            
            // Change the color of the clicked button
            event.target.classList.add("visited-audio");
            // event.target.style.color = "#ffffffcc";
        }
        // Add click event listeners to all buttons
        function setEpisodesData(){
            var buttons = document.querySelectorAll('.short-anime-ep');
            buttons.forEach(function(button) {
                button.addEventListener('click', handleClick);
                
                // Check if the button has a stored color and update it
                if (localStorage.getItem(button.id) === "visited-episode-short-anime") {
                button.classList.add("visited-episode-short-anime");
                // button.target.style.color = "#ffffffcc";
                }
            });
            
            try{
                let active_epi = document.querySelector(".active-episode");
            // let active_epi;
            // if(active_epi_ == null)
            //     active_epi = getActiveEpisode();            
            localStorage.setItem('lastClickedButton' + anime, active_epi.id);
            localStorage.setItem(active_epi.id, "visited-episode-short-anime");
            let active_aud = document.querySelector(".active-aud.audio");
            localStorage.setItem('lastClickedButtonAudio' + anime, active_aud.getAttribute("name"));
            // localStorage.setItem(active_epi.id, "visited-);
            // console.log(active_aud);
            // Retrieve the last clicked button and update its color
            var lastClickedButtonId = localStorage.getItem('lastClickedButton' + anime);
            if (lastClickedButtonId) {
                var lastClickedButton1 = document.getElementById(lastClickedButtonId);
                lastClickedButton1.classList.add("visited-episode-short-anime");
            }
            }
            catch{}
        }

        setTimeout(setEpisodesData, 500);

        //to get active episode
        function getActiveEpisode(){
            let active_epi__ = document.querySelector(".active-episode");
            console.log(active_epi__);
            if(active_epi__ == null)
                return getActiveEpisode();
            else
                return active_epi__
        }

        // for setting description about multi audio
    function setMultiAudioDes(){
        let flagg = 0;
        let avaiableAudios = document.querySelectorAll(".audio");
        // console.log(avaiableAudios);
        avaiableAudios.forEach(function(audioAvail){
            if(audioAvail.getAttribute("name") === "mul1080"){
                // console.log("YEs");
                flagg = 1;
            }
        })
         if (flagg == 1){
            let multiAudioDes = document.createElement("div");

            multiAudioDes.setAttribute("class", "audio-container-multi-audio-des");

            multiAudioDes.innerHTML = "<span class='multi-text-high'>Multi</span> Audio has Hindi, Telugu, Tamil, Malayalam, Bengali - Use 🎧 in Video to change audio track.";
          
            document.getElementsByClassName("audio-container")[0].appendChild(multiAudioDes);
        }
    }

}
