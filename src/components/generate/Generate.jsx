import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Generate() {
  const [url, setUrl] = useState({
    shortUrl: "",
    longUrl: "",
  });

  const { shorturl, longurl } = url;

  const onInputChange = (e) => {
    setUrl({ ...url, [e.target.name]: e.target.value });
  };

  const onClear = () => {
    document.getElementById("longUrlInput").value = "";
    document.getElementById("shortUrlOutput").value = "";
    setUrl({ [shorturl]: "", [longurl]: "" });
  };

  const sendRequest = async () => {
    await fetch("https://url-store-spring.onrender.com/generate/addUrl", { //tobe configured
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl: url.longUrl,
        shortUrl: url.shortUrl,
      }),
    })
      .then((response) => {
        if (response.ok) {
          const dataPromise = response.json();
          dataPromise.then((data) => {
            console.log("Resolved Response from Spring Boot:", data);

            setUrl(data);
          });
        } else {
          console.error("Failed to send URL to Spring Boot");
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const regexp = new RegExp("https?://[^s]+.[^s]+/");

    if (
      !regexp.test(url.longUrl) ||
      url.longUrl == undefined ||
      url.longUrl === ""
    ) {
      alert("Please enter a valid URL");
      return;
    }

    sendRequest();
  };

  let urlToDisplay = "";
  if (url.shortUrl === undefined || url.shortUrl === "") {
    urlToDisplay = "";
  } else {
    urlToDisplay = "http://localhost:5173/" + url.shortUrl; //tobe configured
  }

  const onCopy = () => {
    const inputField = document.getElementById("shortUrlOutput");
    const copyButton = document.getElementById("copyButton");
    const text = inputField.value;
    
    if(text == ""){
      return
    }else{
      navigator.clipboard.writeText(text)
      alert("Link copied to clipboard")
    }
  }

  return (
    <Link to="/">
      <div className="container-sm col-xs card" style={{ marginTop: "7%" }}>
        <form className="mt-4 mb-4 m-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Long URL
            </label>
            <input
              type="url"
              className="form-control"
              id="longUrlInput"
              aria-describedby="emailHelp"
              name="longUrl"
              placeholder="https://example.com"
              onChange={(e) => onInputChange(e)}
              pattern="https?://[^\s]+.[^\s]+"
            />
          </div>
          <div className="mb-4 mt-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Short URL
            </label>
            <input
              type="url"
              className="form-control"
              id="shortUrlOutput"
              disabled
              readOnly="readOnly"
              name="shortUrl"
              value={urlToDisplay}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button
              type="submit"
              className="btn btn-primary mr-5"
              onClick={(e) => onSubmit(e)}
            >
              Submit
            </button>

            <button
              type="button"
              className="btn btn-secondary ml-5"
              onClick={() => onClear()}
            >
              Clear
            </button>
            <button
              type="button"
              className="btn btn-success ml-5"
              id="copyButton"
              onClick={() => onCopy()}
            >
              <span className="material-symbols-outlined">content_copy</span>
            </button>
          </div>
        </form>
      </div>
    </Link>
  );
}
