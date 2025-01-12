import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 w-full">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About SneakerHub */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">About SneakerHub</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            SneakerHub is your go-to platform for the latest and trendiest sneakers. Explore a wide variety of brands, exclusive collections, and much more.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">Contact Us</h2>
          <ul className="space-y-3">
            <li>
              <p className="text-sm text-gray-400">Email: support@sneakerhub.com</p>
            </li>
            <li>
              <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
            </li>
            <li>
              <p className="text-sm text-gray-400">Address: 123 Sneaker Street, Sneaker City</p>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">Subscribe to Our Newsletter</h2>
          <p className="text-sm mb-6 text-gray-400">
            Stay updated with the latest news, offers, and trends in the sneaker world.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-gray-300 p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm ml-10 text-gray-500">© 2024 SneakerHub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 lg:mr-10">
            <a href="#" className="hover:text-white hover:underline transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white hover:underline transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white hover:underline transition-colors duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
