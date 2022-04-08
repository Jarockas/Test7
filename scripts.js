"use strict";

console.log("");
console.log("__TOPIC: Conditionals__");
  
//Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.
for (let bunny=0; bunny<=10; bunny+=2){
    console.log(bunny); 
 }

 //Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.
 for (let i= 1;i<11; i++){
    console.log(i); 
 }
 // Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.
  let random = Math.floor(Math.random() * 10) +1;
    console.log(random);

//Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 10) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
   

