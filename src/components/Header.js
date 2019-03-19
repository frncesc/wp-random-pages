import React from 'react';

function Header(props) {
  return (
    <header className="head">
      <h2>Carrusel d'articles WordPress</h2>
      <p>
        Aquesta aplicació permet mostrar de manera automàtica el contingut d'un lloc web que
        funcioni amb <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a> (
        <a href="https://blocs.xtec.cat/" target="_blank" rel="noopener noreferrer">XTEC-Blocs</a>, <a href="https://agora.xtec.cat/nodes/" target="_blank" rel="noopener noreferrer">Nodes</a>...)
      </p>
      <p>
        Comenceu per introduir l'URL del lloc web que vulgueu mostrar, espereu que es carreguin les dades (pot ser llarg!)
        i seleccioneu paràmetres com ara el rang de dates, les categories o les pàgines que vulgueu que es mostrin. També podeu
        marcar i desmarcar individualment cada un dels articles i pàgines per indicar si han d'aparèixer al carrusel.
      </p>
      <p>
        Finalment indiqueu el temps d'espera entre una pàgina i la següent, indiqueu també si voleu mostrar les pàgines a l'atzar o
        per data de publicació i feu clic al botó "Inicia la presentació". Les pàgines s'aniran mostrant de manera automàtica a la
        finestra principal. Es recomana posar-la en mode de pantalla completa amb <strong>F11</strong>.
      </p>
    </header>
  );

}

export default Header;