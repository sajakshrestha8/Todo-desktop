export const getDaysLeft = (dueDate?: string) => {
  if (!dueDate) return null;

  const today = new Date();
  const target = new Date(dueDate);

  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Overdue";
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  return `${diffDays} days left`;
};
