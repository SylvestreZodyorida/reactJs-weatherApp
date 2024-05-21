import React from 'react';
import appLogo from '../assets/img/zodyy.png'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        {/* Header */}
        <nav className="navigationBar navbar navbar-expand-lg navbar-light loginPage" aria-label="Tenth navbar example">
            <div className="container-fluid">
            <a className="" aria-current="page" href="">
              <img className="logoImm" src="{{ assets(img/zodyy.png) }}" alt="Logo"/>
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse before navbar-collapse justify-content-md-center" id="navbarsExample08">   
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="App.jsx">Weather App</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="">To-Do List App</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="../calculatorApp/calculator.jsx">Simple Calculator</a>
                        </li>
                        <li className="">
                            <a className="" aria-current="page" href=""><img className="logoImm" src='{appLogo}' alt="" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="">Movie Database App</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="">Recipe App</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="">Other</a>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
      </header>
      <main>
        {/* Contenu principal (peut être différent pour chaque page) */}
        {children}
      </main>
      <footer>
        {/* Footer */}
        <p>© 2024 Mon Application. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Layout;
