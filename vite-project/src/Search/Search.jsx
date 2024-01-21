import React from 'react';
import Navbar from '../Component/Header/Header';
import Jumbotron from '../Component/Jumbotron/Jumbotron';
import Footer from '../Component/Footer/footer';
import Select from 'react-select'; // Import react-select

const Search = () => {
  const categories = [
    { label: 'Nama Mobil', isDropdown: false },
    { label: 'Kategori', isDropdown: true },
    { label: 'Harga', isDropdown: true },
    { label: 'Status', isDropdown: true },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      color:'#999',  
      fontFamily: 'arial',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 300,
      lineHeight: '18px',
    }),
    indicatorSeparator: () => ({}),
  };

  return (
    <div>
      <Navbar />
      <Jumbotron />

      {/* Search Bar Section */}
      <section className="container" style={{marginBottom:"108px"}}>
        <div className="row">
          <div className="col-md-12">
            <div
              className="search-box"
              style={{ width: '1047px', height: '106px', margin: '0 auto', padding: '15px', backgroundColor: 'white', boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}
            >
             <div className="row">
            {categories.map((category, index) => (
                <div className={`col-md-3 ${index === 0 ? 'mb-3' : 'mb-3 mr-3'}`} key={index}>
                <label style={{ fontFamily: 'sans-serif', fontSize: '12px', fontStyle: 'normal', fontWeight: 300, color: ' #3C3C3C' }}>
                    {category.label}
                </label>
                {category.isDropdown ? (
                    <Select options={[{ value: '', label: `Pilih ${category.label}` }]} styles={customStyles} />
                                        ) : 
                    (
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Klik nama/tipe mobil"
                    style={{ ...customStyles, width: category.label === 'Harga' ? '219px' : '208px' }} // Set width based on the label
                    />
                    )
                }
                </div>
            ))}
            </div>

              {/* Cari Mobil Button */}
              <div className="row mt-3">
                <div className="col-md-12 text-right">
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: '#5CB85F',
                      fontFamily: 'arial',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      border:'solid',
                    }}
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your Search component content */}

      <Footer />
    </div>
  );
};

export default Search;

