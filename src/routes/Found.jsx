import React, { useState } from "react";

function Found() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      console.log("uploading");
    }

    const formData = new FormData();

    formData.append("file", file);

    try {
      const result = await fetch("server django", {
        method: "POST",
        body: formData,
      });

      const data = await result.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={handleFileChange}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button onClick={handleUpload} style={{ marginTop: "1rem" }}>
          Upload a file
        </button>
      )}
    </div>
  );
}

export default Found;
