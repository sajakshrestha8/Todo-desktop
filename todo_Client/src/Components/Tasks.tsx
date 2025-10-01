import { useState } from "react";
import { Trash2, Edit, CalendarDays, Star, ChevronDown } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import { getDaysLeft } from "../utils/task.utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface TasksProps {
  title: string;
  description?: string;
  priority: string;
  status: string;
  dueDate?: string;
  onDelete: () => void;
  onEdit: () => void;
}

const Tasks = ({
  title,
  description,
  priority,
  status,
  dueDate,
  onDelete,
  onEdit,
}: TasksProps) => {
  const [completed, setCompleted] = useState(status === "Completed");

  const priorityVariants: {
    [key: string]: "destructive" | "warning" | "default" | "lowPriority";
  } = {
    High: "destructive",
    Medium: "warning",
    Low: "lowPriority",
  };

  const emojiAddedPrority =
    (priority === "High" && "🔥High") ||
    (priority === "Medium" && "⚡Medium") ||
    (priority === "Low" && "🟢 Low"); 

  const daysLeft = getDaysLeft(dueDate);

  return (
    <Card className="w-full rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800">
      <CardContent className="flex flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <Checkbox
            checked={completed}
            onCheckedChange={() => setCompleted(!completed)}
            className="h-5 w-5 rounded-full border-gray-400 data-[state=checked]:bg-green-500"
          />

          <span
            className={`flex-1 font-semibold text-lg ${
              completed ? "line-through text-gray-500" : "text-black"
            }`}
          >
            {title}
          </span>

          <Badge
            variant={priorityVariants[priority] || "secondary"}
            className="text-xs px-2 py-1 font-bold rounded-full"
          >
            {emojiAddedPrority}
          </Badge>

          <div className="flex gap-3 text-gray-400">
            <Edit
              size={18}
              className="cursor-pointer hover:text-blue-400 transition-colors"
              onClick={onEdit}
            />
            <Trash2
              size={18}
              className="cursor-pointer hover:text-red-400 transition-colors"
              onClick={onDelete}
            />
          </div>
        </div>

        {description && (
          <p className="text-sm text-gray-900 pl-8">{description}</p>
        )}

        <div className="flex items-center gap-2 text-xs text-gray-900 pl-8">
          <Badge className="text-xs gap-1 rounded-full" variant="startpoints">
            <Star color="orange" className="h-3 w-3" />
            <label>15 pts</label>
          </Badge>
          {dueDate && daysLeft && (
            <Badge
              variant="secondary"
              className="flex items-center gap-1 rounded-full"
            >
              <CalendarDays size={14} /> {daysLeft}
            </Badge>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Badge
                className={`flex items-center gap-1 cursor-pointer rounded-full px-3 py-1 ${
                  completed
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {status} <ChevronDown size={12} />
              </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem onClick={() => console.log("Set to Pending")}>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => console.log("Set to In Progress")}
              >
                In Progress
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Set to Completed")}>
                Completed
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tasks;
