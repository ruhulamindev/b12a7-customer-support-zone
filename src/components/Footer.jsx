import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
      <Container>
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-white">CS — Ticket System</h3>
            <p className="text-sm mt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2 items-center mt-3">
                <img src="/tweter.png" alt="" />
                @CS — Ticket System</li>
              <li className="flex gap-2 items-center mt-3">
                <img src="/linkedin.png" alt="" />
                @CS — Ticket System</li>
              <li className="flex gap-2 items-center mt-3">
                <img src="/facebook.png" alt="" />
                @CS — Ticket System</li>
              <li className="flex gap-2 items-center mt-3">
                <img src="/message.png" alt="" />
                support@cst.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center md:text-center text-gray-500 text-sm mt-8">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
