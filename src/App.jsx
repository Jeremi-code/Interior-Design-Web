import NavigationMenu from "./component/NavigationMenu"
import MainBody from "./component/MainBody"
import classes from "./App.module.css"
export default function  App () {

  return (
    <div className={classes.whole}>
      <NavigationMenu/>
      <MainBody/>
    </div>
  )
}
