1. The code will log and print 3 in the console, because the variable that is being logged is i, and it refers to the length of the price array. Since that array is [100,200,300], the length is 3, therefore, the log info is 3 after the for loop has been complete.
2. The code will log and print 150 in the console, because the variable that is being logged is discountedPrice, and that variable came from the last member of the prices array multiply by 0.5. 
3. The code will log and print 150 in the console, because the variable that is being print is finalprice. That variable is calculated by variable the rounding number of discountedPrice multiply by 100, and then divided by 100. Since 150*100=15000, and it is a number without decimal. The finalprice is simply 150.
4. The code will return [50,100,150]. Because in the for loop, everytime it push and add the finalprice as the new member of the discounted array. This means it will push 100*0.5, 200*0.5, and 300*0.5 into the discounted array.
5. The code will give error. This is because the let initial variable i that is only accessable in the scope of the for loop. Therefore, it is not accessable in the console.log that is outside the for loop.
6. The code will give error. Same reason as question 5. That the variable discountedPrice is initial as let and it is only accessable in the for loop. Not outside of the loop.
7. The code will log and print 150. The console log and let variable is in the same scope, therefore, it is accessable and printing the value in the console
8.  The code will return [50,100,150]. Because in the for loop, everytime it push and add the finalprice as the new member of the discounted array. This means it will push 100*0.5, 200*0.5, and 300*0.5 into the discounted array. Since the return line is in the same scope as the discounted variable, the array stored in discounted will be returned.
9.  The code will give error. Since the variable discountedPrice, discounted, and length are initialized as constant variable, they can not be reassigned. However, in the for loop, the variable discountedPrice and discounted are being reassigned, therefore, the code will return error.
10. The code will log and print 3, since the length is initialized to the length of the prices variable as a constant variable. Since the length of the array stored in the prices variable is 3, the length variable will be printing 3. 
11. The code will return [50,100,150]. Since the variable discounted is an constant variable, it can not be reassigned with another varaible. However, the array itself is able to push and pop and modify. Therefore, it will return an array of all members of prices multiply by 0.5.
12. 
 (a). student["name"]
 (b). student["Grad Year"]
 (c). student.greeting()
 (d). student["Favorite Teacher"]["name"]
 (e). student["courseLoad"][0]
13. 
 (a). '32', because integers 2 map to the string representation '2', and combine is '32'
 (b). 1, because the string '3' is map to the integer 3, and 3 - 2 = 1
 (c). 3, because null coerces to 0, and 3 + 0 = 3
 (d). '3', because original string plus empty string is still equals to the original string. 
 (e). 4. because true maps to 1 and 3 + 1 = 4
 (f). 0, because false maps to 0 and empty string is 0, so 0 + 0 = 0
 (g). '3undefine' because undefine has been maps to its string representation 'undefine', and '3' concatenate with 'undefine' is '3undefine'
 (h). NaN, because a string with letters can not be converted into numbers, therefore the subtraction is invalid operation which returns Not-A-Number
14. 
(a). true, since the string '2' maps to integer 2, and 2 is greater than 1
(b). false, because (alphabetically) 1 is less than 2.
(c). true, because the string '2' maps to integer 2, and 2 = 2 they are equaled to each others
(d). false, because === is matching based on type and value, integer and string are not same type
(e). false, because true maps to 1, and 1 is not equal to 2, therefore it is false
(f). true, because any integer greater than 0 is maps to true in boolean value, and both sides are the same data type, therefore true === true
15.  The different between == and === is that == compares the value despite their data type, but === not only compares the value stored but also both sides' data types
17. [2,3,6] will be the result. First, the code calls the modifyArray function and use [1,2,3] and the function doSomething as input. Inside modifyArray function, it creates a newArr array that stores the values to return. Then, the for loop iterate through the array originally passed into the function. In this case, it's [1,2,3]. Inside the for loop, it calls doSomething function with each value as input and multiply that value by 2, and then it stores that result into newArr. After the for loop, the function returns newArr, which stores [2,4,6].
19. 
1
4
3
2



