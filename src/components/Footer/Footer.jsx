import React from 'react';
import './style.css'
import gitHub from './GitHub-Mark-64px.png'
import linkedIn from './LI-In-Bug.png'

function Footer () {
    return(
        <div id="container" >
            <div id="footer">
                <a href="https://github.com/Jixxin" target="_blank">
                <img src={gitHub}></img>
                </a>
                <a href="https://www.linkedin.com/in/jeff-hicks-20a979138/" target="_blank" height="64" width="64">
                <img id="link"src={linkedIn}></img>
                </a>
            </div>
        </div>
    );
}

export default Footer