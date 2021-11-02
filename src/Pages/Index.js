import TwitchStream from '../components/TwitchStream';
import { useState } from 'react';
import axios from 'axios'
import secrets from '../secrets.js'
import YoutubeStream from '../components/YoutubeStream';
function Index(){
    return <> 
        <YoutubeStream/>
        <button onClick={()=>{
            axios.get(`${secrets.server_ip}water-me`).then((response)=>{
                console.log('yo');
            })
        }}>Water me</button>
    </>

}


export default Index;