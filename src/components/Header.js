import { Link } from "react-router-dom";

function Header(){
    return (<>
        <ul id="header">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/leaderboard'>Leaderboard</Link>
            </li>
            <li>
                <Link to='/progression'>Progression</Link>
            </li>
        </ul>
    </>)
}
export default Header;