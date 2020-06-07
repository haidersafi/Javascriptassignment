/*CHAPTER1*/
/*TASK1*/
alert("Welcome Visitor");
/*TASK2*/
alert("Error! Please enter a valid password");
/*TASK3*/
alert("Welcome to Js Land...\nHappy Coding!");
/*TASK4*/
alert("Welcome to Js Land");
alert("Happy Coding!");
/*TASK5*/
console.log("hello i can run js through my web browser's console");

/*TASK6 alerts in html file*/

/*TASK7 script tag in head and body of index file */

 /*chapter2*/
 /* TASK1*/
 var username;
 /* TASK2*/
 var myName="Safi Saqlain";
 /* TASK3*/
 var message="hello World";
 alert(message);
 /* TASK4*/
 var name="Safi Saqlain";
 var age=27;
 var course="Cerified Mobile Application Developer";
 alert(name);
 alert(age);
 alert(course);
 /* TASK5*/
 var demo="pizza";
alert(demo+'\n'+demo.split("a").join(" ")+"\n"+demo.split("za").join(" ")+"\n"+demo.split("zza").join(" ")+"\n"+demo.split("izza").join(" "));
/*TASK6*/
var email="safisaqlain@gmail.com";
alert("My email address is "+email);
/*TASK7*/
var book="A smarter way to learn javascript";
alert("i am trying to learn from the book "+book);
/*TASK9*/
var sign='▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(sign); 

/*chapter3*/
 /* TASK1*/
 var age=15;
 alert("i am "+age+" years old");
 
 /* TASK2*/
 var count=1;
 alert("you have visted this website "+count+" time");

  /* TASK4*/
  var visitor="safi";
  var producttitle="T-shirt";
  var quantity=5;
  document.write(visitor+" has ordered "+quantity+" "+producttitle+" from XYZ online store");

//   /*chapter4*/

//  /* TASK1*/
//  var a=1,b=2,c=3;

//   /* TASK2*/
//   //legal variable names
// //   var name$='safi';
// //   var name_='safi';
// //   var Name='safi';
// //   var NAME='safi';
// //   var name1='safi';

//   //illegal variable name
// //   var 1name='safi';
// //   var +name='safi';
// //   var for='';
// //   var name safi='';
// //   var 1='1';

 /* TASK3*/
 //a// 
 document.write("<h3>Rules For Naming JS Variables</h3>");
 //b//
document.write("Varible Names can only contain letter,underscores,dollarsign and digits for example $my_1stVariable<br>");
//c//
document.write("Names must begin with a letter,dollarsign and underscore for example :$name,_name or name<br>");
//d//
document.write("Variable names are case sensitive<br>");
//e//
document.write("Variable names should not be JS keywords<br>");

 /* CHAPTER 5*/
  /* TASK1*/
  document.write("<h3>Chapter 5 task1</h3>");
  var firstnum=parseInt(prompt("Enter First Num:"));
  var secondnum=parseInt(prompt("Enter Second Num:"));
  document.write("Sum of "+firstnum+" and "+secondnum+" is "+(firstnum+secondnum));

  /* TASK2*/
  document.write("<h3>Chapter 5 task2</h3>");
  document.write("Substraction of "+firstnum+" and "+secondnum+" is "+(firstnum-secondnum));
  document.write("<br>Multiplication of "+firstnum+" and "+secondnum+" is "+(firstnum*secondnum));
  document.write("<br>Division of "+firstnum+" and "+secondnum+" is "+(firstnum/secondnum));
  document.write("<br>Modulus of "+firstnum+" and "+secondnum+" is "+(firstnum%secondnum));

 


