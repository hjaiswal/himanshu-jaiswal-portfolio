import React, { Component } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Credentials from './components/credentials/credentials';
import Stats from './components/stats/Stats'
import Contact from './components/contact/contact'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
        <Credentials />
        <Stats />
        <Contact />
      </div>
    );
  }
}
export default App;