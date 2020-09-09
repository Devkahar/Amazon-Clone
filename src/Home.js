import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
               
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                
                <div className='home__row'>
                    <Product 
                    id='a11'
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={19.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                    rating={5}
                    />
                    <Product
                    id='a12'
                    title='How to Win Friends and Influence People'
                    price={10.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51QwraqM-gL._SX306_BO1,204,203,200_.jpg'
                    rating={4}
                    />
                </div>
                <div className='home__row'>
                    <Product
                    id='a13'
                    title='Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)'
                    price={1000.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg'
                    rating={5}
                    />
                    <Product
                    id='a14'
                    title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                    price={1100.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg'
                    rating={5}
                    />
                    <Product
                    id='a15'
                    title='New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)'
                    price={1900.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/71KR2i6-WaL._AC_SL1500_.jpg'
                    rating={5}
                    />
                </div>
                <div className='home__row'>
                    <Product
                    id='a16'
                    title='Sceptre 24-Inch Curved 144Hz Gaming LED Monitor Edge-Less AMD FreeSync DisplayPort HDMI, Machine Black (C248B-144RN)'
                    price={150}
                    image='https://images-na.ssl-images-amazon.com/images/I/81VG9l7IC0L._AC_SL1500_.jpg'
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
