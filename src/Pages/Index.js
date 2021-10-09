import {ReactComponent as PlantSVG } from '../images/plant-svgrepo-com.svg';
import TwitchStream from '../components/TwitchStream';
import { useState } from 'react';

function Index(){
    let [showStream, setShowStream] = useState(false);

    return (<> 
        <PlantSVG width="150px"/>
        <button onClick={()=>{
            setShowStream(true);
        }}>Water me</button>
        {showStream && <TwitchStream />}
    </>)

}


export default Index;