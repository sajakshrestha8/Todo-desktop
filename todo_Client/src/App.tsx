import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import { taskService } from "./services/tasks.service";
import { ITasks } from "./types/tasks.interface";
import EditModal from "./Components/EditModal";
import ConfirmModal from "./Components/ConfirmModal";
import { StatsCard } from "./Components/DashCard";
import { Flame, ListTodo } from "lucide-react";
import { Button } from "./Components/ui/button";
import { ToastContainer } from "react-toastify";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<ITasks | null>(null);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState<boolean>(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);

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

  const dashBoardData = [
    {
      title: "Total Tasks",
      value: tasks?.length,
      icon: ListTodo,
    },
    {
      title: "Streak",
      value: 2,
      icon: Flame,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 font-sans text-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">TaskMaster Pro</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Stay organized, stay productive
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-6 justify-center items-stretch w-full max-w-4xl">
        {dashBoardData.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value || 0}
            icon={item.icon}
            variant="primary"
            className="flex-1 min-w-[180px]"
          />
        ))}
      </div>

      <div className="w-full max-w-sm md:max-w-md mb-8 mx-auto">
        <Button variant="default" onClick={() => setShowAddTaskModal(true)}>
          + Add Task
        </Button>
        <AddTask
          open={showAddTaskModal}
          onClose={() => setShowAddTaskModal(false)}
          onAddedTask={getAllTasks}
        />
      </div>

      <div className="w-full max-w-3xl p-6 rounded-2xl shadow-xl flex flex-col gap-4 max-h-[500px] overflow-y-auto">
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
