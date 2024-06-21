import React from 'react';
import './index.css';
import Main from './Main';
import llham from './components/llham.png'
import worker from './components/worker.png';

const App = () => {
  return (
    <><header className="header">
      <div className="logo-container">
      <img src={llham} alt="Logo" className="logo-componentes" />
      <div className="logo">CONECTA KOMERS</div>
      </div>
      <nav>
        <ul>
          <li><a href="#">INICIO</a></li>
          <li><a href="#">SERVICIOS</a></li>
          <li><a href="#">CONTACTO</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-button">INICIAR SESIÓN</button>
        <button className="register-button">REGISTRO</button>
      </div>
    </header>
    <div className='main-content'>
      <main className='main-content'>
        <Main/>
      </main>
    </div>
    <main className="body">
        <section className="hero">
            <div className="hero-image">
                <img src={worker} alt="Main" />
            </div>
        </section>
    </main>
    <main>
    <section className="hero">
        <h1>Cambios</h1>
        <h2>Titulo</h2>
        <p>
          Luis Manuel Sanchez Marin
        </p>
        <button className="discover-button">Perron</button>
      </section>
    </main>
      </>      
  );
};

export default App;