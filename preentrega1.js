

function saludo(nombre) {
        alert("Bienvenido, " + nombre + ". Vamos a jugar un juego matemático.")
};

function sumar(numeroA, numeroB){
        resultado = numeroA + numeroB;

        return parseInt(resultado);
};

function restar(numeroA, numeroB) {
        return numeroA - numeroB;
};

function multiplicar(numeroA, numeroB) {
        return numeroA * numeroB;
};

function dividir(numeroA, numeroB) {
        return numeroA / numeroB;
};

let nombre;

do{
        nombre = prompt("Ingresar su nombre por favor.")
}while(!isNaN(nombre) || (nombre == ""));

saludo(nombre);

alert("Vamos a ir en este orden: Suma, resta, multiplicación y división. Pero primero, una prueba de fuego.");

let opcion;

do{
       opcion = prompt("Cual es resultado de cualquier número multiplicado por 0? \n\nOpción A= Da 1.\n\nOpción B= Da el mismo número (Ej: 7x0= 7).\n\nOpción C= Da 0.");
switch (opcion.toUpperCase()) {
        case "A":
                alert("Casi casi, pero no.");
                break;

        case "B":
                alert("Dale, no seas malo, no es esta.");
                break;

        case "C": 
                alert("Bien, es un progreso.")
                break;

        default: 
                alert("Ingresaste una opcion no válida, volvé a intentarlo.")
                break;
}
}while ((opcion != "c") && (opcion != "C"));

alert("Vamos a arrancar con las operaciones. Para cada sección vas a tener 3 oportunidades. Arrancamos con la suma.");


let numeroA;
let numeroB;
let intentos;


for (let i = 1; i < 4; i++) {
       
        alert("Vas a ingresar dos número que sumados den 17.")

        numeroA = parseInt(prompt("Ingresar el primer número."));
        numeroB = parseInt(prompt("Ingresar el segundo número."));
        
                
        
        sumar(numeroA, numeroB);
        
        


        if(resultado == 17) {
                intentos = i;

                if(intentos == 1){
                        alert("Felicitaciones, diste una respuesta correcta. Necesitaste " + intentos + " intento para acertar.");
                        break;
                }else{
                        alert("Felicitaciones, diste una respuesta correcta. Necesitaste " + intentos + " intentos para acertar.");
                        break;
                }
                
        } else{
                let intentosRestantes = 3 - i;

                if(intentosRestantes == 1){
                        alert("Respuesta errónea, volvé a intentarlo. Te queda " + intentosRestantes + " intento.");
                }else {
                        alert("Respuesta errónea, volvé a intentarlo. Te quedan " + intentosRestantes + " intentos");
                }
                
        }

        
}

if (intentos < 4) {
        if (intentos === 1) {
                alert("Excelente, estuviste veloz (como el rayo mcqueen cachau).")
        }else {
                alert("Mmm, si tuviste que repetir algo anda mal.")
        }

}else {
        alert("Ay hermanito, eran 3 oportunidades, hacete ver porque estas mal.")
};





