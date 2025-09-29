import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import { taskService } from "./services/tasks.service";
import { ITasks } from "./types/tasks.interface";
import EditModal from "./Components/EditModal";
import ConfirmModal from "./Components/ConfirmModal";
import { StatsCard } from "./Components/DashCard";
import { TestTube } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<ITasks | null>(null);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState<boolean>(false);

  const getAllTasks = async () => {
    const data = await taskService.getAllTasks();
    setTasks(data);
  };

  const handleOnEdit = (task: ITasks) => {
    setSelectedTask(task);
    setShowEditModal(true);
  };

  const handleOnDelete = async (id: number) => {
    await taskService.deleteTask({ id });
    setDeleteConfirmModal(false);
    getAllTasks();
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Task Management
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Stay organized, stay productive
        </p>
      </div>

      <div className="mb-6">
        <StatsCard
          title="Test"
          value="This is value"
          icon={TestTube}
          variant="warning"
        />
      </div>

      <div className="w-full max-w-md mb-8">
        <AddTask onAddedTask={getAllTasks} />
      </div>

      <div className="w-full max-w-md bg-white p-4 rounded-xl shadow-md flex flex-col gap-3 max-h-[400px] overflow-y-auto">
        {tasks?.map((task) => (
          <Tasks
            key={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            status={task.status}
            dueDate={task.dueDate}
            onEdit={() => handleOnEdit(task)}
            onDelete={() => {
              setDeleteConfirmModal(true);
              setSelectedTask(task);
            }}
          />
        ))}

        {deleteConfirmModal && selectedTask && (
          <ConfirmModal
            isOpen={deleteConfirmModal}
            onConfirm={() => handleOnDelete(selectedTask.id)}
            onCancel={() => setDeleteConfirmModal(false)}
          />
        )}

        {showEditModal && selectedTask && (
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
