create database salt_water_rulez;
use salt_water_rulez;

create table States(
state_id varchar(2),
state_name varchar(40),
primary key(state_id)
);

create table Log(
Id int auto_increment,
picture varchar(255),
released boolean,
TypeofFish varchar(100),
weight double,
length double,
tools varchar (300),
FishMethod varchar(100),
fecha datetime,
username varchar(100),
weather varchar(100),
primary key(Id)
);

insert into States (state_id,state_name)
values ("de","delaware");



create table fish_regulations(
  fish_species varchar(255),
  size_limit varchar(255),
  Daily_possession_Limit int(255),
  open_season varchar(1000),
  state_id varchar(2),
  Foreign key(state_id) references States(state_id)
  );
