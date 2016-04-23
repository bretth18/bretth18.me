import React from 'react';

Home = React.createClass({
  render() {
    return (
      <div className="container">
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

            <div className="col s6">
              <div className="card-panel grey lighten-5 z-depth-1" id="githubCard">
                <h5><i className="fa fa-code" aria-hidden="true"/> Web Development</h5>
                <div className="section">
                  <blockquote>
                    I create versitile webapps using modern frameworks like Meteor.js, React.js, Node.js and more.
                  </blockquote>
                  <blockquote>
                    I love designing clean, easy to use sites and responsive UI's, like the one you're using right now!
                  </blockquote>

                </div>
              </div>
            </div>
            <div className="col s6">
              <div className="card-panel grey lighten-5 z-depth-1" id="githubCard">
              <h5><i className="fa fa-mobile" aria-hidden="true"/> Mobile Development</h5>
              <div className="section">
                <blockquote>
                  I began programming by writing Java based Android apps in 2010, and have been developing my skill set since!
                </blockquote>
                <blockquote>
                  I currently write mobile solutions for iOS in Swift and React-Native, along with a few Android Apps using React-Native.
                </blockquote>
              </div>
              </div>
            </div>

          </div>
      </div>
    );
  }
});
