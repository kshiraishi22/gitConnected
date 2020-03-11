import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import EmpCreateAccount from './components/pages/EmpCreateAccount';
import DevCreateAccount from './components/pages/DevCreateAccount';
import DevFeed from "../src/components/developer/devFeed"
import DevProfile from "./components/pages/DevProfile"
import EmpProfile from "./components/pages/EmpProfile"
import SelectForm from './components/pages/SelectForm'
import EmpFeed from "../src/components/employer/empFeed";
import PostJob from "./components/pages/PostJob"
import PrivateRoute from "./components/PrivateRoute";
import history from "./utils/history";



import { useAuth0 } from "./react-auth0-spa";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/feed/dev/" component ={DevFeed} />
          <PrivateRoute path="/feed/emp" component ={EmpFeed} />
          <PrivateRoute exact path="/dev-create-account" component={DevCreateAccount} />
          <PrivateRoute exact path="/emp-create-account" component={EmpCreateAccount} />
          <PrivateRoute path="/profile/dev" component={DevProfile} />
          <PrivateRoute exact path="/profile/emp" component={EmpProfile} />
          <PrivateRoute exact path="/postjob" component={PostJob} />
          <PrivateRoute exact path='/selectform' component={SelectForm} />
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;