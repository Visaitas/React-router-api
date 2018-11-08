import React  from 'react';
import '../../App.css';

const VideoDetail = ({video}) => {
    
    if(!video){
      
        return <div>Loading... </div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className = "video-detail">
            <div className="video-player-position">
                <iframe className="video-player" src={url}></iframe>
            </div>
            <div className="video-text-details">
                <div>
                    {video.snippet.title}
                </div>
                <div>
                    {video.snippet.description}
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;