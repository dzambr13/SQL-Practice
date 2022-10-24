//data types:
//int
//decimal (s,d) (decimal ex: 6,2 can coontain a max number like this 1234.56 cause the decimal has 6 characters with 2 decimal places)
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

//primary keys, cannot contain null or empty values, can only be 1 primary key in every table
CREATE TABLE bond(
    id INT PRIMARY KEY,
    title VARCHAR(50),
    released INT,
    actor VARCHAR(30),
    director VARCHAR(30),
    box_office DECIMAL(5,1)
);








//deleting a table
DROP TABLE bond 