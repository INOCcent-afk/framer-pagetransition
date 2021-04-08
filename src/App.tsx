import React from "react";
import { Route, Switch } from "react-router";
import styled, { createGlobalStyle } from "styled-components";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import { ArticleDetail } from "./pages/ArticleDetail";
import { Home } from "./pages/Home";
import Services from "./pages/Services";

import CircleSvgImg from "./assets/images/circle-svg.svg";

function App() {
  return (
    <>
      <GlobalStyle />
      <CircleSvg>
        <img src={CircleSvgImg} alt="SVG" />
      </CircleSvg>
      <Nav />
      <div className="body-content-inner">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articleDetail/:id" component={ArticleDetail} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


 body {
   background: #FFF0E1;
   font-family:  sans-serif;
 } 

 a {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }

 .active { 
    text-decoration: underline;
 }

 .body-content-inner { 
   display: flex;
   flex-direction: column;
   margin: auto;
 }


::-webkit-scrollbar {
  width: 10px;
}


::-webkit-scrollbar-track {
  background: transparent;
}


::-webkit-scrollbar-thumb {
  background: #bd8e8a;
}


::-webkit-scrollbar-thumb:hover {
  background: #bd8e8a;
}

`;

const CircleSvg = styled.image`
  position: fixed;
  left: -75px;
  top: 30%;

  img {
    width: 150px;
    animation: rotate 10s infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media only screen and (min-width: 768px) {
    & {
      left: -150px;
    }
    img {
      width: 300px;
    }
  }
  @media only screen and (min-width: 1200px) {
    & {
      left: -250px;
    }
    img {
      width: 500px;
    }
  }
`;
