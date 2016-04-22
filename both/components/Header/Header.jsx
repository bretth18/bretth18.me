import React from 'react';

Header = React.createClass({

  render() {
    var navStyle ={
      paddingLeft: "12px"
    };

    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><i className="material-icons perm_identity">perm_identity</i>bretth18.me</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">about</a></li>
            <li><a href="badges.html">contact</a></li>
            <li><a href="badges.html">portfolio</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
