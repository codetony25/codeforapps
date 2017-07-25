import React from 'react';
import { Element } from 'react-scroll';
import { Style } from 'jassy';

import landingWorkflowStyles from './styles/landing_workflow_style';

class LandingWorkflow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: landingWorkflowStyles()
    };

    this.displayName = 'LandingWorkflow';
  }

  onWorkflowListItemClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Element name="workflow" className="landing-workflow">
        <Style rules={this.state.styles} />
        <div className="workflow-container">
          <div className="workflow-header-container">
            <h2>
              How to <span className="title-bold">
              Get Started</span> on EverLib
            </h2>
            <h5>{`See how easy it is to read or create your own EverLib
            interactive book`}</h5>
          </div>
        </div>
        <div className="workflow-list-container">
          <ul>
            <li>
              <a
                className="active"
                href="#"
                onClick={this.onWorkflowListItemClick}>
                Create account
              </a>
            </li>
            <li>
              <a href="#"
                 onClick={this.onWorkflowListItemClick}>
                Manage library
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={this.onWorkflowListItemClick}>
                View statistics
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={this.onWorkflowListItemClick}>
                Reading books
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={this.onWorkflowListItemClick}>
                Publish books
              </a>
            </li>
          </ul>
        </div>
        <div className="workflow-details-container">
          <div className="workflow-signup-details-container">
            <div className="workflow-signup-display">
              <div className="code-box">
                if (youreAsuperStar) return true;
              </div>
            </div>
            <div className="workflow-signup-details">
              <h5>Sign up as a reader or author</h5>
              <p>{`When you first sign up you would initially become a member,
                  but then choose to become an author when you decide to. `}
                <a href="#">Sign me up now!</a>
              </p>
            </div>
          </div>
        </div>
      </Element>
    );
  }

}

export default LandingWorkflow;
