const home = () => {
    const views = ` <!-- Ranking Semanal-->
    <section id="ranking_semanal">

        <div class="container">

            <h2 class="titulo "> Ranking Semanal</h2>

            <div class="row">

                <div class="top-1 col-md-6 ">

                    <div class="card ">

                        <a href="#">
                            <img class="img-fluid py-1" src="img/sections/ranking/top1.jpg"
                                alt="Comic Puesto 1 One Piece">
                        </a>

                        <div class="card-header text-center ">
                            <b>#1</b> - One Piece - Eiichiro Oda
                        </div>

                    </div>



                </div>

                <div class="top-4 col-md-6 ">


                    <div class="row">


                        <img src="img/sections/ranking/top2.jpg" alt="Comic Puesto 2 Batman"
                            class="top-4__img  col-md-6 col-12">


                        <div class=" col-md-6 col-12 center "> <a class="no-dec" href="#"><b>#2</b> - Batman -
                                Snyder/Capullo</a> </div>

                    </div>

                    <div class="row">



                        <img src="img/sections/ranking/top3.jpg" alt="Comic Puesto 3 Dragon Ball"
                            class="top-4__img col-md-6 col-12">



                        <div class=" col-md-6 col-12 center "> <a class="no-dec" href="#"><b>#3</b> - Dragon Ball -
                                Toriyama </a></div>

                    </div>

                    <div class="row">



                        <img src="img/sections/ranking/top4.jpg" alt="Comic Puesto 4 Wolverine"
                            class="top-4__img col-md-6 col-12">


                        <div class=" col-md-6 col-12 center "> <a class="no-dec" href="#"><b>#4</b> - Wolverine -
                                Millar/Jr.Jr</a> </div>

                    </div>

                    <div class="row">



                        <img src="img/sections/ranking/top5.jpg" alt="Comic Puesto 5 Demon Slayer"
                            class="top-4__img col-md-6 col-12">


                        <div class=" col-md-6 col-12 center "> <a class="no-dec" href="#"><b>#5</b> - Demon Slayer -
                                Gotouge</a>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
    <!-- Ranking Semanal END-->




    <!-- Rese??as Recomendadas -->

    <section id="rese??as_recomendadas">

        <div class="container ">

            <h2 class="titulo "> Rese??as Recomendadas</h2>

            <div class="row division">
                <div class="col-md-6">

                    <img src="img/sections/resena/review1.jpg" alt="Imagen rese??a Spiderman"
                        class=" img-fluid rese??a-1__img">

                    <div class=" row center">

                        <a class="no-dec" href="#">
                            <h3 class="col-12 text-center">SPIDERMAN: TODA UNA VIDA</h3>
                        </a>
                        <p class=" col-12 ">??Y si toda la vida de <b>Spiderman</b> en los c??mics del Universo Marvel
                            hubiera transcurrido en tiempo real?
                            ??Y si <b>Peter Parker</b> no hubiera quedado congelado en la treintena y hubiera
                            envejecido de manera normal?
                        </p>

                    </div>


                </div>
                <div class="col-md-6 rese??as__video">

                    <div class="row center">

                        <h4 class="col-12 text-center">100% Marvel HC. Spiderman: Toda una vida</h4>
                        <p class="col-12">Para celebrar el octog??simo aniversario de Marvel, Chip Zdarsky y Mark
                            Bagley se unen para una historia ??nica de Spidey,
                            contando su vida de principio a fin,
                            como si sus casi seis d??cadas de trayectoria como personaje hubieran transcurrido en
                            tiempo real.
                        </p>

                    </div>


                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/s2gPeUQTjec"
                            allowfullscreen></iframe>
                    </div>


                </div>
            </div>


            <div class="row division">
                <div class="col-md-6">

                    <img src="img/sections/resena/review2.jpg" alt="Imagen rese??a Preacher"
                        class=" img-fluid rese??a-1__img">

                    <div class=" row center">

                        <a class="no-dec" href="#">
                            <h3 class="col-12 text-center">PREACHER: LIBRO 1</h3>
                        </a>
                        <p class=" col-12 ">
                            Jesse Custer es un predicador que acaba de recibir un poder sobrehumano, lo que caus?? un
                            desastre tal que destruyo la
                            iglesia Annieville con casi todo el pueblo adentro, por lo cual Jesse es perseguido como
                            principal sospechoso de esa matanza,
                            ese poder sobrenatural consiste en que sus palabras son obedecidas en contra de la
                            voluntad, lo que el dice se hace.
                        </p>

                    </div>


                </div>
                <div class="col-md-6 rese??as__video">

                    <div class="row center">

                        <h4 class="col-12 text-center">El poder de predicar</h4>
                        <p class="col-12">La explicaci??n de lo que tiene el Reverendo Custer es la siguiente,
                            en el cielo existe dos grupos de ??ngeles los Adephi (cient??ficos y encargado de todas
                            los quehaceres) y los Seraphi (los guerreros),
                            los Adephi deb??an mantener encerrado a G??nesis,
                            el fruto del amor de un ??ngel con un demonio, pero este ente escapa y entra en el cuerpo
                            de Jesse, es lo que causa la explosi??n.
                        </p>

                    </div>


                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/47RoZ4l_QCw"
                            allowfullscreen></iframe>
                    </div>

                </div>
            </div>

        </div>

    </section>

    <!-- Rese??as Recomendadas END-->`;
    const divHome = document.createElement('div')
    divHome.innerHTML = views;

    return divHome;
}

