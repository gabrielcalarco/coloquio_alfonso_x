import React from 'react';

import Layout from '../components/Layout';

import programa from '../assets/docs/ProgramaBorrador.pdf';


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
              <a href="/coloquio_alfonso_x/Participantes" className="button primary">
                Participantes
              </a>
              </li>
              <li>
              <a href="/coloquio_alfonso_x/Programa" className="button primary">
                Organización
              </a>
              </li>
              <li>
              <a href="/coloquio_alfonso_x/Asistentes" className="button primary">
                Asistentes
              </a>
              </li>
        </ul>
        </div>
        </section>
    <article id="main">
      <header>
        <h2>Programa</h2>  
        <br/>
        {/* <h3>Coloquio Internacional 800A: 'Qual deve el Rey ser': workshop por los ochocientos años del nacimiento de Alfonso X, el Sabio</h3>  */}
        {/* <p>Buenos Aires, 9, 10 y 11 de diciembre de 2021</p> */}
      </header>
      
      <section className="wrapper style5">
        <div className="inner">
        {/* <hr /> */}
          <h3 className="titblank">Jueves 9 de diciembre / Thursday, 9 December </h3>
          <hr />
         <ul>
          <li><b>09:00 - 09:15 hs. -</b> Palabras de Apertura / Opening Speech</li>  
          <br/>
          <p className="tabulado"><b>Luis Marina Bravo</b> Consejero Cultural del Centro Cultural de España en Buenos Aires, Agencia Española de Cooperación Internacional para el Desarrollo (AECID) de la Embajada de España en Argentina.</p>
           

          <hr />
          <li><b>09:15 - 10:45 hs. -</b> Panel 1 (primera parte):</li>
          <br/>
          <p className="tabulado_gris"><b>Coordinadora / Chair: Elisa Caselli</b> </p>

          <p className="tabulado"><b>Fradejas Rueda, José Manuel (Universidad de Valladolid)</b> “Francisco de Velasco, segundo editor de las <i>Siete Partidas</i>”</p>

          <p className="tabulado"><b>Cossío Olavide, Mario (Universidad de Alcalá de Henares)</b> “El <i>Lucidario</i>: otra rebelión literaria contra Alfonso X”</p>
          
         <hr />
         <li><b>10:50 - 11:15 hs. -</b> Coffee Break</li>
         <hr />

         <li><b>11:00 - 12:30 hs. -</b> Panel 1 (segunda parte):</li>
          <br/>

         <p className="tabulado"><b>García-Fernández, Miguel (Universidad de Santiago de Compostela)</b> “Milia e Sancha Fernandiz, que muit’amo’. El poder nobiliario femenino en tiempos de Alfonso X”</p>

         <p className="tabulado"><b>Marey, Alexander (Higher School of Economics)</b> “Cual debe el Rey ser a su tierra: el concepto de la tierra en las <i>Partidas</i>”</p>

         <hr />
         <li><b>12:30 - 13:30 hs. -</b> Almuerzo / Lunch</li>
         <hr />

         <li><b>13:30 - 15:00 hs. -</b> Panel 2 (primera parte):</li>
          <br/>

          <p className="tabulado_gris"><b>Coordinador / Chair: Santiago Disalvo</b> </p>

          <p className="tabulado"><b>Morin, Alejandro (Universidad Nacional de Córdoba/ Universidad de Buenos Aires/Conicet)</b> “Notas sobre referencias a la moneda en <i>Siete Partidas</i>”</p>

          <p className="tabulado"><b>Panateri, Daniel (Conicet) </b> “Teoría penal en <i>Siete Partidas</i>”</p>
         
         <hr /> 
         <li><b>15:00 - 15:15 hs. -</b> Coffee Break</li>
         <hr />
         
         <li><b>13:30 - 15:00 hs. -</b> Panel 2 (segunda parte):</li>
          <br/>
         
         <p className="tabulado"><b>Puigdengolas, Johan (Université Toulouse Jean Jaurès)</b> “Razonamiento alfonsí: la ley XI del <i>Setenario</i> como sistema filosófico”</p>
         
         <p className="tabulado"><b>Rodríguez Velasco, Jesús (Yale University)</b> “¿Cómo no leer las <i>Siete Partidas</i>?”</p>
         
          </ul>
          <hr />    
          <h3 className="titblank">Viernes 10 de diciembre / Friday, 10 December</h3>
          <hr />
         <ul>
          <li><b>09:00 - 10:30 hs. -</b> Panel 3 (primera parte):</li>
          <br/>

          <p className="tabulado_gris"><b>Coordinadora / Chair: Gimena Del Río Riande</b> </p>

          <p className="tabulado"><b>Lacomba, Marta (Université Bordeaux Montaigne)</b> “El lugar del saber natural en el pensamiento alfonsí”</p>

          <p className="tabulado"><b>Carlos Heusch (École normale supérieure de Lyon)</b> “El amor que nasce del debdo (2ª <i>Partida</i>, XIII, 14)”</p>

         <hr />
         <li><b>10:30 - 10:45 hs. -</b> Coffee Break</li>
         <hr />
         <li><b>10:45 - 12:15 hs. -</b> Panel 3 (segunda parte):</li>
          <br/>

          <p className="tabulado"><b>Pichel, Ricardo (Universidad de Alcalá de Henares)</b> “La recepción de las <i>Partidas</i> de Alfonso el Sabio en la Galicia medieval (ss. XIII-XV)”</p>

          <p className="tabulado"><b>Fernández Fernández, Laura (Universidad Complutense de Madrid) </b> “Las Tablas Alfonsíes: nuevas fuentes y testimonios documentales”</p>
          </ul>

          <hr />
          <h3 className="titblank">Sábado 11 de diciembre / Saturday, 11 December</h3>
          <hr />

         <ul>
          <li><b>09:00 - 10:30 hs. -</b> Panel 4 (primera parte):</li>
          <br/>
          <p className="tabulado_gris"><b>Coordinador / Chair: Daniel Panateri</b> </p>

          <p className="tabulado"><b>Joseph T. Snow  (Michigan State University)</b> “La primera redacción (To) de las <i>Cantigas</i> de Alfonso X, su arquitecto”</p>

          <p className="tabulado"><b>Del Río Riande, Gimena (Conicet)</b> “El cancionero profano de Alfonso X: problemas de ecdótica y crítica textual”</p>

         <hr />
         <li><b>10:30 - 10:45 hs. -</b> Coffee Break</li>
         <hr />
         <li><b>10:45 - 12:45 hs. -</b> Panel 4 (segunda parte):</li>
          <br/>
         <p className="tabulado"><b>Disalvo, Santiago (IdIHCS. Universidad Nacional de La Plata/Conicet)</b> “Inglaterra y el mundo británico en algunas de las <i>Cantigas de Santa María</i>”</p>

          <p className="tabulado"><b>Fidalgo, Elvira (Universidad de Santiago de Compostela)</b> “Las mujeres y los dados en la poesía de Alfonso X”</p>
         <hr />
         <li><b>12:15 - 13:00 hs. -</b> Cierre de coloquio.</li>
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
