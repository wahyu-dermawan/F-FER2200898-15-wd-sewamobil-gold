import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { HEADERS } from "../constant";
import { formatCurrency } from "../helpers";
import Navbar from "../Component/Header/Header";
import Footer from "../Component/Footer/footer";
import { Icon } from '@iconify/react';
import SearchBox from "../Component/Search/Search";
import Background from "../Component/Jumbotron/Background";
import "./Detail.css"

const URL = "https://api-car-rental.binaracademy.org/admin/car";

const categories = [
  { label: 'Nama Mobil', isDropdown: false, input:"name" },
  { label: 'Categori', isDropdown: true, options: ['small', 'medium', 'large'], input: "category" },
  { label: 'Harga Maksimum', isDropdown: false,input:"maxprice", placeholder: 'Pilih Harga Maksimum' },
  { label: 'Tersedia', isDropdown: true,input:"status", options: ['', 'True', 'False'] },
];
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [categoryInfo, setCategoryInfo] = useState('');
  const [searchBoxDisabled, setSearchBoxDisabled] = useState(false);
  const [showBackground, setBackground] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extracting search parameters from the URL
  const searchParams = {
    name: queryParams.get('name') || '',
    category: queryParams.get('category') || '',
    maxprice: queryParams.get('maxprice') || '',
    status: queryParams.get('status') || '',
  };

  console.log("searchParams:", searchParams);


  useEffect(() => {
    axios
      .get(`${URL}/${id}`, {
        headers: HEADERS,
      })
      .then((response) => {
        setData(response.data);

        //data maniputaion for category
        const category = response.data.category.toLowerCase();
        if (category === "small"){
          setCategoryInfo("2-4 orang");
        }else if(category ==="medium"){
          setCategoryInfo("4-6 orang");
        }else if(category === "large"){
          setCategoryInfo("6-8 orang");
        }else{
          setCategoryInfo("undifed")
        }
        setTimeout(() => {
          setSearchBoxDisabled(true);
        }, 2000); 
        setBackground(true)
      });
  }, [id]);

  console.log(data);

  return (
    <>
    <Navbar/>
    {showBackground&&<Background/>}
    <SearchBox
        categories={categories}
        searchParams={searchParams} 
        disabled={searchBoxDisabled}
        style={{ position: "relative", maxWidth: "1047px"}}

      />
    <section className="content-container">
    <div className="about">
    <div className="p-3">
    <p>Tentang Paket</p>
    <p> Include</p>
    <ul>
    <li> Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
    <li> Sudah termasuk bensin selama 12 jam </li>
    <li> Sudah termasuk Tiket</li>
    <li> Wisata Sudah termasuk pajak</li>

    <p> Exclude</p>
    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
    <li> Tidak termasuk akomodasi penginapan</li>

    <p> Refund, Reschedule, Overtime</p>
    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
    <li> Tidak termasuk akomodasi penginapan</li>
    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
    <li> Tidak termasuk akomodasi penginapan</li>
    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
    <li> Tidak termasuk akomodasi penginapan</li>
   </ul>
  </div>
  </div>

    <div className="col-lg-4 p-3">
      <div className="box-image">
      <img width={270} height={160} src={data.image} alt={data.name} />
      <div className="car-image-name">{data.name}</div>
      <div className="capacity-container">
      <Icon icon="simple-line-icons:people" width="19" height="19" style={{marginRight:"10px"}} />
      <div className="capacity">{categoryInfo}</div>
      </div>
      <div className="price-container">
      <div className="total-label">Total:</div>
      <div className="car-price">{formatCurrency(data.price)}</div>
    </div>
      </div>
    </div>
    </section>

    <Footer/>
    </>
  );
};

export default Detail;
