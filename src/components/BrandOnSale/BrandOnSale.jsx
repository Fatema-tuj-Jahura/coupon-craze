import React from 'react';
import CouponsData from '../../../public/CouponsData.json';

const BrandsOnSale = () => {
  const saleBrands = CouponsData.filter((brand) => brand.isSaleOn);

  return (
    <div className="min-h-screen bg-green-700 py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Brands on Sale
      </h2>

      {saleBrands.length === 0 ? (
        <p className="text-center text-gray-600">No brands on sale right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {saleBrands.map((brand) => (
            <div
              key={brand._id}
              className="bg-white rounded-xl shadow-md p-5 border-2 border-yellow-400 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-green-700"
                />
                <div>
                  <h3 className="text-xl font-bold text-orange-500">{brand.brand_name}</h3>
                  <p className="text-sm text-green-700 font-medium">
                    Category: {brand.category}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold">
                Total Coupons: {brand.coupons.length}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandsOnSale;
