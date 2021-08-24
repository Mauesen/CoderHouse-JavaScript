

let nombre = prompt('¿Cómo te llamas?');

alert('Hola ' + nombre + ', Bienvenido a WebComicSite. \nEscribí el número correspondiente a tu género favorito para obtener una recomendación :)');

let menu =10;

function recomendar(genero){

    const mensaje = (genero,obra) => alert('Si te gusta el género '+ genero + ', te recomendamos que leas '+ obra);

    switch (genero) {
    
        case 1:
    
            mensaje('acción', 'Batman o Superman');

            menu = genero;
    
            break;
            
        case 2:

            mensaje('terror', 'Demon Slayer o Preacher');

            menu = genero;
    
            break;
        case 3:

            mensaje('ciencia ficción', 'Wolverine o Attack on Titan');
            menu = genero;
    
            break;
        case 4:

            mensaje('fantasía', "One Piece o Jojo's Golden WInd");
            menu = genero;
    
            break;

        case 5:
       
            menu = genero;
    
            break;
    
    
        default:
            break;
    }


}



do {

    let genero = parseInt(prompt('1-Acción \n2-Terror \n3-Ciencia Ficción \n4-Fantasía \n5-Salir'));

    if (genero == 1 || genero == 2 || genero == 3 || genero == 4 || genero == 5) {
        
        recomendar(genero);
    }
    else{
        alert('Debés indicar un número del menú.')
    }
 
} while (menu != 5 );



