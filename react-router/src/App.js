import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FriendDetail from "./components/FriendDetails/FriendDetails";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          
          {/* Dynamic URL parameter */}
          <Route path="/friend/:id">
            <FriendDetail/>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
