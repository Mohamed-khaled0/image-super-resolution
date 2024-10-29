import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-50 dark:bg-gray-800 dark:text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="mb-6 md:mb-0">
          <p className="font-bold text-2xl">PhotoRevive</p>
          <p className="text-xl">Restore your old photos with our advanced AI tools.</p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <ScrollLink to="hero-section" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="upload-section" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Restoration Tools</ScrollLink>
            </li>
            <li>
              <ScrollLink to="faq" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">FAQs</ScrollLink>
            </li>
            <li>
              <ScrollLink to="plans" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Pricing</ScrollLink>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">AI Features</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <ScrollLink to="photo-restoration" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Photo Restoration</ScrollLink>
            </li>
            <li>
              <ScrollLink to="image-enhancer" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Image Enhancer</ScrollLink>
            </li>
            <li>
              <ScrollLink to="color-correction" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Color Correction</ScrollLink>
            </li>
            <li>
              <ScrollLink to="background-removal" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Background Removal</ScrollLink>
            </li>
          </ul>
        </div>

        {/* Uncomment if you want to add Support section back */}
        {/* <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-4 space-y-2">
            <li><ScrollLink to="contact" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Contact Us</ScrollLink></li>
            <li><ScrollLink to="help" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Help Center</ScrollLink></li>
            <li><ScrollLink to="blog" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Blog</ScrollLink></li>
            <li><ScrollLink to="community" duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Community</ScrollLink></li>
          </ul>
        </div> */}
      </div>

      <div className="text-xl dark:text-gray-400 text-center md:mt-6">
        <p>&copy; 2024 PhotoRevive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
