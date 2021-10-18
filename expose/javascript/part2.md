## 1
Line 12 will print out 3. This is because variables declared with var have no block scope so you can see i after the for loop.
## 2
Line 13 will print out 150. This is for the same reason as question #1. discountedPrice can be seen after the for loop.
## 3
Line 14 will print out 150. This is just like line 13 because the calculations result in integers and so the final price is the same as discountedPrice in this instance.
## 4
This function will return a list containing the discounted prices like so: [50,100,150]. This is because we looped through the original prices list and applied a discount to make it half the price. Then we returned the new discounted prices. 
## 5
We get an error this time. This is because i is now declared using the 'let' keyword; this means it has block scope and thus attempting to use it outside of the block it was declared throws us an error that it is not defined.
## 6
We get an error this time. This is because discountedPrice is now declared using the 'let' keyword; this means it has block scope and thus attempting to use it outside of the block it was declared throws us an error that it is not defined.
## 7
Line 14 will print out 150. This is because this line is in the same block as the declaration of the finalPrice variable so no error is thrown. 
## 8
Just like question 4, this function will also return a list containing the discounted prices like so: [50,100,150]. This is because we looped through the original prices list and applied a discount to make it half the price. Then we returned the new discounted prices. 
## 9
The program will give an error that i is not defined. This is because it was declard using the 'let' keyword and the program is attempting to print it outside of that block. 
## 10
Line 12 will print 3. This is because it prints out the variable length that is constant and was declard in the same block. There is no error in this method. 
## 11
Just like question 4 and 8, this function will also return a list containing the discounted prices like so: [50,100,150]. This is because we looped through the original prices list and applied a discount to make it half the price. Each time we made a new const discountedPrice variable in the loop so that we did not have to change that variable. Then we returned the new discounted prices. 
## 12
### A
student.name;
### B
student['Grad Year'];
### C
student.greeting();
### D
student['Favorite Teacher'].name;
### E
student.courseLoad[0];

## 13
### A
Ans: '32'. '3' is a string and + is a concatenation operator so it will concatenate 2 to it and make it a longer string.
### B
Ans: 1.  This time '3' gets converted to a number because the - operator is not overloaded and so all values get converted to numbers. Now the operation is simply 3-2 which is 1. 
### C
Ans: 3. This is because null translates to zero in arithmetic so 3 + 0 is still going to be 3. 
### D
Ans: '3null'. '3' is a string and + is a concatenation operator so it will concatenate null to it and make it a longer string. 
### E
Ans: 4. This is because during arithmetic true gets converted to the number 1 and so we perform 1 + 3 which is 4. 
### F
Ans: 0. This is because during arithmetic false gets converted to the number 0 and so does null. 0 + 0 gives us 0. 
### G
Ans: '3undefined'.'3' is a string and + is a concatenation operator so it will concatenate undefined to it and make it a longer string.
### H
Ans: NaN. '3' is a string and the - operator is not overloaded so it gets treated as a number. However, undefined is NaN as a number so we output NaN since 3 - NaN is still NaN. 

## 14
### A
Ans: true. The string '2' gets converted to a number and 2 is greater than 1. 
### B
Ans: false. Only when comparing values of different types does Javascript convert them to numbers. Since these are both strings, a string comparison is used and unicode order dictates that 2 is greater than 1 when doing string comparision. 
### C
Ans: true. A non strict comparison operator is used this time. This means Javascript converts the string '2' to a number and 2 is equal to 2. 
### D
Ans: false. A strict comparison operator is used this time. A string is not equal to a number. 
### E
Ans: false. For boolean values true becomes 1, and 1 is not equal to 2. 
### F
Ans: true. Boolean(2)  gives us true and true is equal true so we output true. 
## 15
The == operator is a non strict equality comparison. This means that it performs type conversion when comparing different variables. For example, a string '2' would get converted to a number 2 when doing '2' == 2 and it would output true. 
On the other hand, the === operator does a strict equality comparison. This means that type conversion does not exist for comparisons and the previous example would output false. 
## 17
The result will be [2,4,6]. This is because when we call modifyArray(...) we pass the function doSomething as a parameter. Then when we push to the new array we call the function and it doubles the values from the old array. Then we return this new array with values that have been doubled from the original. 
## 19
The code outputs:
1
4
3
2