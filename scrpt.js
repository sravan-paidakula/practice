// function add(a,b) {
//  console.log(a+b) ;  
// }
// add(12,3)
// add(2,3)



// var x = 10

// function a() {
//     var x = 20
//     function b() {
//         var x = 30
//         console.log(x, 'b') //30
//     }
//     b()
//     console.log(x, 'a') //20
// }
// console.log(x, 'global') //10
// a()
// fruits = ['apple', 'banana', 'orange', 'kiwi']

// fruits.pop();
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.push('strawberry'))
// console.log(fruits.push('melon'))
// console.log(fruits)

// arr=[1,2,3,4,5]
// console.log(arr,"before pop");
// var result=arr.pop()
// console.log(arr,"after pop");
// console.log(result);

// arr=[1,2,3,4,5]
// console.log(arr);  
// // before pop;
// arr.pop()
//  var result=console.log(arr);
// // after pop
// var result=arr.pop()
// console.log(result);
// console.log(arr);
// arr.pop()
// console.log(arr)
// arr.pop()
// console.log(arr);
// arr.pop()
// console.log(arr);

// let fruits=["apple","banana","kiwi","orange","grapes","cheery"]
// fruits.pop();
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.push("strawberry"))
// // fruits.push();
// // console.log(fruits);
// console.log(fruits.push("water melon"))
// console.log(fruits);

// fruits.unshift("find");
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);

// let result=fruits.indexOf("orange");
// console.log(result);

// let result=fruits.indexOf("banana");
// console.log(result);
// let result=fruits.slice(1,-2);
// console.log(result);
// // 12/3/2022
// let arr=[1,2,3,4,5,6,3]
// console.log(arr.lastIndexOf(3));

// find indexof
// let arr=[1,2,3,4,5,6,3]
// function abc(elements){
//     if (elements>5){
//         return true;
//     }
//     return false;
// }
// if the above function statisfies it returns the index of first element of array.
// let result=arr.findIndex(abc)
// console.log(result);

// // concat 
// let arr1=["ant","bat","cat","dog"]
// let arr2=["e","f","g","1"]
// let arr3=arr1.concat(arr2)
// console.log(arr3);

// string
// let arr=[1,2,"1a",3]
// let result=arr.toString()
// console.log(result);

// Join
// let arr=["cat","dog","rat","sat"]
// let result=arr.join('-')
// console.log(result);

// Some
// let arr=[1,2,3,4,5,6,7,8,,9,10]
// function abc(elements){
//   return  (elements%11=== 0)
       
// }
// let result=arr.some(abc)
// console.log(result);

// Every
// let arr=[8,2,6,4]
//  let result=arr.every(item=>item%2===0)(arrow function)

// function even(element){
//     return(element>6)
    // 2<4,atleast one condition is true so it returns true for some
    // 2>6 here 2 and 4 are not greater than 6 as in Every method 
    // all the elements in array should staisty the condition
// }
// let result=arr.every(even)
// console.log(result);

// To find the lenght of the string
// let str="every"
// console.log(str.length);

// Filter
// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter(element=>element%2!==0));
// for odd
// // Map
// let arr=[1,2,3,4,5]
// let newArr=[]
// for(let i=0;i<5;i++){
//     newArr.push(arr[i]*2)
// }
// console.log(newArr);
// let arr=[1,2,3,4,5]
// function double(item){
//     return item*2;
// }
// let result=arr.map(double)
// console.log(result);
// adds each element with 5
// let arr=[1,2,3,4,5,6]
// let result=arr.map(element=>element+5)
// console.log(result);
// For each
// let arr=[1,2,3,4,5,6]
// arr.forEach(item=>{
//     console.log(item*2);     
// })
// (or)
// let result=arr.forEach(item=>{
//   console.log(item+3)
// })
// console.log(result)
// let result=arr.forEach(abc);
// console.log(result);
// using arrow function
// arr.forEach(item=>{
// console.log(item*2)
// })

