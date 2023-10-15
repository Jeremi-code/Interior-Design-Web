import classes from '../css/MainBody.module.css'
import ShowCase from './ShowCase'
export default function MainBody () {
    return (
        <div className={classes.main}>
            <ShowCase/>
        </div>
    )
}