import React from 'react';

import Layout from '../components/Layout';

import programa from '../assets/docs/ProgramaBorrador.pdf';
const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Programa</h2>  
        <br/>
        <h3>Coloquio Internacional 800A: 'Qual deve el Rey ser': workshop por los ochocientos años del nacimiento de Alfonso X, el Sabio</h3> 
        {/* <p>Buenos Aires, 9, 10 y 11 de diciembre de 2021</p> */}
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Jueves 9 de diciembre / Thursday, 9 December </h3>
          <hr />
         <ul>
          <li><b>09:00 - 09:15 hs. -</b> Palabras de Apertura / Opening Speech</li>  
          <hr />
          <li><b>09:15 - 13:00 hs. -</b> Panel 1</li>
          <br/>
          <p className="tabulado_gris"><b>Coordinador / Chair: Elisa Caselli</b> </p>
          <p className="tabulado"><b>Lacomba, Marta (Université Bordeaux Montaigne)</b> “”</p>
          <p className="tabulado"><b>Marey, Alexander (Higher School of Economics)</b> “”</p>
         <hr />
         <li><b>10:50 - 11:15 hs. -</b> Coffee Break</li>
         <hr />
         <p className="tabulado"><b>García-Fernández, Miguel (Universidad de Santiago de Compostela)</b> “Milia e Sancha Fernandiz, que muit’amo’. El poder nobiliario femenino en tiempos de Alfonso X”</p>
          <p className="tabulado"><b>Cossío Olavide, Mario (Universidad de Alcalá de Henares)</b> “El Lucidario: otra rebelión literaria contra Alfonso X”</p>
          <p className="tabulado"><b>Caselli, Elisa (Universidad Nacional de San Martín)</b> “”</p>
          <hr />
         <li><b>13:30 - 14:30 hs. -</b> Almuerzo / Lunch</li>
         <hr />
         <li><b>14:30 - 17:30 hs. -</b> Panel 2</li>
          <br/>
          <p className="tabulado_gris"><b>Coordinador / Chair: Daniel Panateri</b> </p>
          <p className="tabulado"><b>Morin, Alejandro (Universidad Nacional de Córdoba/ Universidad de Buenos Aires/Conicet)</b> “Notas sobre referencias a la moneda en Siete Partidas”</p>
          <p className="tabulado"><b>Panateri, Daniel (Conicet) </b> “”</p>
         <hr /> 
         <li><b>15:45 - 16:00 hs. -</b> Coffee Break</li>
         <hr />
         <p className="tabulado"><b>Puigdengolas, Johan (Université Toulouse Jean Jaurès)</b> “”</p>
          <p className="tabulado"><b>Rodríguez Velasco, Jesús (Yale University)</b> “”</p>
          </ul>
          <hr />    
          <h3>Viernes 10 de diciembre / Friday, 10 December</h3>
          <hr />
         <ul>
          <li><b>09:00 - 13:00 hs. -</b> Panel 3</li>
          <br/>
          <p className="tabulado_gris"><b>Coordinador / Chair: Santiago Disalvo</b> </p>
          <p className="tabulado"><b>Lacomba, Marta (Université Bordeaux Montaigne)</b> “La primera redacción (To) de las Cantigas de Alfonso X, su arquitecto”</p>
          <p className="tabulado"><b>Del Río Riande, Gimena (Conicet)</b> “”</p>
         <hr />
         <li><b>11:00 - 11:30 hs. -</b> Coffee Break</li>
         <hr />
         <p className="tabulado"><b>Disalvo, Santiago (IdIHCS. Universidad Nacional de La Plata/Conicet)</b> “Inglaterra y el mundo británico en algunas de las Cantigas de Santa María”</p>
          <p className="tabulado"><b>Fidalgo, Elvira (Universidad de Santiago de Compostela)</b> “”</p>
          </ul>
          <hr />

          <h3>Sábado 11 de diciembre / Saturday, 11 December</h3>
          <hr />
         <ul>
          <li><b>09:00 - 13:00 hs. -</b> Panel 4</li>
          <br/>
          <p className="tabulado_gris"><b>Coordinador / Chair: Gimena Del Río Riande</b> </p>
          <p className="tabulado"><b>Pichel, Ricardo (Universidad de Alcalá de Henares)</b> “”</p>
          <p className="tabulado"><b>Fradejas Rueda, José Manuel (Universidad de Valladolid)</b> “Francisco de Velasco, segundo editor de las Siete Partidas”</p>
         <hr />
         <li><b>10:30 - 11:00 hs. -</b> Coffee Break</li>
         <hr />
         <p className="tabulado"><b>Fernández Fernández, Laura (Universidad Complutense de Madrid) </b> “”</p>
         <hr />
         <li><b>12:00 - 12:15 hs. -</b> Palabras de Cierre / Closing Speech</li>
          </ul>
          <hr />
         
         
        </div>
      </section>
      <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Programa del coloquio en PDF</h2>
        </header>
        <ul className="actions stacked">
          <li>
            <a href={programa} download className="button fit primary">
              Descargar
            </a>
          </li>
        </ul>
      </div>
    </section>

    </article>
  </Layout>
);

export default IndexPage;
