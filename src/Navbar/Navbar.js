import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {} from "react-icons/";
import {} from "react-icons/";
import ImgW from "../Image/1.png";

function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <div className="menu">
            <a href="#">
              <FaBars />
              <span>Menu</span>
            </a>
          </div>
          <div className="logo">
            <a href="https://www.wayfair.com/">
              <img src={ImgW} alt="" />
            </a>
          </div>
          <div className="search">
            <FaSearch />
            <input type="search" placeholder="Find aynthing home..." />
          </div>
          <div className="icons">
            <div className="one">
              <HiOutlineUserCircle />
              <span>Sing In</span>
            </div>
            <div className="two">
              <AiOutlineShoppingCart />
              <span>Cart</span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
