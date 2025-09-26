import React, { useState } from "react";
import Container from "./container";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-purple-100 shadow-md">
      <Container>
        <nav className="py-4 flex justify-between items-center relative">
          <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>
          <div className="md:flex hidden items-center gap-6">
            <a className="text-gray-600" href="">
              Home
            </a>
            <a className="text-gray-600" href="">
              FAQ
            </a>
            <a className="text-gray-600" href="">
              Changelog
            </a>
            <a className="text-gray-600" href="">
              Blog
            </a>
            <a className="text-gray-600" href="">
              Download
            </a>
            <a className="text-gray-600" href="">
              Contact
            </a>
            <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-sm px-4 py-2 rounded">
              + New Ticket
            </button>
          </div>

          {/**mobile menu button */}
          <button
            className="md:hidden block text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/**mobile menu button */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-purple-200 shadow-md flex flex-col items-start gap-4 px-6 py-4 md:hidden z-50">
              <a className="text-black-600" href="">
                Home
              </a>
              <a className="text-black-600" href="">
                FAQ
              </a>
              <a className="text-black-600" href="">
                Changelog
              </a>
              <a className="text-black-600" href="">
                Blog
              </a>
              <a className="text-black-600" href="">
                Download
              </a>
              <a className="text-black-600" href="">
                Contact
              </a>
              <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-sm px-4 py-2 rounded w-full">
                + New Ticket
              </button>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
