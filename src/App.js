import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//CSS
import './App.css';
//COMPONENTS
import Navigation from './components/Navigation/Navigation';
import About from './components/Landing/About';
import Facts from './components/Landing/Facts';

function App() {
  return (
    <div>
      <Fragment>
        <BrowserRouter>
          <Navigation />
          <section className='container'>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/facts' component={Facts} />
            </Switch>
          </section>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
