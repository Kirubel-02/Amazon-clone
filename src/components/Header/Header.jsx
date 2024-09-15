import React from "react";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import LowerHeader from "./LowerHeader.jsx";

const Header = () => {
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* Logo Section */}
          <div className={classes.logo__container}>
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </div>

          {/* Delivery location */}
          <div className={classes.delivery}>
            <span>
              <IoLocationOutline />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          {/* Search section */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon Products" />
            <FaSearch size={25} />
          </div>

          {/* Other section */}
          <div className={classes.order__container}>
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </div>
            <a>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
            </a>
            <a>
              <p>returns</p>
              <span>& Orders</span>
            </a>
            <div className={classes.cart}>
              <FiShoppingCart size={35} />
              <span>0</span> {/* Static cart item number for now */}
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
