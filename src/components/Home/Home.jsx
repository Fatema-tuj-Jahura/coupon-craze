import React from 'react';
import StaticSlider from "../StaticSlider/StaticSlider"
import CouponBanner from '../CouponBanner/CouponBanner';
import TopBrands from '../TopBrands/TopBrands'
import BrandOnSale from '../BrandOnSale/BrandOnSale';
import ExpiringSoon from '../ExpiringSoon/ExpiringSoon';
const Home = () => {
    return (
        <div>
          <CouponBanner></CouponBanner>
          <TopBrands></TopBrands>
          <BrandOnSale></BrandOnSale>
          <ExpiringSoon></ExpiringSoon>
          <StaticSlider></StaticSlider>  
          
        </div>
    );
};

export default Home;