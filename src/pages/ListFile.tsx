import React, { useEffect, useState } from "react";
import { File, NextPageToken } from "../component/interface";
import { listEverything } from "../util/http";

const ListFile: React.FC = () => {
  const [file, setFile] = useState<File[]>([]);
  const [nextPageToken, setNextPageToken] = useState<NextPageToken>({
    nextPageToken: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  console.log(nextPageToken);

  useEffect(() => {
    let cleanup = true;
    async function getFiles() {
      if (cleanup) {
        let fileList = await listEverything(nextPageToken);
        setFile(fileList.files);
        setNextPageToken(fileList.nextPageToken);
      }
    }

    getFiles();

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <div className="file-list-container">
      {file.map((file) => {
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
  );
};

export default ListFile;
