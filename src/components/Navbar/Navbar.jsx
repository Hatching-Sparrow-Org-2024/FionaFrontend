import React, { useEffect } from "react";
import "./Navbar.css";
import DropdownItem from "./DropdownItem.jsx";
import { useState } from "react";
import humanIcon from "../../assets/huamn.png";
import searchIcon from "../../assets/search.png";
import menuIcon from "../../assets/hambugerMenu.webp";
import calendarIcon from "../../assets/calendar.jpeg";
import triangleIcon from "../../assets/triangle.png";
import settingsIcon from "../../assets/settings.png";
import logoutIcon from "../../assets/log-out.png";
import feedbackIcon from "../../assets/envelope.png";
import profileIcon from "../../assets/user.png";

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const [appearenceOpen, setAppearenceOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setOpen(false);
      setAppearenceOpen(false);
    });
  }, []);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="navbar">
      <div className="hamburger-menu">
        <img src={menuIcon} alt="" className="menu-icon" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
        <div className="search-box" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
          <input type="text" placeholder="Search" name="" id="" style={{ boxSizing: "border-box" }} />
          <img src={searchIcon} alt="" className="search-icon" style={{ width: "25px", height: "25px" }} />
        </div>

        <div className="calendar-section" style={{ display: "flex", justifyContent: "flex-start", gap: "5px" }}>
          <div>
            <img src={calendarIcon} alt="" className="calendar-icon" style={{ width: "25px", height: "25px" }} />
            <div>Date</div>
          </div>
          <div>
            <img src={triangleIcon} alt="" className="triangle-icon" style={{ width: "25px", height: "25px" }} />
          </div>
        </div>

        <div className="personal-info" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "5px" }}>
          <img src={humanIcon} alt="" className="human-icon" style={{ width: "25px", height: "25px" }} />
          <pre>{"First name VIP of Sales"}</pre>
          <div className="menu-trigger">
            <img
              className="triangle-icon"
              src={triangleIcon}
              style={{ width: "25px", height: "25px" }}
              alt=""
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            />
            <div className="menu-container">
              <div className={`dropdown-menu ${open && !appearenceOpen ? "active" : "inactive"}`}>
                <DropdownItem img={profileIcon} text={"Go to profile"} />
                <DropdownItem
                  img={settingsIcon}
                  text={"Appearence"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                    setAppearenceOpen(!appearenceOpen);
                  }}
                />
                <DropdownItem img={feedbackIcon} text={"Submit Feedback"} />
                <DropdownItem img={logoutIcon} text={"Log out"} />
              </div>
            </div>
            <div className="appearence-menu-container">
              <div className={`dropdown-menu ${appearenceOpen && !open ? "active" : "inactive"}`}>
                <DropdownItem
                  img={feedbackIcon}
                  text={"Light"}
                  onClick={() => {
                    setTheme("light");
                    setAppearenceOpen(false);
                  }}
                />
                <DropdownItem
                  img={logoutIcon}
                  text={"Dark"}
                  onClick={() => {
                    setTheme("dark");
                    setAppearenceOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
