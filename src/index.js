import _ from 'Lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SideBar from './components/side_bar';

const API_KEY = "AIzaSyC-gk3ZwN-lSs4S26-v4XxdkTocHyw3tG4"

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos:[],
			selectedVideo: null};

		this.videoSearch('Machine Learning');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term:term}, (videos)=>
			{
				this.setState ({
					videos : videos,
					selectedVideo : videos[0],
				});
			}
		);
	}

	render (){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
			<div>
			<SearchBar onSearchTermChange = {videoSearch}/>

			<SideBar>
				
			</SideBar>

			<VideoDetail 
				video={this.state.selectedVideo}
			/>
			</div>
		);
	}
}

			
ReactDOM.render (<App />, document.querySelector('.app'));

