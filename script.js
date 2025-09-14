// The JavaScript if-else statement is used to condition True or False
function lw(){
    let mark=80;
    if(mark>=80 && mark<=100){
        document.getElementById("read").innerHTML="A+";
    }
    else if(mark>=70 && mark<=79){
        document.getElementById("read").innerHTML="A";
    }
    else{
        document.getElementById("read").innerHTML="F";
    }
};
//lw();
// The JavaScript Switch Statement is used for multiple expressions Else if the Statement
function wd(){
    let point=85;
    switch(true){
        case(point>=80 && point<=100):
            document.getElementById("read").innerHTML="A+";
        break;
        case(point>=70 && point<=79):
            document.getElementById("read").innerHTML="A";
        break;
        default:
            document.getElementById("read").innerHTML="F";
        break;
    };
};
//wd();
// The JavaScript for loops statement entry control loop
function cd(){
    let output="";
    let i;
    for(i=0;i<10;i=i+1){
        output +=i+"For loop<br>";
    }
    document.getElementById("read").innerHTML=output;
};
//cd();
// The JavaScript for loop Statement && miltepul skip condition
function se(){
    let output="";
    let i;
    for(i=0;i<10;i=i+1){
        if(i===5 || i===8){
            continue;
        }
        output +=i+"For loop five number skip<br>";
        document.getElementById("read").innerHTML=output;
    }
};
//se();
// The javaScript for loop statement || break condition
function de(){
    let output="";
    let i;
    for(i=0;i<20;i++){
        if(i===10){
            break;
        }
        output+=i+"For loop ten break<br>";
        document.getElementById("read").innerHTML=output;
    }
};
de();
// The javaScript while loop statement entry control loop
function rs(){
    let output="";
    let i=0;
    while(i<20){
        output+=i+"while loop<br>";
        i=i+1;
    }
    document.getElementById("read").innerHTML=output;
};
//rs();
// The JavaScript Do while exiting the control loop statement
function lc(){
    let output="";
    let i=0;
    do{
        output+=i+"Do while loop<br>";
        i=i+1;
    }
    while(i<10)
    document.getElementById("read").innerHTML=output;
};
//lc();
// The javaScript function are used to perform operations.javaScrip function many time to reuse the code.
function cw(){
    let a=10;
    let b=30;
    let go=a+b;
    document.getElementById("read").innerHTML=go;
};
//cw();
// The JavaSceipt Parameter Statement
function dw(a,b){
    let point=a+b;
    document.getElementById("read").innerHTML=point;
};
//dw(20,30);
// We can call function that returns a value and use it in our program.
function ces(number1,number2){
    return number1+number2;
};
let go=ces(10,3)+3;
//document.getElementById("read").innerHTML=go;
// A object is in entry having state and behavior (properties and mathod)
function od(){
    const car={
        Model:"R1",
        color:"Black",
        cc:"1000rr"
    }
    document.getElementById("read").innerHTML=car["cc"];
};
//od();
// The JavaScript Array is an object representing a collection of similar elements.
function mc(){
    const Bike=["R1","black","1000"];
    document.getElementById("read").innerHTML=Bike[2];
};
//mc();
// The JavaScript For loop over Array is an object 
function cse(){
    let output="";
    const city=["Bheramara","Kushtia","Mirput","Allah dorga"];
    let i;
    for(i=0;i<city.length; i=i+1){
        output+=city[i]+"<br>";
    }
    document.getElementById("read").innerHTML=output;
}
//cse();
// The JavaSceipt For in loop over array statement
function cds(){
    let output="";
    const city=["Bheramara","Kushtia","Khulna","AllarDorga","Mirpur"];
    for(let itme in city){
        output+=city[itme]+"<br>";
    }
    document.getElementById("read").innerHTML=output;
};
//cds();
// The JavaScript For in loop over object statement
function xe(){
    let output="";
    const bike={
        mode:"R1",
        collor:"Black",
        abs:true,
        cc:"1000"
    }
    for(let itme in bike){
        output+=bike[itme]+"<br>";
    }
    document.getElementById("read").innerHTML=output;
};
//xe();
// The JavaScript array concat() method combines two or omre arrays & returns a new string.
function xw(){
    const city=["Bheramara","Kushtia","Khulna"];
    const country=["Bangladesh","Afghanistan","Albania","Algeria"];
    let rejult=city.concat(country);
    document.getElementById("read").innerHTML=rejult;
};
//xw();
// The JavaScript Array from() method creates a new array iterable object, a string to the converted array.
function je(){
    let name="JavaScript Array From() mathod";
    let result=Array.from(name);
    document.getElementById("read").innerHTML=result[3];
};
//je();
// The javaSceipt Array filter() mathod filter and extract the element of an array that satisfying the provided condition.
function are(){
    let number=[10,20,30,40,50,60,70,80,90];
    let result=number.filter(function(itme){
        return itme >30;
    });
    document.getElementById("read").innerHTML=result;
};
//are();
// The javascript Array find() method returns the first element of the given array that satisfies the provided function condition.
function findx(){
    const number=[10,20,30,40,50,60];
    let result=number.find(function(itme){
        return itme >30
    });
    document.getElementById("read").innerHTML=result;
};
//findx();
// The javaSceipt Array findIndex() mathod returns the index of first element.
function ind(){
    const point=[10,30,50,60,79,87];
    let output=point.findIndex(function(value){
        return value >30
    });
    document.getElementById("read").innerHTML=output;
};
//ind();
// In the JavaScript Array forEach() method, a similar loop invokes the specified function once for each array element.
function fore(){
    let output="";
    const point=[10,30,50,60,79,87];
    let result=point.forEach(function(itme){
        output+=itme+"<br>";
    });
    document.getElementById("read").innerHTML=output;
};
//fore();
// The JavaScript Array includes() method, it returns True if an Array contains the element, otherwise False.
function inclu(){
    const number=[10,20,30,40,50,60,70,80,90];
    let result=number.includes(40);
    document.getElementById("read").innerHTML=result;
};
//inclu();
// The JavaScript Array indexOf() method is used to search the position of a particular element in a given array. This method is case-sensitive.
function inof(){
    const number=[10,20,30,40,50,60,70,80,90];
    let result=number.indexOf(30);
    document.getElementById("read").innerHTML=result;
};
//inof();
// The javaScript Array pop() method removes the last element.
function po(){
    const friendName=["Abid","Vramar","Shakil","Mintu","Shobug","Tuhin"];
    friendName.pop();
    document.getElementById("read").innerHTML=friendName;
};
//po();
// The JavaScript Array push() method add one or more element to the end of the given array.
function pus(){
    const city=["Bheramar","Kushtia","Khulna","Dhaka"];
    city.push("Bangladesh");
    document.getElementById("read").innerHTML=go;
};
//pus();
// The javaScript Array reverse() method return the reverse sequence.
function rev(){
    const name=["Ahmed","Shozib"];
    let result=name.reverse();
    document.getElementById("read").innerHTML=result;
};
//rev();
// The javaScript Array slice() method extracts the part of the given array & return it.
function sli(){
    const number=[10,20,30,40,50,60,70,80];
    let result=number.slice(2,7);
    document.getElementById("read").innerHTML=result;
};
//sli();
// The javaScript Array sort() method, By sort() method follows the ascending order.
function sor(){
    const point=[30,10,70,20,80,40,60,50];
    let result=point.sort();
    document.getElementById("read").innerHTML=result;
};
//sor();
// The JavaScript Array sort() method, Follows the ascending. And add to reverse() method to descending order.
function sore(){
    let number = [90,23,24,10,30,50,40,69,70,89];
    let result = number.sort().reverse();
    document.getElementById("read").innerHTML=result;
};
//sore();
// The javaScript Array splice(index,remove,itme) method is used to add/remove the element to/from the existing array.
function spiri(){
    let friendName = ["Abid","Vramar","Shakil","Mintu","Shobug","Tuhin"];
    friendName.splice(2,1,"Shozib");
    document.getElementById("read").innerHTML=friendName;
};
//spiri();
// JavaScript Stirin mathod CharAt()If provides the char value present at the specified index.
function chr(){
    let country = "Bangladesh";
    let result=country.charAt(3);
    document.getElementById("read").innerHTML=result;
};
//chr()
// javaSceipt Concat() if provides a combination to two or more string.
function conc(){
    let city = "Bheramara";
    let district = "Kushtia";
    let result = city.concat(district);
    document.getElementById("read").innerHTML=result;
};
//conc();
// javaScript indexOf() if provides the position of a char value prensent in the given string.
function inof(){
    let city = "Bheramar";
    let result = city.indexOf("a");
    document.getElementById("read").innerHTML=result;
};
//inof();
// javaScript lastindexOf() if provides the position of a char value prensent in the given string by searching from the last position.
function liof(){
    let friendName = "Ahmed Ahmed";
    let result = friendName.lastIndexOf("d");
    document.getElementById("read").innerHTML=result;
};
//liof();
// javaScript string replace() It replace a given string with the replacement.
function rep(){
    let countryName = "Bangladesh";
    let result = countryName.replace("desh","bedesh");
    document.getElementById("read").innerHTML=result;
};
//rep();
// JavaSceipt toLowerCase() method it convarts the given stirng into lowercase letter.
function tolc(){
    let cName = "BanglaDesh";
    let result = cName.toLowerCase();
    document.getElementById("read").innerHTML=result;
};
//tolc();
// JavaScript toUpperCase() method it convert the given string into uppercase letter.
function upca(){
    let cName = "BanglaDesh";
    let result = cName.toUpperCase();
    document.getElementById("read").innerHTML=result;
};
//upca();
// JavaScript trime() method it the white space frome the let and right said of the string.
function tr(){
    let name = "  My Name is Shozib Ahmed  ";
    let result = name.trim();
    let go = result.length;
    document.getElementById("read").innerHTML=go;
};
//tr();
/* *********************************** This is a JavaScript new section *********************************** */

