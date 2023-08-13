

function saludo(nombre) {
        alert("Bienvenido, " + nombre + ". Vamos a jugar un juego matemático.")
};

function sumar(numeroA, numeroB){
        resultado = numeroA + numeroB;

        return parseInt(resultado);
};

function restar(numeroA, numeroB) {
        resultado = numeroA - numeroB;

        return parseInt(resultado);

};

function multiplicar(numeroA, numeroB) {
        resultado = numeroA * numeroB;

        return parseInt(resultado);

};

function dividir(numeroA, numeroB) {
        resultado =  numeroA / numeroB;

        return parseInt(resultado);

};

let nombre;

do{
        nombre = prompt("Ingresar su nombre por favor.")
}while(!isNaN(nombre) || (nombre == ""));

saludo(nombre);

alert("Vamos a ir en este orden: Suma, resta, multiplicación y división. Pero primero, una prueba de fuego.");

let opcion;

do{
       opcion = prompt("Cuál es resultado de cualquier número multiplicado por 0? \n\nOpción A= Da 1.\n\nOpción B= Da el mismo número (Ej: 7x0= 7).\n\nOpción C= Da 0.");
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
                alert("Ingresaste una opción no válida, volvé a intentarlo.")
                break;
}
}while ((opcion != "c") && (opcion != "C"));

alert("Vamos a arrancar con las operaciones. Para cada sección vas a tener 3 oportunidades. Arrancamos con la suma.");


let numeroA;
let numeroB;
let intentos;


for (let i = 1; i < 4; i++) {
       
        alert("Vas a ingresar dos números que sumados den 17.")

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
        alert("Ay hermanito, eran 3 oportunidades, hacete ver porque estás mal.")
};


alert("Llegó el momento de la resta.")





for (let i = 1; i < 4; i++) {
       
        alert("Vas a ingresar dos números que restados entre sí den 29.")

        numeroA = parseInt(prompt("Ingresar el primer número."));
        numeroB = parseInt(prompt("Ingresar el segundo número."));
        
                
        
        restar(numeroA, numeroB);
        
        


        if(resultado == 29) {
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
                alert("Bien, pasaste de jardín con 10.")
        }else {
                alert("Ya no sé si te perdono no hacerlo a la primera.")
        }


}else {
        alert("Profe de matemática no creo que vayas a ser... Supongo...\n\n\nO eso espero por nuestro bien.")
};


alert("Continuamos, espero que estés respondiendo bien eeeeeh. Toca multiplicar.")


for (let i = 1; i < 4; i++) {
       
        alert("Vas a ingresar dos números que multiplicados entre sí den como total 40.")

        numeroA = parseInt(prompt("Ingresar el primer número."));
        numeroB = parseInt(prompt("Ingresar el segundo número."));
        
                
        
        multiplicar(numeroA, numeroB);
        
        


        if(resultado == 40) {
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
                alert("Ahora me gusta más, es más reconocible hacerlo a la primera. Casi estás para Dinoco.")
        }else {
                alert("Está mal, pero no tan mal. Tan mal no está. Tan está no tan mal mal, diría Kaczka")
        }

}else {
        alert("No sé, quizás te lo perdono.")
};



alert("Llegó la batalla final. La división.")


for (let i = 1; i < 4; i++) {
       
        alert("Vas a ingresar dos números que dividido el primero por el segundo, den 5")

        numeroA = parseInt(prompt("Ingresar el primer número."));
        numeroB = parseInt(prompt("Ingresar el segundo número."));
        
                
        
        dividir(numeroA, numeroB);
        
        


        if(resultado == 5) {
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
                alert("La verdad, dejame felicitarte.\n\n\n\nPor llegar al último año de primaria.")
        }else {
                alert("Sabes qué? En esta si te perdono no darle a la primera.")
        }

}else {
        alert("No hagas una carrera que conlleve álgebra, estás al horno.")
};

alert("Terminó tu tortura, espero que hayas disfrutado un poquito al menos. Que sigas bien, " + nombre);


alert("Y así llegamos al final de este algoritmo. Inplementamos funciones, variables, if, else, do-while, switch y for. Además manejamos control de errores como se pudo.\n\n\n\nHasta la próxima.")


