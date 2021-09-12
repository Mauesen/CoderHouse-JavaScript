// CLASE Y VARIABLES

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
const comic2 = new Comic('Attack on Titan', 'Isayama', 135, 'Ciencia Ficción');
const comic3 = new Comic('Batman', 'Snyder', 180, 'Acción');
const comic4 = new Comic('Superman', 'Johns', 850, 'Acción');
const comic5 = new Comic('Preacher', 'Ennis', 65, 'Terror');
const comic6 = new Comic('Demon Slayer', 'Gotouge', 122, 'Terror');
const comic7 = new Comic('One Piece', 'Oda', 1015, 'Fantasía');
const comic8 = new Comic('Jojo GoldenWind', 'Araki', 25, 'Fantasía');

const comicsArray = [comic1, comic2, comic3, comic4, comic5, comic6, comic7, comic8];

/* localStorage.clear(); */


//MANEJO DEL DOM

const contenedor = document.getElementsByClassName('recomendacion-personalizada')[0];

let fila = document.createElement('div');

fila.classList.add("row", "recomendacion-personalizada");

contenedor.appendChild(fila);

let noRecCol = document.createElement('div');
noRecCol.classList.add("col-md-3", "col-6");


fila.appendChild(noRecCol);

noRecCol.innerHTML = `

<div class="card ">
    <div class="card-header text-center">
        <a class="no-dec" href="#">Sin <b>recomendaciones</b></a>
        
    </div>

    <img class="img-fluid" src="img/sections/novedades/nov2.jpg"
        alt="Comic Novedad Batman">
        <button id="btn-recomendar" class="btn btn-dark my-2 ">Obtener Recomendación</button>


</div>


`;



//MENU INICIAL


/* let nombre = prompt('¿Cómo te llamas?');

alert('Hola ' + nombre + ', Bienvenido a WebComicSite. \n¿Qué desea hacer?'); */

let menu = 3;

/* do {

    let opcion = parseInt(prompt('1-Listar Comics \n2-Agregar un Comic \n3-Salir '));

    for (let index = 0; index < comicsArray.length; index++) {


        localStorage.setItem('comic' + (index + 1), JSON.stringify(comicsArray[index]))

    }

    switch (opcion) {
        case 1:

            let lista = [];

            console.log(localStorage.length)

            for (let i = 0; i < localStorage.length; i++) {

                var clave = localStorage.key(i);
                var valor = JSON.parse(localStorage.getItem(clave));

                console.log(valor.nombre);
                lista.push((i + 1) + '-' + valor['nombre'] + ' // ' + valor['autor']);
            };

            console.log(lista);

            lista2 = lista.join('\n');

            alert(lista2);


            break;

        case 2:

            let n = prompt('Ingrese el nombre del cómic');
            let a = prompt('Ingrese el autor del cómic');
            let p = parseInt(prompt('Ingrese la cantidad de números publicados'));
            let g = prompt('Ingrese el genero del cómic');

            let i = localStorage.length;

            console.log('localstorage legth: ' + i);

            nuevoComic = new Comic(n, a, p, g);
            localStorage.setItem('comic' + (i + 1), JSON.stringify(nuevoComic));


            break;
        case 3:

            menu = 3;

            break;



        default:
            alert('Debés indicar un número del menú.');
            break;
    }

} while (menu != 3);
 */

let botonRecomendar = document.getElementById('btn-recomendar');

botonRecomendar.addEventListener('click', recomendarClick);



let menu2 = 10;


function recomendarClick() {

    alert('Escribí el número correspondiente a tu género favorito para obtener una recomendación :)');

    do {

        let genero = parseInt(prompt('1-Acción \n2-Terror \n3-Ciencia Ficción \n4-Fantasía \n5-Salir'));

        if (genero == 1 || genero == 2 || genero == 3 || genero == 4 || genero == 5) {

            recomendar(genero);
        } else {
            alert('Debés indicar un número del menú.')
        }

    } while (menu2 != 5);

}

