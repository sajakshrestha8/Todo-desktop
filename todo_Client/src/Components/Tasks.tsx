import { useState } from "react";
import { Trash2, Edit, CalendarDays } from "lucide-react";

interface TasksProps {
  title: string;
  description?: string;
  priority: string;
  status: string;
  dueDate?: string;
  onDelete?: () => void;
  onEdit?: () => void;
}

function Tasks({
  title,
  description,
  priority,
  status,
  dueDate,
  onDelete,
  onEdit,
}: TasksProps) {
  const [completed, setCompleted] = useState(status === "Completed");

  const priorityColors: { [key: string]: string } = {
    High: "#EF4444",
    Medium: "#F59E0B",
    Low: "#10B981",
    Default: "#6B7280",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        padding: "12px 16px",
        gap: "6px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
          style={{ width: "18px", height: "18px", cursor: "pointer" }}
        />

        <span
          style={{
            fontWeight: 600,
            fontSize: "16px",
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "#9CA3AF" : "#111827",
            flex: 1,
          }}
        >
          {title}
        </span>

        <span
          style={{
            backgroundColor: priorityColors[priority] || priorityColors.Default,
            color: "#FFF",
            padding: "4px 10px",
            borderRadius: "9999px",
            fontWeight: 600,
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          {priority}
        </span>

        <div style={{ display: "flex", gap: "8px" }}>
          <Edit size={18} style={{ cursor: "pointer" }} onClick={onEdit} />
          <Trash2 size={18} style={{ cursor: "pointer" }} onClick={onDelete} />
        </div>
      </div>

      {description && (
        <p style={{ fontSize: "14px", color: "#4B5563", margin: 0 }}>
          {description}
        </p>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          color: "#6B7280",
        }}
      >
        <span>Status: {status}</span>
        {dueDate && (
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <CalendarDays size={14} /> {dueDate}
          </span>
        )}
      </div>
    </div>
  );
}

export default Tasks;
