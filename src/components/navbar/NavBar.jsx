import React from "react";

export default function (props) {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary ms-auto flex-center flex-wrap">
      <div className="container-fluid" style={{"display" : "flex" , "justifyContent" : "center"}}>
        <div>
          <a className="navbar-brand h1" href="#">
            <img
              src="/logo.png"
              alt="Logo"
              width="30"
              style={{ marginRight: "5%" }}
              className="d-inline-block align-text-top"
            />
            {props.title}
          </a>
        </div>
        {/*
          <div className="ms-auto" >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-around" >
              <a className="nav-link h2 active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link h2 active" href="#">
                Generate
              </a>
              <a className="nav-link h2 active" href="#">
                About
              </a>
            </div>
          </div>
        </div>
          */}
      </div>
    </nav>
  );
}
