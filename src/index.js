import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/core";
import App from "./App";
import theme from "./indexTheme";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App/>
    </CssBaseline>
  </ThemeProvider>





  , document.getElementById('root'));

