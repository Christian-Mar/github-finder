import React, { Component } from 'react';

export class Search extends Component {
	state = {
		text: '',
	};

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  } 
  // deze onChnge maakt dat er kan geschreven worden in de search component

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text'
						placeholder='search Users...'
						value={this.state.text}
            onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
			</div>
		);
	}
}

export default Search;
