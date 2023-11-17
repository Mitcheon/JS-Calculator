//let num = 42;
//let firstNmae = 'Mitcheon';
//const isProgrammer = true;


const resultElement = document.getElementById('result')
//console.log(resultElement.textContent)
//resultElement.textContent = 42

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const submitBtn = document.getElementById('submit')

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')

let action = '+'


//console.log(typeof sum)

plusBtn.onclick = function () {
action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result){
    if(result < 0){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    //if( actionSymbol == '+') {
    //    return num1 + num2
    //}

    //if(action == '-'){
    //    return num1 - num2
    //}
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}


submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

    //if (action == '+') {
    //    const sum = Number(input1.value) + Number(input2.value)
    //    printResult(sum)
    //resultElement.textContent = sum
    //} else if (action == '-') {
    //    printResult(sum)
    //}
    
}

