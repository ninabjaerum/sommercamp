import "./App.css";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";
import Footer from "./components/Footer";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomeContainer></HomeContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
