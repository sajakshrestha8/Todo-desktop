// import { useEffect } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";

function App() {

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8001/apiTest");
  //     console.log("REST API response:", response.data);
  //   } catch (err) {
  //     console.error("API error:", err);
  //   }
  // };

  // useEffect(() => {
  //   getData();

  //   if (window.electronAPI) {
  //     window.electronAPI.ping().then(setMessage);
  //   }
  // }, []);

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
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#FFFFFF",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          fontSize: "14px",
          color: "#374151",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <Tasks task="Hello" priority="Medium" />
      </div>
    </div>
  );
}

export default App;
