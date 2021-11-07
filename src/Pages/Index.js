import axios from 'axios'
import secrets from '../secrets.js'
import YoutubeStream from '../components/YoutubeStream';
function Index(){
    console.log(secrets);
    return <> 
        <YoutubeStream/>
        <button onClick={()=>{
            axios.get(`${secrets.BACKEND}plant/water`).then((response)=>{
                console.log('yo');
            })
        }}>Water me</button>
    </>

}


export default Index;