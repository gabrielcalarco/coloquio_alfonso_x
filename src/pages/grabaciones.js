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
        <h2>Sesiones grabadas</h2>  
        <br/>
        {/* <h3>Coloquio Internacional 800A: 'Qual deve el Rey ser': workshop por los ochocientos años del nacimiento de Alfonso X, el Sabio</h3>  */}
        {/* <p>Buenos Aires, 9, 10 y 11 de diciembre de 2021</p> */}
      </header>
      
      <section className="wrapper style5">
        <div className="inner">
        <p className="inscripcion">
     En el siguiente enlace podrás encontrar una lista de videos con las grabaciones de las sesiones del coloquio:
          </p> 
          </div>
          <br/>
          <div className='centrado'>
          <iframe className='centrado' width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLjxMH6JwH1oNkAq5QzOexSyGhbdGT83TV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
</section>
    </article>
  </Layout>
);

export default IndexPage;