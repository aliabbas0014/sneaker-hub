import React from "react";
import { Link } from "react-router-dom";

const BrandCard = () => {
  const handleOpenLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <section className="py-10">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center border-b-2 pb-4">
            Top Brands
          </h3>

          {/* Adidas Section */}
          <div
            id="adidas"
            className="flex flex-col items-center border-b-2 pb-10"
          >
            {/* Brand Name */}
            <h4 className="text-2xl  mb-6">
              Explore <span className="font-semibold">adidas</span> Collections
            </h4>

            {/* Sneakers Listing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
              <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
                <img
                  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/5250dc67cc1742088472321c384e2a39_9366/Campus_00s_Shoes_White_JQ7669_01_00_standard.jpg"
                  alt="Adidas"
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <p className="font-semibold">Campus 00s Shoes</p>
                  <p className="text-gray-600"> Originals</p>
                </div>
              </div>
              <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
                <img
                  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/018194de07a540ffbf73c8137f79abd3_9366/Samba_XLG_Shoes_Brown_JI3196_01_00_standard.jpg"
                  alt="Adidas"
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <p className="font-semibold">Samba XLG Shoes</p>
                  <p className="text-gray-600"> Originals</p>
                </div>
              </div>
              <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
                <img
                  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b9ff367c75b24680bf46fc64786d950d_9366/Sambae_Shoes_Black_JI1350_01_standard.jpg"
                  alt="Adidas"
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <p className="font-semibold">Sambae Shoes</p>
                  <p className="text-gray-600"> Originals</p>
                </div>
              </div>
              <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
                <img
                  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/042ba4d155ba4129bd3d5eeb9a1866dd_9366/Gazelle_Bold_Shoes_Green_JH9668_01_00_standard.jpg"
                  alt="Adidas"
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <p className="font-semibold">Gazelle Bold Shoes</p>
                  <p className="text-gray-600"> Originals</p>
                </div>
              </div>
            </div>

            <Link
              onClick={() => handleOpenLink("https://www.adidas.com/us")}
              className="bg-purple-500 text-white px-4 py-2 mt-6 rounded hover:bg-purple-600"
            >
              View More
            </Link>

            {/* View More Button */}
            {/* <button className="bg-purple-500 text-white px-4 py-2 mt-6 rounded hover:bg-purple-600">
              View More
            </button> */}
          </div>
        </div>

        {/* Nike Section */}
        <div id="nike" className="flex flex-col items-center border-b-2 pb-10">
          {/* Brand Name */}
          <h4 className="text-2xl mb-6 mt-6">
            Explore <span className="font-semibold">Nike</span> Collections
          </h4>

          {/* Sneakers Listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/96df9357-1ca3-4c1d-b809-5cecfd619bf3/AIR+JORDAN+5+RETRO.png"
                alt="Adidas"
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <p className="font-semibold">
                  Air Jordan 5 Retro "White and Black
                </p>
                <p className="text-gray-600"> Men's Shoes</p>
              </div>
            </div>
            <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1557e72c-0660-4cd0-b0e3-a7a693f0554d/AIR+JORDAN+1+RETRO+LOW+OG.png"
                alt="Adidas"
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <p className="font-semibold">Air Jordan 1 Low "Game Royal"</p>
                <p className="text-gray-600"> Men's Shoes</p>
              </div>
            </div>
            <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b5c2b29-47f1-441f-8f8f-d7a9007baa56/NIKE+C1TY.png"
                alt="Adidas"
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <p className="font-semibold">Nike C1TY</p>
                <p className="text-gray-600"> Men's Shoes</p>
              </div>
            </div>
            <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/70372226-fc35-4241-a7f8-528176e61aa0/NIKE+DUNK+LOW+RETRO+SE.png"
                alt="Adidas"
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <p className="font-semibold">Nike Dunk Low Retro SE</p>
                <p className="text-gray-600"> Men's Shoes</p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <Link
            onClick={() => handleOpenLink("https://www.nike.com/")}
            className="bg-purple-500 text-white px-4 py-2 mt-6 rounded hover:bg-purple-600"
          >
            View More
          </Link>
        </div>

        {/* Puma Section */}
        <div id="puma" className="flex flex-col items-center border-b-2 pb-10">
          {/* Brand Name */}
          <h4 className="text-2xl mb-6 mt-6">
            Explore <span className="font-semibold">Puma</span> Collections
          </h4>

          {/* Sneakers Listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
              <img
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/400986/04/sv01/fnd/PNA/fmt/png/Speedcat-OG-Women's-Sneakers"
                alt="Adidas"
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <p className="font-semibold">Speedcat OG</p>
                <p className="text-gray-600"> Women Sneakers</p>
              </div>
            </div>
            <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
              <img
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/400986/02/sv01/fnd/PNA/fmt/png/Speedcat-OG-Women's-Sneakers"
                alt="Adidas"
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <p className="font-semibold">Speedcat OG</p>
                <p className="text-gray-600"> Women Sneakers</p>
              </div>
            </div>
            <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
              <img
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/396464/03/sv01/fnd/PNA/fmt/png/Palermo-Leather-Sneakers"
                alt="Adidas"
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <p className="font-semibold">Palermo Leather</p>
                <p className="text-gray-600"> Sneakers</p>
              </div>
            </div>
            <div className="border rounded-lg shadow-lg p-4 text-center w-72 h-92 hover:border-black">
              <img
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/395205/01/sv01/fnd/PNA/fmt/png/Suede-XL-Sneakers"
                alt="Adidas"
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <p className="font-semibold">Suede XL</p>
                <p className="text-gray-600"> Sneakers</p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <Link
            onClick={() =>
              handleOpenLink(
                "https://us.puma.com/us/en?srsltid=AfmBOorXb-af7Wo_OU7eYzhMDoqte8jzwQKbTp4scuBkauKv1XafWemy"
              )
            }
            className="bg-purple-500 text-white px-4 py-2 mt-6 rounded hover:bg-purple-600"
          >
            View More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandCard;
