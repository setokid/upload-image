import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./FileUpload.css";
import { uploadFile } from "../../util/http";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<any>();
  const [showAlert, setShowAlert] = useState<number>();
  const wrapperRef: any = useRef(null);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const uploadHandler = async (event: any) => {
    const files = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setFile(files);
    if (files) {
      const formData = new FormData();
      formData.append("file", file.data);
      const upload = await uploadFile(formData);
      setShowAlert(upload);
    }
  };

  const handleDrop = async (event: any) => {
    const files = {
      preview: URL.createObjectURL(event.dataTransfer.files[0]),
      data: event.dataTransfer.files[0],
    };
    setFile(files);

    event.preventDefault();
    if (files) {
      const formData = new FormData();
      formData.append("file", file.data);
      const upload = await uploadFile(formData);
      setShowAlert(upload);
    }
    wrapperRef.current.classList.add("dragover");
  };

  return (
    <>
      <div
        className="file-card"
        onDrop={handleDrop}
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
      >
        <div className="file-info">
          <p className="main">Drag and Drop Files to Upload</p>
          <p className="main">Or</p>
        </div>
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>
        </div>
        <div className="file-info">
          <p className="main">Support files</p>
          <p className="info">PDF,JPG,PNG....</p>
        </div>
      </div>
      {showAlert === 200 ? alert("Upload Success") : <></>}
      {showAlert === 500 ? alert("Upload fail") : <></>}
    </>
  );
};

export default FileUpload;
