import { Link, NavLink } from "react-router-dom";
import {ReactComponent as PlantSVG } from '../images/plant-svgrepo-com.svg';

function Header(){
    return (<div style = {{
        marginBottom: '30px'
    }}>
        <ul id="header">
            <li>
                <PlantSVG width="30px"/>
            </li>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/leaderboard'>Leaderboard</NavLink>
            </li>
            <li>
                <NavLink to='/progression'>Progression</NavLink>
            </li>
        </ul>
    </div>)
}
export default Header;