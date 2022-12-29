import React, { useEffect, useState } from "react";
import axios from "axios";

interface Files {
  id: string;
  mimeType: string;
  name: string;
}

const ListFile: React.FC = () => {
  const [file, setFile] = useState<Files[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    let mounted = true;
    const getFiles = async () => {
      const res = await axios.get("http://103.90.227.114:8080/?pagesize=999");
      if (mounted) {
        setFile(res.data.files);
      }
    };
    getFiles();
    return () => {
      mounted = false;
    };
  });

  return (
    <div>
      {file.map((file) => {
        return (
          <div>
            <p>{file.id}</p>
            <p>{file.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListFile;
