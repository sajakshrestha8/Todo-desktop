import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import { taskService } from "./services/tasks.service";
import { ITasks } from "./types/tasks.interface";
import EditModal from "./Components/EditModal";
import ConfirmModal from "./Components/ConfirmModal";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<ITasks | null>(null);
  const [delteConfirmModal, setDeleteConfirmModal] = useState<boolean>(false);

  const getAllTasks = async() => {
    const data = await taskService.getAllTasks();
    setTasks(data);
  };

  const handleOnEdit = (task: ITasks) => {
    setSelectedTask(task);
    setShowEditModal(true);
  }

  const handleOnDelete = async (id: number) => {
    await taskService.deleteTask({ id });
    setDeleteConfirmModal(false);
    setDeleteConfirmModal(false);
    getAllTasks();
  }

  useEffect(() => {
    getAllTasks();
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
            margin: 0,
          }}
        >
          Task Management
        </h1>
        <p style={{ color: "#6B7280", marginTop: "8px", fontSize: "16px" }}>
          Stay organized, stay productive
        </p>
      </div>

      <div style={{ width: "100%", maxWidth: "600px", marginBottom: "32px" }}>
        <AddTask onAddedTask={getAllTasks} />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#FFF",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        {tasks?.map((value) => {
          return (
            <Tasks
              title={value.title}
              description={value.description}
              priority={value.priority}
              status={value.status}
              dueDate={value.dueDate}
              onEdit={() => handleOnEdit(value)}
              onDelete={() => {
                setDeleteConfirmModal(true);
                setSelectedTask(value);
              }}
            />
          );
        })}
        {delteConfirmModal && selectedTask && (
          <ConfirmModal
            isOpen={delteConfirmModal}
            onConfirm={() => handleOnDelete(selectedTask.id)}
            onCancel={() => setDeleteConfirmModal(false)}
          />
        )}
        {showEditModal && selectedTask !== null && (
          <EditModal
            task={selectedTask}
            onClose={() => setShowEditModal(false)}
            onUpdatedTask={getAllTasks}
          />
        )}
      </div>
    </div>
  );
}

export default App;
