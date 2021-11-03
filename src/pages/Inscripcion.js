import React from 'react';

import Layout from '../components/Layout';



const IndexPage = () => (
  <Layout fullMenu>
    <section className="spotlight">
        <div className="content">
        <ul className="actions special">
          <li>
              <a href="/" className="button primary">
               Inicio 
              </a>  
              </li>
              <li>
              <a href="/Programa" className="button primary">
                Programa 
              </a>  
              </li>
              <li>
              <a href="/Participantes" className="button primary">
                Participantes
              </a>
              </li>
              <li>
              <a href="/Organizacion" className="button primary">
                Organización
              </a>
              </li>
        </ul>
        </div>
        </section>
    <article id="main">
      <header>
        <h2>inscripción</h2>  
        <br/>
        {/* <h3>Coloquio Internacional 800A: 'Qual deve el Rey ser': workshop por los ochocientos años del nacimiento de Alfonso X, el Sabio</h3>  */}
        {/* <p>Buenos Aires, 9, 10 y 11 de diciembre de 2021</p> */}
      </header>
      
      <section className="wrapper style5">
        <div className="inner">
        <p className="inscripcion">
          La asistentencia al Coloquio Internacional 800A: 'Qual deve el Rey ser' es una actividad gratuita. Para participar como asistente solo debe completar el siguiente <a className="enlace" href="https://forms.gle/mMogvcbYaJMzCVvx7" target="_blank">formulario de inscripción</a>.
       
          <br/>
          <br/>
            Se otorgarán certificados a quienes asistan a las actividades del coloquio.
          </p> 
      </div>
</section>
    </article>
  </Layout>
);

export default IndexPage;