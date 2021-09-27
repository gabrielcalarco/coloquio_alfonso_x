import React from 'react';
import config from '../../config';
import logos1 from '../assets/images/logo1.png'
import logos2 from '../assets/images/logo2.png'
import logos3 from '../assets/images/logo3.png'
import logos4 from '../assets/images/logo4.png'
import logos5 from '../assets/images/logo5.png'
import logos6 from '../assets/images/logo6.png'
export default function Footer() {
  return (
    <footer id="footer">
      {/* <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a target={'_blank'} href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="copyright">
       
        {/* <br /> */}
        <li>Publicado bajo licencia <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-Share Alike 4.0 International</a>.</li>
        <br/>
        <br/>
        <br/>
        {/* <li><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"/></a></li> */}
        <img src={logos1} width="30%"/>      <img src={logos3} width="30%" height="64em"/> 
        <br/>
        <img src={logos2}  height="80em"/>      <img src={logos4}  height="80em"/> <img src={logos5} width="30%" height="80em"/>      <img src={logos6} height="80em"/>
        <br/>
        <br/>
        <br/>
        <p>diseño web: Gabriel Calarco</p>
      </ul>
    </footer>
  );
}
