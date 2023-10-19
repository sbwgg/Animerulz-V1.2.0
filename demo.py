import json
import re
from bs4 import BeautifulSoup
import html

def filter(name: str):
    return re.sub('[^0-9a-zA-z]', '', name).lower()

# Sample data
# data = {'Zom 100: Bucket List of the Dead': '159831'}

with open('anilist_id.json') as file:
    data = json.load(file)
notfound = []
exception = []
# data = {"Zom 100: Bucket List of the Dead": "159831"}
for anime, id in data.items():
    try:
        with open(filter(anime) + '/index.html', 'r', encoding='iso-8859-1') as file:
            page = file.read()
            soup = BeautifulSoup(page, 'html.parser')
            soup.find('html')['id'] = id
            menu = soup.find('div', class_='more-menu')
            new_menu = soup.new_tag('div')
            new_menu['class'] = 'more-menu'
            new_conent = """
   <div class="close-this-a large-txt" onclick="hide_menu()">
      <div class="close-a-b-c">
         <i class="fa-solid fa-xmark"></i>
      </div>
   </div>
    <div class="main-container-in-menu">
       <div class="main-header-new-a">
         <div class="data-div-a-b-c">
            <div class="anime-main-txt-a-a large-txt">
               <span>Animerulz</span>
            </div>
            <div class="version-txt-a-a">
               <span>Version 1.2.0</span>
            </div>
         </div>
       </div>
       <div class="more-data-for-menu">
          <div class="more-data-in-menu">
             <div class="data-in-menu first-data-in-menu">
                <a href="../home" class="anchor-in-menu">
                   <span>HOME</span>
                </a>
             </div>
             <div class="data-in-menu">
          <a href="../watchlist" class="anchor-in-menu">
             <span>My Watch List</span>
             <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
             </svg>
          </a>
       </div>
             <div class="data-in-menu">
                <a href="../subbedanime" class="anchor-in-menu">
                   <span>SUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="../dubbedanime" class="anchor-in-menu">
                   <span>DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="../hindiddubbed" class="anchor-in-menu">
                   <span>HINDI DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="../telugudubbed" class="anchor-in-menu">
                   <span>TELUGU DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="../tamildubbed" class="anchor-in-menu">
                   <span>TAMIL DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="../malayalamdubbed" class="anchor-in-menu">
                   <span>MALAYALAM DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="../bangalidubbed" class="anchor-in-menu">
                   <span>BENGALI DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="more-in-data-in-menu">
                <div class="data-in-menu-2 first-item">
                   <a href="../trendinganime" class="anchor-in-menu">
                      <!-- <i class="fa-solid fa-fire" style="color: #d23232;"></i> -->
                      <i class="fa-solid fa-fire fa-beat fa-sm" style="color: #c03535;"></i>
                      <span>Trending Anime</span>
                   </a>
                </div>
                <div class="data-in-menu-2 second-item">
                   <a href="../topairing" class="anchor-in-menu">
                      <!-- <i class="fa-solid fa-arrow-trend-up" style="color: #209720;"></i> -->
                      <!-- <i class="fa-regular fa-arrow-trend-up fa-beat fa-sm" style="color: #1f9720;"></i> -->
                      <i class="fa-solid fa-arrow-trend-up fa-beat fa-sm" style="color: #1f9720;"></i>
                      <span>Top Airing</span>
                   </a>
                </div>
                <div class="data-in-menu-2 third-item">
                   <a href="../bestratedanime" class="anchor-in-menu">
                      <!-- <i class="fa-thin fa-user" style="color: #1c347d;"></i> -->
                      <i class="fa-solid fa-star fa-beat fa-sm" style="color: #C3AC7B;"></i>
                      <span>Best Rated Anime</span>
                   </a>
                </div>
                <div class="data-in-menu-2 fourth-item">
                   <a href="../mostviewedanime" class="anchor-in-menu">
                      <!-- <i class="fa-light fa-eye fa-beat fa-sm"></i> -->
                      <i class="fa-solid fa-eye fa-beat fa-sm"></i>
                      <span>Most Viewed Anime</span>
                   </a>
                </div>
                <div class="data-in-menu-2 fifth-item">
                   <a href="../bestmovies" class="anchor-in-menu">
                      <i class="fa-sharp fa-solid fa-video fa-sm fa-beat"></i>
                      <span>Best Movies</span>
                   </a>
                </div>
             </div>
             <div class="genres_div_">
          <div class="genres_header_div">
            <span class="more-anime-txt-genres">
              <b>Genres</b>
            </span>
          </div>
          <div class="container-genres_div">
            <div class="genres-div-data-container">
              <a href="../genres/action" class="genres_anchor_">Action</a><a href="../genres/drama" class="genres_anchor_">Drama</a><a href="../genres/psychological" class="genres_anchor_">Psychological</a><a href="../genres/romance" class="genres_anchor_">Romance</a><a href="../genres/comedy" class="genres_anchor_">Comedy</a><a href="../genres/sliceoflife" class="genres_anchor_">Slice of Life</a><a href="../genres/scifi" class="genres_anchor_">Sci-Fi</a><a href="../genres/supernatural" class="genres_anchor_">Supernatural</a><a href="../genres/ecchi" class="genres_anchor_">Ecchi</a><a href="../genres/mystery" class="genres_anchor_">Mystery</a><a href="../genres/sports" class="genres_anchor_">Sports</a><a href="../genres/music" class="genres_anchor_">Music</a><a href="../genres/mecha" class="genres_anchor_">Mecha</a><a href="../genres/adventure" class="genres_anchor_">Adventure</a><a href="../genres/thriller" class="genres_anchor_">Thriller</a><a href="../genres/horror" class="genres_anchor_">Horror</a><a href="../genres/fantasy" class="genres_anchor_">Fantasy</a><a href="../genres/mahoushoujo" class="genres_anchor_">Mahou Shoujo</a>                </div>
          </div>
        </div>
          </div>
       </div>
    </div>
    <div class="close-me-div" onclick="hide_menu()"></div>"""
            new_soup = BeautifulSoup(new_conent, 'html.parser')
            new_menu.clear()
            new_menu.append(new_soup)
            menu.replace_with(new_menu)
            script_to_remove = soup.find('script', src='../scripts/weekly-anime.js')
            if script_to_remove:
                script_to_remove.decompose()

        with open(filter(anime) + '/index.html', 'w', encoding='iso-8859-1') as file:
            file.write(html.unescape(str(soup)))

        with open(filter(anime) + '/Watch-Now/index.html', 'r', encoding='iso-8859-1') as file:
            page = file.read()
            soup = BeautifulSoup(page, 'html.parser')
            soup.find('html')['id'] = id

            # Find the old <div class="bottom"> in the second HTML file
            old_bottom_div = soup.find('div', class_='bottom')
            if old_bottom_div:
            # Create a new <footer> element
                new_footer = soup.new_tag('div')
                new_footer['class'] = 'bottom'
                new_footer['id'] = 'bottom'
                new_conent = '''
    <div class="bottom-heading">
        <div class="followheading">
            <img class="btm-heading" src="https://animerulz.in/images/Animerulzlogo.webp" alt="Animerulz"/>
        </div>
    </div>
    <footer class="bottom-data-container">
        <div class="container-search-anime-a-z">
            <div class="container__bottom_">
            <div class="header-bottom-data__">
                <div class="header-data__1">
                <span>A to Z list</span>
                </div>
                <div class="header-data__2">
                <span>Animes in order of Alphabets from a to z</span>
                </div>
            </div>
        </div>
        <div class="content-bottom__">
            <div class="data-items-bottom">
                <a href="https://animerulz.in/atozlist/" class="item-bottom-alphabet">All</a>
                <a href='https://animerulz.in/atozlist/a' class='item-bottom-alphabet'>A</a><a href='https://animerulz.in/atozlist/b' class='item-bottom-alphabet'>B</a><a href='https://animerulz.in/atozlist/c' class='item-bottom-alphabet'>C</a><a href='https://animerulz.in/atozlist/d' class='item-bottom-alphabet'>D</a><a href='https://animerulz.in/atozlist/e' class='item-bottom-alphabet'>E</a><a href='https://animerulz.in/atozlist/f' class='item-bottom-alphabet'>F</a><a href='https://animerulz.in/atozlist/g' class='item-bottom-alphabet'>G</a><a href='https://animerulz.in/atozlist/h' class='item-bottom-alphabet'>H</a><a href='https://animerulz.in/atozlist/i' class='item-bottom-alphabet'>I</a><a href='https://animerulz.in/atozlist/j' class='item-bottom-alphabet'>J</a><a href='https://animerulz.in/atozlist/k' class='item-bottom-alphabet'>K</a><a href='https://animerulz.in/atozlist/l' class='item-bottom-alphabet'>L</a><a href='https://animerulz.in/atozlist/m' class='item-bottom-alphabet'>M</a><a href='https://animerulz.in/atozlist/n' class='item-bottom-alphabet'>N</a><a href='https://animerulz.in/atozlist/o' class='item-bottom-alphabet'>O</a><a href='https://animerulz.in/atozlist/p' class='item-bottom-alphabet'>P</a><a href='https://animerulz.in/atozlist/q' class='item-bottom-alphabet'>Q</a><a href='https://animerulz.in/atozlist/r' class='item-bottom-alphabet'>R</a><a href='https://animerulz.in/atozlist/s' class='item-bottom-alphabet'>S</a><a href='https://animerulz.in/atozlist/t' class='item-bottom-alphabet'>T</a><a href='https://animerulz.in/atozlist/u' class='item-bottom-alphabet'>U</a><a href='https://animerulz.in/atozlist/v' class='item-bottom-alphabet'>V</a><a href='https://animerulz.in/atozlist/w' class='item-bottom-alphabet'>W</a><a href='https://animerulz.in/atozlist/x' class='item-bottom-alphabet'>X</a><a href='https://animerulz.in/atozlist/y' class='item-bottom-alphabet'>Y</a><a href='https://animerulz.in/atozlist/z' class='item-bottom-alphabet'>Z</a>
            </div>
        </div>
        </div>
        <div class="site-anchors">
            <div class="site-anchors-data_">
                
                <div class="anchors-column">
                <ul>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/home">HOME</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/watchlist/">WATCH LIST</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/">Search</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/sitemap.xml">SITE MAP</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/genres/">GENRES</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/atozlist/">A TO Z LIST</a></h3></li>
                </ul>
                </div>
                <div class="anchors-column">
                <ul>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/dubbedanime/">DUBBED ANIME</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/subbedanime/">SUBBED ANIME</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/hindidubbed/">HINDI DUBBED</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/telugudubbed/">TELUGU DUBBED</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/tamildubbed/">TAMIL DUBBED</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/malayalamdubbed/">MALAYALAM DUBBED</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/bengalidubbed/">BENGALI DUBBED</a></h3></li>
                </ul>
                </div>
                <div class="anchors-column">
                <ul>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/trendinganime/">TRENDING ANIME</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/movie/">MOVIES</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/upcomingseries">UPCOMING ANIME SERIES</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/topairing/">TOP AIRING</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/mostviewedanime/">MOST VIEWED</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/bestratedanime/">BEST RATED ANIMES</a></h3></li>
                    <li class="self-anchors"><h3><a href="https://animerulz.in/newlyaddedseries">NEWELY ADDED SERIES</a></h3></li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
    <div class="bottom-content-data___">
        <div class="share-follow-buttons">
            <div class="content-share-buttons">
                <div class="follow-txt_">Follow Us</div>
                <div class="follow-icons_">
                <a href="https://www.facebook.com/profile.php?id=100091874473492&mibextid=ZbWKwL" class="follow-icon_"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://instagram.com/animerulz_?igshid=MTIzZWQxMDU=" class="follow-icon_"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://t.me/animerulz_xyz" class="follow-icon_"><i class="fa-brands fa-telegram"></i></a>
                <a href="https://twitter.com/AnimeRulz_?s=09" class="follow-icon_"><i class="fa-brands fa-square-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright-container">
            <p>Animerulz does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</p>
            <span>© Animerulz.in All rights reserved.</span>
        </div>
    </div>
    '''
                new_soup = BeautifulSoup(new_conent, 'html.parser')
                new_footer.clear()
                new_footer.append(new_soup)  # You can replace this with your content

            # Replace the old <div class="bottom"> with the new <footer>
            old_bottom_div.replace_with(new_footer)
            menu = soup.find('div', class_='more-menu')
            new_menu = soup.new_tag('div')
            new_menu['class'] = 'more-menu'
            new_conent = """
   <div class="close-this-a large-txt" onclick="hide_menu()">
      <div class="close-a-b-c">
         <i class="fa-solid fa-xmark"></i>
      </div>
   </div>
    <div class="main-container-in-menu">
       <div class="main-header-new-a">
         <div class="data-div-a-b-c">
            <div class="anime-main-txt-a-a large-txt">
               <span>Animerulz</span>
            </div>
            <div class="version-txt-a-a">
               <span>Version 1.2.0</span>
            </div>
         </div>
       </div>
       <div class="more-data-for-menu">
          <div class="more-data-in-menu">
             <div class="data-in-menu first-data-in-menu">
                <a href="https://animerulz.in/home" class="anchor-in-menu">
                   <span>HOME</span>
                </a>
             </div>
             <div class="data-in-menu">
          <a href="https://animerulz.in/watchlist" class="anchor-in-menu">
             <span>My Watch List</span>
             <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
             </svg>
          </a>
       </div>
             <div class="data-in-menu">
                <a href="https://animerulz.in/subbedanime" class="anchor-in-menu">
                   <span>SUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="https://animerulz.in/dubbedanime" class="anchor-in-menu">
                   <span>DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="https://animerulz.in/hindiddubbed" class="anchor-in-menu">
                   <span>HINDI DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="https://animerulz.in/telugudubbed" class="anchor-in-menu">
                   <span>TELUGU DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="https://animerulz.in/tamildubbed" class="anchor-in-menu">
                   <span>TAMIL DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="https://animerulz.in/malayalamdubbed" class="anchor-in-menu">
                   <span>MALAYALAM DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="data-in-menu">
                <a href="https://animerulz.in/bangalidubbed" class="anchor-in-menu">
                   <span>BENGALI DUBBED</span>
                   <svg class="svg-icon-on-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow">
                      <path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path>
                   </svg>
                </a>
             </div>
             <div class="more-in-data-in-menu">
                <div class="data-in-menu-2 first-item">
                   <a href="https://animerulz.in/trendinganime" class="anchor-in-menu">
                      <!-- <i class="fa-solid fa-fire" style="color: #d23232;"></i> -->
                      <i class="fa-solid fa-fire fa-beat fa-sm" style="color: #c03535;"></i>
                      <span>Trending Anime</span>
                   </a>
                </div>
                <div class="data-in-menu-2 second-item">
                   <a href="https://animerulz.in/topairing" class="anchor-in-menu">
                      <!-- <i class="fa-solid fa-arrow-trend-up" style="color: #209720;"></i> -->
                      <!-- <i class="fa-regular fa-arrow-trend-up fa-beat fa-sm" style="color: #1f9720;"></i> -->
                      <i class="fa-solid fa-arrow-trend-up fa-beat fa-sm" style="color: #1f9720;"></i>
                      <span>Top Airing</span>
                   </a>
                </div>
                <div class="data-in-menu-2 third-item">
                   <a href="https://animerulz.in/bestratedanime" class="anchor-in-menu">
                      <!-- <i class="fa-thin fa-user" style="color: #1c347d;"></i> -->
                      <i class="fa-solid fa-star fa-beat fa-sm" style="color: #C3AC7B;"></i>
                      <span>Best Rated Anime</span>
                   </a>
                </div>
                <div class="data-in-menu-2 fourth-item">
                   <a href="https://animerulz.in/mostviewedanime" class="anchor-in-menu">
                      <!-- <i class="fa-light fa-eye fa-beat fa-sm"></i> -->
                      <i class="fa-solid fa-eye fa-beat fa-sm"></i>
                      <span>Most Viewed Anime</span>
                   </a>
                </div>
                <div class="data-in-menu-2 fifth-item">
                   <a href="https://animerulz.in/bestmovies" class="anchor-in-menu">
                      <i class="fa-sharp fa-solid fa-video fa-sm fa-beat"></i>
                      <span>Best Movies</span>
                   </a>
                </div>
             </div>
             <div class="genres_div_">
          <div class="genres_header_div">
            <span class="more-anime-txt-genres">
              <b>Genres</b>
            </span>
          </div>
          <div class="container-genres_div">
            <div class="genres-div-data-container">
              <a href="https://animerulz.in/genres/action" class="genres_anchor_">Action</a><a href="https://animerulz.in/genres/drama" class="genres_anchor_">Drama</a><a href="https://animerulz.in/genres/psychological" class="genres_anchor_">Psychological</a><a href="https://animerulz.in/genres/romance" class="genres_anchor_">Romance</a><a href="https://animerulz.in/genres/comedy" class="genres_anchor_">Comedy</a><a href="https://animerulz.in/genres/sliceoflife" class="genres_anchor_">Slice of Life</a><a href="https://animerulz.in/genres/scifi" class="genres_anchor_">Sci-Fi</a><a href="https://animerulz.in/genres/supernatural" class="genres_anchor_">Supernatural</a><a href="https://animerulz.in/genres/ecchi" class="genres_anchor_">Ecchi</a><a href="https://animerulz.in/genres/mystery" class="genres_anchor_">Mystery</a><a href="https://animerulz.in/genres/sports" class="genres_anchor_">Sports</a><a href="https://animerulz.in/genres/music" class="genres_anchor_">Music</a><a href="https://animerulz.in/genres/mecha" class="genres_anchor_">Mecha</a><a href="https://animerulz.in/genres/adventure" class="genres_anchor_">Adventure</a><a href="https://animerulz.in/genres/thriller" class="genres_anchor_">Thriller</a><a href="https://animerulz.in/genres/horror" class="genres_anchor_">Horror</a><a href="https://animerulz.in/genres/fantasy" class="genres_anchor_">Fantasy</a><a href="https://animerulz.in/genres/mahoushoujo" class="genres_anchor_">Mahou Shoujo</a>                </div>
          </div>
        </div>
          </div>
       </div>
    </div>
    <div class="close-me-div" onclick="hide_menu()"></div>"""
            new_soup = BeautifulSoup(new_conent, 'html.parser')
            new_menu.clear()
            new_menu.append(new_soup)
            menu.replace_with(new_menu)
            script_to_remove = soup.find('script', src='https://animerulz.in/scripts/weekly-anime.js')
            if script_to_remove:
                script_to_remove.decompose()
        with open(filter(anime) + '/Watch-Now/index.html', 'w', encoding='iso-8859-1') as file:
            file.write(soup.prettify())

    except FileNotFoundError:
        print(anime, '- not found')
        notfound.append(anime)
    except Exception as e:
        print(anime, e)
        exception.append(anime)

print("Processing completed.")
print(notfound)
print(exception)