// practice array methods 
// 1. push method
// it adds a new element to the end of the array and returns the lenght of the array
//  a.
// let arr=[1,2,3,4,5]
// arr.push(6)
// console.log(arr);
// console.log(arr.length);
// b.
//  let arr=[1,2,3,4,5]
//  arr.push(6,7,8,[9,10])// index:8
//  console.log(arr);
//  console.log(arr.length);  // output :9
// c.
// let arr=[1,2,3,4,5]
//  arr.push(6,7,8,9,10)
//  console.log(arr);
//  console.log(arr.length);
// let result=arr.push()
// console.log(result);

//2. Pop method
// it delete or removes the last element from the array and it returns the poped element
// a.
// let num=[1,2,3,4,5,6,7,8,9]
// num.pop()
// console.log(num);
// console.log(num.length);

// // b.
// let dress=["anar","pant","shirt","sweter" ]
// dress.pop()
// console.log(dress);// output:["anar","pant","shirt"]
// console.log(dress.pop());// output:"shirt"
// console.log(dress);// output:["anar","pant"]
//                      same example for push 
// dress.push("panti") 
// console.log(dress);
// console.log(dress.push("lingere"));
// console.log(dress);
//                      same example for shift
// dress.shift();
// console.log(dress);
// console.log(dress.shift());
// console.log(dress);
//                       same example for slice
// let result=dress.slice(1,4)
// console.log(result);


// 3. shift 
// removes the element from front of the array and returns the removed element
// let num=[1,2,3,4,5,6]
// num.shift();
// console.log(num);
// console.log(num.shift());
// console.log(num);

// 4. unshift
// adds the element from front of the array 
// a.
// let and=[1,2,3,4,5]
// and.unshift(0,[1,3]);
// console.log(and);
// b.
// let arr=[1,2,3,4,5,3,6,7,3]
//  let result=arr.indexOf(3,2) //output:2
// let result=arr.indexOf(3,5) //output:5
// let result=arr.indexOf(3,6) //output:8
//  let result=arr.indexOf() //output:-1
// if nothing is given in index
// console.log(result)

// 5.slice
// it slice the elements by giving the values 
// if one element is given it slices from where the given element is given for example if 2 is given then it slices from 2 to end
// if two elements are given it slices from starting given index to the given last value even last value will be included
// a.
// let arr=[1,2,3,4,5]
// let result=arr.slice(3)
// let result=arr.slice(1,3)
// console.log(result);

// let fruits=["apple","banana","grapes","kiwi","orange","tomato","melon"]
 //            -7     -6        -5        -4     -3       -2      -1
// let result=fruits.slice(-5)
// console.log(result);


// 6.  find index
// normal function---------->
// let arr=[1,2,3,4,5,6]
// function abc(element){
//     return element>5;
// }
// let result=arr.findIndex(abc)
// console.log(result);
// arrow function-------->
 // console.log(arr.findIndex(element=>element>5))
// let arr=[1,2,3,4,5,6]
// let result=arr.findIndex(element=>element!==3)
// console.log(result)

// 7. concat
// let arr1=[1,2,3,4]
// let arr2=[5,6,7,"a","b"]
// let result=arr1.concat(arr2)
// console.log(result)

// 8.join
// let arr=["car","cat","come","can't","cot"]
// let arr=[1,2,3,4,5]
// let result=arr.join('-')
// console.log(result);

// 9. some
// atleast one item in array should satisfy the condition
// let arr=[1,2,3,4,5]
// function abc(items) {
     // return(items=items%2!==0)// checking for odd numbers
//     return(items=items>5)

// }
// let result=arr.some(abc)
// console.log(result);
                 // using arrow function
//   console.log(arr.some(items=>items<5))

// 10. every 
// in this all elements of the array should be statisfied by given function to get true
// by using normal function
// let arr=[1,2,3,4]
// function abc(item){
//     return(item=item<4)
// }
// let result=arr.every(abc)
// console.log(result);
//    ---------------- // by using arrow function
// console.log(arr.every(item=>item<5))

// // 11.Filter
// How to find even numbers by using Filter method
// let arr=[1,2,3,4,4,4,4,1,2,3]
// function abc(items){
//     return items=(items%2==0)
// }
// let result=arr.filter(abc);
// console.log(result)
// How to find odd numbers by using Filter method
// -----------------by using an arrow function----------------------
// console.log (arr.filter(items=>items%2!==0))

