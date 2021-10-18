$(document).ready(function () {

    console.log('DOM ready');

window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    router(window.location.hash)
});

let content = document.getElementById("content");

const router = (hash) => {
    content.innerHTML = "";
    switch (hash) {

        case '#/': {
            content.appendChild(home())
            return console.log("home")

        }
        case '': {
            content.appendChild(home())
            return console.log("home")

        }
        case "#/lista": {
            content.appendChild(lista());

            // AGREGAR O QUITAR COMICS

            const listaComics = $('#lista-comics');

            /* function nuevoItem(nombre) {

                listaComics.append(`<li> ${nombre}</li>`).animate({ "left": "0px" }, "slow");;
            } */

            function nuevoItem(nombre) {

                listaComics.append(`<li> ${nombre}</li>`);
            }



            for (let i = 0; i < localStorage.length; i++) {

                var clave = localStorage.key(i);
                var valor = JSON.parse(localStorage.getItem(clave));

                //console.log(valor.nombre);

                nuevoItem(valor.nombre);


            };


            let agregarComic = $('#btn-agregar');

            agregarComic.on("click", agregarComics);

            function agregarComics(e) {

                e.preventDefault();

                console.log('funcion agregar comics');

                let nombre = $('#nombre').val();
                let autor = $('#autor').val();
                let numeros = $('#numeros').val();
                let genero = $('#genero').val();

                console.log(nombre, autor, numeros, genero);

                let nuevoComic = new Comic(nombre, autor, numeros, genero);

                let i = localStorage.length;

                //console.log('localstorage legth: ' + i);

                localStorage.setItem('comic' + (i + 1), JSON.stringify(nuevoComic));

                nuevoItem(nombre);

                //console.log(nombre, autor, numeros, genero);
            }
            return console.log("lista")
        }

        case "#/personajes": {
            content.appendChild(personajes());


            //Agregar Personajes
            const personajesFila = $('#personajes-row');

            for (let i = 1; i <= 4; i++) {

                $.ajax({
                    method: "GET",
                    url: `https://akabab.github.io/superhero-api/api/id/${i}.json`,
                    // data: infoPost, 
                    success: function (res) {

                        //console.log(res);
                        personajesFila.append(`
                
               <div class="col-md-3  col-6">

                        <div class="card ">
                            <div class="card-header text-center">
                                <a class="no-dec" href="#">${res.name} </a>
                                <a class="no-dec" href="#"><b>${res.biography.publisher}</b></a>
                                
                            </div>

                            <img class="img-fluid" src="${res.images.md}"
                                alt="Comic Novedad Demon Slayer">


                        </div>

                 </div>
               
               
               `)


                    },


                });



            }

            //Agregar MAS

            const btnAgregarPersonajes = $('#btn-agregar-personajes');

            btnAgregarPersonajes.on('click', agregarPersonajesClick)

            function agregarPersonajesClick() {

                for (let i = 448; i <= 451; i++) {

                    $.ajax({
                        method: "GET",
                        url: `https://akabab.github.io/superhero-api/api/id/${i}.json`,
                        // data: infoPost, 
                        success: function (res) {

                            console.log(res);
                            personajesFila.append(`
                            
                           <div class="col-md-3  col-6">
            
                                    <div class="card ">
                                        <div class="card-header text-center">
                                            <a class="no-dec" href="#">${res.name} </a>
                                            <a class="no-dec" href="#"><b>${res.biography.publisher}</b></a>
                                            
                                        </div>
            
                                        <img class="img-fluid" src="${res.images.md}"
                                            alt="Comic Novedad Demon Slayer">
            
            
                                    </div>
            
                             </div>
                           
                           
                           `)


                        },


                    });



                }

                for (let i = 495; i <= 498; i++) {

                    $.ajax({
                        method: "GET",
                        url: `https://akabab.github.io/superhero-api/api/id/${i}.json`,
                        // data: infoPost, 
                        success: function (res) {

                            console.log(res);
                            personajesFila.append(`
                            
                           <div class="col-md-3  col-6">
            
                                    <div class="card ">
                                        <div class="card-header text-center">
                                            <a class="no-dec" href="#">${res.name} </a>
                                            <a class="no-dec" href="#"><b>${res.biography.publisher}</b></a>
                                            
                                        </div>
            
                                        <img class="img-fluid" src="${res.images.md}"
                                            alt="Comic Novedad Demon Slayer">
            
            
                                    </div>
            
                             </div>
                           
                           
                           `)


                        },


                    });



                }

                btnAgregarPersonajes.hide();

            }
            return console.log("personajes")
        }

        case "#/recomendados": {
            content.appendChild(recomendados());

            //SECCION OBTENER RECOMENDACION


let fila = $('.lista-recomendados');

console.log(fila);

fila.append(`

<div class='col-md-3 col-6'>
    <div class="card ">
        <div class="card-header text-center">
            <a class="no-dec" href="#">Sin <b>recomendaciones</b></a>
            
        </div>

        <img class="img-fluid" src="img/sections/novedades/q-mark.jpg"
            alt="Comic Novedad Batman">
        
            <form >
                        <div class="form-group">
                            <label class='my-2' for="genero">Seleccioná tu Género Favorito</label>
                            <select class="form-control" id="genero-rec">
                            
                            <option value="1" >Acción</option>
                            <option value="2">Terror</option>
                            <option value="3">Ciencia Ficción</option>
                            <option value="4">Fantasía</option>
                            
                            </select>
                        </div>

                    
                        <button type="submit" id="btn-recomendar" class="btn btn-dark my-2 ">Obtener Recomendación</button>
            </form>
        
        
            


    </div>
</div>

`);



let botonRecomendar = $('#btn-recomendar');

botonRecomendar.on('click', recomendarClick);


function recomendarClick(e) {


    e.preventDefault();


    let generoRec = $('#genero-rec').val();

    //console.log(generoRec);


    if (generoRec == 1 || generoRec == 2 || generoRec == 3 || generoRec == 4 || generoRec == 5) {

        recomendar(generoRec);
    } else {
        alert('Debés seleccionar un género del menú.')
    }



}

function recomendar(generoRec) {

    //console.log('funcion recomendar' + generoRec);

    switch (generoRec) {

        case '1':

            //console.log('genero accion');

            fila.hide().html(`<div class="col-md-3  col-6">

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

                                        </div>`).fadeIn(1500);

            break;

        case '2':

            //console.log('terror', 'Demon Slayer o Preacher');

            fila.hide().html(`<div class="col-md-3  col-6">

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

                                        </div>`).fadeIn(1500);

            break;
        case '3':

            //console.log('ciencia ficción', 'Wolverine o Attack on Titan');

            fila.hide().html(`<div class="col-md-3  col-6">

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

                                        </div>`).fadeIn(1500);

            break;
        case '4':

            //console.log('fantasía', "One Piece o Jojo's Golden WInd");

            fila.hide().html(`<div class="col-md-3  col-6">

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

                                        </div>`).fadeIn(1500);

            break;

        default:
            break;
    }


}

            return console.log("recomendados")
        }
        default:
            content.appendChild(notFound())
            return console.log("404")
    }
};


// CLASE COMIC

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

/* Creacion de 8 comics */

const comic1 = new Comic('Wolverine', 'Millar', 95, 'Ciencia Ficción');
const comic2 = new Comic('Attack on Titan', 'Isayama', 135, 'Ciencia Ficción');
const comic3 = new Comic('Batman', 'Snyder', 180, 'Acción');
const comic4 = new Comic('Superman', 'Johns', 850, 'Acción');
const comic5 = new Comic('Preacher', 'Ennis', 65, 'Terror');
const comic6 = new Comic('Demon Slayer', 'Gotouge', 122, 'Terror');
const comic7 = new Comic('One Piece', 'Oda', 1015, 'Fantasía');
const comic8 = new Comic('Jojo GoldenWind', 'Araki', 25, 'Fantasía');

const comicsArray = [comic1, comic2, comic3, comic4, comic5, comic6, comic7, comic8];

//localStorage.clear();


/* Guardado en localStorage */

for (let index = 0; index < comicsArray.length; index++) {


    localStorage.setItem('comic' + (index + 1), JSON.stringify(comicsArray[index]))

}














});