import { Star, Target } from "lucide-react";
import { useState } from "react";
import { Badge } from "./ui/badge";

function Navigation() {
  const [userStats, setUserStats] = useState({
    totalPoints: 0,
    streak: 7,
    level: 1,
    completedToday: 0,
  });
  return (
    <div>
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg shadow-primary">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">TaskMaster Pro</h1>
                <p className="text-sm text-muted-foreground">
                  Level {userStats.level} • {userStats.streak} day streak 🔥
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-2">
                <Star color="orange" className="h-3 w-3" />
                {userStats.totalPoints} pts
              </Badge>
              {/* <ThemeToggle /> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation
