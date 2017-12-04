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
		});
	}

	// Controlled component is mutated by state and state only rather than input components.
	render() {
		return(
		<div className='search-bar row'>
    <div className="col-md-2">
        <img src="./src/images/yt_logo_rgb_light.png" className="youtube-icon"></img>
    </div>
    <div className="col-md-7">
        <input placeholder='Type to search..' value={this.state.term} onChange={this.onInputChange} />
    </div>

    <div className="col-md-3">
        <div className="profile">
            <div className="name">
                Marcus Miles
            </div>
            <div className="icon">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>

        </div>
    </div>
</div>
		);
	}
}

export default SearchBar;