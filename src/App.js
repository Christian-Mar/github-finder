import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
	render() {
			return (
			<div className='App'>
        <Navbar title="Github Finder" icon='fab fa-github'/>
			</div>
		);
	}
}

/*
function App() {
	return (
		<div className='App'>
			<h1>Hello from React</h1>
		</div>
	);
}
*/
export default App;
