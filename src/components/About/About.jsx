import React from 'react';
import photo from './portrait.jpg'
import './style.css'

export default function About() {
  return (
    <div>
      <div id="container">
      <h1>About Me</h1>
      <div  className="photo">
      <img src={photo} alt="portrait of Jeff Hicks"></img>
    </div>
      <div id="textarea">
      <p>
        Thank you for taking the time to check out my react portfolio. My name is Jeff Hicks and I currently recide in the PNW. I started my coding journey in March of 2022. I'm expected to graduate from the University of Washington coding bootcamp on June 13th, 2022.  
        <br />
        <br />
        I decided to jump into coding as I have a passion for technology. My love for technology was first discovered when I got a job at Blueprint Consulting Services as a Team Lead for customer support. Blueprint is a technology consulting firm that recieved a bid for customer support. During my time at Blueprint I had the privilage to get a view of the technology industry and be a part of a team that operated as such. 
        <br />
        <br />
       I also have a passion for leadership. It is my philosophy that employees who love their work environment have a higher productivity rate. Everyone has the ability to positively impact their team, as well as exhibit leadership qualities, regardless of the role they hold within their company. 
      </p>
      </div>
      </div>
    </div>
  );
}