var dem;
document.write("<h3>Chapter 5 task3</h3>");
document.write("value after variable declaration is "+dem);
dem=5;
document.write("<br>initial value: "+dem);
dem++;
document.write("<br>value after increment is: "+dem);
dem+=7;
document.write("<br>value after addition is: "+dem);
dem--;
document.write("<br>value after decrement is: "+dem);
document.write("<br>remainder is : "+dem%3);
document.write("<h3>Chapter 5 task4</h3>");
var ticketprice=600;
document.write("Total Cost for buying 5tickets for a movie is "+ticketprice*5);
document.write("<h3>Chapter 5 task5</h3>");
var no=5;
document.write("Table of "+no+"is <br>")
for (var v=1;v<=10;v++){
    document.write(no+"x"+v+"="+v*no+"<br>")
}
document.write("<h3>Chapter 5 task6</h3>");
var celcius=25;
var celciustofarenheit=(celcius*9/5)+32;
var farenheit=25;
var farenheittocelcius=(farenheit-32)*5/9;
document.write(celcius+"<sup>0</sup>C is "+celciustofarenheit+"<sup>0</sup>F <br>");
document.write(farenheit+"<sup>0</sup>F is "+farenheittocelcius+"<sup>0</sup>C");
document.write("<h3>Chapter 5 task7</h3>");
var item1price=600;
var item1quantity=3;
var item2price=100;
var item2quantity=7;
var shippingcharges=100;
var total=(item1price*item1quantity)+(item2price*item2quantity)+shippingcharges;
document.write("<h3>SHOPPING CART</h3></h3>");
document.write("Item1 price is "+item1price+"<br>Item1 quantity is "+item1quantity+"<br>Item2 price is "+item2price+"<br>Item2 quantity is "+item2quantity+"<br>Shipping Charges are "+shippingcharges+"<br>Total cost of your order is "+total)
document.write("<h3>Chapter 5 task8</h3>");
document.write("<h3>Markssheet</h3>");
var marksobtained=804;
var totalmarks=980;

var percentage=(marksobtained/totalmarks)*100;
document.write("Marks Obtained: "+marksobtained+"<br>Total Marks: "+totalmarks+"<br>Percentage: "+percentage);
document.write("<h3>Chapter 5 task9</h3>");
document.write("<h3>CURRENCY IN PKR</h3>");
var usdtopkr=10*104.80;
var sauditopkr=25*28;
document.write("Total Currency in Pkr: "+(usdtopkr+sauditopkr))
document.write("<h3>Chapter 5 task10</h3>");
document.write("<h3>MATHEMATICAL EXPRESSION</h3>");
var numx=5;
var numexp=((5+5)*10)/2;
document.write("math expression: "+numexp);
document.write("<h3>Chapter 5 task11</h3>");
document.write("<h3>THE AGE CALCULATOR</h3>");
var birthyear=1993;
var currentyear=2020;
document.write("Current Year is "+currentyear+"<br> Birth Year: "+birthyear+"<br>Your Age : "+(currentyear-birthyear));
document.write("<h3>Chapter 5 task12</h3>");
document.write("<h3>THE GEOMETRIZER</h3>");
var radius=2;
var circumference=2*3.142*radius;
var areaofcircle=3.142*radius*radius;
document.write("Radius of Circle is "+radius+"<br>Circumference is "+circumference+"<br>Area is "+areaofcircle);
document.write("<h3>Chapter 5 task13</h3>");
document.write("<h3>THE LIFETIME SUPPLY CALCULATOR</h3>");
var snack="brownie";
var current_age=27;
var max_age=65;
var amountperday=2;
var totalbrownies=(max_age-current_age)*365*amountperday;
document.write("Favourite Snack: "+snack+"<br> Current Age: "+current_age+"<br>Maximum Age: "+max_age+"<br>Snack Consumed Per Day: "+amountperday+"<br> You will need "+totalbrownies+" "+snack+" to last you until the ripe old age of "+max_age);
document.write("<h3>Chapter 6-9 task1</h3>");
var a=10;
document.write("Result:<br>")
document.write("The value of a is "+a+"<br> The value of ++a is: "+(++a)+
"<br> Now the value of a is "+a+"<br> The value of a++ is: "+(a++)+
"<br> Now the value of a is :"+a+"<br> the value of --a is"+(--a)+"<br> Now the value of a is: "+a+
"<br> the value of a-- is: "+(a--)+"<br> Now the value of a is: "+a);
document.write("<h3>Chapter 6-9 task2</h3>");
var a=2,b=1;
var result= --a - --b + ++b + b--;
document.write("a is "+a+"<br>b is "+b+"<br>result: "+result);
//--a = 1;
// --a - --b=1 - 0=1;
//--a - --b + ++b = 1+1=2;
//--a - --b + ++b + b-- = 2+1=3;  
document.write("<h3>Chapter 6 task3</h3>");
var inputuser=prompt("Enter Your Name?");
alert("Welcome! "+inputuser);
document.write("<h3>Chapter 6-9 task4</h3>");
var inputno=parseInt(prompt("Enter any number?"));

