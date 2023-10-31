import classes from "../css/Designer.module.css";
import horizontal from "../css/MainBody.module.css";
import Ermias from "../assets/Ermias.jpg";
import Samuel from "../assets/Sami.jpg";
import Wendimu from "../assets/Wende.jpg";

const Designer = () => {
  return (
    <div>
      <h3 id="designer">Designers</h3>
      <hr className={horizontal.hr} />
      <p>
        The best team in the world.
        <br />
        <br />
        We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <br/>
      <p style={{ fontWeight: "bolder" }}>
        Our designers are thoughtfully choosen
      </p>
      <br/>
      <div className={classes.DesContainer}>
        <div className={classes.DesImg}>
          <>
            <img src={Ermias} />
          </>
          <div className={classes.Description}>
            <p style={{ fontWeight: "bold" }}>Ermias Sintayehu</p>
            <p style={{ color: "grey" }}>Software Engineer</p>
            <p>MERN-Stack Developer</p>
          </div>
        </div>
        <div className={classes.DesImg}>
          <>
            <img src={Samuel} />
          </>
          <div className={classes.Description}>
            <p style={{ fontWeight: "bold" }}>Samuel Sintayehu</p>
            <p style={{ color: "grey" }}>Architect</p>
            <p>Top-Rated Architecht</p>
          </div>
        </div>
        <div className={classes.DesImg}>
          <>
            <img src={Wendimu} />
          </>
          <div className={classes.Description}>
            <p style={{ fontWeight: "bold" }}>Wendimu Sitotaw</p>
            <p style={{ color: "grey" }}>Computer Engineer</p>
            <p>MEVN-Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designer;
