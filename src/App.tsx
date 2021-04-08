import React from "react";
import { Route, Switch } from "react-router";
import { createGlobalStyle } from "styled-components";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import { ArticleDetail } from "./pages/ArticleDetail";
import { Home } from "./pages/Home";
import Services from "./pages/Services";

const GlobalStyle = createGlobalStyle`

 body {
   background: #FFF0E1;
   font-family: sans-serif;
 } 

 a {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }

 .active { 
    text-decoration: underline;
 }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/articleDetail/:id" component={ArticleDetail} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
