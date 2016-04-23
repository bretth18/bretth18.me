import React from 'react';

Header = React.createClass({

  render() {
    var navStyle ={
      paddingLeft: "12px"
    };

    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><i className="fa fa-bolt" aria-hidden="true"/> bretth18</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/about">about</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/portfolio">portfolio</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
