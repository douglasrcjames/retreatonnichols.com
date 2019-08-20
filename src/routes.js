import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";

import withTracker from './components/WithTracker';

const Page404 = ({ location }) => (
  <div className="m-padding">
    {/* <img src={error404} alt="error404" className="large responsive center" /> */}
    <p>
      Uh oh... doesn't look like this page exists. Check the web address and try
      again.
    </p>
  </div>
);

export class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={withTracker(Home)} />
        
        <Route component={withTracker(Page404)} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
