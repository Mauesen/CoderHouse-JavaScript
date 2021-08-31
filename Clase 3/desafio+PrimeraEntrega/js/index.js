class Comic {

    constructor(nombre, autor, numerosPublicados, genero) {

        this.nombre = nombre;
        this.autor = autor;
        this.numerosPublicados = numerosPublicados;
        this.genero = genero;
    }

    listar() {
        return this.nombre + ' // ' + this.autor;
    }

    describir() {
        alert('El comic ' + this.nombre + ' es escrito por ' + this.autor + ' y lleva ' + this.numerosPublicados + ' números publicados. Su género es ' + this.genero);
    }

}

const comic1 = new Comic('Wolverine', 'Millar', 95, 'Ciencia Ficción');
const comic2 = new Comic('Batman', 'Snyder', 180, 'Acción');
const comic3 = new Comic('Preacher', 'Ennis', 65, 'Terror');
const comic4 = new Comic('One Piece', 'Oda', 1015, 'Fantasía');

const comicsArray = [comic1, comic2, comic3, comic4];


let nombre = prompt('¿Cómo te llamas?');

alert('Hola ' + nombre + ', Bienvenido a WebComicSite. \n¿Qué desea hacer?');

let menu = 10;

do {

    let opcion = parseInt(prompt('1-Listar Comics \n2-Agregar un Comic \n3-Recibir una Recomendación \n4-Salir '));

    switch (opcion) {
        case 1:

            let lista =[];

            for (let i = 1; i <= comicsArray.length; i++) {


                lista.push(i + '-' + comicsArray[i - 1].listar())
            }

            lista2 = lista.join('\n');

            alert(lista2 + '\n\nSi desea una descripción detallada ingrese el número del cómic a continuación, si no pulse Enter');

            desc = parseInt(prompt('Ingrese número:'));

            console.log('desc:' + desc);

            if (desc <= comicsArray.length ) {

                console.log('if desc:' + desc);
                comicsArray[desc-1].describir();
            }
            else if (desc > comicsArray.length ) {

                alert('El número no es válido');
            }
            else{

                break;
                
            }
           

            break;

        case 2:

            let n = prompt('Ingrese el nombre del cómic');
            let a = prompt('Ingrese el autor del cómic');
            let p = parseInt(prompt('Ingrese la cantidad de números publicados'));
            let g = prompt('Ingrese el genero del cómic');

            comicsArray.push(new Comic(n, a, p, g));

            break;
        case 3:
            alert('Escribí el número correspondiente a tu género favorito para obtener una recomendación :)');
            let menu2 = 10;

            function recomendar(genero) {

                const mensaje = (genero, obra) => alert('Si te gusta el género ' + genero + ', te recomendamos que leas ' + obra);

                switch (genero) {

                    case 1:

                        mensaje('acción', 'Batman o Superman');

                        menu2 = genero;

                        break;

                    case 2:

                        mensaje('terror', 'Demon Slayer o Preacher');

                        menu2 = genero;

                        break;
                    case 3:

                        mensaje('ciencia ficción', 'Wolverine o Attack on Titan');
                        menu2 = genero;

                        break;
                    case 4:

                        mensaje('fantasía', "One Piece o Jojo's Golden WInd");
                        menu2 = genero;

                        break;

                    case 5:

                        menu2 = genero;

                        break;


                    default:
                        break;
                }


            }



            do {

                let genero = parseInt(prompt('1-Acción \n2-Terror \n3-Ciencia Ficción \n4-Fantasía \n5-Salir'));

                if (genero == 1 || genero == 2 || genero == 3 || genero == 4 || genero == 5) {

                    recomendar(genero);
                } else {
                    alert('Debés indicar un número del menú.')
                }

            } while (menu2 != 5);


            break;
        case 4:

            
            menu = 5;

            break;


        default:
            alert('Debés indicar un número del menú.');
            break;
    }

} while (menu != 5);