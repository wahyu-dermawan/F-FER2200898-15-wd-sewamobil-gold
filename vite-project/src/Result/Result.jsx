import React, { useState } from 'react';
import axios from 'axios';
import { HEADERS } from '../constant';
import Navbar from '../Component/Header/Header';
import Footer from '../Component/Footer/footer';
import SearchBox from '../Component/Search/Search';
import CarList from '../Component/Car/CarList';
import './Result.css';
import Jumbotron from '../Component/Jumbotron/Jumbotron';
import Background from '../Component/Jumbotron/Background';

const LIST_URL = 'https://api-car-rental.binaracademy.org/admin/v2/car';

const categories = [
  { label: 'Nama Mobil', isDropdown: false, input: 'name' },
  { label: 'Kategori', isDropdown: true, options: ['2-4 orang', '4-6 orang', '8-10 orang'], input: 'category' },
  { label: 'Harga Maksimum', isDropdown: false, input: 'maxprice', placeholder: 'Pilih Harga Maksimum' },
  { label: 'Tersedia', isDropdown: true, input: 'status', options: ['', 'True', 'False'] },
];

const categoryMapping = {
  '2-4 orang': 'small',
  '4-6 orang': 'medium',
  '8-10 orang': 'large',
};

const Result = () => {
  const [searchParams, setSearchParams] = useState({});
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDarkOverlayVisible, setIsDarkOverlayVisible] = useState(false);
  const [searchBoxDisabled, setSearchBoxDisabled] = useState(false);
  const [showJumbotron, setShowJumbotron] = useState(true);
  const [showBackground, setBackground] = useState(false);
  const [isButtonDisabledJumbotron, setButtonDisabledJumbotron] = useState(true);

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

    const mappedSearchParams = { ...searchParams };

    if (searchParams.category) {
      // Map the category value before sending it in the request
      mappedSearchParams.category = categoryMapping[searchParams.category];
    }

    axios
      .get(LIST_URL, {
        headers: HEADERS,
        params: mappedSearchParams,
      })
      .then((response) => {
        setList(response.data.cars);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(true);
        setIsDarkOverlayVisible(false);
        setShowJumbotron(false);
        setBackground(true);
        setButtonDisabledJumbotron(false);

        setTimeout(() => {
          setSearchBoxDisabled(true);
        }, 1000); // Adjust the delay
      });
  };

  return (
    <div className={`${isDarkOverlayVisible ? 'dark-overlay' : ''}`}>
      <Navbar />
      {isButtonDisabledJumbotron && showJumbotron && <Jumbotron />}
      {showBackground && <Background />}

      <button onClick={handleToggleSearchBox}>{searchBoxDisabled ? 'Edit' : ''}</button>
      <SearchBox
        categories={categories}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
        disabled={searchBoxDisabled}
        className="search-box"
        style={{ position: 'relative', maxWidth: '1047px' }}
      />

      {isDarkOverlayVisible && <div className="dark-overlay"></div>}

      <CarList cars={list} loading={loading} />

      <Footer />
    </div>
  );
};

export default Result;
