import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Home from "./Home";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

function App() {
  return (
    <Box className="main">
      <Grid>
        <Header/>
        {/*app goes down here*/}

        <Home/>

        {/*app goes up here*/}
      </Grid>
      <Footer/>
    </Box>
  );
}

export default App;
