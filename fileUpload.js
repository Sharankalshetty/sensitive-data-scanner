import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const response = await fetch("http://localhost:5000/api/scans/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: file.name, fileContent: await file.text() }),
    });

    if (response.ok) alert("File uploaded successfully!");
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;