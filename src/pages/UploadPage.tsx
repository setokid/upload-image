import React, { useState } from "react";
import "./style.css";
import FileUpload from "../component/FileUpload/FileUpload";
const ImageUpload: React.FC = () => {
  return (
    <div className="container">
      <p className="title">Upload file</p>
      <FileUpload />
    </div>
  );
};

export default ImageUpload;
