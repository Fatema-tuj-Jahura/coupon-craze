import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images
import img1 from "../../assets/image1.avif"; 
import img2 from "../../assets/image2.avif"; 
import img3 from "../../assets/image3.avif";

const CouponBanner = () => {
  return (
    <Carousel 
      showThumbs={false} 
      autoPlay 
      infiniteLoop 
      interval={3000} 
      showArrows={true} 
      showStatus={false} 
    >
      <div className="relative">
        <img src={img1} alt="Slide 1" className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
          <p className="text-white text-lg md:text-3xl font-semibold text-center">
            "Unleash the savings! Exclusive deals just for you."
          </p>
        </div>
      </div>
      <div className="relative">
        <img src={img2} alt="Slide 2" className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
          <p className="text-white text-lg md:text-3xl font-semibold text-center">
            "Hottest Coupons Inside! Shop More, Spend Less."
          </p>
        </div>
      </div>
      <div className="relative">
        <img src={img3} alt="Slide 3" className="object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
          <p className="text-white text-lg md:text-3xl font-semibold text-center">
            "Flash Sale Coupons! Grab Discounts Before They Disappear."
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default CouponBanner;
