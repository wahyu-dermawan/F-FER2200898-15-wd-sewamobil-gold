import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "../Button/Button";
import hero from "../../assets/img_car.png";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Jumbotron.css";

function Jumbotron({ handleButtonClick }) {
  const location = useLocation();
  const isButtonDisabledJumbotron = location.pathname.startsWith("/Result");

  return (
    <>
      <div className="homepage position-relative" style={{ marginBottom: "105px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="hero_content">
                <h1 className="title">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="paragraph">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br></br>
                  terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br></br>
                  untuk sewa mobil selama 24 jam.
                </p>
                {!isButtonDisabledJumbotron && (
                  <Link to="/Result">
                    <CustomButton onClick={handleButtonClick}>
                      Mulai Sewa Mobil
                    </CustomButton>
                  </Link>
                )}
              </div>
            </div>
            <div className="image_hero col-md-6 d-flex">
              <img className="img-fluid" src={hero} alt=" " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
