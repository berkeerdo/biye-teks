import React from "react";
import MyPost from "../../assets/videoLogo2.mp4";
import ReactPlayer from "react-player";

const VideoHeader = () => {
  return (
    <ReactPlayer style={{ marginBottom: "-5px" }}
      height={""}
      width={""}
      playing={true}
      muted={true}
      url={MyPost}
    />
  );
};

export default VideoHeader;
