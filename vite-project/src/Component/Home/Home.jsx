import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import FaqComponent from '../FAQ/Faq';
import Footer from '../Footer/footer';
import Navbar from '../Header/Header';
import Jumbotron from '../Jumbotron/Jumbotron';
import Cta from '../CTA/cta';
import Service from '../OurService/Service';
import { testimonialCom } from '../constant/testimonial';

const props = {
  testimonialCom,
};

const Home = () => {

  const serviceRef = useRef(null);
  const scrollToService = () => {
    if (serviceRef.current) {
      const offsetTop = serviceRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
        block:'first',
      });
    }
  };

  const cardRef = useRef(null);
  const scrollToCard = () => {
    if (cardRef.current) {
      const offsetTop = cardRef.current.offsetTop;
        window.scrollTo({
        top:offsetTop,
        behavior: 'smooth',
        block: 'first',
      });
    }
  };
  
  const testimonRef = useRef(null);
  const scrollToTesti = () => {
    if (testimonRef.current) {
      const offsetTop = testimonRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
        block:'first',
      });
    }
  };
  
  const faqRef = useRef(null);
  const scrollTofaq = () => {
    if (faqRef.current) {
      const offsetTop = faqRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
        block:'first',
      });
    }
  };

  return (
    <div>
      <Navbar onWhyUs={scrollToCard} onOurService={scrollToService} onTestimonial={scrollToTesti} onFaq={scrollTofaq}/>
      <main>
        <Jumbotron />
      </main>
      
      <div ref={serviceRef}>
      <Service />
      </div>

      {/* CARD */}
      <div ref={cardRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card />
      </div>

      <div className="testi-title"  ref={testimonRef}  style={{ marginTop: '90px', marginBottom: '24px' }}>
        <h3>Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
        <Carousel {...props} />
      </div>

      <div style={{ marginBottom: '50px' }}>
        <Cta />
      </div>

      <div ref={faqRef}>
      <FaqComponent/>
      </div>

      <footer className="text-center mt-2">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
