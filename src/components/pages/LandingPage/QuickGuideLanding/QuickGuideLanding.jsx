import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';

import quickGuideLandingStyle from './quickGuideLanding.style';

class QuickGuideLanding extends React.Component {

  static displayName = 'QuickGuideLanding';

  render() {
    return (
      <Element name="guide">
        <div className="quickguide-container">
          <div>
            <Style rules={quickGuideLandingStyle()} />
            <div className="quickguide-header-container">
              <h2>
                How to <span className="title-bold">
                Get Started</span> on EverLib
              </h2>
              <h5>{`See how easy it is to read or create your own EverLib
              interactive book`}</h5>
            </div>
          </div>
          <div className="quickguide-list-container">
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
                <a
                  href="#"
                  onClick={this.onWorkflowListItemClick}
                >
                  Manage library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={this.onWorkflowListItemClick}
                >
                  View statistics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={this.onWorkflowListItemClick}
                >
                  Reading books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={this.onWorkflowListItemClick}
                >
                  Publish books
                </a>
              </li>
            </ul>
          </div>
          <div className="quickguide-details-container">
            <div className="quickguide-signup-details-container">
              <div className="quickguide-signup-display">
                <div className="code-box">
                  if (youreAsuperStar) return true;
                </div>
              </div>
              <div className="quickguide-signup-details">
                <h5>Sign up as a reader or author</h5>
                <p>{`When you first sign up you would initially become a member,
                    but then choose to become an author when you decide to. `}
                  <a href="#">Sign me up now!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }

}

export default QuickGuideLanding;
