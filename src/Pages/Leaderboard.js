import axios from 'axios';
import { useEffect, useState } from 'react';
import secrets from '../secrets.js'

function Leaderboard(){
	let [sortedCountries, setSortedCountries] = useState([]);
	let [loading, setLoading] = useState(true);
	useEffect( async ()=>{
		let result = await axios.get(`${secrets.server_ip}leaderboard`);
		setSortedCountries(result.data);
		setLoading(false);
	}, [])
	
	return (<>
		<table id="leaderboard">
			<thead>
				<tr style={{
					paddingBottom: "20px"
				}}>
					<th>#</th>
					<th>Country</th>
					<th>Times watered</th>
				</tr>
			</thead>
			<tbody>
				{loading && 
					<tr>
						<td colSpan="3" style={{
						paddingTop: "10px",
						paddingBottom: "10px"
					}}>
							<img width = "20px" src="https://i.gifer.com/ZZ5H.gif" /> 
						</td>
					</tr>
				}
				{sortedCountries.map( (country, el) =>{
					console.log(country.countryName);
					let countryName = country.countryName.toLowerCase();
					return <>
						<tr>
							<td>{el+1}</td>
							<td>
								<img width="25px" src={`https://cdn.countryflags.com/thumbs/${countryName}/flag-800.png`} />
							</td>
							<td>{country.timesClicked}</td>
						</tr>
					</>
				})}
			</tbody>
		</table>
	</>);
}

export default Leaderboard;