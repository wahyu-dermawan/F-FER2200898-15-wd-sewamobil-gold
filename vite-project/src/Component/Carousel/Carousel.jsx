import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import rating_icon from '../../assets/testimon.svg';

export default function Testimonial({ testimonialCom }) {
  return (
    <div className="container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-3" // Adding top margin for spacing
      >
        {testimonialCom.map((item) => {
          const stars = [];

          for (let i = 0; i < item.star; i++) {
            stars.push(
              <img
                key={i}
                src={rating_icon}
                alt="star"
              />
            );
          }
          return (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <div className="testi-content  p-4 rounded">
                <div className="row">
                  <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded-circle"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className="col-md-9">
                    <div>
                      <h4>{stars}</h4>
                    </div>
                    <div className="desc-testi">
                      <p>"{item.testimonial}"</p>
                    </div>
                    <div className="profile-testi">
                      <p>
                        {item.name} {item.age}, {item.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

Testimonial.propTypes = {
  testimonialCom: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      star: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      testimonial: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
    })
  ).isRequired,
};
