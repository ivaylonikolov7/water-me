import React from 'react';
import { Player } from 'video-react';
import secrets from '../secrets.js';
import '../../node_modules/video-react/dist/video-react.css';
// Render a YouTube video player


function Progression(){
    let backend = secrets.BACKEND;
    return <div style={{
        width: 450,
        margin: '0 auto',
        textAlign: 'center'
    }}>
        <Player fluid={false} width={450} src={`https://water-plant-rpi.s3.eu-central-1.amazonaws.com/video/output.mp4`} style={{
        margin: '0 auto',
        textAlign: 'center'
    }}/>
    </div>
}

export default Progression;