for (var v=1;v<=10;v++){
  if (!inputno){
inputno=5;
  document.write(inputno+"x"+v+"="+v*inputno+"<br>")}
  else{
    document.write(inputno+"x"+v+"="+v*inputno+"<br>")
  }
}
document.write("<h3>Chapter 6-9 task5</h3>");

var firstsubject=prompt("Enter First Subject:");
var secondsubject=prompt("Enter Second Subject:");
var thirdsubject=prompt("Enter Third Subject:");
var firstsubjectmarks=parseInt(prompt("Enter "+firstsubject+" marks:"));
var secondsubjectmarks=parseInt(prompt("Enter "+secondsubject+" marks:"));
var thirdsubjectmarks=parseInt(prompt("Enter "+thirdsubject+" marks:"));
var totalmarksobtained=firstsubjectmarks+secondsubjectmarks+thirdsubjectmarks;
var maxmarks=100;
var firstsubper=firstsubjectmarks/maxmarks*100;
var secondsubper=secondsubjectmarks/maxmarks*100;
var thirdsubper=thirdsubjectmarks/maxmarks*100;
var totalmarks=maxmarks+maxmarks+maxmarks;
var per=totalmarksobtained/totalmarks*100;   
document.write("<table><th>Subjects</th><th>Max Marks</th><th>Marks Obtained</th><th>Percentage</th><tr><td>"+firstsubject+"</td><td>"+maxmarks+"</td><td>"+firstsubjectmarks+"</td><td>"+firstsubper+"%</td></tr><tr><td>"+secondsubject+"</td><td>"+maxmarks+"</td><td>"+secondsubjectmarks+"</td><td>"+secondsubper+"%</td></tr><tr><td>"+thirdsubject+"</td><td>"+maxmarks+"</td><td>"+thirdsubjectmarks+"</td><td>"+thirdsubper+"%</td></tr><tr><td>Total</td><td>"+totalmarks+"</td><td>"+totalmarksobtained+"</td><td>"+per+"%</td></tr></table>");
alert("Chapter 9-11 task1");
var city=prompt("Enter your city name?");
if (city==='karachi'){
  alert("welcome to the city of lights");
}
alert("Chapter 9-11 task2");
var gender=prompt("what is your gender?");
if (gender==="male"){alert("GoodMorining Sir!")}
else if(gender==="female"){alert("GoodMorning Madam!")}
else{
  alert("GoodMorning")};
  alert("Chapter 9-11 task3");
  var signal=prompt("Enter Signal Color?");
  if (signal==='red'){alert("Must Stop")}
  else if(signal==='green'){alert("Move Now")}
  else if(signal==='yellow'){alert("Ready To Move")}
  else
  {alert("thats not a signal")};
  alert("Chapter 9-11 task4");
  var remainingfuel=parseFloat(prompt("Enter Remaing fuel:"));
  if (remainingfuel<0.25){alert("Please refill the fuel in your car!")}
  else {
    alert("you are good to go!!")
  }
  alert("Chapter 9-11 task5a");
  var a=4;
  if (++a===5){alert("given condition for a variable is true");}
  alert("Chapter 9-11 task5b");
  var b=82;
  if (b++ === 83){alert("given condtion for a variable is true");}
  alert("Chapter 9-11 task5c");
  var c=12;
  if (c++ === 13){alert("condition 1 is true");}
  if (c === 13){alert("condition 2 is true");}
  if (++c < 14){alert("condtion 3 is true");}
  if (c === 14){alert("condition 4 is true");}
  alert("Chapter 9-11 task5d");
  var materiaCost=20000;
  var laborCost=2000;
  var totalCost=materiaCost+laborCost;
  if (totalCost===laborCost+materiaCost){alert("the cost equals")}

  alert("Chapter 9-11 task5e");
  if (true){alert("True")}
  if (false){alert("False")}

  alert("Chapter 9-11 task5f");
  if ('car' < 'cat'){alert("car is smaller than cat");}

  alert("Chapter 9-11 task6");
  var firstsubject=prompt("Enter First Subject:");
