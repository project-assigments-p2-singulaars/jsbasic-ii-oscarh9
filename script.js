//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

const age = 12
if (age >= 18) {
console.log("Eres mayor de edad.");
} else {
console.log("No eres aún mayor de edad.");
}


//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.


//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"

const pet = "serpiente";
if (pet === "perro") {
    console.log("Tengo un perro.");
} else if (pet === "gato") {
    console.log("Tengo un gato.");
} else if (pet === "pájaro") {
    console.log("Tengo un pájaro");
} else {
    console.log("No tengo una mascota convencional");
}


//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.


//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

switch (pet) {
    case "perro":
    console.log("Tengo un perro.");
    break;

    case "gato":
    console.log("Tengo un gato.");
    break;

    case "pájaro":
    console.log("Tengo un pájaro");
    break;

    default:
    console.log("No tengo una mascota convencional.")
    break;
}


//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"

const weather = "frío"

const result = (weather === "soleado") ? "Me vestiré con un vestido" : "Me vestiré con pantalon";
console.log(result)

//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.

//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = 3;

if (typeof value === 'number') {
    console.log("Es un número");
} else if (typeof value === 'string') {
    console.log("Es un string");
} else {
    console.log("No es ni número ni string");
}

//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

//Escribe tu código aquí


//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }     
];

for (let index in programmers) {
    const programmer = programmers[index];
    console.log(`${index}: ${programmer.name} ${programmer.lastname}, su aporte fue ${programmer.knowledge}`);
}

//Escribe tu código aquí


//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Rocío', 'Lola', 'Antía', 'Laura', 'Noelia']

for (const name of names) {
    console.log('Hola, mi nombre es ' + name);
}

//Escribe tu código aquí


//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

/* let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
} */

//Escribe tu código aquí


//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

//Escribe tu código aquí


//Ejercicio 14: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

function saludar (nombre){
    return 'Hola ' + nombre + '! cómo estas?';
}

console.log(saludar("Oscar"));
console.log(saludar("Roger"));
console.log(saludar("Sara"));


//Ejercicio 15: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

function calcularAreaRectangulo (ancho, alto) {
    return ancho * alto;
}

console.log(calcularAreaRectangulo(10, 10));
console.log(calcularAreaRectangulo(2, 2));
console.log(calcularAreaRectangulo(3, 3));

