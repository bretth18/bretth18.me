import React from 'react';
import Meteor from 'meteor/meteor';


Footer = React.createClass({
  render(){
    return(
          <footer className="page-footer footer-copyright">
              <div className="footer-copyright">
                <div className="container">
                ©2016 Brett Henderson
                <a className="grey-text text-lighten-4 right" href="https://github.com/bretth18">GitHub</a>
                </div>
              </div>
        </footer>
    );
  }
});
