import React from 'react';
import $ from 'jquery';

Header = React.createClass({

  // function for mobile side-bar layout
  showBar(){
    $('.button-collapse').sideNav({
    menuWidth: 100, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);
    console.log('registering click');
  },
  render() {
    var navStyle ={
      paddingLeft: "12px"
    };
    // $(".button-collapse").sideNav();

    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><i className="fa fa-bolt" aria-hidden="true"/> bretth18</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse" onClick={this.showBar}><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/about">about</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/portfolio">portfolio</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="/about">about</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/portfolio">portfolio</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
