import axios from 'axios'
import { useState, useEffect } from 'react'

export const Home = () => {
    const [getdata, setgetdata] = useState([])

    useEffect((data) => {
        axios.get('http://localhost:8000/alveer/', data)
            .then(res => setgetdata(res.data))
    }, [])

    return (
        <>
            <div className="head">
                <div className="container">
                    <header>
                        <div className="row">
                            <div className="col-lg-4"><h1>WOOD & CLOTH SOFA</h1><p className='mb-5 mt-5'>
                                Lorem ipsum, dolor sit amet cnsectetur adipisicing elit. Et rem quos fugit? Quos iste ipsum quis praesentium, repellendus officiis maxime.</p>
                                <button className='btn1'>BUY NOW</button></div>
                            <div className="col-lg-8 sofa-img"><img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp" alt="" /></div>
                        </div>
                    </header>
                </div>
            </div>

            <div className="featured">
                <div className="container">
                    <h3 className='mb-5'> Featured Catagory</h3>
                    <div className="row">
                        <div className="col-lg-7 col-12 feature-card">
                            <div className='row'>

                                <div className="feature-txt col-lg-6">
                                    <span>Premium Qualty</span>
                                    <h4>Latest Foam Sofa</h4>
                                </div>
                                <div className="feature-img col-lg-6">
                                    <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png.webp" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12 feature-card">
                            <div className='row'>
                                <div className="feature-txt col-lg-6">
                                    <span>Premium Qualty</span>
                                    <h4>Latest Foam Sofa</h4>
                                </div>
                                <div className="feature-img col-lg-6">
                                    <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-12 feature-card">
                            <div className='row'>
                                <div className="feature-txt col-lg-6">
                                    <span>Premium Qualty</span>
                                    <h4>Latest Foam Sofa</h4>
                                </div>
                                <div className="feature-img col-lg-6">
                                    <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png.webp" alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7 col-12 feature-card">

                            <div className="feature-txt col-lg-6">
                                <span>Premium Qualty</span>
                                <h4>Latest Foam Sofa</h4>
                            </div>
                            <div className="feature-img col-lg-6 ">
                                <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png.webp" alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='Home_section_2 container mt-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" alt="gfdg" />
                    </div>
                    <div className='col-lg-6 Home_section_2_1 '>
                        <h1>Weekly Sale on 60% Off All Products </h1>
                        <div className='row mt-4'>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                <h5>DAYS</h5>
                                <h3>-1751</h3>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                <h5>Hours</h5>
                                <h3>15</h3>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                <h5>Minutes</h5>
                                <h3>51</h3>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                <h5>Seconds</h5>
                                <h3>34</h3>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <input type="text" className='form-control col' placeholder='enter email address' />
                            <div className='col-3'>
                                <a href="#" className='btn1 btn-primary'>Book now</a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className='Home_section_3 mt-5 container  '>
                <div>
                    <div className='row'>
                        <div className='col-2'>
                            <h2>Best Sellers </h2>
                        </div>
                        <h4 className='col-2 mt-3'>Shop</h4>
                    </div>
                    <div className='Home_section_3_next'>
                        <h4 className='font-weight-bold'>Next | Previous </h4>
                    </div>
                </div>
                <div className='row'>

                    {getdata.map(element => {
                        return (
                            <div className='col-lg-3 col-md-6 Home_section_3_data'>
                                <div key={element.id}>
                                    <div className='text-center'>
                                        <img src={element.img} alt="xfgfd" className='' />
                                    </div>
                                    <h2>{element.name}</h2>
                                    <p>{element.money}</p>
                                </div>
                            </div>)
                    })}
                </div>
            </div>

            <div className="subscribe">
                <div className="subs-center">
                    <span>JOIN OUR NEW SELLETLER</span>
                    <h1 className='mb-4 mt-4'>Subscribe to get Updated width new offer</h1>
                    <div className="subs"><input type="email" placeholder='Enter Email Address' /> <button className='btn1'>SUBSCRIBE NOW</button></div>
                </div>
            </div>
            <div className="logos">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2  col-md-3  col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3  col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3  col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3 col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3  col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3  col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3 col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3 col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3 col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3 col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3 col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png.webp" alt="" /></div>
                        <div className="col-lg-2  col-md-3 col-sm-4 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png.webp" alt="" /></div>
                    </div>
                </div>
            </div>

        </>


    )
}
