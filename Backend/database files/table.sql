use salt_water_db;

create table States(
state_id varchar(2),
state_name varchar(40),
primary key(state_id)
);


create table fish_regulations(
  fish_species varchar(50),
  size_limit double(50,2),
  Daily_possession_Limit int(255),
  open_season varchar(1000),
  state_id varchar(2),
  Foreign key(state_id) references states(state_id)
  
  
);
