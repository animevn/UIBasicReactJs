import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Home() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(1);
  const [show, setShow] = useState(true);

  function onAddClick() {
    setCount(old=> old + 1);
  }

  function onTakeClick() {
    if (count > 0) setCount(old=> old -1);
  }

  function onGrowClick() {
    if (size < 6) setSize(old=>old + 1);
  }

  function onShrinkClick() {
    if (size > 0) setSize(old=>old - 1);
  }

  function onShowClick() {
    setShow(old=>!old);
  }

  function onResetClick() {
    setSize(1);
    setCount(0);
    setShow(true);
  }

  const numberBox = ()=> {
    const width = {xs:10, sm:10, md:8, lg: 6, xl:6};
    return (
      <Grid container justify="center">
        <Grid item {...width}>
          <Box display="flex" direction="column" justifyContent="center" alignItems="center" height={200}>
            <Typography>
              <Box fontSize={`${size}rem`} visibility={show ? "visible" : "hidden"}>
                {count}
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>

    )
  };

  const buttons = (name, action)=>{
    return (
      <Button variant="contained" color="secondary" onClick={action}>
        {name}
      </Button>
    )
  };

  const buttonsBox = (children)=>{
    return (
      <div className="col-xl-5 col-lg-5 col-md-7 col-sm-9 col-9 mx-auto mt-5">
        {children}
      </div>
    )
  };

  const rowBox = (children)=>{
    return (
      <div className="row d-flex justify-content-around mb-5">
        {children}
      </div>
    )
  };

  const toggle = show ? "Hide" : "Show";

  return (
    <div className="container mt-5">
      {numberBox()}
      {buttonsBox (
        [
          rowBox ([buttons("Add", onAddClick), buttons("Take", onTakeClick)]),
          rowBox ([buttons("Grow", onGrowClick), buttons("Shrink", onShrinkClick)]),
          rowBox ([buttons(toggle, onShowClick), buttons("Reset", onResetClick)])
        ]
      )}
    </div>
  )
}

export default Home;