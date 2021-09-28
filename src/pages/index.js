import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import programa from '../assets/docs/ProgramaBorrador.pdf';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <br/>
        <br/>
        <h3>800A: "Qual deve el Rey ser": workshop por los ochocientos años del nacimiento de Alfonso X el Sabio</h3>
        <br/>
        <p>{config.subHeading}</p>
        <br/>
     
        <ul className="actions special">
          <li>
            {/* <Scroll type="id" element="one"> */}
              <a href="/coloquio_alfonso_x/Programa" className="button primary">
              {/* <a href="/Programa" className="button primary"> */}
                programa
              </a>
            {/* </Scroll> */}
          </li>
        </ul>
      </div>
      <br/>
        <br/>
        <br/>
      <Scroll type="id" element="two">
        <a href="#two" className="more">
          Seguir leyendo
        </a>
      </Scroll>
    </section>

    {/* <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Arcu aliquet vel lobortis ata nisl
            <br />
            eget augue amet aliquet nisl cep donec
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section> */}
<section id="two" className="wrapper alt style2">

      <section className="spotlight">
        {/* <div className="image">
          <img src={pic2} alt="" />
        </div> */}
        <div className="content">
          {/* <br/>
          <br/> */}
          {/* <h2>
            Tortor dolore feugiat
            elementum magna
          </h2> */}
          <br/>
          <p>
          El 23 de noviembre de 1221 nació en Toledo Alfonso X, quien más tarde sería apodado el Sabio. Tras ochocientos años, este rey castellano goza de buena salud en pleno siglo XXI. Su figura y obra son una clave del mundo occidental, especialmente el hispanoamericano, desde el siglo XIII hasta nuestros días. Basta con ir a visitar la Biblioteca Nacional de España, en Madrid, para comprobar frente a su efigie, al pie de las escalinatas de dicha institución, que es su figura la que da la bienvenida al gran fondo de la cultura hispanoparlante en la Península. Pero su vitalidad no se encuentra como tesoro vetusto, sino como un fenómeno de presencia asegurada en su potencia regia. Alfonso X consiguió, a través de sus obras, convertirse en símbolo del poder monárquico español y, por qué no, en una categoría cultural.</p> 
          <p>La potencia e importancia de las producciones de este rey en el espacio hispanoamericano son cruciales. Entre el siglo XIII, que le fue propio, y el siglo XX, momento de la última promulgación de su código legal en España (1969), sus obras historiográficas, líricas, científicas y jurídicas han sido de una influencia insoslayable.</p> 
          <p>En ese sentido, a partir de los ochocientos años de su nacimiento, se propone un encuentro que permita avanzar en el conocimiento en torno al desarrollo de la monarquía, la política, el arte, la ciencia y el derecho con vistas a entender el aporte brindado en el desarrollo moderno y contemporáneo tanto de géneros narrativos como de su importancia cardinal en el devenir político del pensamiento jurídico hispanoamericano.</p>
          <p>El objetivo de la reunión es establecer un espacio de trabajo internacional e interdisciplinario en torno a la figura histórica de Alfonso X, el Sabio, a través de sus obras.</p>
          <br/>
          <br/>
          <br/>
        </div>
      </section>
      
      
      
      <section className="spotlight">
    
        <div className="content">
        <br/>
        <br/>
          <h2>
          Participantes
          </h2>
          <br/>
          {/* <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p> */}
          <ul>
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
          <br/>
          <br/>
        </div>
      </section>

      <section className="spotlight">
    <div className="content">
    <br/>
    <br/>
      <h2>
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
          <br/>
          <br/>
        </div>
      </section>


      <section className="spotlight">
    <div className="content">
    <br/>
    <br/>
      <h2>
      Comité Colaborador:
      </h2>
      <br/>
      <ul>

        <li>Gabriel Calarco (Conicet)</li>
        <br/>
        <li>Fernanda Varela (FaHCE/UNLP)</li>
        <br/>
            </ul>
          <br/>
          <br/>
        </div>
      </section>


      <section className="spotlight">
    <div className="content">
    <br/>
    <br/>
      <h2>
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
          <br/>
          <br/>
        </div>
      </section>


    
    
</section>



    {/* <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features"> */}
          {/* <li className="icon fa-paper-plane"> */}
          {/* <li>
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          {/* <li className="icon solid fa-laptop"> */}
          {/* <li>
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li> */}
          {/* <li className="icon solid fa-code"> */}
          {/* <li>
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li> */}
          {/* <li className="icon solid fa-headphones-alt"> */}
          {/* <li>
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>  */}
          {/* <li className="icon fa-heart"> */}
          {/* <li>
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li> */}
          {/* <li className="icon fa-flag"> */}
          {/* <li>
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section> */}

    <section id="cta" className="wrapper style4">
      <div className="inner">
        {/* <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul> */}
      </div>
    </section>
  </Layout>
);

export default IndexPage;
