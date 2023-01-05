import React from "react";
import { Hypnosis } from "react-cssfx-loading";
import "./Loading.css";

interface LoadingProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { width, color, height } = props;
  return (
    <div className="loading-container">
      <div className="loading">
        <Hypnosis color={color} height={height} width={width} />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
