import { useState } from "react";
import { Trash2, Edit, CalendarDays } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import { Tooltip, TooltipProvider } from "../components/ui/tooltip";

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
    [key: string]: "destructive" | "warning" | "success" | "secondary";
  } = {
    High: "destructive",
    Medium: "warning",
    Low: "success",
    Default: "secondary",
  };

  return (
    <Card className="w-full text-black">
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-3">
          <Checkbox
            checked={completed}
            onCheckedChange={() => setCompleted(!completed)}
            className="h-4 w-4"
          />

          <span
            className={`flex-1 font-semibold text-base ${
              completed
                ? "line-through text-muted-foreground"
                : "text-foreground"
            }`}
          >
            {title}
          </span>

          <Badge
            variant={priorityVariants[priority] || "secondary"}
            className="uppercase text-xs font-semibold"
          >
            {priority}
          </Badge>

          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip content="Edit Task">
                <Edit size={18} className="cursor-pointer" onClick={onEdit} />
              </Tooltip>
              <Tooltip content="Delete Task">
                <Trash2
                  size={18}
                  className="cursor-pointer"
                  onClick={onDelete}
                />
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground m-0">{description}</p>
        )}

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>Status: {status}</span>
          {dueDate && (
            <span className="flex items-center gap-1">
              <CalendarDays size={14} /> {dueDate}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Tasks;
