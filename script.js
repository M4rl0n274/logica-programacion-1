//* se toman los valores y se asignan a variables
function submitForm() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var number3 = parseFloat(document.getElementById('number3').value);
   

    



var sumar = number1 + number2 + number3 
var restar = number1 - number2 - number3 
var multiplicar = number1 * number2 * number3 
var dividir = number1 / number2 / number3 
    


//* restificar que los numeros ingresados sean validos
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Por favor ingresa tres números válidos.");
    return;
  }

//* aviso de que los numeros son iguales
if (number1 === number2){
    alert ("los numeros son iguales")
    console.log("Los numeros son iguales");
    
    if (number2 === number3){
    alert ("los numeros son iguales")
    console.log("Los numeros son iguales");
    }
}



//! Logica para organizar numeros
var mayor, centro,menor

if (number1 > number2 && number1 > number3) {
    mayor = number1;
    if (number2 > number3) {
      centro = number2;
      menor = number3;
    } else {
      centro = number3;
      menor = number2;
    }
  } else if (number2 > number1 && number2 > number3) {
    mayor = number2;
    if (number1 > number3) {
      centro = number1;
      menor = number3;
    } else {
      centro = number3;
      menor = number1;
    }
  } else {
    mayor = number3;
    if (number1 > number2) {
      centro = number1;
      menor = number2;
    } else {
      centro = number2;
      menor = number1;
    }
  }
  
  //* resultados consola de mayor a menor
  console.log("Numeros ordenados de mayor a menor");
  
  console.log("Mayor:", mayor);
  console.log("Centro:", centro);
  console.log("Menor:", menor);     
  
  //* resultados consola de menor a mayor
  
  console.log("Numeros ordenados de menor a mayor");
  console.log("Menor:", menor);   
  console.log("Centro:", centro);
  console.log("Mayor:", mayor);



//* variable para imprimir en html
var comparacion = {
    mayor: mayor,
    centro: centro,
    menor: menor,
}

document.getElementById('sumar').innerHTML =  (sumar)    
document.getElementById('restar').innerHTML =  (restar)    
document.getElementById('multiplicar').innerHTML =  (multiplicar)    
document.getElementById('dividir').innerHTML =  (dividir)    



document.getElementById('orden').innerHTML =  (comparacion)  

document.getElementById('orden').innerHTML = 
"El mayor es: " + comparacion.mayor + "<br>" +
"El del medio es:" + comparacion.centro + "<br>" +
"El menor es: " + comparacion.menor;


};

//* configuracion lo que se muestra en la salida