const lista = () => {
    const views = `        <!-- Lista -->

    <section id="novedades">

        <div class="container lista">

            <h2 class="titulo "> Lista </h2>

            <div class="row">

                <div class="col-md-6 px-5">

                    <ul id="lista-comics">

                    </ul>

                </div>

                <div class="col-md-6">

                    <form>

                        <h4 class="text-center">Agregar Comic</h4>
                        <div class="form-group">
                          
                           <label for="nombre">Nombre</label>
                          <input type="text" class="form-control" id="nombre" >
                         
                        </div>

                        <div class="form-group">
                          
                            <label for="autor">Autor</label>
                           <input type="text" class="form-control" id="autor" >
                          
                         </div>

                         <div class="form-group">
                          
                            <label for="numeros">N??meros</label>
                           <input type="number" class="form-control" id="numeros" >
                          
                         </div>

                         <div class="form-group">
                          
                            <label for="genero">G??nero</label>
                           <input type="text" class="form-control" id="genero" >
                          
                         </div>
                       
                        <button type="submit" id="btn-agregar" class="btn btn-dark">Agregar</button>
                      </form>
                </div>
            </div>


        </div>
    </section>

    <!-- Lista END-->`;
    const divLista = document.createElement('div')
    divLista.innerHTML = views;

    return divLista;
}

const personajes = () => {
    const views = `<!-- Personajes -->

    <section id="personajes">
    
        <div class="container">
    
            <h2 class="titulo "> Conoc?? nuevos Personajes</h2>
    
            <div id="personajes-row" class="row">
    
                
    
    
    
            </div>
    
            <div class="row">
                <div class="col">
    
                    <button id="btn-agregar-personajes" class="btn btn-dark my-3 mx-3">Ver m??s</button>
    
                </div>
               
            </div>
    
           
    
        </div>
    </section>
    
    <!-- Personajes END-->`;
    const divPersonajes = document.createElement('div')
    divPersonajes.innerHTML = views;

    return divPersonajes;
}

const recomendados = () => {
    const views = ` <!-- Recomendados -->

    <section  id="novedades">
   
       <div class="container recomendacion-personalizada">
   
           <h2 class="titulo "> Recomendados para vos! </h2>
   
           <div class="row lista-recomendados">

            
   
               
           </div>
   
       </div> 
   </section>
   
   <!-- Recomendados END-->`;
    const divRecomendados = document.createElement('div')
    divRecomendados.innerHTML = views;

    return divRecomendados;
}

const notFound = () => {
    const views = ` <!-- Recomendados -->

    <section  id="novedades">
   
       <div class="container recomendacion-personalizada">
   
           <h2 class="titulo "> P??gina no encontrada. </h2>
   
           <div class="row lista-recomendados">

           <div class="col-md-3  col-6">

                <div class="card ">
                    <div class="card-header text-center">
                        <a class="no-dec" href="#">Error <b>#404</b></a>
                        
                    </div>

                    <img class="img-fluid" src="img/sections/novedades/404.jpg"
                        alt="Comic Novedad Batman">


                </div>

            </div>
   
               
           </div>
   
       </div> 
   </section>
   
   <!-- Recomendados END-->`;
    const divNotFound = document.createElement('div')
    divNotFound.innerHTML = views;

    return divNotFound;
}
