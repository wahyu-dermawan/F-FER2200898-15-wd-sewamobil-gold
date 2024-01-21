import React from 'react';
import './card.css';
import iconHour from './icon_24hrs.png';
import iconComplete from './icon_complete.png';
import iconProfessional from './icon_professional.png';
import iconPrice from './icon_price.png';

const Card = ()=>{
  return (
    <div className='WhyUs'>
      <div style={{fontSize:'24px',marginBottom:'16px',lineHeight:'36px'}}>Why Us?</div>
      <div style={{fontSize:'14px',marginBottom:'40px'}}>Mengapa harus pilih Binar Car Rental?</div>
      <div className="card-container" style={{marginBottom:'100px'}}>
        <div className="card">
          <img className="card-icon" src={iconComplete} alt="icon-complete" />
          <div className="card-title">Mobil Lengkap</div>
          <div className="card-desc">
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
          </div>
        </div>
        <div className="card">
          <img className="card-icon" src={iconPrice} alt="icon-price" />
          <div className="card-title">Harga Murah</div>
          <div className="card-desc">
            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
            mobil lain
          </div>
        </div>
        <div className="card">
          <img className="card-icon" src={iconHour} alt="icon-24-hrs" />
          <div className="card-title">Layanan 24 Jam</div>
          <div className="card-desc">
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia
            di akhir minggu
          </div>
        </div>
        <div className="card">
          <img
            className="card-icon"
            src={iconProfessional}
            alt="icon-professional"
          />
          <div className="card-title">Sopir Profesional</div>
          <div className="card-desc">
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
            waktu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
