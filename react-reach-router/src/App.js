import { Link, Router } from "@reach/router";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Invoice from "./components/Invoice";

function App() {
  return (
    <div>
      <h1>Tutorial!</h1>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="dashboard">Dashboard</Link>
        <Link to="invoices/123">Invoice 123</Link>
      </nav>
      {/* 
      This router is a bit different than the react router. Which is like that,
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
        So, reach/router simplifies the react-router a bit.
      */}
      <Router> 
        <Home path="/" />
        <Dashboard path="/dashboard" />
        {/* Dynamic URL parameter */}
        <Invoice path="invoices/:invoiceId" />
      </Router>
    </div>
  );
}

export default App;
