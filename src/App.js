import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import NewsSection  from "./components/newssection";
import HeadQuote from "./components/headquote";
import Spacer from "./components/spacer";
import { ParallaxProvider } from 'react-scroll-parallax';
import CarouselFestival from "./components/carouselfestival"
import Homepage from "./components/homepage";
import ContactPage from "./components/contactpage";
import ProgramPage from "./components/program";
import Articles from "./components/articles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  


  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    document.cookie = "SameSite=None"
    console.log("JAJAJA")
    return (
      <Router>
         <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Tangerine"></link>
              <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Marcellus"></link>
              
        <NavBar type={window.location.pathname == "/" ? "over": "rep"}></NavBar>
        <Routes>
          <Route path="/" element={<ParallaxProvider>
                <Homepage></Homepage>
              </ParallaxProvider>}>
          </Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}>
          </Route>
          <Route path="/program" element={<ProgramPage></ProgramPage>}>
          </Route>
          <Route path="/articles" element={<Articles></Articles>}>
          </Route>
        </Routes>
      </Router>
     
    );
  }
}

export default App;