// How to find duplicate items using Filter
// let arr=[1,1,2,2,3,3,1,1,1,4,4]
// let result=arr.filter((items,index) => arr.indexOf(items)===index)
// console.log(result)
// How to filter multiples of 3
// let result=(arr.filter(items=>items%2))
// console.log(result)
// count how many numbers are there in array without duplicating that ie unique elements
// let arr=[1,2,3,4,5,1,2]
//     let unique = arr.filter((value) => arr.indexOf(value) === arr.lastIndexOf(value));
//     console.log(unique.length);
// Another example
//  let arr=[1,2,3,4,5,1,2,3]
// let result=arr.filter((items)=>arr.indexOf(items)===arr.lastIndexOf(items))
// console.log(result)//[4,5]
// console.log(result.length)//2

// 12.Map
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]
// let result1=arr1.map(values=>values*2)
// let result2=arr2.map(values=>values*2)
// console.log(result1,result2)

// Array practice questions

// let str='Hi How are you doing and hope ur good'//lenght=14
// // console.log(str.length)
// revStr=' ';
// for(i=str.length-1;i>0;i--){
//  revStr+=str[i]
// }
// console.log(revStr)

// Sum of an array
// let arr=[1,2,3,4,5]
// let result=arr.reduce((acc,cur)=>(acc+cur),0)
// console.log(result)
// Return the ouput that uppercase in name
// let students=[
//     {name:"Prathap",rollno:1,marks:80},
//     {name:"Suraj",rollno:2,marks:50},
//     {name:"ujwal",rollno:3,marks:70},
//     {name:"janavi",rollno:4,marks:100},
// ]; 
// let names=[];
// for(i=0;i<students.length;i++){
// names.push(students[i].name.toUpperCase());
//  }
// / You can do this by map also
// let names=students.map((value)=>value.name.toUpperCase())
// console.log(names)
// Return the output who scored more than 60 and rool number above 2
// let students=[
//     {name:"Prathap",rollno:1,marks:80},
//     {name:"Suraj",rollno:2,marks:65},
//     {name:"ujwal",rollno:3,marks:70},
//     {name:"janavi",rollno:4,marks:100},
// ]; 

// let result =students.filter((value)=>value.marks>60 && value.rollno>1)
// console.log(result)
// sum of all the marks 
// let students=[
//     {name:"Prathap",rollno:1,marks:80},
//     {name:"Suraj",rollno:2,marks:50},
//     {name:"ujwal",rollno:3,marks:70},
//     {name:"janavi",rollno:4,marks:100},
// ]; 
// let result=students.reduce((acc,cur)=>acc+cur.marks,0)
// console.log(result)
// return the names who scored more than 60
// let result=students.filter((value)=>value.marks>60).map((value)=>value.name)
// console.log(result)


// function handleSubmit () { 
//     const userInput = document.getElementById("name");
//     const todo = document.createElement("h1");
//     todo.innerText = userInput.value;
//     todo.setAttribute("class", "todoDiv");
//     document.getElementById("todoData").appendChild(todo);
// }

// adding dynamic html 
// create an empty div tag and give it some id.
// capture the input field value
// create the element that you want to add in html.
// append the element inside the empty div tag.
















// ------------------------------------------practice--------------------------
// let str='widget on to with to';
// console.log(str.length)
// console.log(str.indexOf("to"))

// let salaries={
//     john:100,
//     ann:160,
//     peter:180
// }

// let sum = 0
// for(let item in salaries){
//     sum += salaries[item]
// }
// // console.log(sum);
// -------------------------------------------
// let greeting='what*are*you*doing'
// let result=(greeting.split('*'));
// console.log(result.join(' '));
// console.log(result);

// let str="Vijay Pratap Singh"
// let resultArr=str.split(' ');
// console.log(resultArr);
// console.log(resultArr.join('\n'));
// reverse ------------------------------
// let greeting='Hi how are you'
// let result=(greeting.split( ' ').reverse().join(' '));
// console.log(result);
// -------------------------reverse a string
// let Str="Hello"
// revStr=' '
// for(let i=Str.length-1;i>=0;i--){
//     revStr+=Str[i]
// }
// console.log(revStr);

