import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 dark:text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="mb-6 md:mb-0">
          <p className="font-bold text-2xl">PhotoRevive</p>
          <p className="text-xl">Restore your old photos with our advanced AI tools.</p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-xl">Home</a></li>
            <li><a href="#" className="text-xl">Restoration Tools</a></li>
            <li><a href="#" className="text-xl">FAQs</a></li>
            <li><a href="#" className="text-xl">Pricing</a></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">AI Features</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-xl">Photo Restoration</a></li>
            <li><a href="#" className="text-xl">Image Enhancer</a></li>
            <li><a href="#" className="text-xl">Color Correction</a></li>
            <li><a href="#" className="text-xl">Background Removal</a></li>
            <li><a href="#" className="text-xl">More Tools</a></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-xl">Contact Us</a></li>
            <li><a href="#" className="text-xl">Help Center</a></li>
            <li><a href="#" className="text-xl">Blog</a></li>
            <li><a href="#" className="text-xl">Community</a></li>
          </ul>
        </div>


      </div>
      
      <div className="text-xl dark:text-gray-400 text-center md:mt-6">
          <p>&copy; 2024 PhotoRevive. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;