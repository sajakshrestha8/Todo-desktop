import { useState } from "react";
import Button from "./Button";

const AddTask = () => {
  const [priority, setPriority] = useState<"High" | "Medium" | "Low" | "">("");

  return (
    <div
      style={{
        backgroundColor: "#F9FAFB",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        maxWidth: "500px",
        margin: "20px auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "12px",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3B82F6")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
        />
        <Button label="+ Add" variant="primary" onClick={() => console.log("Will be add")} />
      </div>

      <div
        style={{
          marginTop: "12px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <label
          htmlFor="priority"
          style={{ fontWeight: 600, color: "#374151", minWidth: "70px" }}
        >
          Priority:
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "High" | "Medium" | "Low")
          }
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #E5E7EB",
            backgroundColor: "#FFFFFF",
            fontSize: "16px",
            outline: "none",
            cursor: "pointer",
            minWidth: "150px",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3B82F6")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      
    </div>
  );
};

export default AddTask;
