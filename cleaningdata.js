//learning to correct shit format or incorrect data
//the format would be shit if it was copied from one place to another and it didn't format right
//LTRIM(string), removes leading spaces (Left TRIM)
//RTRIM(string), removes trailing spaces (Right TRIM)
//TRIM(string), removes both leading and trailing

//refer to video since you cant actually see the table
SELECT 
Count(*) AS count,
TRIM(Segment) as segtrim 
FROM 
orders
GROUP BY 
segtrim

//LEFT and RIGHT
//returns a specified number of characters from the left of the string
//so this returns another column on the orders table that says US or CA depending on what it starts with from the left side since we used LEFT
SELECT 
Count(*) AS count,
RTRIM(Segment) as segtrim,
LEFT(order_id, 2) as order_cat
FROM 
orders
GROUP BY 
segtrim,
order_cat

//LPAD and RPAD
//these add 0's on the LEFT side
SELECT 
zip_code, 
LPAD( zip_code, 5, '0')
FROM 
orders

//SUBSTRING, returns a specigic number of characters from a particular position of a string ex: if i have US-1998-0313, i can use substring to just get the 1998 part 
SELECT 
SUBSTRING(order, 4,4) AS order_num //4 starting position, then 4 length
FROM 
orders 

//LENGTH 
//will show how long (in characters) something is
SELECT 
customer_name,
LENGTH(customer_name)
FROM
orders
