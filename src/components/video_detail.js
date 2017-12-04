import React from 'react';


const VideoDetail = ({
    video
}) => {
    if (!video) {
        return <div>Loading..</div>
    }
    console.log(video);

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (<div className="">
    <div className="video-frame col-md-9">
        <div className="video">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
        </div>
        <div className="details">
            <div className="video-detail">
                <div className="video-title">
                    {video.snippet.title} </div>
                <div className="subscribe-bar">
                    <div className="icon">
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                    <div className="name">
                        Marcus Miles
                    </div>

                    <div className="sub-button">
                        <div className="red-button">
                            Subscribe
                        </div>
                    </div>

                    <div className="sub-count">
                        <div className="gray-button">
                            1,395,903
                        </div>
                    </div>

                </div>
            </div>
            <div className="video-desc">
                <div>{video.snippet.description}</div>

            </div>
        </div>
    </div>
</div>
    );
};

export default VideoDetail;