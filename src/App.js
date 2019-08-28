import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ScrollToTop from "../src/ScrollToTop"; // Fixed bug where pages would start in middle
import { ToastContainer } from "react-toastify";

// CSS
import "./assets/css/Header.css";
import "./assets/css/Footer.css";
import "./assets/css/Text.css";
import "./assets/css/Align.css";
import "./assets/css/Images.css";
import "./assets/css/Forms.css";
import "./assets/css/Buttons.css";
import "./assets/css/Misc.css";
import 'react-toastify/dist/ReactToastify.css';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <ToastContainer position="top-center" hideProgressBar={true} />
          <Routes />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
  );
}

export default App;
