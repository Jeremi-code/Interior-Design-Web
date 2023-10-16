import classes from '../css/MainBody.module.css'
import ShowCase from './ShowCase'
import Services from './Services'
export default function MainBody () {
    return (
        <div className={classes.main}>
            <ShowCase/>
            <Services/>
        </div>
    )
}