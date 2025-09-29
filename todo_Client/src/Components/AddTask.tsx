import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { taskService } from "../services/tasks.service";

interface AddTaskProps {
  onAddedTask: () => void;
}

const AddTask = ({ onAddedTask }: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("High");
  const [status, setStatus] = useState<
    "Pending" | "In Progress" | "Completed" | "Blocked"
  >("Pending");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = async () => {
    await taskService.addTasks({
      title,
      description,
      priority,
      status,
      dueDate,
    });

    setTitle("");
    setDescription("");
    setPriority("High");
    setStatus("Pending");
    setDueDate("");

    onAddedTask();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto flex flex-col gap-6">
      {/* Task Title */}
      <div className="flex flex-col gap-1">
        <Label htmlFor="title">Task Title</Label>
        <Input
          id="title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      </div>

      {/* Priority, Status, Due Date */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="priority">Priority</Label>
          <Select
            value={priority}
            onValueChange={(val) =>
              setPriority(val as "High" | "Medium" | "Low")
            }
          >
            <SelectTrigger id="priority">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="status">Status</Label>
          <Select
            value={status}
            onValueChange={(val) =>
              setStatus(
                val as "Pending" | "In Progress" | "Completed" | "Blocked"
              )
            }
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <Button variant="default" onClick={handleAdd}>
        + Add Task
      </Button>
    </div>
  );
};

export default AddTask;
