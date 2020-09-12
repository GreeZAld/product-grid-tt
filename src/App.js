import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import MainWrapper from './components/MainWrapper';
import MobileView from './components/MobileView';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.add("clicked");
    this.setState(() => {
      return { count: document.getElementsByClassName("clicked").length }
    });
  };

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} />
        <MainWrapper handleClick={this.handleClick} />
        <MobileView count={this.state.count} handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
