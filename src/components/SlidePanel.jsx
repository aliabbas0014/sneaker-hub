import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import React Icons for arrows

const SneakerCardSlider = () => {
  // Array of images with the name as 'hero.jpg' for all images
  const initialSneakers = [
    { img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/socc_ss25_miami_cf_away_jersey_tcc_d_3f3cc6494f.jpg", name: "INTER MIAMI CF 2025"},
    { img: "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/ss25_anthony_edwards_1_nicks_gift_launch_hp_tc_d_ce11a073fe.gif", name: "ANTHONY EDWARDS 1"},
    { img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Global_Disney_Mickey_Friends_Commercial_SS_25_Launch_Navigation_Card_Teaser_1_Kids_GLP_d_6df5819a93.jpg", name: "LIFE STYLE"},
    { img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/originals_ss25_rasant_pack_global_launch_dotcom_clp_navigation_card_teaser_d_c4945e6014.jpg", name: "NO OCCASION?"},
    { img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_franchise_toolkit_samba_q2_originals_ss25_launch_navigation_card_teaser_2_hp_glp_d_05457d7d96.jpg", name: "SAMBA"},
    { img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/xcat_fw24_holiday_t_toes_k_01_glp_tcc_d_7de6e38843.jpg", name: "SHOES"},
    { img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/xcat_fw24_holiday_minime_k_tcc_d_50f9758750.jpg", name: "FAMILY MATCHING"},
    { img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/xcat_fw24_holiday_winter_jackets_tcc_k_d_47666e2781.jpg", name: "NEW ARRIVAL"},
  ];

  const [sneakers, setSneakers] = useState(initialSneakers);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = sneakers.length;
  const imagesPerSlide = 5; // Number of images visible at a time
  
  // Handle Next and Previous Slide Logic (for one image at a time)
  const handleNext = () => {
    if (currentIndex < totalImages - imagesPerSlide) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle Image Name Editing
  const handleEditName = (index, newName) => {
    const updatedSneakers = [...sneakers];
    updatedSneakers[index].name = newName;
    setSneakers(updatedSneakers);
  };

  // Calculate how many images are left to show
  const canNext = currentIndex < totalImages - imagesPerSlide;
  const canPrev = currentIndex > 0;

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-10">
      {/* Card Slider Container */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / imagesPerSlide}%)`,
          }} // Move by 1/5th of the width (for 5 images shown at once)
        >
          {sneakers.map((sneaker, index) => (
            <div key={index} className="w-1/5 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-110 transition-transform duration-300 h-92">
                <img
                  src={sneaker.img}
                  alt={`Sneaker ${index + 1}`}
                  className=" object-cover rounded-lg"
                />
                <div className="p-4">
                  {/* Editable name */}
                  <input
                    type="text"
                    value={sneaker.name}
                    onChange={(e) => handleEditName(index, e.target.value)}
                    className="text-lg font-semibold border-none bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={!canPrev} // Disable the left arrow if we're at the start
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 z-10 ${
          !canPrev ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={!canNext} // Disable the right arrow if we're at the end
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 z-10 ${
          !canNext ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default SneakerCardSlider;
