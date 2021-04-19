
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
const Home = lazy(() => import('./Pages/MainPage'));
const CV = lazy(() => import('./Pages/CurriculumVitae'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cv" component={CV} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
