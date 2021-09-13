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


// AGREGAR O QUITAR COMICS

const listaComics = document.getElementById('lista-comics');

function nuevoItem(nombre) {


    let item = document.createElement("li");
    let itemTexto = document.createTextNode(nombre);

    item.appendChild(itemTexto);
    listaComics.appendChild(item);
}



for (let i = 0; i < localStorage.length; i++) {

    var clave = localStorage.key(i);
    var valor = JSON.parse(localStorage.getItem(clave));

    //console.log(valor.nombre);

    nuevoItem(valor.nombre);


};


let agregarComic = document.getElementById('btn-agregar');

agregarComic.addEventListener("click", agregarComics);

function agregarComics(e) {

    e.preventDefault();


    let nombre = document.getElementById('nombre').value;
    let autor = document.getElementById('autor').value;
    let numeros = document.getElementById('numeros').value;
    let genero = document.getElementById('genero').value;

    let nuevoComic = new Comic(nombre, autor, numeros, genero);

    let i = localStorage.length;

    console.log('localstorage legth: ' + i);

    localStorage.setItem('comic' + (i + 1), JSON.stringify(nuevoComic));

    nuevoItem(nombre);

    //console.log(nombre, autor, numeros, genero);
}

//SECCION OBTENER RECOMENDACION

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

                      <!-- <button type="submit" id="btn-agregar" class="btn btn-dark">Agregar</button> -->
                      <button type="submit" id="btn-recomendar" class="btn btn-dark my-2 ">Obtener Recomendación</button>
                </form>
    
    
        


</div>


`;



let botonRecomendar = document.getElementById('btn-recomendar');

botonRecomendar.addEventListener('click', recomendarClick);


function recomendarClick(e) {


    e.preventDefault();


    let generoRec = document.getElementById('genero-rec').value;

    //console.log(generoRec);


    if (generoRec == 1 || generoRec == 2 || generoRec == 3 || generoRec == 4 || generoRec == 5) {

        recomendar(generoRec);
    } else {
        alert('Debés seleccionar un género del menú.')
    }



}

function recomendar(generoRec) {

    console.log('funcion recomendar' + generoRec);

    switch (generoRec) {

        case '1':

            //console.log('genero accion');

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

        case '2':

            //console.log('terror', 'Demon Slayer o Preacher');

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
        case '3':

            //console.log('ciencia ficción', 'Wolverine o Attack on Titan');

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
        case '4':

            //console.log('fantasía', "One Piece o Jojo's Golden WInd");

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

        default:
            break;
    }


}