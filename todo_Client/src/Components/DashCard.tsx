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
    success: "bg-gradient-to-br from-success/5 to-success/10 border-success/20",
    warning: "bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20",
    primary: "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20",
  };

  const iconColors = {
    default: "text-muted-foreground",
    success: "text-success",
    warning: "text-warning",
    primary: "text-primary",
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

      {/* Decorative gradient */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl" />
    </div>
  );
};