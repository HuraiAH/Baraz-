import React from 'react';
import './product.css'
import f1 from '../../images/f1.jpg';
import f2 from '../../images/f2.jpg';
import f3 from '../../images/f3.jpg';
import f4 from '../../images/f4.jpg';
import f5 from '../../images/f5.jpg';
import f6 from '../../images/f6.jpg';


const product= ()=> {
    return (
        <div className='baraz_product'>
          
            <div className="container">
              <div className="row">
              <h2 className='mt-5'>FlashSale</h2>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={f1} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>Buds Air wireless Bluetooth Headsets in Ear...</p>
                  <h6 className='present_price'>$69</h6>
                  <span className='prev_price'>$89</span>
                  <span className='discount m-3'>-14%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={f2} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>Vivo/Oppo/MI in Ear Earphone Good Bass...</p>
                  <h6 className='present_price'>$100</h6>
                  <span className='prev_price'>$150</span>
                  <span className='discount m-3'>-19%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={f3} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                  <h6 className='present_price'>$400</h6>
                  <span className='prev_price'>$600</span>
                  <span className='discount m-3'>-33%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={f4} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>Vivo in Ear Earphone Best sound quality for any...</p>
                  <h6 className='present_price'>$40</h6>
                  <span className='prev_price'>$60</span>
                  <span className='discount m-3'>-33%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={f5} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>01 Pcs Anti Rfid Card Holder NFC Blocking...</p>
                  <h6 className='present_price'>$88</h6>
                  <span className='prev_price'>$100</span>
                  <span className='discount m-3'>-23%</span>

                </div>
                <div className="Baraz_card col-md-2 col-sm-4 mt-4 py-2  ">
                  <img src={f6} alt="/" className='/' width= "100%" />
                  <p className='product_details mt-2'>Electric Hot Water Bag pain remover [Multicolor].</p>
                  <h6 className='present_price'>$100</h6>
                  <span className='prev_price'>$300</span>
                  <span className='discount m-3'>-43%</span>

                </div>
             
              </div>
            </div>
            
        </div>
    );
}

export default product;