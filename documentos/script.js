const operador =document.getElementById("operador");
const txtNum1 = document.getElementById("op1");
const txtNum2 = document.getElementById("op2");
const Resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("calcular"); 

btnCalcular.addEventListener("click", funcioni);

function funcioni () {
    const op = operador.value;
    const op1 = txtNum1.value;
    const op2 = txtNum2.value;

    if(op == "+" || op == "-" || op == "*" || op == "/" && !isNaN(op) && !isNaN(op2)) {
        let resultado;

        switch(op) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2 
                break
        }

        Resultado.style = "color:red"
        Resultado.innerText +=  resultado;

    }else {
        Resultado.style = "color:blue"
        Resultado.innerText += "No se puede calcular el resultado con esos valores.";
    }


}



















