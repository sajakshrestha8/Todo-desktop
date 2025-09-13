import { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "./Components/AddTask";

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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F3F4F6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 800,
            color: "#111827",
            margin: "0",
          }}
        >
          Task Management
        </h1>
        <p style={{ color: "#6B7280", marginTop: "8px", fontSize: "16px" }}>
          Stay organized, stay productive
        </p>
      </div>

      <div style={{ width: "100%", maxWidth: "600px", marginBottom: "32px" }}>
        <AddTask />
      </div>

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#FFFFFF",
          padding: "12px 20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          fontSize: "14px",
          color: "#374151",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>IPC says:</strong> {message || "Waiting..."}
        </p>
        <p style={{ margin: "4px 0 0 0" }}>
          <strong>API:</strong> {res || "Fetching..."}
        </p>
      </div>
    </div>
  );
}

export default App;
