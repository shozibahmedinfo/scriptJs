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
//de();
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
    let result=point.sort().reverse();
    document.getElementById("read").innerHTML=result;
};
//sor();
// The javaScript Array sort() method, Follows the ascending to descending order.
function sore(){
    let number = [90,23,24,10,30,50,40,69,70,89];
    let result = number.sort().reverse();
    document.getElementById("read").innerHTML=result;
};
sore();