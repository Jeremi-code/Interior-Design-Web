import classes from '../css/Showcase.module.css'
import horizontal from '../css/MainBody.module.css'
import first from  '../assets/first.jpg'
import second from  '../assets/second.jpg'
import third from  '../assets/third.jpg'
import fourth from  '../assets/fourth.jpg'
import fifth from  '../assets/fifth.jpg'
import sixth from  '../assets/sixth.jpg'
export default function ShowCase () {
    return(
        <div>
            <h1>Interior Design</h1>
            <h3>Showcase</h3>
            <hr className={horizontal.hr}/>
            <div className={classes.showCaseImages}>
                <img src = {first} />
                <img src = {second}/>
                <img src = {third} />
                <img src = {fourth} />
                <img src = {fifth} />
                <img src = {sixth} />

            </div>

        </div>
    )
}