//examples on the different types of data in javascript
//string
var string = "hello";
console.log(string);

//number
var numb = 1;
console.log(numb);

//boolean
var bool=true;
console.log(bool);

//undefined
var object;
console.log(object);

//reassigning the same undefined object to null
//null 
object=null;
console.log(object);

//examples on array
//an array holding same data type
var arr1 = [1,2,3,0];
console.log(arr1);

//an array holding different data types
var ar2 = ["name",1,true];
console.log(ar2);

//an array storing list of arrays 
var ar3 = [[1,2],[3,4]]
console.log(ar3);

//access the first element of the array
console.log(ar3[1]);

//an array to add any element
ar3.push("hello");
console.log(ar3);

ar3.pop([3,4]);
console.log(ar3)