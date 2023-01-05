import React, { useEffect, useState } from "react";
import { File, NextPageToken } from "../component/interface";
import { listEverything } from "../util/http";
import Loading from "../component/Loading/Loading";
import FileListView from "../component/FileListView/FileListView";

const ListFile: React.FC = () => {
  const [file, setFile] = useState<File[]>([]);
  const [nextPageToken, setNextPageToken] = useState<NextPageToken>({
    nextPageToken: "",
  });

  const [loading, setLoading] = useState<boolean>(true);

  const loadMoreFile = async (nextPageToken: any) => {
    let fileList = await listEverything(nextPageToken);
    fileList.files.forEach(async (file: File) => {
      setFile((f) => [...f, file]);
    });
    setNextPageToken(fileList.nextPageToken);
  };

  useEffect(() => {
    let cleanup = true;
    async function getFiles() {
      if (cleanup) {
        let fileList = await listEverything(nextPageToken);
        fileList.files.forEach(async (file: File) => {
          setFile((f) => [...f, file]);
        });
        setNextPageToken(fileList.nextPageToken);
        setLoading(false);
      }
    }

    getFiles();

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <>
      <div className="file-list-container">
        {loading ? (
          <Loading color="red" height={100} width={100} />
        ) : (
          <>
            <FileListView fileData={file} />
            <button onClick={() => loadMoreFile(nextPageToken)}>
              Load More
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ListFile;
