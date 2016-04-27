import React from 'react';
import Meteor from 'meteor/meteor';


Portfolio = React.createClass({
  render(){
    return(
    <div className="container">
        <div className="row">
          <div className="col s6 m7">
            <div className="card">
              <div className="card-image">
                <img src="https://cloud.githubusercontent.com/assets/955730/14698260/e461bd9e-0741-11e6-8897-e89bedacc022.png" height="200px" width="200px" />
                <span className="card-title">healthLab</span>
              </div>
              <div className="card-content">
                <p>healthLab is a platform for managing your personal health.</p>
              </div>
              <div className="card-action">
                <a href="https://github.com/bretth18/healthLab">GitHub</a>
              </div>
            </div>
          </div>
          <div className="col s6 m7">
            <div className="card">
              <div className="card-image">
                <img src="https://cloud.githubusercontent.com/assets/955730/14698010/9c4b1fd0-073e-11e6-9c07-c2eabe292a65.jpg" height="200px" width="200px" />
                <span className="card-title">EmailAI</span>
              </div>
              <div className="card-content">
                <p>emailAssistant (or emailAI) is currently a backend service that can be used to proofread emails, essays, etc.</p>
              </div>
              <div className="card-action">
                <a href="https://github.com/bretth18/EmailAI">GitHub</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
  }
});