// The javaScript varibale simpul
function newcode(){
    let fullName = "Shozib Ahmed";
    let age = 27;
    let cgps = 4.50;
    let ispass = true;
    age = 28; // varibale update
    document.getElementById("read").innerHTML=age;
};
//newcode();
// The javascript object studint id collections
function collection(){
    const student = {
        fullName:"Shozib Ahmed",
        age:28,
        cgpa:4.50,
        ispass:false,
    };
    student["age"] = student["age"]+1; // javascript object key collections change
    document.getElementById("read").innerHTML=student["age"];
};
//collection();
// The javascript Artimetic operators
function artopr(){
    let a = 3;
    let b = 10;
    let c = a+b;
    document.getElementById("read").innerHTML=c;
};
//artopr();
// The javascript Unary operators
function unr(){
    let a = 10;
    let b = 30;
    a++; // Increment values
    document.getElementById("read").innerHTML=a;
};
// unr();
// The javascript Asigenment operators
function asig(){
    let a = 3;
    let b = 30;
    a += 4; // a = a + 4
    document.getElementById("read").innerHTML=a;
};
// asig();
// The javascript Comparison operators (equl ===) and (not equl !==) 
function comp(){
    let a = 30;
    let b = 20;
    document.getElementById("read").innerHTML= a !== b;
};
// comp();
// The javascript Logical && operators (&&)
function logi(){
    let a = 30;
    let b = 20;
    let condit1 = a > b;     //True 
    let condit2 = a === 30; //True
    document.getElementById("read").innerHTML=condit1 && condit2 ;
};
// logi();
// The javascript Logical OR operators (||)
function ors(){
    let a = 30;
    let b = 20;
    let condit1 = a < b;     //False
    let condit2 = a !== 30; //False
    document.getElementById("read").innerHTML=condit1 || condit2 ; 
};
// ors();
// The javascript Logical Not operators (!)
function logno(){
    let isAudlt = true; //Output false
    let isAdmin = false; //Output true
    document.getElementById("read").innerHTML=!isAdmin;
};
//logno();
//The javaScript if conditional statement
function ifsta(){
    let age = 30;
    if(age > 18){
        document.getElementById("read").innerHTML="Are you Adult";
    }
};
//ifsta();
//The javaScript if-else conditional statement
function ie(){
    let age = 30;
    if(age >= 18){
        document.getElementById("read").innerHTML="Vot";
    } else{
        document.getElementById("read").innerHTML="No Vot";
    }
};
//ie();
//The javascript even or odd statemeant
function oddve(){
    let number = 2;
    if(number % 2 === 0){
        document.getElementById("read").innerHTML="Even Number";
    }else{
        document.getElementById("read").innerHTML="Odd Number";
    }
};
//oddve();
//The javaScript if else-if else multipul conditinoal statemeant
function ifesles(){
    let age = 60;
    if(age < 18){
        document.getElementById("read").innerHTML="Junior";
    } else if(age >= 60){
        document.getElementById("read").innerHTML="Senior";
    } else{
        document.getElementById("read").innerHTML="Middie";
    }
};
//ifesles();
//The javascript Terators operators compact if-else statemeant
function compact(){
    let age = 20;
    let rejult = age > 18 ? "Adult" : "Not Adult";
    document.getElementById("read").innerHTML=rejult;
};
//compact();
// The javascript get user to input a number using prompt 
// (Enter a number:)Check if the number is a multiple of 5 or not.
function prom(){
    let name = prompt("welcome");
    if(name % 5 === 0){
        document.getElementById("read").innerHTML="Miltipul 5";
    } else{
        document.getElementById("read").innerHTML="Not miltipul 5";
    }
};
//prom();
// The javaScript write a code which can give grades to students according to theri scores
function student(){
    let number = 79;
    if(number >= 90 && number <= 100){
        document.getElementById("read").innerHTML="A+";
    } else if(number >= 70 && number <= 89){
        document.getElementById("read").innerHTML="A-";
    } else{
        document.getElementById("read").innerHTML="F";
    }
};
//student();
//For Loops are used to execute a price of code again & again
function forl(){
    let output = "";
    let i = 0;
    for(i = 1; i <= 5; i++){
        output += i+ "Shozib<br>";
    }
    document.getElementById("read").innerHTML=output;
};
//forl();
// The javaScript while loops conditional statemeant
function whiles(){
    output ="";
    let i = 1;
    while(i<=10){
        output += i+"While loops<br>";
        i=i+2;
    }
    document.getElementById("read").innerHTML=output;
};
//whiles();