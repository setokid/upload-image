import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./FileUpload.css";
import axios from "axios";

interface File {
  data: string;
}

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<any>(null);
  const [url, setUrl] = useState("");

  const uploadHandler = (event: any) => {
    const files = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setFile(files);
    console.log("file", files);

    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file.data);
    console.log("asd", formData);

    axios({
      method: "post",
      url: "http://103.90.227.114:8080/upload",
      data: formData,
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (response) {
        console.log("err", response);
      });
  };
  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>
        </div>
        <p className="main">Support files</p>
        <p className="info">PDF,JPG,PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
