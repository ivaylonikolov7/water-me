import axios from 'axios';
import { useEffect, useState } from 'react';
import secrets from '../secrets';
import ImageGallery from 'react-image-gallery'; 

function Progression(){
    const [pictures, setPictures] = useState([]);
    useEffect(async ()=>{
        let picturesReq = await axios.get(secrets.server_ip + 'progression');
        setPictures(picturesReq.data.map((res)=>{
            return {
                original: secrets.server_ip + res
            }
        }));
    }, [])
    return <>
    <div style={{
        width: "500px",
        margin: "0 auto",
        marginTop: "50px"
    }}>
        <ImageGallery width="500px" items = {pictures} />
    </div>
    </>
}

export default Progression;