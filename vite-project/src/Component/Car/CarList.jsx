// CarList.js
import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../helpers";
import { Link } from "react-router-dom";
import styles from "./CarList.module.css";

const PLACEHOLDER_URL = "https://fakeimg.pl/270x160";

const CarList = ({ cars }) => (
  <div className={styles.contentContainer}>
    {cars.map((car) => (
      <div className={styles.carCard} key={car.id}>
        <img
          width={270}
          height={160}
          src={car.image || PLACEHOLDER_URL}
          alt={car.name}
          className={styles.carImage}
        />
        <div className={styles.carDetails}>
          <div className={styles.carName}>{car.name}</div>
          <div className={styles.carPrice}>
            {formatCurrency(car.price)} / hari
          </div>
          <div className={styles.carDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button className={styles.selectButton}>
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
