import mysql.connector

from NY_webscrape import nj_fishinformation
from NY_webscrape import NY_fish_information

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd ="studentplanner321",
    database="salt_water_db"
)

mycursor = db.cursor()



## delete table from fish
delete_fish_table = "DROP TABLE fish_regulations"
mycursor.execute(delete_fish_table)


##create fish_regulations
create_fish_table = ("create table fish_regulations( fish_species varchar(255), size_limit varchar(255), Daily_possession_Limit varchar(255), open_season varchar(1000), state_id varchar(2), Foreign key(state_id) references states(state_id))")
mycursor.execute(create_fish_table)

### inserts fish info from webscrape.py
add_fish = ("INSERT INTO fish_regulations "
               "(fish_species, size_limit, Daily_possession_Limit, open_season, state_id) "
               "VALUES (%s, %s, %s, %s, %s)")


del NY_fish_information[0]


for i in range(len(NY_fish_information)):
    mycursor.execute(add_fish,(NY_fish_information[i][0],NY_fish_information[i][1],NY_fish_information[i][2],NY_fish_information[i][3],"ny"))



for x in range(len(nj_fishinformation)):
    mycursor.execute(add_fish,(nj_fishinformation[x][0],nj_fishinformation[x][2],nj_fishinformation[x][3],nj_fishinformation[x][1],"nj"))


db.commit()
