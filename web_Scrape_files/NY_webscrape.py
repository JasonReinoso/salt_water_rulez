from bs4 import BeautifulSoup
import requests
import re



#####NY FISH_SCRAPE##############################################################################
NewYork_page_scrape = requests.get("https://www.dec.ny.gov/outdoor/7894.html#Fishing")
NY_soup = BeautifulSoup(NewYork_page_scrape.text,'html.parser')

NY_fishinglimit_table = NY_soup.find('table', title ="Marine Recreational Fishing Limits")

NY_fish_information =[]
for fish in NY_fishinglimit_table.find_all('tbody'):
    rows = fish.find_all('tr')
    
    for row in rows:
        fish_name = row.find_all('td')
        fish_info = [y.text.replace('\r','').replace('\n','').replace('*2023 UPDATED REGULATION*','') for y in fish_name]
        NY_fish_information.append(fish_info)


#### NJ FISH_SCRAPE#########################################################
headers={
    'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
}
NewJersey_page_scrape = requests.get("http://www.jinglesbaitandtackle.com/nj-marine-fishing/", headers=headers)
NJ_soup = BeautifulSoup(NewJersey_page_scrape.text,'html.parser')

NJ_fishingLmit_table = NJ_soup.find('table',id='tablepress-1')

nj_fishinformation =[]
for nj_tbody in NJ_fishingLmit_table.find_all('tbody'):
    rows = nj_tbody.find_all('tr')

    for row in rows:
        nj_fish = row.find_all('td')
        nj_fish_info = [x.text for x in nj_fish]
        nj_fishinformation.append(nj_fish_info)


###############DELWARE WEBSCRAPE##############
#https://www.eregulations.com/delaware/fishing/tidal-seasons-size-creel-limits
Delware_page_scrape = requests.get("https://www.eregulations.com/delaware/fishing/tidal-seasons-size-creel-limits")
DE_soup = BeautifulSoup(Delware_page_scrape.text,'html.parser')
DE_fishinglimit_Table = DE_soup.find('table',id='table007')

not_processed_DE_fisinginfromation =[]

for DE_tbody in DE_fishinglimit_Table.find_all('tbody'):
    rows = DE_tbody.find_all('tr')
    for row in rows:
        DE_fish = row.find_all('td')
        de_fish_info = [w.text for w in DE_fish]
        not_processed_DE_fisinginfromation.append(de_fish_info)

del not_processed_DE_fisinginfromation[0]
del not_processed_DE_fisinginfromation[0]


DE_fisinginfromation =[]

for i in range(len(not_processed_DE_fisinginfromation)):
    if not_processed_DE_fisinginfromation[i][0] == 'Species':
        break
    DE_fisinginfromation.append(not_processed_DE_fisinginfromation[i])

