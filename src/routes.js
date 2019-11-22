import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/pages/Home";

import withTracker from './components/WithTracker';
import PietMondrian from "./components/pages/suites/PietMondrian";
import GeorgiaOKeeffe from "./components/pages/suites/GeorgiaOKeeffe";
import Testimonials from "./components/pages/Testimonials";
import TheHosts from "./components/pages/TheHosts";
import Reserve from "./components/pages/Reserve";
import Contact from "./components/pages/Contact";

const Page404 = ({ location }) => (
  <div className="wrapper">
    {/* <img src={error404} alt="error404" className="large responsive center" /> */}
    <p className="m-padding">
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
        <Route exact path="/suites/piet-mondrian" component={withTracker(PietMondrian)} />
        <Route exact path="/suites/georgia-o-keeffe" component={withTracker(GeorgiaOKeeffe)} />
        <Route exact path="/testimonials" component={withTracker(Testimonials)} />
        <Route exact path="/the-hosts" component={withTracker(TheHosts)} />
        <Route exact path="/reserve" component={withTracker(Reserve)} />
        <Route exact path="/contact" component={withTracker(Contact)} />
        <Route component={withTracker(Page404)} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
