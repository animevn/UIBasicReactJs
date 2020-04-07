import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

function Footer() {

  const Copyright = ()=>{
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright ©
        <Link color="inherit" href="#">
          UI Basics
        </Link>
        {" " + new Date().getFullYear()}.
        <Box>
          <em>From
            <span role="img" aria-label=""> 👨</span> with
            <span role="img" aria-label=""> ❤️</span>
          </em>
        </Box>
      </Typography>
    );
  };

  return (
    <Box>
      <Copyright />
    </Box>
  );
}

export default Footer;
