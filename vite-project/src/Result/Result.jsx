// Result.js
import React, { useState } from "react";
import axios from "axios";
import { HEADERS } from "../constant";
import Navbar from "../Component/Header/Header";
import Footer from "../Component/Footer/footer";
import SearchBox from "../Component/Search/Search";
import CarList from "../Component/Car/CarLIst";
import './Result.css';
import Jumbotron from "../Component/Jumbotron/Jumbotron";
import Background from "../Component/Jumbotron/Background";

const LIST_URL = "https://api-car-rental.binaracademy.org/admin/v2/car";

const categories = [
  { label: 'Name', isDropdown: false },
  { label: 'Category', isDropdown: true, options: ['', 'small', 'medium', 'large'] },
  { label: 'MaxPrice', isDropdown: false, placeholder: 'Pilih Harga Maksimum' },
  { label: 'Status', isDropdown: true, options: ['', 'True', 'False'] },
];

const Result = () => {
  const [searchParams, setSearchParams] = useState({});
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDarkOverlayVisible, setIsDarkOverlayVisible] = useState(false);
  const [searchBoxDisabled, setSearchBoxDisabled] = useState(false); // Set to true initially
  const [showJumbotron, setShowJumbotron] = useState(true);
  const [showBackground,setBackground] = useState(false);
  const [isButtonDisabledJumbotron,setButtonDisabledJumbotron] = useState(true);

  const handleInputChange = () => {
    setIsDarkOverlayVisible(true);
  };

  const handleInputFocus = () => {
    setIsDarkOverlayVisible(true);
  };

  const handleToggleSearchBox = () => {
    setSearchBoxDisabled((prev) => !prev);
  };

  const handleButtonJumbotron = () => {
    setButtonDisabledJumbotron(true);
  };



  const handleSubmit = () => {
    setLoading(true);

    

    axios
      .get(LIST_URL, {
        headers: HEADERS,
        params: searchParams,
      })
      .then((response) => {
        setList(response.data.cars);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(true);
        setIsDarkOverlayVisible(false);
        setShowJumbotron(false);
        setBackground(true)
        setButtonDisabledJumbotron(false)

        // Allow some time before enabling the SearchBox again
        setTimeout(() => {
          setSearchBoxDisabled(true);
        }, 2000); // Adjust the delay as needed
      });
  };

  return (
    <div className={`${isDarkOverlayVisible ? "dark-overlay" : ""}`}>
    <Navbar />
    {isButtonDisabledJumbotron && showJumbotron && <Jumbotron />}
    {showBackground && <Background />}

   
      <button onClick={handleToggleSearchBox}>
        {searchBoxDisabled ? "Edit" : ""}
      </button>
      <SearchBox
        categories={categories}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
        disabled={searchBoxDisabled} // Pass the disabled prop to the SearchBox
        className="search-box"
        style={{ position: "relative", maxWidth: "1047px" }}
      />

      {isDarkOverlayVisible && <div className="dark-overlay"></div>}

     
        <CarList cars={list} loading={loading} />
 

      <Footer />
    </div>
);
};

export default Result;
