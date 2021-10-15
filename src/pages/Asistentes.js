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
              <a href="/coloquio_alfonso_x/Programa" className="button primary">
                Programa 
              </a>  
              </li>
              <li>
              <a href="/coloquio_alfonso_x/Participantes" className="button primary">
                Participantes
              </a>
              </li>
              <li>
              <a href="/coloquio_alfonso_x/Organizacion" className="button primary">
                Organización
              </a>
              </li>
        </ul>
        </div>
        </section>
    <article id="main">
      <header>
        <h2>Asistentes</h2>  
        <br/>
        {/* <h3>Coloquio Internacional 800A: 'Qual deve el Rey ser': workshop por los ochocientos años del nacimiento de Alfonso X, el Sabio</h3>  */}
        {/* <p>Buenos Aires, 9, 10 y 11 de diciembre de 2021</p> */}
      </header>
      
      <section className="wrapper style5">
        <div className="inner">
        <h3 className="titblank">
          Información importante para quienes deseen asistir al coloquio:
          </h3>
          <br/>
          <p>
            Se otorgaran certificados a quienes se participen como asistenes de las actividades del coloquio. Proximamente se pondrá a disposición el formulario de inscripción.
          </p> 
      </div>
</section>
    </article>
  </Layout>
);

export default IndexPage;