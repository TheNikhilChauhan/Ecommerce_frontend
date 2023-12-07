import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //adding event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else setHeaderFixed(false);
  });

  return (
    <header>
      {/* header top start */}
      <div>
        <div className="container">
          <div className="header-top-area">
            <Link to="/register">
              <span>Create an Account</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
