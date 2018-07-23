import React from "react";

const VideoDetail = ({video}) =>{
  if(!video){
    return <div>loading...</div>
  }
  const VideoId = video.id.videoId;
  const URL = `https://www.youtube.com/embed/${VideoId}`;
    return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={URL} className="embed-responsive-item"></iframe>
      </div>
      <div className="Details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )

};

export default VideoDetail;
