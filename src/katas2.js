// comece a criar a sua função add na linha abaixo
function add (firstValue,SecondValue = 0){
    return firstValue + SecondValue
}
//console.log(add(3,5))
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply (firstValue,SecondValue){
    let result = 0
    for(let contador = 0; contador < SecondValue; contador++){
        result = add(result,firstValue)
    }
        return result
}
//console.log(multiply(4,6))
// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (x,n){
    let result = 1
    for(let contador = 0; contador < n; contador++){
        result = multiply(result,x)
    }
    return result
}
//console.log(power(3,4))
// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (factor){
    let result = 1;
    for(let contador = 1; contador <= factor; contador++){
        result = multiply(result,contador)
    }
    return result
}
//console.log(factorial(8))
// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci   for(let indice1 = 0; indice1 < n; indice1++){

function fibonacci (n){
    let output = [0,1]
    let indice2 = 1
    for(let indice1 = 0; indice1 < n; indice1++){
        output.push(output[indice1] + output[indice2])
        indice2++
    }
    return `${output[n]}`
}

console.log(fibonacci(7))

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
