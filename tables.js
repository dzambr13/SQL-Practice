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

//constraints:
//primary keys, cannot contain NULL or empty values, can only be 1 primary key in every table
//unique keys, can have as many as you want, can have NULL
//not null, does not allow NULL (empty) values
//default, replaces null values with specific defaults
//these constraints help keep data clean
CREATE TABLE bond(
    id INT PRIMARY KEY,
    title VARCHAR(50),
    released INT NOT NULL,
    actor VARCHAR(30),
    director VARCHAR(30),
    box_office DECIMAL(5,1) DEFAULT '0.0'
);

//if the table is created and you wanna put more data in, use INSERT INTO 
INSERT INTO bond VALUES(1, 'DR.NO', 1962, 'SEAN CONNERY','Terence Young', 59.5)

//querying data
SELECT 
*
FROM 
bond

//if we want to insert data but don't have everything from the table, you can specify what you want to insert 
//when you do this, the values that weren't put in are NULL except default, which can't be NULL so it's 0.0 as we specified 
INSERT INTO bond(id, title, released) VALUES
    (2, 'FROM RUSSIA WITH LOVE', 1963);

//modifying a table so that you can: add column, delete column, or change column
ALTER TABLE bond ADD studio VARCHAR(30)




//if you wanna see the values of the table
DESCRIBE bond

//deleting a table
DROP TABLE bond 