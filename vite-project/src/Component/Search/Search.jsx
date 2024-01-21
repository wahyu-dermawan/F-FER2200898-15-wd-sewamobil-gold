import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useLocation, Link } from "react-router-dom";

const customStyles = {
  control: (provided) => ({
    ...provided,
    color: '#999',
    fontFamily: 'arial',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '18px',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};

const SearchBox = ({ categories, searchParams, setSearchParams, handleSubmit, onInputFocus, disabled, showEditButton }) => {
  const location = useLocation();
  const isDetailRoute = /^\/Result\/\d+$/.test(location.pathname);

  return (
    <div className="search-box" style={{ width: "1027px", position: "relative", top: "-190px", borderRadius: "5px", height: "106px", margin: "0 auto", padding: "15px", backgroundColor: "white", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
      <div className="row">
        {categories.map((category, index) => (
          <div className={`col-md-3 ${category.label === "Name" ? "mb-3" : "mb-3 mr-3"}`} key={index}>
            <label style={{ fontFamily: "sans-serif", fontSize: "12px", fontStyle: "normal", fontWeight: 300, color: " #3C3C3C" }}>{category.label}</label>
            {category.isDropdown ? (
              <Select
                options={category.options.map((option) => ({ value: option, label: option }))}
                styles={customStyles}
                onChange={(selectedOption) => {
                  setSearchParams({
                    ...searchParams,
                    [category.label.toLowerCase()]: selectedOption.value,
                  });
                }}
                isDisabled={disabled}
              />
            ) : (
              <input
                type="text"
                className="form-control"
                placeholder={`Klik Nama / Tipe Mobil`}
                style={{ ...customStyles }}
                onFocus={onInputFocus}
                onChange={(e) => {
                  setSearchParams({
                    ...searchParams,
                    [category.label.toLowerCase()]: e.target.value,
                  });
                }}
                disabled={disabled}
              />
            )}
          </div>
        ))}
        <div className="col-md-3 text-right">
          {isDetailRoute && (
            <Link to="/Result">
              <button
                className="btn btn-primary"
                style={{ position: "relative", top: "-55px", right: "-1050px", backgroundColor: "#5CB85F", fontFamily: "arial", fontSize: "12px", fontStyle: "normal", fontWeight: 700, border: "solid" }}
              >
                Edit
              </button>
            </Link>
          )}
          {!isDetailRoute && (
            <button
              className="btn btn-primary"
              style={{ position: "relative", top: "-55px", right: "-1050px", backgroundColor: "#5CB85F", fontFamily: "arial", fontSize: "12px", fontStyle: "normal", fontWeight: 700, border: "solid" }}
              onClick={showEditButton ? () => { handleSubmit(); showEditButton(false); } : handleSubmit}
              disabled={disabled}
            >
              {showEditButton ? "Edit" : "Cari Mobil"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      isDropdown: PropTypes.bool.isRequired,
      options: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  searchParams: PropTypes.object.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onInputFocus: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  showEditButton: PropTypes.bool.isRequired,
};

export default SearchBox;
