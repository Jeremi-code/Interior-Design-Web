import classes from '../css/MainBody.module.css'
import ShowCase from './ShowCase'
import Services from './Services'
import Designer from './Designer'
import Packages from './Packages'
export default function MainBody () {
    return (
        <div className={classes.main}>
            <ShowCase/>
            <Services/>
            <Designer/>
            <Packages/>
        </div>
    )
}