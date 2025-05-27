import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import CouponsData from "../../../public/CouponsData.json"; 

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    setBrands(CouponsData);
  }, []);

  
  const filteredBrands = brands.filter(brand =>
    brand.brand_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Explore Top Brands</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search brands..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      {/* Brands List */}
      <div className="space-y-4">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="flex items-center p-4 border rounded-lg shadow-md bg-white relative"
          >
            {/* Brand Logo */}
            <img src={brand.brand_logo} alt={brand.brand_name} className="w-16 h-16 rounded-full mr-4" />

            {/* Brand Info */}
            <div className="flex-1">
              <div className="flex items-center text-gray-700">
                <FaStar className="text-yellow-400 mr-1" /> {brand.rating}
              </div>
              <h2 className="text-lg font-semibold">{brand.brand_name}</h2>
              <p className="text-sm text-gray-500">{brand.description}</p>
            </div>

            {/* View Coupons Button */}
            <Link to={`/brand/${brand._id}`}>
              <button className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-600">
                View Coupons
              </button>
            </Link>

            {/* Sale Bouncing Text */}
            {brand.isSaleOn && (
              <span className="absolute top-2 right-2 text-orange-800 font-bold animate-bounce">
                Sale is On!
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
