import { useState } from "react";
import { taskService } from "../services/tasks.service";
import { ITasks } from "../types/tasks.interface";

interface EditModalProps {
  task: ITasks;
  onClose: () => void;
  onUpdatedTask: () => void;
}

function EditModal({ task, onClose, onUpdatedTask }: EditModalProps) {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
    dueDate: task.dueDate,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const updatedTask = await taskService.updateTask({ id: task.id, formData });
      console.log(updatedTask);
      onUpdatedTask();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <h2>Edit Task</h2>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSave}
            style={{
              background: "#2563EB",
              color: "white",
              padding: "6px 12px",
              borderRadius: "6px",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
