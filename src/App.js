import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import "./App.css";
import ScrollTop from "./components/ScrollTop"
// import ScrollToNext from "./components/ScrollToNext"
// import ScrollTop from "./components/ScrollTop"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollTop />
        <Nav />
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