var secondsubject=prompt("Enter Second Subject:");
var thirdsubject=prompt("Enter Third Subject:");
var firstsubjectmarks=parseInt(prompt("Enter "+firstsubject+" marks:"));
var secondsubjectmarks=parseInt(prompt("Enter "+secondsubject+" marks:"));
var thirdsubjectmarks=parseInt(prompt("Enter "+thirdsubject+" marks:"));
var totalmarksobtained=firstsubjectmarks+secondsubjectmarks+thirdsubjectmarks;
var maxmarks=100;
var totalmarks=maxmarks+maxmarks+maxmarks;
var per=totalmarksobtained/totalmarks*100;
  var grade='',remarks='';
  if (per >= 80){grade='A-ONE';remarks='Excellent';}
  else if (per >= 70){grade='A';remarks='Good';}
  else if (per >= 60){grade='B';remarks='You need to improve';}
  else if (per < 60){grade='Fail';remarks='Sorry';}
  document.write("<h3>Marks Sheet Chapter 9-11 task6</h3>");
  document.write("Total marks:"+totalmarks+"<br>Marks obtained:"+totalmarksobtained+"<br>Percentage:"+per+"<br>Grade:"+grade+"<br>Remarks:"+remarks);
  alert("Chapter 9-11 task7");
  alert("Guess Game");
  var correctno=4;
  var guessno=parseInt(prompt("Enter Any no. ranging from 1-10;"));
  if (guessno===correctno){alert("Bingo! Correct Answer")}
  else if (guessno === ++correctno || guessno ===  (correctno-2)){alert("Close enough to the correct answer")}
  else{
    alert("tryagain");
  }
  alert("Chapter 9-11 task8");
  var n=parseInt(prompt("Enter Any No."));
if (n%3 ===0){alert(n+" is divisble by 3");}
else{alert("Not divisible by 3")}

alert("Chapter 9-11 task9");
var n=parseInt(prompt("Enter Any No."));
if (n%2 ===0){alert(n+" is an even number");}
else{alert(n+" is an odd number");} 

alert("Chapter 9-11 task10");
var temp=parseFloat(prompt("Enter Temperature:"));
if (temp>40){alert("It is too hot outside");}
else if (temp>30){alert("The weather today is normal");}
else if (temp>20){alert("Today's weather is cool");}
else if (temp>10){alert("OMG! Today's weather is so cool")}
else {alert('It is freezing outside');}
alert("Chapter 9-11 task11");
var firstnumber=parseInt(prompt("Enter first no:"));
var Secondnumber=parseInt(prompt("Enter Second no:"));
var operation=prompt("1.+\n2.*\n3./\n4.-\n5.%\nEnter No. to perform operation:")
  if(operation==='1'){alert("Sum of "+firstnumber+" and "+secondnumber+" is "+(firstnumber+Secondnumber))}
  else if (operation==='2'){alert("Multiplication of "+firstnumber+" and "+Secondnumber+" is "+(firstnumber*Secondnumber) )}
  else if (operation==='3'){alert("Division of "+firstnumber+" and "+Secondnumber+" is "+(firstnumber/Secondnumber))}
  else if (operation==='4'){alert("Subtraction of "+firstnumber+" and "+Secondnumber+" is "+(firstnumber-Secondnumber))}
  else if (operation==='5'){alert("Remainder of "+firstnumber+" and "+Secondnumber+" is "+(firstnumber%Secondnumber))}
  else {alert("wrong input");}
  alert("Chapter 12-13 task1");
  var input=prompt("Enter Any Character:");
