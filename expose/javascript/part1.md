## 1
Line 9 will print out 'values added: 20' (what is in between the quotes).
## 2
Line 13 will print 'final result: 20'. One would expect an error but there is none because variables declared with var have no block scope. 
## 3
Line 9 will print out 'values added: 20'.
## 4
Line 13 will give us an error because variables declared with let have block scope. Therefore, accessing the result variable outside of where it was declared is illegal. 
## 5
Line 9 returns an error because the program attempts to assign a new value to a constant variable.
## 6
Line 13 would also return an error; although one does not see it due to the previous error. This is because variables declared with the const 
keyword have block scope just like the let variables and so it would be
an illegal move to access it outside of where it was declared. 