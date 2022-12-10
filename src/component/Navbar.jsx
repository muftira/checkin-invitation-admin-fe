import React from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarSidebar() {
  const location = useLocation();
  const page = location.pathname;
  const dataFiltered = localStorage.getItem('data')

  const handleSidebar = () => {
    localStorage.setItem('isSidebar', false)
  }
  return (
    <div>
      <div className="fixed w-full h-screen ">
        <div className="navbar bg-bege"></div>
      </div>
    </div>
  );
}

export default NavbarSidebar;