if (input>='A' && input<='Z'){alert("Uppercase letter")}
else if (input>='a' && input<='z'){alert("lowercase letter")}
else if (!isNaN(input)){alert("number")}
else {alert("not a number or a string character")}

alert("Chapter 12-13 task2");

var jsno=parseInt(prompt("Enter Any no.:"));
var jsno2=parseInt(prompt("Enter Any no.:"));
if (jsno===jsno2){alert("both are equal")}
else if (jsno>jsno2){alert(jsno+" is greater than "+jsno2)}
else {alert(jsno+" is less than "+jsno2)}
alert("Chapter 12-13 task3");
var jsn=parseInt(prompt("Enter Any no.:")); 
if (jsn===0){alert("zero")}
else if (jsn<0){alert("negative")}

else if (jsn>0){alert("positive")}
else{alert("wrong input")}
alert("Chapter 12-13 task4");
var ch=prompt("enter any character:");
var vowel='aeiouAEIOU';
if(vowel.includes(ch)){alert(ch+" is a vowel")}
else{alert("not a vowel")}
alert("Chapter 12-13 task5");
var pass='321';
var enterpass=prompt("Enter Password");
if (!enterpass){alert("Please enter a password")}

else if (pass===enterpass){alert("Correct! The password you entered matches the original password")}
else{alert("Incorrect Passowrd")}
alert("Chapter 12-13 task6");
var greeting;
var hour=13;
if (hour<18){greeting="GoodMorning"}
else{greeting="GoodEvening"}

alert("Chapter 12-13 task7");
var time=prompt("Enter Your Time(format:1900-7pm)");
if (time>=0000 && time<1200){alert("Good Morning")}
else if (time>=1200 && time<1700){alert("Good Afternoon")}
else if (time>=1700 && time<2100){alert("Good Evening")}
else if (time>=2100 && 2359){alert("Good Night!")}
else {alert("wrong input")}


alert("Chapter 14-16 task1");
var array=[];
var myarray=[];
var strarray=[ali,abid,rizvi];
var numarray=[1,2,3,4];
var boolarray=[true,false];
var mixarray=[1,ali,2,abid,3];
var qualifications=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD']
alert("Chapter 14-16 task8");
var studentnames=['ali','abid','rizvi'];
var marks=[320,230,480];
alert("Score of "+studentnames[0]+" is "+marks[0]+". Percentage:"+((marks[0]/500)*100)+"%");
alert("Score of "+studentnames[1]+" is "+marks[1]+". Percentage:"+((marks[1]/500)*100)+"%");
alert("Score of "+studentnames[2]+" is "+marks[2]+". Percentage:"+((marks[2]/500)*100)+"%");
document.write("Chapter 14-16 task9")
var colorarray=['red','green','blue'];
var askuser=prompt("what color you want to add in this color-array:");
colorarray.unshift(askuser);
document.write("adding color at the beginning of array"+colorarray);
var askuser1=prompt("what color you want to add at the end in  this color-array:");

