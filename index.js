const myNumber =  document.querySelector(".myNumber")
const feet = document.getElementById("myFeet")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    console.log(num)
    feet.innerHTML = num 
})


function lengthConverter(valNum) {
    let roundNum = valNum/3.2808;
    document.getElementById("outputMeters").innerHTML=roundNum;
    
}