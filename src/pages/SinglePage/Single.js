import React from "react";
import { useLocation } from "react-router-dom";
import "./SinglePage.css";
import Navbar from "../../Navbar/Navbar";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

function Single() {
  const product = useLocation().state;
  console.log(product);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="img">
          <img src={product.image} alt="" />
        </div>
        <div className="text">
          <h3>{product.title}</h3>
          <p>
            See More by <a href="#">Wayfair Basics®</a>
          </p>
          <p className="margin">
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <FaStarHalfAlt />
            </span>
            <span>4.4</span>
            <span>
              <a href="#">3787 Reviews</a>
            </span>
          </p>
          <div className="sum">
            <p>
              $ {product.price}
              <span>$46.80</span>
              <span>51% Off</span>
              <p>On Sale</p>
            </p>
          </div>
          <div className="sum2">
            <p>
              $40 OFF your qualifying first order of $250+1
              <a href="#">with a Wayfair credit card</a>
            </p>
          </div>
          <div className="box">
            <div className="green">
              <span>2-Day Delivery</span>
            </div>
            <p>FREE Shipping on orders over $35</p>
            <p className="flex2">
              <span>Get it by </span>
              <span> Fri. Mar 31 </span>
              <span> to </span>
              <span>
                <a href="#">
                  Grenola - 67346 <AiOutlineArrowDown />
                </a>
              </span>
            </p>
          </div>
          <div className="input">
            <div className="top1">
              <p>
                <span className="color">Color (6)</span>
                <p>
                  <span className="hover">White</span>
                </p>
              </p>
            </div>
            <div className="margin2">
              <div className="top3">
                <img src={product.image} alt="" />
              </div>
              <div className="svg">
              <FiChevronDown />
              </div>
            </div>
          </div>
          <div className="input">
            <div className="top1">
              <p>
                <span className="color">Size (3)</span>
                <p>
                  <span className="hover">Select Size</span>
                </p>
              </p>
              <div className="margin3">
                <FiChevronDown className="margin2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img width={"300px"} src={product.imeag} alt="" /> */}
    </div>
  );
}

export default Single;
