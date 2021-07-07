import "./App.css";
import { useContext, useEffect } from "react";
import Home from "./screens/Home/Home";
import ComicBrowse from "./screens/ComicBrowse/ComicBrowse";
import ComicCreate from "./screens/ComicCreate/ComicCreate";
import ComicEdit from "./screens/ComicEdit/ComicEdit";
import ComicDetail from "./screens/ComicDetail/ComicDetail";
import { Route, Switch } from "react-router-dom";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import Login from "./screens/Login/Login";
import Logout from "./screens/Logout/Logout";
import Purchase from "./screens/Purchase/Purchase";
import UpdatePassword from "./screens/UpdatePassword/UpdatePassword";
import Wishlist from "./screens/Wishlist/Wishlist";
import { userContext, setUserContext } from './utils/Context'

const App = () => {
  // eslint-disable-next-line
  const user = useContext(userContext);
  const setUser = useContext(setUserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
      // eslint-disable-next-line
    fetchUser();
      // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-comic" component={ComicCreate} />
        <Route exact path="/comics/:id" component={ComicDetail} />
        <Route exact path="/edit-comic/:id" component={ComicEdit} />
        <Route exact path="/comics" component={ComicBrowse} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/purchase/:id" component={Purchase} />
        <Route exact path="/change-password" component={UpdatePassword} />
        <Route exact path="/users/:id/wishlist" component={Wishlist} />
      </Switch>
    </div>
  );
};

export default App;