// let Str="Things get very hard some times as we all know"
// revStr=' '
// for(let i=Str.length-1;i>=0;i--){
//     revStr+=Str[i]
// }
// console.log(revStr);
// replace and replaceAll
// const temp='John is a good guy. John is working at a shop'
// console.log(temp.replace('shop','doctor'));
// -------------------------objects
// let user={
//     name:'Jhansi',
//     class:12,
//     isAdmin:true,
//     obj :{
//         number:"Inside",
//         array:[1,2,3,4,5]
//     }
    
// }
 // console.log(user.obj.array);
// console.log(user.obj.array[2]);
// vowelCount("How many vowels are there in this string");
//  function vowelCount(str){
//      var count = 0;
//      var vowels = "aeiou";
//      for(var i=0; i<str.lenght; i++){
//      if(vowels.indexOf(str[i])>-1) {
//          count++;
//      }
//  }
// return count;
// // }
// countVowels=str=>Array.from(str).filter(letter=>'aeiou'.includes(letter)).length;
// console.log(countVowels('abcdefghijklmnopqrstuvwxyz'));

// let salaries={
//     john:100,
//     ann:160,
//     peter:130
// }
// let sum=0;
// for(let item in salaries){
//     sum += salaries[item];

// }
// console.log(sum)

// let menu={
//     width:200,
//     height:300,
//     title:"My menu"
// }

// for(let key in menu){
//     if(typeof menu[key]==='number'){
//     menu[key]=menu[key]*2
//     }
// }
// console.log(menu);





// let user={
//     name:'jhansi'
// }
// admin=user;
// admin.name="amar"
// console.log(user,"user");
// console.log(admin,"admin");
// // as admin.name="amar" gets reassigned for jhansi to amar
// console.log(admin===user);
// In this example by giving the duplicate.isHappy="false" even the user.isHappy has changed to false 
// let user={
//     name:"ram",
//     age:23,
//     isHappy:true
// }
// let duplicate={}
// user=duplicate;
// duplicate.isHappy=false;
// console.log(duplicate.isHappy)
// console.log(user.isHappy)


// without changing the original value we need to modify the duplicate value..by using for in we can do it
// let user={
//     name:"ram",
//     age:23,
//     isHappy:true
// }
// let duplicate={}
// for(let key in user){
//     duplicate[key]=user[key]
// }
// duplicate.isHappy=false;
// Object.assign(duplicate,user)
// duplicate.isHappy=false;
// console.log(user.isHappy)
// console.log(duplicate.isHappy)
// spread operator
// let arr1= [0,1,2]
// let arr2= [3,4,5]
// let arr3=[...arr1 ,...arr2]
// console.log(arr3);
// let obj1={foo:'bar',x:43}
// let obj2={fo:'baz',y:13}
// let obj3={...obj1,...obj2}
// console.log(obj3);

// let user={
//     age:30,
//     name:'rahul',
//     Sayhi:function(){
// console.log("hi",this.name);
//     }
// }
//  admin=user;
// user=null;
//  admin.Sayhi();
// console.log(user.Sayhi); //error :Cannot read the properties of null

// user.Sayhi(); //error
 
// let user={
//     'first Name':'Manjupriya',
//     score:50,
//    incrementScore(){
//        this.score++
//    }
// }

// console.log(admin.score)
// admin.incrementScore()
// admin.incrementScore()
// admin.incrementScore()
// console.log(admin.score)

// function SayHi(){
// console.log(this.firstName)
// }
// let user={
//     firstName:'megana'
// }
// let admin={
//     firstName:'shantu'
// }
// user.second=SayHi
// admin.function=SayHi
// user.second()
// admin.function()
// const Obj={
//     message:'Hello,World',
//     getMessage(){
//          message='Hello,Earth'
        
//     }
// }
// let result=Obj.getMessage()
// console.log(result)









//-------------------- practice questions---------------------------
// console.log(2 + '2')// 22
// console.log(2 - '2') //0
 
// let nums=[1,2,2,3]
// console.log([...new Set (nums)])
// function removeduplicate(arr){
//     return([...new Set(arr)])
// }
// removeduplicate();

// console.log(5<6<7); //true
// console.log(7>6>5); //false
// freeze =object
// let profile={
//     name:"jhansi"
// }
// Object.freeze(profile)
// profile.age=3;
// console.log(profile);
// I want only name:jhansi to print but not age=3 to do this use freeze function


