import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Index from './Pages/Index';
import Progression from './Pages/Progression';
import Header from './components/Header';
import Leaderboard from './Pages/Leaderboard';
function App() {
  return (
	<>
	<Router>
		<Header />
		<Switch>
			<Route path="/Leaderboard">
				<Leaderboard />
			</Route>
			<Route path="/Progression">
				<Progression />
			</Route>
			<Route path="/">
				<Index />
			</Route>
		</Switch>
	</Router>
	</>
  );
}

export default App;
