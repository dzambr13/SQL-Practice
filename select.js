//returns ALL data from a table 
SELECT 
* 
FROM 
player 

//if you only want to select specific fields
//with this commend, you return the the players names and their respective birthdays
SELECT 
player_name, 
birthday 
FROM 
player 

//changing the name with the "as" command
SELECT
player_name as 'Full name', 
birthday 
FROM
player

//return specific rows in a table
//this returns ALL players that weight 190, greater than, or greater than or = to 
SELECT
* 
FROM
player 
WHERE weight=190

SELECT 
* 
FROM
player 
WHERE weight>190

SELECT 
* 
FROM
player 
WHERE weight>=190

//"and" and "or" statements
//"and" where both conditions have to be met
//"or" where only one of the conditions have to be met
select 
* 
from 
player 
where weight>190 AND height>190

select 
* 
from 
player 
where weight>190 AND height>190

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

//use an underscore _ to represent single characters
//starts with T, has a character between T and m, then has anything else that follows
select * from player where player_name like 'T_m%' //returns names like: Tim, Tamas, Tamir

//"in" conditions 
//only used for EXACT matches 
select * from player where player_name in ('Cristiano Ronaldo', 'Lionel Messi')

//between operator
//this returns every player between the weight of 190 and 200
select * from player where weight between 190 and 200

//returning null values
select * from match where player_1 is null 
select * from match where player_1 is not null 

//sort results 
//default sorting in ascending order
//use "desc" for descending order
select * from player order by weight 
select * from player order by weight desc

//joining data from other tables 
//this command joins the player name and the player id
//pushing
select player_attributes.player_api_id,player_attributes.player_name,player_attributes.date,player_attributes.overall_rating from player_attributes inner join player on player_attributes.player_api_id=player.player_api_id

//^^ clean up on the top
select a.player_api_id,b.player_api_id,a.date,a.overall_rating from player_attributes a inner join player b on a.player_api_id=b.player_api_id

//grouping by id, player name, and their ratings
//sorted descending order
select a.player_api_id, b.player_name, sum(a.overall_rating) as rating from player_attributes a inner join player b on a.player_api_id=b.player_api_id group by a.player_api_id, b.player.name order by rating desc 

//sorting by avg and pick rate 
select a.player_api_id, b.player_name, avg(a.overall_rating) as rating, count(a.overall_rating) as pickrate from player_attributes a inner join player b on a.player_api_id=b.player_api_id, order by rating desc 

//having clause 
select 
a.player_api_id, 
b.player_name, 
avg(a.overall_rating) as rating, 
count(a.overall_rating) as pickrate 
from 
player_attributes a 
inner join player b on a.player_api_id=b.player_player_api_id, 
group by a.player_api_id,
b.player_name
having rating>85
order by rating desc 