// let profile={
//         name:"jhansi"
//     }
//     Object.seal(profile)
//     profile.name="ruhi"
//     console.log(profile);
// the seal will allow u to change the existing property but not to allow to add new properties
// let profile={
//     name:"jhansi"
// }
// Object.defineProperty(profile,'age',{
//     value:4,
//     writable : false
    
// })
// profile.name="moni"
// profile.age=5
// console.log(profile);
// This alows the object to not modify
// console.log([]+[]);
// console.log(20+"20"-20*20)// 2020-400=1620
// console.log(undefined==undefined)// true
// console.log(undefined===undefined)//true
// object---------
// const user={
//     name:'nisha',
//     location:{
//         city:'Delhi',
//         country:'India'

//     }

// };
// const copy={...user};
// user.location.city='Goa'
// user.location.country='China'
// console.log('Original:',user.location);
// console.log('Copy:',copy.location);
// console.log(copy);
// function----------
// var a=10;
// var show=function(){
//     console.log(a)
//     var a=20;
// }
// show();// undefined bz of hoisting 
// const a=1;
// const result=(function(){
//     delete a;
//     return a;
// })();
// console.log(result)// output is 1
// console.log({a:1}=={a:1});//false
// console.log({a:1}==={a:1});//false
// In js ,objects are compared based on references so here we are comparing
//  two different objects so there references will be different
// var fn=10;
// function fn()
// {
//     console.log(20)
// }
// console.log(fn);// output will be 10
// console.log(a);// output:undefined
// var a=20;
// console.log(a);// output:10;
// console.log(8 + '5'); // when a string and number is added concatenation takes place
// console.log('8' + 5);
// console.log(8 - '5');// when a string and number is subtracted the actual subtraction takes place
// console.log('5'-8);
// console.log('1' - -'1')//-1 string will be converted to -1 
// console.log('1' + + '1')
// console.log('1'- + '1')
// console.log('1' + - '1')

//     let a=50;
//     let b=10;
// [b,a]=[a,b]
// console.log(a,b);// distructing assignment
// let duplicate=[1,2,3,4,5,1,2,3,4,5]
// let result=[...new Set(duplicate)];
// console.log(result)

// console.log("hello" || "world");
// console.log("foo" && "bar");
// var foo=10 + '20';//1020
// console.log(foo);

// console.log(0.3 * 0.2 == 0.06);
// console.log(0.1 +0.2 ==0.3)
// console.log(3*1==3);
// console.log(0.3 ==0.1+0.2);
// console.log(2+1==3)
// console.log(0.3==0.5-0.2)
// how do you make this work 
// add(2,5)//7
// add(2)(5) //7---------to be done---------

// function add(a,b){
// console.log(a+b);
// }
// add(2,5);

//  let act="i'm a lasagna hog".split("").reverse("").join("");
// console.log(act);
// let and=( window.foo = "ant" || ( window.foo = "bar" ) );
// console.log(and)
// let aut=( window.foo = "ant" && ( window.foo = "bar" ) );
// console.log(aut)


// var foo = "Hello";
// (function() {
//   var bar = " World";
// //   alert(foo + bar);
// })();
// alert(foo + bar);


// var foo = "Hello";
// (function() {
//   var bar = " World";
 //   alert(foo + bar); // Hello World
// })();
// alert(foo + bar) // bar is not defined
//--------------------- What is the value of foo.lenght
// var foo = [];
// foo.push(1);
// foo.push(2);
// console.log(foo)
// console.log(foo.length)
// ------------------------What is the value of foo.x
// var foo = {
    // n: 1
// };
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log(foo.x) 

// function fn()
// {
//     console.log(this);
// }

// fn()
// new fn();
// Normal function =product for each number 

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=[]
// for(i=0;i<arr.length;i++){
//     newArr.push(arr[i]*2)
// }
// console.log(newArr);

// function double(element){
//     return element=element*2
// }
// let result=arr.map(double)
// console.log(result)
// let result=arr.map(element=>element*4)
// console.log(result)
// let array1=[1,2,3,4,5]
// let array2=[2,3,4,5,6]
// let newArr=[]
// function double(items){
//     return items=[array1]*[array2]
// }
// let result=array1.map(double)
// console.log(result)


// (function(){
//     var a = b = 3;
//   })();
  
