let numberZero= 0
let numberOne= 1
let numberTwo= 2
let numberThree= 3
let numberFour= 4
let numberFive= 5
let numberSix= 6
let numberSeven= 7
let numberEight= 8
let numberNine= 9
let displayEl = document.querySelector("#display-el")
let numberHolder = [];
let numberPlusHolder = [];
let numberMinusHolder = [];
let finalSum;

function numbZero(){
    displayEl.textContent += numberZero
    numberHolder += numberZero
    console.log(numberHolder)
}

function numbOne(){
    displayEl.textContent += numberOne
    numberHolder = displayEl.textContent
    console.log(numberHolder)
}

function numbTwo(){
    displayEl.textContent += numberTwo
    numberHolder = displayEl.textContent
    console.log(numberHolder)
}

function numbThree(){
    displayEl.textContent += numberThree
    numberHolder = displayEl.textContent
    console.log(numberHolder)
}

function numbFour(){
    displayEl.textContent += numberFour
    numberHolder = displayEl.textContent
    console.log(numberHolder)
}

function numbFive(){
    displayEl.textContent += numberFive
    numberHolder = displayEl.textContent
    console.log(numberHolder)
}

function numbSix(){
    displayEl.textContent += numberSix
    numberHolder = displayEl.textContent
    console.log(numberHolder)
}

function numbSeven(){
    displayEl.textContent += numberSeven
    numberHolder = displayEl.textContent
    console.log(numberHolder)
}

function numbEight(){
    displayEl.textContent += numberEight
    numberHolder = displayEl.textContent
    console.log(numberHolder)
}

function numbNine(){
    displayEl.textContent += numberNine
    numberHolder += numberNine
    console.log(numberHolder)
}




function numbPlus (){
    numberPlusHolder.push(numberHolder)
    displayEl.textContent = ""
    numberHolder = []
    console.log(numberHolder)
}

function numbMinus (){
    numberMinusHolder.push(numberHolder)
    displayEl.textContent = ""
    numberHolder = []
    console.log(numberHolder)
}

function delBtn (){
    numberHolder = numberHolder.substring(0, numberHolder.length - 1);
    displayEl.textContent = numberHolder
    console.log(numberHolder)
}



function calculateTotal() {
    if (numberPlusHolder.length >= 1) {
        
        finalSum = +numberPlusHolder + +numberHolder
        displayEl.textContent = finalSum
        numberPlusHolder = []
        numberHolder = finalSum
        console.log(finalSum)
    } else if (numberMinusHolder >=1) {
        finalSum = +numberMinusHolder - +numberHolder
        displayEl.textContent = finalSum
        numberMinusHolder = []
        numberHolder = finalSum
        console.log(finalSum)
    } else {
        numberPlusHolder = []
        numberMinusHolder = []
        numberHolder = []
        console.log ("Error")
    }


}