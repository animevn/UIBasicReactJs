import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function Home() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(1);
  const [show, setShow] = useState(true);
  const width = {xs:10, sm:8, md:6, lg: 4, xl:4};

  function onAddClick() {
    setCount(old=> old + 1);
  }

  function onTakeClick() {
    if (count > 0) setCount(old=> old -1);
  }

  function onGrowClick() {
    if (size < 9) setSize(old=>old + 1);
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
    return (
      <Grid container justify="center" >
        <Grid item {...width}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
               height={200} border={1} borderRadius={5} borderColor="secondary.main" my={3}>
            <Box fontSize={`${size}rem`} visibility={show ? "visible" : "hidden"}>
              {count}
            </Box>
          </Box>
        </Grid>
      </Grid>
    )
  };

  const buttons = (name, action)=>{
    return (
      <Button variant="contained" color="secondary"
              onClick={action} style={{"width":"5rem"}}>
        {name}
      </Button>
    )
  };

  const toggle = show ? "Hide" : "Show";

  return (
    <div className="container mt-5">

      {numberBox()}

      <Grid container justify="center" >
        <Grid item {...width}>

          <Box display="flex" flexDirection="row" justifyContent="space-evenly"
               alignItems="center" my={2}>
            {buttons("Add", onAddClick)}
            {buttons("Take", onTakeClick)}
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-evenly"
               alignItems="center" my={2}>
            {buttons("Grow", onGrowClick)}
            {buttons("Shrink", onShrinkClick)}
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-evenly"
               alignItems="center" my={2}>
            {buttons(toggle, onShowClick)}
            {buttons("Reset", onResetClick)}
          </Box>

        </Grid>
      </Grid>

    </div>
  )
}

export default Home;