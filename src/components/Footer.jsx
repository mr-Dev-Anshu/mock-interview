import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="lg:w-1/3">
            {/* <img className="h-12" src={logo} alt="" /> */}
            <h4 className="text-xl font-semibold">About Us</h4>
            <p>This e-commerce Website is being built for a hackathon.</p>
          </div>
          <div className="lg:w-1/3">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="lg:w-1/3">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <p>Stay connected with us on social media!</p>
            <div className="flex py-2 justify-around lg:justify-between">
              <HashLink to="https://www.instagram.com/mr_95.2/">
                <FaInstagram size={24} />
              </HashLink>
              <HashLink to="https://www.facebook.com/prince.chaurasia.169405/">
                <FaFacebook size={24} />
              </HashLink>
              <HashLink to="https://twitter.com/shutup_prince">
                <FaTwitter size={24} />
              </HashLink>
              <HashLink to="https://www.whatsapp.com">
                <FaWhatsapp size={24} />
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p>&copy; 2024 MadeforMe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
