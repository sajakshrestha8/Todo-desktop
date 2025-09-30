export interface ITasks {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
    dueDate: string;
}

export interface IUpdateTasks {
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: string;
}

export interface IAddTask {
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: string;
}
