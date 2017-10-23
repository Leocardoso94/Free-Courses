import React, { Component } from 'react';
import './index.scss';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = { contributors: [] };


  }



  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="initial"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
        component="div"
        className="contribute">
        <h1 className="title">Contribute</h1>
        <p>If you know a free course that is not listed, please contribute.
				</p>
        <div className="iframe">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfhXYqkwSHAnVKcD4qvqCmtsZV4BUhr7XVzNB3fTko34-aIhw/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}


export default Contribute;
