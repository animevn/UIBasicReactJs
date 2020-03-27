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

  return (
    <div className="container mt-5">

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

      <div className="col-xl-5 col-lg-5 col-md-7 col-sm-9 col-9 mx-auto mt-5">

        <div className="row d-flex justify-content-around mb-5">
          <button className="btn btn-outline-success" onClick={onAddClick}>
            Add
          </button>
          <button className="btn btn-outline-success" onClick={onTakeClick}>
            Take
          </button>
        </div>

        <div className="row d-flex justify-content-around mb-5">
          <button className="btn btn-outline-success" onClick={onGrowClick}>
            Grow
          </button>
          <button className="btn btn-outline-success" onClick={onShrinkClick}>
            Shrink
          </button>
        </div>

        <div className="row d-flex justify-content-around mb-5">
          <button className="btn btn-outline-success" onClick={onShowClick}>
            {show ? "Hide" : "Show"}
          </button>
          <button className="btn btn-outline-success" onClick={onResetClick}>
            Reset
          </button>
        </div>

      </div>

    </div>
  )
}

export default Home;