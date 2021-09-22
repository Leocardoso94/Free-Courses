import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter, Route } from "react-router-dom";
import CategoryContainer from "./containers/Category";
import Contribute from "./containers/Contribute";
import CourseContainer from "./containers/Course";
import Header from "./containers/Header";
import Home from "./containers/Home";
import SideBar from "./containers/SideBar";

ReactGA.initialize("UA-108689470-1");

const closeSideBar = () => {
  const sideBar = document.querySelector(".sidebar");
  const menuButton = document.querySelector("#menu-button");

  if (sideBar) sideBar.classList.remove("open");
  if (menuButton) menuButton.classList.remove("active");
};


const App = () => (
  <BrowserRouter>
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
              onKeyPress={() => closeSideBar()}
              onClick={() => closeSideBar()}
            >
              <Route exact path="/" component={Home} />
              <Route path="/category/:category" component={CategoryContainer} />
              <Route path="/course/:id" component={CourseContainer} />
              <Route path="/contribute" component={Contribute} />
            </div>
          </div>
        )}
      />
    </div>
  </BrowserRouter>
);

export default App
