import { useState } from "react";
import Button from "./Button";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low" | "">("");
  const [status, setStatus] = useState<
    "Pending" | "In Progress" | "Completed" | "Blocked"
  >("Pending");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    console.log({ title, description, priority, status, dueDate });
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        maxWidth: "600px",
        margin: "24px auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontWeight: 600 }}>Task Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          style={{
            padding: "12px 14px",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontWeight: 600 }}>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          rows={3}
          style={{
            padding: "12px 14px",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            fontSize: "15px",
            resize: "none",
            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: 600 }}>Priority</label>
          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "High" | "Medium" | "Low")
            }
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "15px",
            }}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: 600 }}>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as typeof status)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "15px",
            }}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Blocked">Blocked</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: 600 }}>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "15px",
            }}
          />
        </div>
      </div>

      <Button label="+ Add Task" variant="primary" onClick={handleAdd} />
    </div>
  );
};

export default AddTask;
