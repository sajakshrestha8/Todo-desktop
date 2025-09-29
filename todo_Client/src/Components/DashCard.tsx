import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  variant?: "default" | "success" | "warning" | "primary";
}

export const StatsCard = ({
  title,
  value,
  icon: Icon,
  trend,
  className,
  variant = "default",
}: StatsCardProps) => {
  const variantClasses = {
    default: "bg-card border-border",
    success: "bg-gradient-to-br from-green-200 to-green-100 border-green-200",
    warning: "bg-gradient-to-br from-red-500 to-red-100 border-red-200",
    primary: "bg-gradient-to-br from-blue-500 to-blue-100 border-blue-200",
  };

  const iconColors = {
    default: "text-muted-foreground",
    success: "text-green-600",
    warning: "text-red-600",
    primary: "text-blue-600",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border p-6 shadow-md hover:shadow-lg transition-all duration-300 hover-lift",
        variantClasses[variant],
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {trend && (
            <p
              className={cn(
                "text-xs font-medium flex items-center gap-1",
                trend.isPositive ? "text-success" : "text-destructive"
              )}
            >
              <span>{trend.isPositive ? "↗" : "↘"}</span>
              {Math.abs(trend.value)}% from last week
            </p>
          )}
        </div>
        <div
          className={cn(
            "p-3 rounded-lg bg-background/50 backdrop-blur-sm",
            iconColors[variant]
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl" />
    </div>
  );
};