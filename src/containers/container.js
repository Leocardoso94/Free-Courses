import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import ReactGA from 'react-ga';

// Containers
import Header from './Header';
import SideBar from './SideBar';
import Category from './Category';
import Course from './Course';
import Home from './Home';
import Contribute from './Contribute';

ReactGA.initialize('UA-108689470-1');
const history = createHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname + location.hash });
  ReactGA.pageview(location.pathname + location.hash);
});


const closeSideBar = () => {
  document.querySelector('.sidebar').classList.remove('open');
  document.querySelector('#menu-button').classList.remove('active');
};


export default () => (
  <Router history={history}>
    <div className="container">
      <Header />
      <Route
        path="/"
        render={() => (
          <div className="main" >
            <SideBar closeSideBar={closeSideBar} />
            <div
              className="content"
              tabIndex="0"
              role="link"
              onKeyPress={() => closeSideBar()}
              onClick={() => closeSideBar()}
            >
              <Route exact path="/" component={Home} />
              <Route path="/category/:category" component={Category} />
              <Route path="/course/:id" component={Course} />
              <Route path="/contribute" component={Contribute} />
            </div>
          </div>
        )}
      />
    </div >
  </Router>
);

