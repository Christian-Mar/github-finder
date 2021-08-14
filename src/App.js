import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		const name = 'John';
		const loading = false;
    const showName = true;
		/*
    if (loading) {
      return <h4>Loading ... </h4>;
    }
    */
		return (
			<Fragment>
				{loading ? <h4>Loading ... </h4> : <h1>Hello {showName && name}</h1>}
			</Fragment>
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
