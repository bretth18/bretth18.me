// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

// NOTE see flow-router branch for the vanilla router

import React from 'react';

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/about" content={About} layout={MainLayout} />
    <Route path="/contact" content={Contact} layout={MainLayout} />
    <Route path="/portfolio" content={Portfolio} layout={MainLayout} />
  </Router>
);

// Reaktor doensn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
