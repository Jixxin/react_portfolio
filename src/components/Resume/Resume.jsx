import React from 'react';
import './style.css'
import PDF from './resume.pdf'

export default function Resume() {
  return (
    <div id="container">
      <h1>Resume:</h1>
    <div id="resumeCont">
      <h2>Skills:</h2>
      <ul>
        <li>HTML/CSS/JS</li>
        <li>React/Node</li>
        <li>Leadership</li>
        <li>Problem Solving</li>
        <li>Creativity</li>
      </ul>
      <a href={PDF} target="_blank" rel="noreferrer" download="Jeff-Hicks-Resume"><h3>Download a copy here</h3></a>
    </div>


    </div>
  );
}