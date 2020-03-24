import React from "react";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import ReactGA from "react-ga";
import Header from "./containers/Header";
import Contribute from "./containers/Contribute";
import SideBar from "./containers/SideBar";
import CategoryContainer from "./containers/Category";

// Containers
// import Header from "./Header";
// import SideBar from "./SideBar";

// import Course from "./Course";
// import Home from "./Home";
// import Contribute from "./Contribute";

ReactGA.initialize("UA-108689470-1");
const history = createHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname + location.hash });
  ReactGA.pageview(location.pathname + location.hash);
});

const closeSideBar = () => {
  const sideBar = document.querySelector(".sidebar");
  const menuButton = document.querySelector("#menu-button");

  if (sideBar) sideBar.classList.remove("open");
  if (menuButton) menuButton.classList.remove("active");
};

export default () => (
  <Router history={history}>
    <div className="container">
      <Header />
      <Route
        path="/"
        render={() => (
          <div className="main">
            <SideBar closeSideBar={closeSideBar} />
            <div
              className="content"
              tabIndex={0}
              role="link"
              // onKeyPress={() => closeSideBar()}
              // onClick={() => closeSideBar()}
            >
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/category/:category" component={CategoryContainer} />
              {/* <Route path="/course/:id" component={Course} /> */}
              <Route path="/contribute" component={Contribute} />
            </div>
          </div>
        )}
      />
    </div>
  </Router>
);
