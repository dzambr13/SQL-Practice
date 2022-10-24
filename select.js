//returns ALL data from a table 
select * from player 

//if you only want to select specific fields
//with this commend, you return the the players names and their respective birthdays
select player_name, birthday from player 

//changing the name with the "as" command
select player_name as name, birthday from player

//return specific rows in a table
//this returns ALL players that weight 190, greater than, or greater than or = to 
select * from player where weight=190
select * from player where weight>190
select * from player where weight>=190