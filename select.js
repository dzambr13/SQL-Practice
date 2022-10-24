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

//"and" and "or" statements
//"and" where both conditions have to be met
//"or" where only one of the conditions have to be met
select * from player where weight>190 and height>190
select * from player where weight>190 or height>190

//select for non integers 
//must follow up with and equals and SINGLE QUOTES ex: ='Dave Zambrano'
//"=" and "like" are p much the same 
select * from player where player_name='Dave Zambrano'
select * from player where player_name like 'Dave Zambrano'

//return everyone who has the name Dave 
//just add the % after the name in the string to return the first name Dave
//just add the % before the name in the string to return the first name Dave
//just add the % before and after the name in the string to return any name that has Dave in it whether Dave would be their first or last part of their name
select * from player where player_name like 'Dave%' //first name Dave
select * from player where player_name like '%Dave' //last name Dave 
select * from player where player_name like '%Dave%' //returns any player name that contains Dave

//return a player_name that starts with "D" and ends with e
select * from player where player_name like 'D%e'