//   console.log("a defined? " + (typeof a !== 'undefined'));// false
//   console.log("b defined? " + (typeof b !== 'undefined'));//true

// ------------------------------product of array ------------------------------------
// // by using a arrow function 
// let arr=[1,2,3,4,5]
// let result=arr.reduce((a,b)=>a*b,1);// acc or cur for addition it is 0 and for multiplication it is 1
// console.log(result)
//-------------- Product of the all the elements in array---------
// let arr=[1,2,3,4,5]
// let result=arr.reduce((a,b)=>a*b,1);// acc or cur for addition it is 0 and for multiplication it is 1
// console.log(result)
 // -----------------------------product of each element------------------------------
 // by using a arrow function
// let Array=[1,2,3,4,5,6,7,8]
// let newArray=Array.map(element=>element*2)
// console.log(newArray)
// -------------------How to reverse the array---------------------
// let arr=[1,2,3,4,5,6,7,8,"js","kalpana"]
// let result=arr.reverse(arr)// In built method 
// console.log(result)
// revArr=[];
// for(i=arr.length;i>0;i--){
//     revArr.push(arr[i-1])
// }
// console.log(revArr)
 

// var message = 'Hello Earth'
// const obj = {
//     message: 'Hello, World'
// }
// function print() {
//     console.log(this.message)
// }

// print()
// print.call(obj)
// print.apply(obj)
// print.bind(obj)()

//     let str="Hoi Hello"
// let results=str.length;
// console.log(results)

// let str1="prep"
// let str2="bytes"
// let results=str1.concat(str2)
// console.log(results)
// let alient={
//     name:"navin",
//     branch:"Js",
//     laptop:{
//         cpu:'i4',
//         ram:4,
//         brand:'lenova'
//     }
// }
// for(let key in alient.laptop){
// console.log(key,alient.laptop[key])
// }

// let user={
//     name:'harini',
//     class:2,
   
// }
// let sater={
//     name:'prathiksha',
//     doll(){
//         console.log(this.name)
//        }
// }

// sater.doll.call(user)
// function abc() {
//     console.log(this)
// }
// abc();


// let heading=document.getElementsByTagName("h1")
// console.log(heading[1].innerText)
// let heading1=document.getElementsByClassName("it")
// console.log(heading1)
// let paragr=document.getElementById("ott").innerText
// console.log(paragr)
// let data=document.getElementById("head").innerHTML
// let heading=document.getElementById("head").innerText
// console.log(data)
// console.log(heading)

// function handleSubmit() {
//     const value=document.getElementById("head")
//     value.innerText="MERN"
//     // value.innerHTML=`<h1>Hey</h1>`
//     value.style.color="aqua";
//     value.style.backgroundColor="blac
1.
// function handleSubmit() {
//     let button=document.getElementById("container")
//     button.style.flexDirection="row"
    // button[0].style.color="aqua"
    // button[0].style.backgroundColor="pink"
    
// }
// let greetings=function(){
//     console.log("Hello")
// }
// function random(callBack){
//     callBack()
// }
// random(greetings)

// let array=[1,2,3,4,5]
// const result=function(array,logic){
//   let output=[];
//    for(i=0; i<array.length; i++){
//        output.push(logic(array[i]))
//    }
// return output;
// }
// const multiplyBy=function(input){
//  return array[i]*array[i]
// }
// const add=function(input){
//     return 2*array[i];
// }
// console.log(result(array,multiplyBy));
// console.log(result(array,add));
// let array=[1,2,3,4,5]
// const calculate=function(array,instructions){
//     const output=[];
//     for(i=0;i<array.length;i++){
//         output.push(instructions(array[i]))
//     }
//     return output;
// }

// let area=function (array){
//     return Math.PI*array*array;
// }
// let perimeter= function (array){
    
//     return 2*Math.PI*array;
// }
// let diameter=function(array){
//     return 2*array;
// }

// console.log(calculate(array,area))
// console.log(calculate(array,perimeter))
// console.log(calculate(array,diameter))
// Currying
// function SayHi(){
//     console.log("Hi")
//     return function(){
//         console.log("Hello")
//         return function(){
//             console.log("Second")
//         }
//     }
// }
// SayHi()()

