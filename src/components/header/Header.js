import NavButton from "../NavButton/NavButton";
import "./style.scss";
import OutsideAlerter from "../OutsideClick/OutsideAlerter";

export default function Header() {
  const handleShowLeftMenu = () => {
    const leftNav = document.getElementById("leftNavDiv");
    leftNav.classList.add("active");
  };

  const handleHideLeftMenu = () => {
    const leftNav = document.getElementById("leftNavDiv");
    leftNav.classList.remove("active");
  };

  const handleSearch = () => {
    const search = document.getElementById("search");
    search.classList.toggle("active");
    const searchInput = document.getElementById("searchInput");
    searchInput.focus();
  };

  // const handleSearchClose = () => {
  //   const search = document.getElementById("search");
  //   search.classList.remove("active");
  // };

  return (
    <header>
      <nav id="firstNavbar">
        <OutsideAlerter id={"leftNavDiv"} func={handleHideLeftMenu}>
          <ul id="leftNav">
            <NavButton icon="icon-login" text="Sign in" />
            <NavButton text="Register" />
            <NavButton
              icon="icon-search"
              text="Search"
              onClick={handleSearch}
            />
          </ul>
        </OutsideAlerter>
        <div href="#" id="leftNavPhone" onClick={handleShowLeftMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <h1 id="logo" onClick="">
          SuitUp
        </h1>
        <ul id="rightNav">
          <NavButton icon="icon-gift" text="Gift Certificate" />
          <NavButton icon="icon-basket" text="Cart" />
        </ul>
      </nav>
    </header>
  );
}
