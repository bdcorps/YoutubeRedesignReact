// Even though we are not using React Elements here, when this component gets
// transpiled into ES5, it will be converted to React.createElement thus, must import react.
import React, { Component } from 'react';

class SearchBar extends Component {
	state = {	
		term: '',
	};

	onInputChange = (e) => {
		this.setState({ term: e.target.value });
		this.props.onSearchTermChange({
			term: e.target.value,
		})

	}

	// Controlled component is mutated by state and state only rather than input components.
	render() {
		return(
			<div className='search-bar'>
				<input
					placeholder='Enter title'
					value={this.state.term}
					onChange={this.onInputChange}
				/>
			</div>
		);
	}
}

export default SearchBar;