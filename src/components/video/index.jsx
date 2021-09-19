import React from "react";
import styled from "styled-components";
import MyPost from "../../assets/videoLogo.mp4";

const Vid = styled.video`
  width: 100%;
  max-height: 600px;
  position: absolute;
  object-fit: cover;
`;

const VideoHeader = () => {
  return <Vid src={MyPost} autoPlay muted  controls={false} />;
};

export default VideoHeader;
