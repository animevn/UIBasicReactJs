import React, {useState} from "react";

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

  const numberBox = (
    <div style={{"height":"150px"}}
         className="col-xl-5 col-lg-5 col-md-7 col-sm-9 col-9 mx-auto rounded
                      d-flex align-items-center flex-column border border-success">
      <p className="my-auto"
         style={{
           "font-size": `${size}rem`,
           "visibility": `${show ? "visible" : "hidden"}`
         }}>
        {count}
      </p>
    </div>
  );

  const buttons = (name, action)=>{
    return (
      <button className="btn btn-outline-success" onClick={action}>
        {name}
      </button>
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
      {numberBox}
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