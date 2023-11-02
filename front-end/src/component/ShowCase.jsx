import classes from "../css/Showcase.module.css";
import horizontal from "../css/MainBody.module.css";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import sixth from "../assets/sixth.jpg"; 
import { useContext } from "react";
import { GlobalContext } from "../store/store";
export default function ShowCase() {
    const ImgClick = (event) => {
        console.log(event.target.src)
        document.getElementById("Img01").src = event.target.src
        console.log(document.getElementById("Img01").src)
        var captionText = document.getElementById("caption")
        console.log(captionText)
        captionText.innerHTML = event.target.alt
        console.log(event.target.alt)
        document.getElementById("myModal").style.display = "block"
        captionText.style.display = "block"
    }
    const handleClick = (event) => {
        document.getElementById("myModal").style.display = "none"
    }
    const { handleMainBodyClick } = useContext(GlobalContext)
  return (
    <div onClick={() => handleMainBodyClick()}>
      <h1>Interior Design</h1>
      <h3 id="showcase">Showcase.</h3>
      <hr className={horizontal.hr} />
      <div className={classes.showCaseImages}>
        <div className={classes.rowImage}>
          <div>
            <img src={first} onClick={(event)=>{ImgClick(event)}} alt="Concrete meets bricks"/>
          </div>
          <div>
            <img src={second}  onClick={(event)=>{ImgClick(event)}} alt="Light, white and tight scandinavian design"/>
          </div>
        </div>
        <div className={classes.rowImage}>
          <div>
            <img src={third}  onClick={(event)=>{ImgClick(event)}} alt="White walls with designer chairs"/>
          </div>
          <div>
            <img src={fourth}  onClick={(event)=>{ImgClick(event)}} alt="Windows for the atrium" />
          </div>
        </div>
        <div className={classes.rowImage}>
          <div>
            <img src={fifth}  onClick={(event)=>{ImgClick(event)}} alt="Bedroom and office in one space" />
          </div>
          <div>
            <img src={sixth}   onClick={(event)=>{ImgClick(event)}} alt="Scandinavian design"/>
          </div>
        </div>
        <div className={classes.modal} onClick={(event)=>{handleClick(event)}} id="myModal">
            <span className={classes.close}>&times;</span>
            <div id="imgModal" >
                <img id="Img01" className={classes.ModalContent} />
                <p id="caption"></p>
            </div>
        </div>
      </div>
    </div>
  );
}
