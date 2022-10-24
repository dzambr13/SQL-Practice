//data types:
//int
//decimal (s,d) (decimal ex: 6,2)
//varchar(30) can contain letter, numbers, and special character, or all 3, the number in the parenthesis indicates the max amount of characters that the VARCHAR can have
//date --formatted as YYYY-MM-DD
//timestamp --formatted as YYYY-MM-DD HH:MM:SS

//creating a table
CREATE TABLE bond(

    id INT,
    title VARCHAR(50),
    released INT,
    actor VARCHAR(30),
    director VARCHAR(30),
    box_office DECIMAL(5,1)
);