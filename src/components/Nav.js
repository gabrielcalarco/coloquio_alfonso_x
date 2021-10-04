import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menú</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Página principal</Link>
            </li>
              <li>
                <Link to="/Programa">Programa</Link>
              </li>
              <li>
                <Link to="/Participantes">Participantes</Link>
              </li>
              {/* <li>
                <Link to="/Elements">Elements</Link>
              </li>  */}
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
