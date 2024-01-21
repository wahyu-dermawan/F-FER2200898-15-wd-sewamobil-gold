// CarList.js
import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../helpers";
import { Link } from "react-router-dom";

const PLACEHOLDER_URL = "https://fakeimg.pl/270x160";

const CarList = ({ cars }) => (
  <div className="content-container">
    {cars.map((car) => (
      <div className="car-card" key={car.id}>
        <img
          width={270}
          height={160}
          src={car.image || PLACEHOLDER_URL}
          alt={car.name}
        />
        <div className="car-details">
          <div className="car-name">{car.name}</div>
          <div className="car-price">{formatCurrency(car.price)} / hari</div>
          <div className="car-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button className="select-button">
            <Link to={`Detail/${car.id}`}>Pilih Mobil</Link>
          </button>
        </div>
      </div>
    ))}
  </div>
);

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CarList;
