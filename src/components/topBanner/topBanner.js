import React from 'react';
import './topBanner.css';
import top from '../../images/top.png'
import feature1 from '../../images/feature1.png';
import feature2 from '../../images/feature2.png';
import feature3 from '../../images/feature3.png';
import feature4 from '../../images/feature4.png';


const topBanner = ()=> {
    return (
        <div className='top_banner'>
                <div className="container">
                    {/* <img src={top} alt="/" width='70%' className=' d-flex d-flex align-items-center justify-content-center text-center m-2 ms-4' /> */}
                    <div className="row">
                        <div className="col-8 offset-2 co">
                        <img src={top} alt="/" width='100%' className=' d-flex d-flex align-items-center justify-content-center text-center m-2 ms-4'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-md-3 m-1 bg-white" style={{borderRadius:'50px'}}>
                            <img src={feature1} width='40' className=' py-2' alt="/" />
                            <a href="/" className='text-decoration-none text-dark fw-bold ps-2'>Free Shipping</a>
                        </div>
                        <div className=" col-md-3 m-1 bg-white" style={{borderRadius:'50px'}}>
                            <img src={feature2} width='40' className=' py-2' alt="/" />
                            <a href="/" className='text-decoration-none text-dark fw-bold ps-2'> Grocery Shopping</a>
                        </div>
                        <div className=" col-md-3 m-1 bg-white" style={{borderRadius:'50px'}}>
                            <img src={feature3} width='40' className=' py-2' alt="/" />
                            <a href="/" className='text-decoration-none text-dark fw-bold ps-2'> BarazMall</a>
                        </div>
                        <div className=" col-md-2 m-1 bg-white" style={{borderRadius:'50px'}}>
                            <img src={feature4} width='40' className=' py-2' alt="/" />
                            <a href="/" className='text-decoration-none text-dark fw-bold ps-2'>Digital Sheba</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default topBanner;