import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import carImage from './assets/img_car.png'
import Card from './Component/Card/Card'
import Footer from './Component/Footer/footer'

const Display = () => {
  return (
    <div>
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
      </main>
    </div>
  

  );
}

export default Display;