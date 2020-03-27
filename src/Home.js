import React from "react";
import styled from "styled-components"

function Home() {

  const Box = styled.div `
    border: 1px solid green;
    border-radius: 5px;
    padding: 20px;
    height: 150px;
  `;

  return (
    <div className="container mt-5">

      <Box className="col-xl-5 col-lg-5 col-md-7 col-sm-9 col-9 mx-auto
                      d-flex align-items-center flex-column">
        <div className="my-auto">0</div>
      </Box>

      <div className="col-xl-5 col-lg-5 col-md-7 col-sm-9 col-9 mx-auto mt-5">

        <div className="row d-flex justify-content-around mb-5">
          <button className="btn btn-outline-success">
            Add
          </button>
          <button className="btn btn-outline-success">
            Take
          </button>
        </div>

        <div className="row d-flex justify-content-around mb-5">
          <button className="btn btn-outline-success">
            Grow
          </button>
          <button className="btn btn-outline-success">
            Shrink
          </button>
        </div>

        <div className="row d-flex justify-content-around mb-5">
          <button className="btn btn-outline-success">
            Show
          </button>
          <button className="btn btn-outline-success">
            Reset
          </button>
        </div>

      </div>

    </div>
  )
}

export default Home;