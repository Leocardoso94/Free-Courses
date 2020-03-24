import React, { Component } from "react";
import FaIcon from "../../components/Icons/fa-icon";
import { FaceButton, TweetButton } from "./../../components/ShareButtons";
import Contributor from "./contributor";
import { ReadingDoodle } from "react-open-doodles";
import "./index.scss";

export interface IContributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  contributions: number;
}

class Home extends Component {
  state: { contributors: IContributor[]; stars: number } = {
    contributors: [],
    stars: 0
  };

  componentDidMount = () => {
    fetch("https://api.github.com/repos/leocardoso94/free-courses").then(blob =>
      blob
        .json()
        .then(data => this.updateStars(data.stargazers_count))
        .catch(console.error)
    );

    fetch("https://api.github.com/repos/Leocardoso94/Free-Courses/contributors")
      .then(blob => blob.json().then(data => this.updateContributors(data)))
      .catch(console.error);
  };

  updateContributors(contributors: IContributor[]) {
    this.setState({ contributors });
  }

  contributorsList() {
    return this.state.contributors.map((contributor, index) => (
      <Contributor contributor={contributor} key={contributor.login} />
    ));
  }

  updateStars(stars: number) {
    this.setState({ stars });
  }
  render() {
    return (
      <div className="home">
        <h1 className="title">Free Courses</h1>
        <div style={{ width: 250, margin: "0 auto" }}>
          <ReadingDoodle></ReadingDoodle>
        </div>
        <h2>Welcome!</h2>
        <p>
          <br />
          This is a list of free courses about programming.
          <br />
          You can contribute to the project adding more courses,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Leocardoso94/Free-Courses/blob/master/README.md"
          >
            see how
          </a>
          <br />
          <br />
          Free Courses is &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Leocardoso94/Free-Courses"
          >
            open source.
          </a>
          <br />
          <a
            className="stars"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Leocardoso94/Free-Courses"
          >
            <FaIcon icon="fa-github" color="#000" />
            <FaIcon icon="fa-star" color="#ff8f00" /> {this.state.stars} Stars
          </a>
          <br />
          <span>
            Made with <FaIcon icon="fa-heart" color="red" />
            &nbsp;by
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Leocardoso94"
            >
              &nbsp; @LeoCardoso94
            </a>
          </span>
          <br />
          <br />
          <TweetButton text="https://freecourses.github.io/" title="Share" />
          <FaceButton text="https://freecourses.github.io/" title="Share" />
        </p>

        <h4>Special thanks to all contributors:</h4>

        <ul className="contributors">{this.contributorsList()}</ul>

        <br />
      </div>
    );
  }
}

export default Home;
