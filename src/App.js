import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Home from "./Home";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="main">
      <Grid>
        <Header/>
        
        {/*app goes in here*/}
        <Home/>

      </Grid>
      <Footer/>
    </div>
  );
}

export default App;
