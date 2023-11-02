import classes from "../css/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function NavigationMenu() {
  const [isNavMenuOpen , setIsNavMenuOpen] = useState(false)
  const handleOpenSidebar = () => {
    setIsNavMenuOpen(!isNavMenuOpen)
  }
  const handleCloseSidebar = () => {
    setIsNavMenuOpen(!isNavMenuOpen)
  }
  return (
    <div className={classes.NavBar}>
      <div className={classes.compMenu}>
        <div style= {{display : 'flex',flexDirection : 'column'}}>
        { !isNavMenuOpen && 
      <FontAwesomeIcon icon = {faBars} className={classes.iconStyle} onClick = {() => handleOpenSidebar()}/>
    }{ isNavMenuOpen && 
      <ul className={classes.toggleMenu} >
        <p style={{fontSize:'22px',color:'white',marginBottom:'20px',textAlign : 'center',marginTop:'5px'}} onClick={() => handleCloseSidebar()}>Close Menu</p>
        <div className={classes.NavCompanyName}>
        <p>Company Name</p>
      </div>        
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#showcase">Showcase</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#designer">Designers</a>
        </li>
        <li>
          <a href="#package">Package</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    }
    </div>
      <div className={classes.CompanyName}>
        <p>Company Name</p>
      </div>
      </div> 
      <ul className={classes.NavMenu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#showcase">Showcase</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#designer">Designers</a>
        </li>
        <li>
          <a href="#package">Package</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