colorarray.push(askuser1);
document.write("<br>adding color at the end of array: "+colorarray);
colorarray.unshift("purple","maroon");
document.write("<br>after adding two colors at the beginning of array: "+colorarray);
colorarray.shift();
document.write("after deleting first element in array:"+colorarray);
colorarray.pop();
document.write("after deleting last element in array:"+colorarray);
var colorindex=prompt("At what index you want to add color on (ranging from 0 to "+(colorarray.length-1))");
var colorname=prompt("which color you want to add");
colorarray.splice(colorindex,0,colorname);
document.write("<br> after adding : "+colorarray);
var colordelindex=prompt("At what index you want to add color on (ranging from 0 to "+(colorarray.length-1))");
var colordelcount=prompt("How many colors you want to delete from "+colorarray.length+" colors");
colorarray.splice(colordelindex,colordelcount);
document.write("<br> after deleting : "+colorarray);
alert("Chapter 14-16 task10");
var arr=[320,200,210];
alert("unsorted scores: "+arr);
alert("sorted scoresarray: "+(arr.sort()));
alert("Chapter 14-16 task11");
var citieslist=['karachi','lahore','quetta','sialkot'];
var selectedcities=citieslist.slice(0,3);
document.write("citieslist: "+citieslist+"<br>selected cities list: "+selectedcities);
alert("Chapter 14-16 task12");
var array=['this','is','my','cat'];
alert(array.join(" "));
alert("Chapter 14-16 task13");
var newarr=[];
newarr.push("keyboard");
newarr.push("mouse");
alert("newarr");

alert("Chapter 14-16 task14");
var narr=[];
narr.unshift("monitor");
narr.unshift("printer");
alert("narr");
document.write("Chapter 14-16 task15");
var arri=['samsung','nokia'];
document.write("<select><option>"+arri[0]+"</option><option>"+arri[1]+"</option</select>");

alert("Chapter 17-20 task1");
var arrm=[[],[]];
alert("Chapter 17-20 task2");
var multiarray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
alert(multiarray[0].join(" ")+"\n"+multiarray[1].join(" ")+"\n"+multiarray[2].join(" "));

document.write("<h3>Chapter 17-20 task3</h3>");
for(var v=1;v<11;v++){
  document.write(v+"<br>")
}

document.write("<h3>Chapter 17-20 task4</h3>");
 var numinput=prompt("Enter any no to create a table of it :");
 var tablelength=prompt("Enter length for table : ");
 for (var i=1;i<=tablelength;i++){
   document.write(numinput+"x"+i+"="+(i*numinput)+"<br>");
 }
 document.write("<h3>Chapter 17-20 task5</h3>");
 var fruits=['apple','banana','mango','strawberry'];
 for(var i=0;i<fruits.length;i++){
   document.write(fruits[i]+"<br>");
 }
 for(var i=0;i<fruits.length;i++){
  document.write("Element at index"+i+" is "+fruits[i]+"<br>");
}

document.write("<h3>Chapter 17-20 task6</h3>");
var counting=[];
var reverse=[];
var even=[];
var odd=[];
var series=[];
for (var i=1;i<16;i++){
counting.push(i)
}
for(var i=15;i>=1;i--){
reverse.push(i)
}
for (var i=0;i<=20;i++){
if(i%2===0){
even.push(i)
}
}
for (var i=0;i<=20;i++){
if(i%2!=0){
odd.push(i)
}
}
for (var i=1;i<=10;i++){

series.push((i*2)+"k ");
}
document.write("counting: "+counting+"<br>"+"reverse: "+reverse+"<br>even: "+even+"<br>odd: "+odd+"<br>series: "+series);
alert("chapter 17-20 task7")
var a =['cake','applepie','cookie','patties','chips'];
var inputitem=prompt("Enter item to search");
for (var i=0;i<a.length;i++){
if (inputitem===a[i]){
alert(inputitem+" is found at "+i+" index");
break;
}
if(i===a.length-1){
alert("item is not found inthis list");
}
}
alert("chapter 17-20 task8")
var a=[24,53,74,91,12];
alert("Array items are :"+a+"\nlargest no in the array is :"+(a.sort()[a.length-1]))
alert("chapter 17-20 task9")
var a=[24,53,74,91,12];
alert("Array items are :"+a+"\nsmallest no in the array is :"+(a.sort()[0]))

alert("chapter 17-20 task10")
var result=[];
for (var o=1;o<=100;o++){
  if(o%5===0){
result.push(o);
  }
}
alert(result);
