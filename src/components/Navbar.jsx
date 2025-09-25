import React from "react";
import Container from "./container";

const Navbar = () => {
  return (
    <div className="bg-purple-100 shadow-md">
      <Container>
        <nav className="py-4 flex justify-between items-center">
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
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
