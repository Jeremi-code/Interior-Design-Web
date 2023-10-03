import classes from '../css/NavBar.module.css'
export default function NavigationMenu () {
    return (
        <div className={classes.NavBar}>
            <div className={classes.CompanyName}>
                <p>Company name</p>
            </div>
            <ul className={classes.NavMenu}>
                <li><a href="">Home</a></li>
                <li><a href="">Showcase</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Designers</a></li>
                <li><a href="">Package</a></li>
                <li><a href="">Contact</a></li>

            </ul>
        </div>
    )
}