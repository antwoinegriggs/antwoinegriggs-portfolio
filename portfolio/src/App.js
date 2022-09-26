import React from "react";
import Main from "./components/main/main";

// import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <section className="main">
        <Main />
      </section>
    </div>
  );
}

export default App;
