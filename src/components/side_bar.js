import React from 'react';

const SideBar = (props) =>{
	return(
<div className="col-md-4">
<h2>EXPLORE</h2>
<ul>
  <li>What to watch</li>
  <li>Recommended</li>
  <li>History</li>
  <li>Subscriptions</li>
</ul>

<h2>PLAYLISTS</h2>
<ul>
  <li>Liked Videos</li>
  <li>Favorites</li>
  <li>Watch Later</li>
</ul>

<h2>SUBSCRIPTION</h2>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
</ul>

</div>

	);
}

export default SideBar;