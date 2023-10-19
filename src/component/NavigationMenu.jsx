import classes from "../css/NavBar.module.css";
export default function NavigationMenu() {
  return (
    <div className={classes.NavBar}>
      <div className={classes.CompanyName}>
        <p>Company Name</p>
      </div>
      <ul className={classes.NavMenu}>
        <li>
          <a href="#showcase">Home</a>
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
