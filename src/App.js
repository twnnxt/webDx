import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import OnlineCourse from './components/Pages/OnlineCourse';
import AstroCamp from './components/Pages/AstroCamp';
import FrontendCourse from './components/Pages/FrontendCourse';
import ShortTerm from './components/Pages/ShortTerm';
import ProjectDevelopment from './components/Pages/ProjectDevelopment';
import Tranning from './components/Pages/Tranning';
import Rental from './components/Pages/Rental';
import Post from './containers/Post/Post';
import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import ErrorBundary from './hoc/ErrorBundary/ErrorBundary';

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route path="/online" component={OnlineCourse} />
            <Route path="/astro" component={AstroCamp} />
            <Route path="/fecourse" component={FrontendCourse} />
            <Route path="/shortterm" component={ShortTerm} />
            <Route path="/project" component={ProjectDevelopment} />
            <Route path="/tranning" component={Tranning} />
            <Route path="/rental" component={Rental} />
            <Route path="/contacts" exact component={Contact} />
            <Route path="/" exact component={Home} />
            <ErrorBundary>
              <Route path="/posts" component={Post} />
            </ErrorBundary>            
          </Switch>
        </Layout>
      </>
    )
  }
}

export default App;
