import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])
  return (
    <div className="app">
      <div className="file-sharing-container">
        <h1>Simple File Sharing!</h1>
        <p>Upload and share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(event) => setFile(event.target.files[0])}
        />

        <a href={result} target="_blank" rel="noreferrer">{result}</a>
      </div>
    </div>
  );
}

export default App;