function recomendar(genero) {



    const mensaje = (genero, obra) => alert('Si te gusta el género ' + genero + ', te recomendamos que leas ' + obra + '\n\nCheckeá la Sección Recomendados!');

    switch (genero) {

        case 1:

            mensaje('acción', 'Batman o Superman');

            menu2 = genero;

            fila.innerHTML = `<div class="col-md-3  col-6">

                                            <div class="card ">
                                                <div class="card-header text-center">
                                                    <a class="no-dec" href="#">${comic3.nombre}- <b>#${comic3.numerosPublicados}</b></a>
                                                    
                                                </div>

                                                <img class="img-fluid" src="img/sections/novedades/nov2.jpg"
                                                    alt="Comic Novedad Batman">


                                            </div>

                                        </div>
                                        
                                        <div class="col-md-3  col-6">

                                            <div class="card ">
                                                <div class="card-header text-center">
                                                    <a class="no-dec" href="#">${comic4.nombre}- <b>#${comic4.numerosPublicados}</b></a>
                                                    
                                                </div>

                                                <img class="img-fluid" src="img/sections/novedades/nov6.jpg"
                                                    alt="Comic Novedad Superman">


                                            </div>

                                        </div>`;

            break;

        case 2:

            mensaje('terror', 'Demon Slayer o Preacher');

            menu2 = genero;

            fila.innerHTML = `<div class="col-md-3  col-6">

                                            <div class="card ">
                                                <div class="card-header text-center">
                                                    <a class="no-dec" href="#">${comic5.nombre}- <b>#${comic5.numerosPublicados}</b></a>
                                                    
                                                </div>

                                                <img class="img-fluid" src="img/sections/novedades/nov8.jpg"
                                                    alt="Comic Novedad Demon Slayer">


                                            </div>

                                        </div>
                                        
                                        <div class="col-md-3  col-6">

                                            <div class="card ">
                                                <div class="card-header text-center">
                                                    <a class="no-dec" href="#">${comic6.nombre}- <b>#${comic6.numerosPublicados}</b></a>
                                                    
                                                </div>

                                                <img class="img-fluid" src="img/sections/novedades/nov1.jpg"
                                                    alt="Comic Novedad Preacher">


                                            </div>

                                        </div>`;

            break;
        case 3:

            mensaje('ciencia ficción', 'Wolverine o Attack on Titan');
            menu2 = genero;

            fila.innerHTML = `<div class="col-md-3  col-6">

                                            <div class="card ">
                                                <div class="card-header text-center">
                                                    <a class="no-dec" href="#">${comic1.nombre}- <b>#${comic1.numerosPublicados}</b></a>
                                                    
                                                </div>

                                                <img class="img-fluid" src="img/sections/novedades/nov3.jpg"
                                                    alt="Comic Novedad Wolverine">


                                            </div>

                                        </div>
                                        
                                        <div class="col-md-3  col-6">

                                            <div class="card ">
                                                <div class="card-header text-center">
                                                    <a class="no-dec" href="#">${comic2.nombre}- <b>#${comic2.numerosPublicados}</b></a>
                                                    
                                                </div>

                                                <img class="img-fluid" src="img/sections/novedades/nov5.jpg"
                                                    alt="Comic Novedad Attack on Titan">


                                            </div>

                                        </div>`;

            break;
        case 4:

            mensaje('fantasía', "One Piece o Jojo's Golden WInd");
            menu2 = genero;

            fila.innerHTML = `<div class="col-md-3  col-6">

                                            <div class="card ">
                                                <div class="card-header text-center">
                                                    <a class="no-dec" href="#">${comic7.nombre}- <b>#${comic7.numerosPublicados}</b></a>
                                                    
                                                </div>

                                                <img class="img-fluid" src="img/sections/novedades/nov4.jpg"
                                                    alt="Comic Novedad One Piece">


                                            </div>

                                        </div>
                                        
                                        <div class="col-md-3  col-6">

                                            <div class="card ">
                                                <div class="card-header text-center">
                                                    <a class="no-dec" href="#">${comic8.nombre}- <b>#${comic8.numerosPublicados}</b></a>
                                                    
                                                </div>

                                                <img class="img-fluid" src="img/sections/novedades/nov7.jpg"
                                                    alt="Comic Novedad Jojos Golden Wind">


                                            </div>

                                        </div>`;

            break;

        case 5:

            menu2 = genero;

            break;


        default:
            break;
    }


}










