import React, { useEffect, useRef } from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import appLogo from '../assets/img/zodyy.png';


const App = () => {
  const navigate = useNavigate(); // Hook pour la navigation
  const weatherLinkRef = useRef(null); // Référence pour le lien Weather
  // Vérifier si le chemin actuel est la racine ("/") et déclencher un clic sur le lien Weather
  useEffect(() => {
    if (window.location.pathname === '/') {
      weatherLinkRef.current.click(); // Déclencher un clic sur le lien Weather
    }
  }, [navigate]);  // Dépendance vide pour exécuter une seule fois
  

  
  return (
    <div className="container-fluid">
      <header>
        <nav className="navigationBar navbar navbar-expand-lg navbar-light loginPage" aria-label="Tenth navbar example">
          <div className="container-fluid">
            <NavLink to="/weather" className="" aria-current="page" >
              <img className="logo" src={appLogo} alt="Logo" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse before navbar-collapse justify-content-md-center" id="navbarsExample08">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink ref={weatherLinkRef} className="nav-link " aria-current="page" to="/weather">Weather App</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/todolist">To-Do List App</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/calculator">Simple Calculator</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/movie">Movie Database App</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/recipe">Recipe App</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/other">Other</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <br /><br /><br />
        <p>© 2024 Mon Application. Tous droits réservés.</p>
      </footer>
    </div>
  );
 

};

export default App;
