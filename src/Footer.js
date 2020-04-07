import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

function Footer() {

  const Copyright = ()=>{
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        <Box>
          Copyright ©
          <Link color="inherit" href="#">
            UI Basics
          </Link>
          {" " + new Date().getFullYear()}.
        </Box>

        <Box fontStyle="italic" my={0.5}>
          From
          <span role="img" aria-label=""> 👨</span> with
          <span role="img" aria-label=""> ❤️</span>
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
