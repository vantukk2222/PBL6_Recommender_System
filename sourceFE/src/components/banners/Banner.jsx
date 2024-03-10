
import React from 'react'
import './css/banner.css'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
export const Banner = () => {
    return (

        <div className="banner">
            <div className="banner-images">
                {/* <img src={banner1} alt="React Logo" />
                <img src={banner2} alt="React Logo2" />
                <img src={banner3} alt="React Logo3" /> */}
            </div>
            <h1>Hot stories</h1>
        </div>
    )
}
