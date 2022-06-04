import React from 'react';
import './style.css'
import floppy from './yicken.png'
import byob from './BYOBackpack.png'
import landmarkd from './LandMarkd.PNG'

export default function Work() {
  return (
    <div id="container">
    <h1>Work</h1>
    <div id="cardContainer">
      <div className="card">
        <img src={floppy} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Floppy Bird</h5>
          <p className="card-text">Project is projected to be finished June 13, 2022. I will update my portfolio once it's complete. In the meantime you can check out the repository as my team and I work on this project. </p>
          <a href="https://github.com/jittel/floppy-bird-frontend" target="_blank" className="btn btn-primary">Check out the repository here</a>
        </div>
      </div>
      <div className="card">
        <img src={byob} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">BYOBackpack</h5>
          <p className="card-text">BYOBackpack is an event planning website that my team and I created. Equipped with routing, handlebars styling, and a variety of npm packages that showcase our abilities to build a dynamic website. My role on the team was to ensure that the Cloudinary package was setup properly and the images were rendered properly.</p>
          <a href="https://github.com/chuanw101/byo-backpack" target="_blank" className="btn btn-primary">Check out the repository here</a>
        </div>
      </div>
      <div className="card">
        <img src={landmarkd} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LandMarkd</h5>
          <p className="card-text">LandMarkd is travel site where users can search for landmarks within the US and leave reviews. The site is not yet setup to a database, however, the most recent review is saved in local storage. This site utilizes Pexel and Wikipedia API to pull data. This site was created by my team and me. My job was to ensure the APIs were working as intended.</p>
          <a href="https://github.com/A-mart24/Project1" target="_blank" className="btn btn-primary">Check out the repository here</a>
        </div>
      </div>
      </div>
    </div>
  );
}
