import NavigationMenu from "./component/NavigationMenu";
import MainBody from "./component/MainBody";
import classes from "./App.module.css";
import { GlobalProvider } from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div className={classes.whole}>
      <GlobalProvider>
        <NavigationMenu />
        <MainBody />
        <ToastContainer />
      </GlobalProvider>
    </div>
  );
}
