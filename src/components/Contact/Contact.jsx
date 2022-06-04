import React from 'react';
import './style.css'

export default function Contact() {
  return (
    <div id="container">
      <h1>Contact Me:</h1>
      <div className="inputForm">
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Name:</span>
        <input id="name" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div><div className="input-group mb-3">
        <span  className="input-group-text" id="inputGroup-sizing-default">Email:</span>
        <input id="email" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>
      <div className="input-group">
        <span className="input-group-text">Message:</span>
        <textarea id="message" className="form-control" aria-label="With textarea"></textarea>
      </div>
      <button type="submit" value="submit">Submit</button>
    </div>
    </div>
  );
}
