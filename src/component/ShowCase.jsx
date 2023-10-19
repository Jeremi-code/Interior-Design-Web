import classes from "../css/Showcase.module.css";
import horizontal from "../css/MainBody.module.css";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import sixth from "../assets/sixth.jpg";
export default function ShowCase() {
  return (
    <div>
      <h1>Interior Design</h1>
      <h3 id="showcase">Showcase.</h3>
      <hr className={horizontal.hr} />
      <div className={classes.showCaseImages}>
        <div className={classes.rowImage}>
          <div>
            <img src={first} />
          </div>
          <div>
            <img src={second} />
          </div>
        </div>
        <div className={classes.rowImage}>
          <div>
            <img src={third} />
          </div>
          <div>
            <img src={fourth} />
          </div>
        </div>
        <div className={classes.rowImage}>
          <div>
            <img src={fifth} />
          </div>
          <div>
            <img src={sixth} />
          </div>
        </div>
      </div>
    </div>
  );
}
