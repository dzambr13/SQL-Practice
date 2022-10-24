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
SELECT 
* 
FROM
player 
WHERE weight>190 AND height>190

SELECT 
* 
FROM
player 
WHERE weight>190 AND height>190

//select for non integers 
//must follow up with and equals and SINGLE QUOTES ex: ='Dave Zambrano'
//"=" and "like" are p much the same 
SELECT
* 
FROM
player 
WHERE player_name='Dave Zambrano'

SELECT 
* 
FROM
player 
WHERE player_name LIKE 'Dave Zambrano'

//return everyone who has the name Dave 
//just add the % after the name in the string to return the first name Dave
//just add the % before the name in the string to return the first name Dave
//just add the % before and after the name in the string to return any name that has Dave in it whether Dave would be their first or last part of their name
SELECT
* 
FROM
player 
WHERE player_name LIKE 'Dave%' //first name Dave

SELECT
* 
FROM
player 
WHERE player_name LIKE '%Dave' //last name Dave 

SELECT
* 
FROM
player 
WHERE player_name LIKE '%Dave%' //returns any player name that contains Dave

//return a player_name that starts with "D" and ends with e
SELECT 
* 
FROM
player 
WHERE player_name LIKE 'D%e'

//use an underscore _ to represent single characters
//starts with T, has a character between T and m, then has anything else that follows
SELECT 
* 
FROM
player 
WHERE player_name LIKE 'T_m%' //returns names like: Tim, Tamas, Tamir

//"in" conditions 
//only used for EXACT matches so you can't use % or _ 
SELECT 
* 
FROM
player 
WHERE player_name in ('Cristiano Ronaldo', 'Lionel Messi')

//between operator
//this returns every player between the weight of 190 and 200
SELECT
* 
FROM
player 
WHERE weight BETWEEN 190 AND 200

//returning null values
SELECT
* 
FROM
match 
WHERE player_1 IS NULL

SELECT 
* 
FROM
match 
WHERE player_1 IS NOT NULL 

//sort results 
//default sorting in ascending order
//use "desc" for descending order
SELECT
* 
FROM
player 
ORDER BY weight 

SELECT 
* 
FROM
player 
ORDER BY weight DESC

//joining data from other tables 
//this command joins the player name and the player id
SELECT
player_attributes.player_api_id,
player_attributes.player_name,
player_attributes.date,
player_attributes.overall_rating 
FROM
player_attributes 
INNER JOIN player ON player_attributes.player_api_id=player.player_api_id

//^^ clean up on the top
SELECT
a.player_api_id,
b.player_api_id,
a.date,
a.overall_rating 
FROM
player_attributes a 
INNER JOIN player b ON a.player_api_id=b.player_api_id

//grouping by id, player name, and their ratings
//sorted descending order
SELECT
a.player_api_id, 
b.player_name, 
sum(a.overall_rating) as rating 
FROM 
player_attributes a 
INNER JOIN player b ON a.player_api_id=b.player_api_id 
GROUP BY a.player_api_id, 
b.player.name 
ORDER BY rating DESC 

//sorting by avg and pick rate 
SELECT
a.player_api_id, 
b.player_name, 
avg(a.overall_rating) as rating, 
count(a.overall_rating) as pickrate 
FROM
player_attributes a 
INNER JOIN player b ON a.player_api_id=b.player_api_id, 
GROUP BY a.player_api_id,
b.player_name
ORDER BY rating DESC 

//having clause 
SELECT
a.player_api_id, 
b.player_name, 
avg(a.overall_rating) as rating, 
count(a.overall_rating) as pickrate 
FROM
player_attributes a 
INNER JOIN player b ON a.player_api_id=b.player_player_api_id, 
GROUP BY a.player_api_id,
b.player_name
HAVING rating>85
ORDER BY rating DESC 