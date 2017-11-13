import React from 'react';

const SideBar = (props) => {
    return (
       <div className="col-md-4 side-bar">
    <h2>EXPLORE</h2>
    <div>
        <div>
            <h3>
                What to watch
            </h3>
        </div>

        <h3>
            Recommended
        </h3>
        <h3>
            History
        </h3>
        <h3>
            Subscriptions
        </h3>
    </div>

    <h2>PLAYLISTS</h2>
    <h3>
        Liked Videos
    </h3>
    <h3>
        Favorites
    </h3>
    <h3>
        Watch Later
    </h3>

    <h2>SUBSCRIPTION</h2>
    <ul>
        <li>Coffee</li>
        <li>Tea</li>
    </ul>

</div>

    );
}

export default SideBar;