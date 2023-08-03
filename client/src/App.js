import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";

import Result from "./components/Result";
import Loading from "./components/Loading";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const [clicks, setClicks] = useState(0);
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
    setClicks(clicks + 1);
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
    };
    getImage();
  }, [file]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <div
        className="circle"
        style={{
          left: mousePosition.x - 25 + "px",
          top: mousePosition.y - 25 + "px",
        }}
      ></div>
      <div className="file-sharing-container">
        <h1>Simple File Sharing!</h1>
        <p>Upload and share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(event) => setFile(event.target.files[0])}
        />

        {result ? <Result result={result} /> : <Loading clicks={clicks} />}
      </div>
    </div>
  );
}

export default App;
