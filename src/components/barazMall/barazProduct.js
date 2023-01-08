import React from 'react';
import './barazProduct.css'
import d1 from '../../images/d1.jpg';
import d2 from '../../images/d2.jpg';
import d3 from '../../images/d3.jpg';
import d4 from '../../images/d4.jpg';
import d5 from '../../images/d5.jpg';
import d6 from '../../images/d6.jpg';

const barazProduct= () => {
    return (
        <div className='baraz_product'>
          
            <div className="container">
              <div className="row">
              <h2 className='mt-5'>BarazMall</h2>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={d1} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>Buds Air wireless Bluetooth Headsets in Ear...</p>
                  <h6 className='present_price'>$59</h6>
                  <span className='prev_price'>$79</span>
                  <span className='discount m-3'>-14%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={d2} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>Vivo/Oppo/MI in Ear Earphone Good Bass...</p>
                  <h6 className='present_price'>$500</h6>
                  <span className='prev_price'>$650</span>
                  <span className='discount m-3'>-19%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={d3} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                  <h6 className='present_price'>$400</h6>
                  <span className='prev_price'>$650</span>
                  <span className='discount m-3'>-53%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={d4} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>Vivo in Ear Earphone Best sound quality for any...</p>
                  <h6 className='present_price'>$40</h6>
                  <span className='prev_price'>$60</span>
                  <span className='discount m-3'>-43%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={d5} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>01 Pcs Anti Rfid Card Holder NFC Blocking...</p>
                  <h6 className='present_price'>$88</h6>
                  <span className='prev_price'>$100</span>
                  <span className='discount m-3'>-23%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={d6} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>Electric Hot Water Bag pain remover [Multicolor].</p>
                  <h6 className='present_price'>$100</h6>
                  <span className='prev_price'>$300</span>
                  <span className='discount m-3'>-43%</span>

                </div>
             
              </div>
                <div className="row ">
                            <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
                                <button className='lode_more'>Lode More</button>
                            </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default barazProduct;