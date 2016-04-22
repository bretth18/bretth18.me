import React from 'react';

Home = React.createClass({
  render() {
    return (
      <div className="container">
        <h4>Hello, I'm Brett</h4>
                <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
              <div className="col s2">
                <img src="https://pbs.twimg.com/profile_images/720845700666241025/_O8P_Dv_.jpg" alt="" className="circle responsive-img" />
              </div>
              <div className="col s10">
                <span className="black-text">
                  This is a square image. Add the "circle" class to it to make it appear circular.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});
