const myNumber =  document.querySelector(".myNumber")
const inputMeter = document.getElementById("inputNumber")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    inputMeter.innerHTML = num 
})

const feet = document.getElementById("inputFeet")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    feet.innerHTML = num
})

const liter = document.getElementById("inputLiters")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    liter.innerHTML = num
})

const gallons = document.getElementById("inputGallons")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    gallons.innerHTML = num
})

const pounds = document.getElementById("inputKilos")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    pounds.innerHTML = num
})

const kilos = document.getElementById("inputPound")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    kilos.innerHTML = num
})

const mile = document.getElementById("inputMiles")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    mile.innerHTML = num
})

const km = document.getElementById("inputKilometer")
myNumber.addEventListener("change", () => {
    let num = myNumber.value 
    km.innerHTML = num
})

function lengthConverter(valNum) {
    let metersToFeet = valNum/3.281
    metersToFeet = metersToFeet.toFixed(3)

    let litersToGallons= valNum/4.546
    litersToGallons = litersToGallons.toFixed(3)

    let poundsToKilos = valNum/2.205
    poundsToKilos = poundsToKilos.toFixed(3)

    let kmToMile = valNum/1.609
    kmToMile=kmToMile.toFixed(3)

    document.getElementById("outputFeet").innerHTML= valNum*3.281;
    document.getElementById("outputMeters").innerHTML= metersToFeet;
    document.getElementById("outputGallons").innerHTML=litersToGallons;
    document.getElementById("outputLiters").innerHTML=valNum*4.546;
    document.getElementById("outputPounds").innerHTML=valNum*2.205;
    document.getElementById("outputKilos").innerHTML=poundsToKilos;
    document.getElementById("outputKm").innerHTML=valNum*1.609;
    document.getElementById("outputMiles").innerHTML=kmToMile;
}
4.546