import React from 'react';
import happyGirl from '../../assets/img_service.png'
import checkList from '../../assets/checklist.png'
import './Service.css'

function Service(){
return(
<>
<div className="main position-relative" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:"100px" }}>
<div className= "container">
<div className="row align-items-center">
<div className="col-lg-6 p-5">
<img className="happyGirl" src={happyGirl} alt="Happy Girl"/>
</div>

<div className="col-lg-4" style={{marginLeft:'29px',alignContent:'center'}}>
  <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
  <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
  
<ul>
  <li><img className='checkList' src={checkList} alt ="Check List"/>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
  <li><img className='checkList' src={checkList} alt ="Check List"/>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
  <li><img className='checkList' src={checkList} alt ="Check List"/>Sewa Mobil Jangka Panjang Bulanan</li>
  <li><img className='checkList' src={checkList} alt ="Check List"/>Gratis Antar - Jemput Mobil di Bandara</li>
  <li><img className='checkList' src={checkList} alt ="Check List"/>Layanan Airport Transfer / Drop In Out</li>
</ul>
</div>
</div>
</div>
</div> 
</>
    );
}

export default Service;