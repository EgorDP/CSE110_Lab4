## 1
The bug was that the "sum" was actually concatenating two strings together. 
## 2
One way to fix it is to convert the strings to integers first by passing them to the parseInt() method. Then normal arithmetic would be performed with the two values. 