import React, { useState } from "react";
import { Route, Switch } from "react-router";
import styled, { createGlobalStyle } from "styled-components";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import { ArticleDetail } from "./pages/ArticleDetail";
import { Home } from "./pages/Home";
import Services from "./pages/Services";

import CircleSvgImg from "./assets/images/circle-svg.svg";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./components/Menu";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  console.log(isNavOpen);
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      {isNavOpen ? (
        <Menu
          animation="animateIN"
          animationSecond="secondAnimateIN"
          secondShow="show"
        />
      ) : (
        <Menu
          animation="animateOUT"
          animationSecond="secondAnimateOUT"
          secondShow="hideChildren"
        />
      )}
      <CircleSvg>
        <img src={CircleSvgImg} alt="SVG" />
      </CircleSvg>
      <Nav toggleMenu={toggleNav} />
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
   background: #171719;
   font-family:  sans-serif;
 } 

 a {
    color: #f2f2fa;
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
  width: 0px;
}









.pageContainer { 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

}


@media only screen and (min-width:768px) { 
  .pageContainer { 
    font-size: 40px
  }
}

`;

const CircleSvg = styled.div`
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
      left: -200px;
    }
    img {
      width: 400px;
    }
  }
`;
