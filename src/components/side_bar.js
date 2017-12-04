import React from 'react';

const SideBar = (props) => {
	return (
<div className="col-md-3 side-bar">
        <div className="side-bar-container">
            <div className="heading">EXPLORE</div>
            <div className="sub-heading-container">
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        What to watch
                    </div>
                </div>
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Recommended
                    </div>
                </div>
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        History
                    </div>
                </div>
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Subscriptions
                    </div>
                </div>
            </div>
        </div>
        <div className="side-bar-container">
            <div className="heading">PLAYLISTS</div>
            <div className="sub-heading-container">
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Liked Videos
                    </div>
                </div>
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Favorites
                    </div>
                </div>
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Watch Later
                    </div>
                </div>
            </div>
        </div>
        <div className="side-bar-container">
            <div className="heading">SUBSCRIPTION</div>
            <div className="sub-heading-container">
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Suicide Sheep
                    </div>
                </div>
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Crunkz Music
                    </div>
                </div>
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Jane XO
                    </div>
                </div>
                <div className="sub-heading">
                    <div className="sub-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>
                    <div className="sub-text">
                        Rom Weekend
                    </div>
                </div>
            </div>
        </div>
    </div>
	);
}

export default SideBar;