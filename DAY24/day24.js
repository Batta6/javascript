//check the no. is even or odd
let number=10;
if(number%2==0){
    console.log("given number is an even number:"+number);
}
else{
    console.log("given number is an odd number:"+number);
}
let num = 7;
let result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result);


//age validation
let age=22;
if(age<13){
    console.log("The person is child:"+age);
}
else if(age>=13 && age<=19)
{
        console.log("The person is teenager:"+age);
    }
else if(age>19 && age<=59)
{
        console.log("The person is adult:"+age);
    }
else
{
    console.log("The person is senior citizen:"+age);
}


//grade calculation
let marks=91;
if(marks>=90 && marks<=100){
    console.log("the person got A+:"+marks)
}
else if(marks>=75 && marks<=89){
    console.log("the person got A:"+marks)
}
else if(marks>=60 && marks<=74){
    console.log("the person got B:"+marks)
}
else if(marks>=45 && marks<=59){
    console.log("the person got C:"+marks)
}
else{
    console.log("the person failed:"+marks)
}


//largest of three numbers

let a=12;
let b=12;
let c=15;
if(a>b && a>c){
    console.log("here is A is the largest number:"+a);
}
else if(b>a && b>c){
    console.log("here is B is the largest number:"+b);
}
else if(c>a && c>b){
    console.log("here is C is the largest number:"+c);
}
else{
    console.log("here both or multiple numbers are equal:"+a +b +c)
}

//check given year is a leap year or not

let year=2022;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log("givenn year is a leap year:"+year)
}
else{
     console.log("givenn year is not a leap year:"+year)
}