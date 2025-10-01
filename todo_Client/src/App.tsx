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
import Navigation from "./Components/Navigation";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<ITasks | null>(null);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState<boolean>(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

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

  useEffect(() => {
    if (tasks) {
      const totalPoints = tasks.reduce((sum, task) => {
        const points =
          task.priority === "High" ? 25 : task.priority === "Medium" ? 15 : 5;
        return sum + points;
      }, 0);

      localStorage.setItem("totalPoints", JSON.stringify(totalPoints));
    }
  }, [tasks]);

  return (
    <div className="bg-gray-100 flex flex-col items-center p-6 font-sans text-gray-900 min-h-screen">
      <div className="w-full max-w-3xl mx-auto">
        <Navigation completedTask={completed} />
        <div className="mb-8 flex flex-wrap gap-6 mt-8 justify-center items-stretch w-100">
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

        <div className="w-full max-w-md mb-8 mx-auto text-center">
          <Button variant="default" onClick={() => setShowAddTaskModal(true)}>
            + Add Task
          </Button>
          <AddTask
            open={showAddTaskModal}
            onClose={() => setShowAddTaskModal(false)}
            onAddedTask={getAllTasks}
          />
        </div>

        <div className="w-full max-w-3xl mx-auto p-6 rounded-2xl shadow-xl flex flex-col gap-4 max-h-[500px] overflow-y-auto bg-white">
          {tasks?.map((task) => (
            <Tasks
              key={task.id}
              id={task.id}
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
              points={
                task.priority === "High" ? 25 : task.priority === "Medium" ? 15 : 5
              }
              completed={task.isCompleted}
              setCompleted={setCompleted}
              getAllTasks={getAllTasks}
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
    </div>
  );
}

export default App;
