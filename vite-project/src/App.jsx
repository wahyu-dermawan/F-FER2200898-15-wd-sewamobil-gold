import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import carImage from './assets/img_car.png'

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">Sewa Mobil</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Ourservice </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#whyus">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="jumbotron">
          <div className="container">

            <div className="row align-items-center"> 
            <div className="col-lg-6 p-5">
            <h1 className="display-1">Sewa & Rental Mobil Terbaik di kawasan ( Lokasimu )</h1>
            <p className="lead mt-4 mb-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <a className="btn btn-primary" href="#mulaisewamobil" role="button" style={{ backgroundColor: '#5CB85F',color:'white',borderColor:'#5CB85F'}}>Mulai Sewa Mobil</a>
            </div>

            <div className="col-lg-4">
            <img className ="carImg" src={carImage} alt="Car" />
            </div>
          
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Why Us?</h2>
          <p>Best Car Rental for any kind of in Lakin. Frequently Asked Quest and Testimonial also available.</p>
        </section>
      </main>
      <footer className="text-center">
        <p>&copy; 2020 Sewa & Rental Mobil. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;