import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [res, setRes] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8001/apiTest");
      setRes(response.data);
      console.log("REST API response:", response.data);
    } catch (err) {
      console.error("API error:", err);
    }
  };

  useEffect(() => {
    getData();

    if (window.electronAPI) {
      window.electronAPI.ping().then(setMessage);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from React + Electron 🚀</h1>
      <h3>REST API says: {res}</h3>
      <p>IPC says: {message}</p>
    </div>
  );
}

export default App;
