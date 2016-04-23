import React from 'react';

About = React.createClass({
  render(){
    return (
      <div className="container">
        <h4>about</h4>
          <h4>Hello, I'm Brett</h4>
          <div className="divider"></div>
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1" id="homeCard">
              <div className="row valign-wrapper">
                <div className="col s2">
                  <img src="https://pbs.twimg.com/profile_images/720845700666241025/_O8P_Dv_.jpg" alt="" className="circle responsive-img" />
                </div>
                <div className="col s10">
                  <span className="black-text">
                    I'm a university student majoring in Computer Science, and a full-stack web/mobile developer. When I'm not busy with my own projects,
                    I do freelance development work on the side.
                  </span>
                </div>
              </div>
              <button className="waves-effect waves-teal btn-flat blue-text right" href="/about">about me</button>
            </div>
          </div>
          <div className="divider"></div>
            <div className="row">

              <div className="col s4">
                <div className="card-panel grey lighten-5 z-depth-1" id="githubCard">
                  <h5><i className="fa fa-code" aria-hidden="true"/> My Stack</h5>
                  <div className="section">
                    <li><p>Meteor.js</p></li>
                    <li><p>React.js</p></li>
                    <li><p>React-Native</p></li>
                    <li><p>Sass</p></li>
                    <li><p>Node.js</p></li>
                    <li><p>MongoDB</p></li>
                    <li><p>Git/CI</p></li>
                  </div>
                </div>
              </div>
              <div className="col s4">
                <div className="card-panel grey lighten-5 z-depth-1" id="githubCard">
                <h5><i className="fa fa-hand-lizard-o" aria-hidden="true"/> Links</h5>
                <div className="section">
                  <h6>GitHub</h6>
                    <a href="https://github.com/bretth18"><i className="fa fa-github fa-4x" align="middle" aria-hidden="true"/></a>
                    <div className="divider"></div>
                      <h6>Linkedin</h6>
                        <a href="https://www.linkedin.com/in/bretth18"><i className="fa fa-linkedin fa-4x" align="middle" aria-hidden="true"/></a>
                    <div className="divider"></div>
                      <h6>Twitter</h6>
                      <a href="https://twitter.com/brett_h18"><i className="fa fa-twitter fa-4x" align="middle" aria-hidden="true" /></a>
                    <div className="divider"></div>
                      <h6>UpWork</h6>
                      <a href="http://www.upwork.com/o/profiles/users/_~0122de3e325d65317a/"><i className="fa fa-briefcase fa-4x" align="middle" aria-hidden="true" /></a>
                    <div className="divider"></div>
                      <h6>Instagram</h6>
                      <a href="https://instagram.com/bretth18"><i className="fa fa-instagram fa-4x" align="middle" aria-hidden="true" /></a>
                </div>
                </div>
              </div>

            </div>

      </div>
    );
  }
});
