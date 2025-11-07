let product1 = 12345678;
let product2 = 98765432;

let total = product1 + product2 ;
//here discount percentage is 15%

const discount = total/100*15 ;

let finalPrice = total - discount;

console.log("Total  payable amount is:", finalPrice );
document.getElementById("hi").innerHTML=finalPrice;

let Country1 = "India";
let Country2 = "USA";
let Age = 20;

if(Age >= 18 && (Country1 == "India" || Country2 == "USA")){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}