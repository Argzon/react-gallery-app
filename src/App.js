import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Container from './components/Container';
import Nav from './components/Nav';
import ErrorPage from './components/ErrorPage';

const App = () => (
  
  <BrowserRouter>
    <div className="container">
      <Route component={Nav} />
      <Switch>
        <Route exact path="/" component={Container} />
        <Route exact path="/search" component={Container} />
        <Route path="/search/:query" component={Container} />
        <Route path="/nature" render={ () => {return <Container query={'nature'} /> }} />
        <Route path="/dogs" render={ () => {return <Container query={'dogs'} /> }} />
        <Route path="/flowers" render={ () => {return <Container query={'flowers'} /> }} />
        <Route component={ErrorPage} />
      </Switch> 
    </div>
  </BrowserRouter>
)

export default App;
