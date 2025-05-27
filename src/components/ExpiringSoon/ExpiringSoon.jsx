import React from 'react';
import CouponsData from '../../../public/CouponsData.json';
import dayjs from 'dayjs';
import { FaFire } from 'react-icons/fa';

const ExpiringSoon = () => {
  const today = dayjs();
  const soon = today.add(7, 'day');

  const expiringCoupons = CouponsData.flatMap(brand =>
    brand.coupons.map(coupon => ({
      ...coupon,
      brandName: brand.brand_name,
      brandLogo: brand.brand_logo,
      expiry: dayjs(coupon.expiry_date)
    }))
  )
    .filter(coupon => coupon.expiry.isBefore(soon) && coupon.expiry.isAfter(today))
    .sort((a, b) => a.expiry - b.expiry);

  return (
    <div className="min-h-[60vh] bg-red-50 py-6 px-3 md:px-6 lg:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-6 flex items-center justify-center gap-2">
        <FaFire className="text-red-600" />
        Expiring Soon Coupons
      </h2>

      {expiringCoupons.length === 0 ? (
        <p className="text-center text-gray-700">No coupons expiring in the next 7 days.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expiringCoupons.map((coupon, index) => (
            <div
              key={index}
              className="bg-white border border-red-300 rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={coupon.brandLogo}
                  alt={coupon.brandName}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-red-600">
                    {coupon.brandName}
                  </h3>
                  <p className="text-xs text-gray-500">Expires: {coupon.expiry.format('YYYY-MM-DD')}</p>
                </div>
              </div>
              <h4 className="text-orange-500 font-bold text-sm mb-1">{coupon.coupon_code}</h4>
              <p className="text-sm text-gray-700">{coupon.description}</p>
              <p className="text-xs text-gray-500 mt-1">{coupon.condition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpiringSoon;
