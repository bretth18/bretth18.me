import React from 'react';
import $ from 'jquery';

MainLayout = React.createClass({

  render() {
    // // shit for mobile navbar
    // $(".button-collapse").sideNav();
    return (
      <div>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" name="viewport" />
        <Header />
        <main>{this.props.content}</main>
        <Footer />
      </div>
    );
  }
});
