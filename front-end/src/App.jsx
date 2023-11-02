import NavigationMenu from "./component/NavigationMenu";
import MainBody from "./component/MainBody";
import classes from "./App.module.css";
import { GlobalProvider } from "./store/store";
export default function App() {
  return (
    <div className={classes.whole}>
      <GlobalProvider>
        <NavigationMenu />
        <MainBody />
      </GlobalProvider>
    </div>
  );
}
