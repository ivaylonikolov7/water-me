import {ReactComponent as PlantSVG } from '../images/plant-svgrepo-com.svg';
import TwitchStream from '../components/TwitchStream';
import { useState } from 'react';
import axios from 'axios'
import secrets from '../secrets.js'
function Index(){
    let [showStream, setShowStream] = useState(false);
    console.log(secrets.server_ip);

    return (<> 
        <PlantSVG width="150px"/>
        <button onClick={()=>{
            //setShowStream(true);
            axios.get(`${secrets.server_ip}water-me`).then((response)=>{
                console.log(response);
            })
        }}>Water me</button>
        {showStream && <TwitchStream />}
    </>)

}


export default Index;