// "let studentRecords = [ {name: 'John', id: 123, marks : 98 },
        //   {name: 'Baba', id: 101, marks : 23 },
        //   {name: 'yaga', id: 200, marks : 45 },
        //   {name: 'Wick', id: 115, marks : 75 } ] "
//  "Question 1 : We are interested in retrieving only the name of the students and
//   all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']""

// value.name.toUpperCase())
// // console.log(names)


// let studentRecords=[{name: 'John', id: 123, marks : 98 },
//     {name: 'Baba', id: 101, marks : 23 },
//     {name: 'yaga', id: 200, marks : 45 },
//     {name: 'Wick', id: 115, marks : 75 }
// ]

// let result=studentRecords.map((value)=>value.name.toUpperCase());
// console.log(result)

// "Question 2: Suppose we have the same dataset as above but this time
//  we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
// let result1=studentRecords.filter((value)=>value.marks>50)
// console.log(result1)
// Question 3: Retrieve the details of students who scored more than 50 
// marks and have id greater than 120.
// let result3=studentRecords.filter((value)=>value.marks>50 && value.id>120)
// console.log(result3)

// Question 4: Consider the same scenario we have discussed above, but this time we
//  would like  to know the sum total of the marks of the students.
// let result4=studentRecords.reduce((acc,cur)=>acc+cur.marks,1)
// console.log(result4)

// Question 5: This time we want to get only the names of the students who scored 
// more than 50 marks from the same dataset used above.

// let results=studentRecords.filter((value)=>value.marks>50).map((value)=>value.name)
// console.log(results)

// Create 6 objects , each object will have name, class, roll no 
// as properties. Store these objects in an array of objects. 

// "Problem:
// You are given a string (STR) of length N, consisting of
//  only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// let str ="abcadeecfb"

// Output:
// abcdef"
// let unique=[...new Set(str)]

// console.log(unique)


// let array=[1,2,3,4,5]
// let result=arr.reduce((a,b)=>a+b,0)
// console.log(result)

 

// var Array = array.map(N => N+1);
// console.log(Array)


// let array = [11, 20, 8, 6, 17];
// let el = 65; //Element to be searched
// for (let i = 0; i < array.length; i++) {
//   if (el === array[i]) {
//     console.log('Element Found');
//   }
//   }

// let result=array.includes(11)
// console.log(result)

// let myArray = ["Rose", "Lily", "Daisy", "Jasmine"];
// if (myArray.indexOf('Lily') === -1) { //serach term
//  console.log("element doesn't exist");
// }
// else {
//  console.log("element found");
// // }
// let array=[1,2,3,4,5]
// if(array.indexOf(5)===-1){
//     console.log("element not found")
// }else
// {
// console.log("element found")
// }
// let arr=[1,2,3,4,5,6,7,8,9]
// console.log(Math.min(...arr));




// let arrayList = [1, 2, 3, 4, 30, 20, 0];
// let maxNum = arrayList.reduce((prev, current) => {
//    return Math.max(prev, current)
// });
// console.log(maxNum);


// let arr=[1,2,3,4]
// let arr2=[]
// let result=arr2.push(arr)
// console.log(result)
// let a=12345
// let res=a.toString
// console.log(res.length)

// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]
// let obj3=[...arr1,...arr2]
// console.log(obj3)

// let user={
//     name:"zom",
//     age:12,
// }

// let admin={...user,lastname:"kal",tech:"B.sc"}

// console.log(user)
// console.log(admin)
// let obj1={foo:'bar',x:4}
// let obj2={foo:'bax',x:5}
// let obj3={...obj1,...obj2}
// console.log(obj3)

// function palindrome(str){
//     const ispalindrome=str.split('').reverse().join('')
//     console.log(str===ispalindrome)
// }
// palindrome('abba')


// let str='abba'
// let result=str.split('').join('')
// console.log(result)
// n=31
// let reverse=(n)=>{
//     return (n.toString().split('').reverse().join(''))
// }
// console.log(reverse(n))

// let n=54
// let result=parseInt(n.toString().split('').reverse().join(''))
// console.log(result)


// let n="Hi How are you"
// let result=(n.toString().split('').reverse().join(''))
// console.log(result)



function abc(){
    return 5;
}
let result=abc()
console.log(result)
