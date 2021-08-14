let nombre = prompt('¿Cómo te llamas?');

let clases = parseInt(prompt('¿Cuantas clases tuviste este cuatrimestre?'));
let inasistencias = parseInt(prompt('¿Cuantas veces faltaste a clase este cuatrimestre?'));

let nota1 = parseInt(prompt('¿Cuanto te sacaste en el primer parcial?'));
let nota2 = parseInt(prompt('¿Cuanto te sacaste en el segundo parcial?'));

let  promedio = (nota1 + nota2) / 2;

let libre = false;

let porcentajeInasistencias = (inasistencias * 100) / clases;

if (porcentajeInasistencias > 20) {

    libre = true;
    
}

if ( libre == true ) {

    alert('Lamentablemente ' + nombre + ',\nquedaste LIBRE y deberás recursar.');
    
    
}

else if (promedio >= 7 && libre == false ) {

    alert('Felicidades ' + nombre + ',\nPROMOCIONASTE la materia con ' + promedio + ' .');
    
}

else if (promedio >= 4 && promedio < 7 && libre == false ) {

    alert('Felicidades ' + nombre + ',\nAPROBASTE la materia con ' + promedio + ' .');
    
}

else if (promedio < 4 && libre == false ) {

    alert('Lamentablemente ' + nombre + ',\nDESAPROBASTE la materia con ' + promedio + ' .');
    
}

