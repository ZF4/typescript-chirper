import * as React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewChirp from './NewChirp';
import { IChirp } from './utils/types'


class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			chirps: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/chirps');
			let chirps = await r.json();
			this.setState({ chirps: chirps });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<Router>
				<nav className="nav">
				<img src="./utils/chirper.png" alt="Chirper Logo" width="100px" height="50px"/>
					<Link to='/'><button className="btn mx-4 homeBtn">Home</button></Link>
					<Link to='/newchirp'><button className="btn mx-4 chirpBtn">Compose</button></Link>
				</nav>
				<main className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/newchirp" component={NewChirp} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export interface IAppProps { }

export interface IAppState {
	chirps: chirp[];
}

export interface chirp {
	username: string,
	message: string,
}


export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
