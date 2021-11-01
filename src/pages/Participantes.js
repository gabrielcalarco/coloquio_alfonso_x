import React from 'react';

import Layout from '../components/Layout';




const IndexPage = () => (
  <Layout fullMenu>
    <section className="spotlight">
        <div className="content">
        <ul className="actions special">
          <li>
              <a href="/coloquio_alfonso_x/" className="button primary">
               Inicio 
              </a>  
              </li>
              <li>
              <a href="/coloquio_alfonso_x/Programa" className="button primary">
                Programa 
              </a>  
              </li>
              <li>
              <a href="/coloquio_alfonso_x/Organizacion" className="button primary">
                Organización
              </a>
              </li>
              <li>
              <a href="/coloquio_alfonso_x/Inscripcion" className="button primary">
                Inscripción
              </a>
              </li>
        </ul>
        </div>
        </section>
    <article id="main">
      <header>
        <h2>Participantes</h2>  
        <br/>
        {/* <h3>Coloquio Internacional 800A: 'Qual deve el Rey ser': workshop por los ochocientos años del nacimiento de Alfonso X, el Sabio</h3>  */}
        {/* <p>Buenos Aires, 9, 10 y 11 de diciembre de 2021</p> */}
      </header>
      
      <section className="wrapper style5">
        <div className="inner">
        <h2 className="titblank">
          Participantes:
          </h2>
          <br/>
          {/* <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p> */}
          <ul>
          <li>Elisa Caselli (Universidad Nacional de San Martín)</li>
          <br/>
            <li>Mario Cossío (Universidad de Alcalá de Henares)</li>
            <br/>
            <li>Santiago Disalvo (IdIHCS. Conicet/UNLP)</li>
            <br/>
            <li>Gimena Del Río Riande (Conicet)</li>
            <br/>
            <li>Laura Fernández (Universidad Complutense de Madrid)</li>
            <br/>
            <li>Elvira Fidalgo (Universidad de Santiago de Compostela)</li>
            <br/>
            <li>José Manuel Fradejas Rueda (Universidad de Valladolid)</li>
            <br/>
            <li>Miguel García-Fernández (Universidad de Santiago de Compostela)</li>
            <br/>
            <li>Carlos Heusch (École Normale Supérieure de Lyon)</li>
            <br/>
            <li>Marta Lacomba (Université Bourdeaux Montaigne)</li>
            <br/>
            <li>Alexander Marey (Higher School of Economics)</li>
            <br/>
            <li>Alejandro Morin (Conicet/UBA/UNC)</li>
            <br/>
            <li>Daniel A. Panateri (Conicet/Unsam)</li>
            <br/>
            <li>Ricardo Pichel (Universidad de Alcalá de Henares)</li>
            <br/>
            <li>Johan Puigdengolas (Université Toulouse Jean Jaurès)</li>
            <br/>
            <li>Jesús Rodríguez Velasco (Yale University)</li>
            <br/>
            <li>Jospeh T. Snow (Michigan State University)</li>
            <br/>
            </ul>
            {/* <hr /> */}
      </div>
</section>
    </article>
  </Layout>
);

export default IndexPage;
