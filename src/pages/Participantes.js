import React from 'react';

import Layout from '../components/Layout';

import programa from '../assets/docs/ProgramaBorrador.pdf';


const IndexPage = () => (
  <Layout fullMenu>
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
            <li>Johan Puigdengolas (Université Toulouse Jean Jeurès)</li>
            <br/>
            <li>Jesús Rodríguez Velasco (Yale University)</li>
            <br/>
            <li>Jospeh T. Snow (Michigan State University)</li>
            <br/>
            </ul>
   
            <hr />
    {/* <br/> */}
    <br/>
      <h2 className="titblank">
      Comité Organizador:
      </h2>
      <br/>
      <ul>
        <li>Elisa Caselli (Universidad Nacional de San Martín)</li>
        <br/>
        <li>Gimena Del Río Riande (Conicet)</li>
        <br/>
        <li>Santiago Disalvo (IdIHCS. Conicet/UNLP)</li>
        <br/>
        <li>Daniel Panateri (Conicet/Unsam)</li>
        <br/>
            </ul>
            <hr />
    {/* <br/> */}
    <br/>
      <h2  className="titblank">
      Comité Colaborador:
      </h2>
      <br/>
      <ul>

        <li>Gabriel Calarco (Conicet)</li>
        <br/>
        <li>Fernanda Varela (FaHCE/UNLP)</li>
        <br/>
            </ul>
            <hr />
    {/* <br/> */}
    <br/>
      <h2  className="titblank">
      Comité Científico:
      </h2>
      <br/>
      <ul>
        <li>Carlos Alvar (Université de Genève)</li>
        <br/>
        <li>Carlos de Ayala (Universidad Autónoma de Madrid)</li>
        <br/>
        <li>Concepción Company Company (Universidad Nacional Autónoma de México)</li>
        <br/>
        <li>Juan Carlos Conde (University of Oxford)</li>
        <br/>
        <li>Gloria Chicote (IdIHCS. Conicet/ Universidad Nacional de La Plata)</li>
        <br/>
        <li>Jerry Craddock (University of California at Berkeley)</li>
        <br/>
        <li>José Manuel Fradejas Rueda (Universidad de Valladolid)</li>
        <br/>
        <li>Leonardo Funes (Conicet-Universidad de Buenos Aires)</li>
        <br/>
        <li>Ariel Guiance (Conicet-Universidad Naciona de Córdoba)</li>
        <br/>
        <li>Dominique Iogna Prat (Centre National de la Recherche Scientifique)</li>
        <br/>
        <li>Fermín Miranda (Universidad Autónoma de Madrid)</li>
        <br/>
        <li>Joseph O’Callaghan (Fordham University)</li>
        <br/>
        <li>Diego Quaglioni (Università di Trento)</li>
        <br/>
        <li>Pablo Ubierna (Conicet-Universidad Pedagógica Nacional)</li>
        <br/> 
          </ul>
          {/* <br/>
          <br/> */}
        </div>
      </section>

    </article>
  </Layout>
);

export default IndexPage;