import React from "react";
import Container from '@material-ui/core/Container';
import Header from "./Header"
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <Container>
      <div className="main">
        <div className="container-fluid px-0">
          <Header/>

          {/*app goes in here*/}
          <div className="container pt-2">
            <Home/>
          </div>

        </div>
        <Footer/>
      </div>
    </Container>
  );
}

export default App;
