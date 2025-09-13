import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.ping().then((res) => setMessage(res));
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from React + Electron 🚀</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
