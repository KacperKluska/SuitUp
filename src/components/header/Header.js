import NavButton from "../NavButton/NavButton";
import "./style.scss";
import OutsideAlerter from "../OutsideClick/OutsideAlerter";
import { useRef, useState } from "react";

export default function Header() {
  const [leftMenu, setLeftMenu] = useState(false);

  const handleLeftMenu = () => {
    // setLeftMenu((prev) => (prev = !prev));
  };

  const handleLeftMenuShow = () => {
    setLeftMenu(true);
  };

  const handleLeftMenuClose = () => {
    setLeftMenu(false);
  };

  const handleSearch = () => {
    const search = document.getElementById("search");
    search.classList.toggle("active");
    const searchInput = document.getElementById("searchInput");
    searchInput.focus();
  };

  return (
    <header>
      <nav id="firstNavbar">
        <OutsideAlerter
          id="outsideAlert"
          func={handleLeftMenuClose}
          class={leftMenu ? "active" : null}
        >
          <div id="leftNavDiv" className={leftMenu ? "active" : null}>
            <ul id="leftNav" className={leftMenu ? "active" : null}>
              <NavButton icon="icon-login">Sign in</NavButton>
              <NavButton>Register</NavButton>
              <NavButton icon="icon-search" onClick={handleSearch}>
                Search
              </NavButton>
            </ul>
          </div>
          <div
            id="leftNavPhone"
            onClick={handleLeftMenuShow}
            // style={{ display: leftMenu ? "none" : "flex" }}
            className={leftMenu ? "hide" : null}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </OutsideAlerter>
        <h1 id="logo">SuitUp</h1>
        <ul id="rightNav">
          <NavButton icon="icon-gift">Gift Certificate</NavButton>
          <NavButton icon="icon-basket">Cart</NavButton>
        </ul>
      </nav>
    </header>
  );
}
