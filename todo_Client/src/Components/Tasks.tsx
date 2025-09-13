import { useState } from "react";
import { Trash2, Edit } from "lucide-react";

interface TasksProps {
  task: string;
  priority: string;
  onDelete?: () => void;
  onEdit?: () => void;
}

function Tasks({ task, priority, onDelete, onEdit }: TasksProps) {
  const [completed, setCompleted] = useState(false);

  const priorityColors: { [key: string]: string } = {
    High: "#EF4444",
    Medium: "#F59E0B",
    Low: "#10B981",
    Default: "#6B7280",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "40px 1fr min-content 80px",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        marginBottom: "10px",
        padding: "8px 12px",
        fontSize: "14px",
        gap: "12px",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
        style={{
          width: "20px",
          height: "20px",
          cursor: "pointer",
          justifySelf: "center",
        }}
      />

      <div
        style={{
          fontWeight: 500,
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "#9CA3AF" : "#111827",
          fontSize: "15px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {task}
      </div>

      <div
        style={{
          backgroundColor: priorityColors[priority] || priorityColors.Default,
          color: "#FFFFFF",
          padding: "4px 12px",
          borderRadius: "9999px",
          fontWeight: 600,
          fontSize: "12px",
          textTransform: "uppercase",
          textAlign: "center",
          justifySelf: "center",
        }}
      >
        {priority}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
          minWidth: "50px",
        }}
      >
        <Edit size={18} style={{ cursor: "pointer" }} onClick={onEdit} />
        <Trash2 size={18} style={{ cursor: "pointer" }} onClick={onDelete} />
      </div>
    </div>
  );
}

export default Tasks;
