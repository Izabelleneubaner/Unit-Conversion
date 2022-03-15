const number =  document.querySelector(".myNumber").value
console.log(number);
let feet = document.getElementById('myFeet');



function lengthConverter(valNum) {
    let roundNum = valNum/3.2808;
    document.getElementById("outputMeters").innerHTML=roundNum;
    
}