import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Brand = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const brand = data.find(item => item._id === id);

  if (!brand) return <p className="text-center mt-10 text-red-600">Brand not found</p>;

  return (
    <div className="min-h-screen bg-green-100 px-4 py-8">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

      {/* Brand Header */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="mx-auto w-28 h-28 rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-bold text-orange-500 mt-2">{brand.brand_name}</h1>
        <p className="text-green-700 text-lg font-semibold">Rating: {brand.rating} ⭐</p>
        <p className="text-gray-600 mt-2 px-4">{brand.description}</p>
      </div>

      {/* Coupons Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {brand.coupons.map((coupon, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow-md border-2 border-yellow-400 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-2">{coupon.coupon_code}</h3>
              <p className="text-gray-700">{coupon.description}</p>
              <p className="text-sm text-gray-500 mt-1">Type: {coupon.coupon_type}</p>
              <p className="text-sm text-gray-500">Expires: {coupon.expiry_date}</p>
              <p className="text-sm text-gray-500 mb-2">Condition: {coupon.condition}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => toast.success('Coupon code copied to clipboard!')}
              >
                <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition duration-200">
                  Copy Code
                </button>
              </CopyToClipboard>

              <button
                onClick={() => window.open(brand.shop_Link, '_blank')}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
