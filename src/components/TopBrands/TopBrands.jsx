import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import CouponsData from '../../../public/CouponsData.json';

const TopBrands = () => {
  return (
    <div className="bg-green-50 py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Top Brands
      </h2>

      <Marquee pauseOnHover={true} gradient={false} speed={60}>
        <div className="flex gap-8 md:gap-12 items-center">
          {CouponsData.map((brand) => (
            <div
              key={brand._id}
              className="flex flex-col items-center text-center min-w-[120px] sm:min-w-[150px]"
            >
              {/* Clickable Logo */}
              <Link to={`/brand/${brand._id}`}>
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-yellow-400 shadow-md object-cover hover:scale-105 transition-transform duration-200"
                />
              </Link>

              {/* Brand Name */}
              <p className="text-green-700 font-medium text-sm mt-2">
                {brand.brand_name}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBrands;
