import React from 'react';
import StaticSlider from "../StaticSlider/StaticSlider"
import CouponBanner from '../CouponBanner/CouponBanner';
import TopBrands from '../TopBrands/TopBrands'
const Home = () => {
    return (
        <div>
          <CouponBanner></CouponBanner>
          <TopBrands></TopBrands>
          <StaticSlider></StaticSlider>  
          
        </div>
    );
};

export default Home;