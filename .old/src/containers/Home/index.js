import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.scss';
import Contributor from './contributor';
import FaIcon from './../../components/Icons/fa-icon';
import { TweetButton, FaceButton } from './../../components/ShareButtons';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { contributors: [] };

    fetch('https://api.github.com/repos/leocardoso94/free-courses')
      .then(blob => blob.json()
        .then(data => this.updateStars(data.stargazers_count)));

    fetch('https://api.github.com/repos/Leocardoso94/Free-Courses/contributors')
      .then(blob => blob.json()
        .then(data => this.updateContributors(data)));

    this.contributorsList = this.contributorsList.bind(this);
  }

  updateContributors(contributors) {
    this.setState({ contributors });
  }

  contributorsList() {
    return this.state.contributors
      .map((contributor, index) => (<Contributor
        contributor={contributor}
        index={index}
        key={contributor.login}
      />));
  }

  updateStars(stars) {
    this.setState({ stars });
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="initial"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
        component="div"
        className="home"
      >
        <h1 className="title">Free Courses</h1>
        <p>
          <b>Welcome!</b>
          <br />
          <br />
          This is a list of free courses about programming.
          <br />
          You can contribute to the project adding more courses,
          <a
            target="_blank"
            href="https://github.com/Leocardoso94/Free-Courses/blob/master/README.md"
          >
            see how
          </a>
          <br />
          <br />
          Free Courses is &nbsp;
          <a
            target="_blank"
            href="https://github.com/Leocardoso94/Free-Courses"
          >
            open source.
          </a>
          <br />
          <a
            className="stars"
            target="_blank"
            href="https://github.com/Leocardoso94/Free-Courses"
          >
            <FaIcon icon="fa-github" color="#000" />
            <FaIcon icon="fa-star" color="#ff8f00" /> {this.state.stars} Stars
          </a>
          <br />
          <span >Made with <FaIcon icon="fa-heart" color="red" />
            &nbsp;by
            <a
              target="_blank"
              href="https://github.com/Leocardoso94"
            >
              &nbsp; @LeoCardoso94
            </a>
          </span>
          <br />
          <br />
          <TweetButton text="https://freecourses.github.io/" title="Share" /><FaceButton text="https://freecourses.github.io/" title="Share" />
        </p>

        <h4>Special thanks to all contributors:</h4>

        <ul className="contributors">
          {this.contributorsList()}
        </ul>


        <br />

      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
