/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertedNum= document.getElementById("number-box")
const convertBtn = document.getElementById("convert-btn")

let conversionOne = document.getElementById("conversion1")
let conversionTwo = document.getElementById("conversion2")
let conversionThree = document.getElementById("conversion3")

convertBtn.addEventListener("click", function() {
    conversionOne.textContent = `${convertedNum.value} meters = ${convertedNum.value * 3.281.toFixed(3)} feet | ${convertedNum.value} feet = ${(convertedNum.value / 3.281).toFixed(3)} meters`
    
    conversionTwo.textContent = `${convertedNum.value} liters = ${convertedNum.value * 0.264.toFixed(3)} gallons | ${convertedNum.value} gallons = ${(convertedNum.value / 0.264).toFixed(3)} liters`
    
    conversionThree.textContent = `${convertedNum.value} kilograms = ${convertedNum.value * 2.204.toFixed(3)} pounds | ${convertedNum.value} pounds = ${(convertedNum.value / 2.204).toFixed(3)} kilograms`
    })
    