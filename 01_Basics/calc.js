const prompt = require("prompt-sync")({ sigint: true });

menu()

function menu() {
    console.log("Chose an operation: ")
    console.log(" - ")
    console.log(" + ")
    console.log(" * ")
    console.log(" / ")

    let choice = prompt("Enter Choice: ")
    const validOperations = "+*/-";

    if(validOperations.includes(choice)){
        takeInput(choice)
    }
    else{
        console.log("Invalid Operation Symbol. Please Try Again!");
        menu();
    }
    
}


function takeInput(choice) {
    let num1 = parseInt(prompt("Enter Number 1: "))
    let num2 = parseInt(prompt("Enter Number 2: "))
    calculate(num1, num2, choice)
}

function calculate(num1, num2, choice) {
    let result;
    switch (choice) {
        case "-":
            result = num1 - num2;
            console.log(`${num1} - ${num2} is ${result}`)
            break;

        case "+":
            result = num1 + num2;
            console.log(`${num1} + ${num2} is ${result}`)
            break;

        case "*":
            result = num1 * num2;
            console.log(`${num1} * ${num2} is ${result}`)
            break;

        case "/":
            result = (num1 / num2);
            console.log(`${num1} / ${num2} is ${result}`)
            break;
    }
}