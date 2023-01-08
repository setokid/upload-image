import React from "react";
import "./FileListView.css";
import { File } from "../interface";

interface Props {
  fileData: File[];
}

const FileListView: React.FC<Props> = (props) => {
  const { fileData } = props;

  return (
    <React.Fragment>
      <div className="file-view">
        {fileData.map((file) => {
          return (
            <div key={file.id} className="image-container">
              <img
                className="img"
                src={"https://drive.google.com/thumbnail?id=" + file.id}
                alt="drive img"
              />
              <a href={"https://drive.google.com/file/d/" + file.id}>
                {file.name}
              </a>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FileListView;
