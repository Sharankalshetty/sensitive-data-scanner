import React, { useEffect, useState } from "react";

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/scans/files")
      .then((res) => res.json())
      .then((data) => setFiles(data));
  }, []);

  return (
    <ul>
      {files.map((file) => (
        <li key={file._id}>{file.filename}</li>
      ))}
    </ul>
  );
}

export default FileList;