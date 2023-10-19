import re
import json
# Open the HTML file for read
# 
# ing and writing
def filter(name: str):
    return re.sub('[^0-9a-zA-z]', '', name).lower()

with open('anilist_id.json') as file:
    data = json.load(file)
# data = {"Zom 100: Bucket List of the Dead": "159831"}

for anime in data.keys():
    try:
        with open(filter(anime) + '/index.html', 'r', encoding='iso-8859-1') as file:
            html_content = file.read()

        # Replace all occurrences of � with &nbsp;
        html_content = html_content.replace('�', '&nbsp;')

        # Open the same file for writing (this will overwrite the original file)
        with open(filter(anime) + '/index.html', 'w', encoding='utf-8') as file:
            file.write(html_content)
    except:
        continue

print("� replaced with &nbsp; in the HTML file.")
