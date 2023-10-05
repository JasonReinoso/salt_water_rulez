import mysql.connector

from NY_webscrape import nj_fishinformation
from NY_webscrape import NY_fish_information
from NY_webscrape import DE_fisinginfromation
db = mysql.connector.connect(
    host="database-1.caocet4m0xd5.us-east-2.rds.amazonaws.com",
    user="root",
    passwd ="studentplanner321",
    database="salt_water_rulez"
)

mycursor = db.cursor()



## delete table from fish
delete_fish_table = "DROP TABLE fish_regulations"
mycursor.execute(delete_fish_table)


##create fish_regulations
create_fish_table = ("create table fish_regulations( fish_species varchar(255), size_limit varchar(255), Daily_possession_Limit varchar(255), open_season varchar(1000), state_id varchar(2), Foreign key(state_id) references States(state_id))")
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


for x in range(len(DE_fisinginfromation)):
    if len(DE_fisinginfromation[x]) < 5:
        mycursor.execute(add_fish,(DE_fisinginfromation[x][1],"prohibited","prohibited","prohibited","de"))
    else:
        mycursor.execute(add_fish,(DE_fisinginfromation[x][1],DE_fisinginfromation[x][3],DE_fisinginfromation[x][4],DE_fisinginfromation[x][2],"de"))


db.commit()
