import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ListChecks,
  Database,
  Shield,
  BarChart3,
  Settings,
  PanelLeftClose,
  PanelLeft,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface MenuItem {
  label: string;
  icon: React.ElementType;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: "工作台", icon: LayoutDashboard, path: "/school" },
  { label: "任务中心", icon: ListChecks, path: "/school/tasks" },
  { label: "基础数据中枢", icon: Database, path: "/school/base-data" },
  { label: "审核中心", icon: Shield, path: "/school/audit" },
  { label: "数据分析", icon: BarChart3, path: "/school/analysis" },
  { label: "系统设置", icon: Settings, path: "/school/settings" },
];

export function SchoolLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen flex-col border-r transition-all duration-300",
          collapsed ? "w-14" : "w-55"
        )}
        style={{ backgroundColor: "#f2f3f5" }}
      >
        {/* Logo area */}
        <div className="flex h-14 items-center gap-3 border-b px-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </div>
          {!collapsed && (
            <span className="text-sm font-semibold">高等教育数据采集平台</span>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-4 flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "mx-2 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-white hover:text-foreground",
                  collapsed && "justify-center px-2"
                )}
              >
                <item.icon className="size-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t p-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full justify-center"
          >
            {collapsed ? (
              <PanelLeft className="size-4" />
            ) : (
              <>
                <PanelLeftClose className="size-4 mr-2" />
                <span className="text-xs">收起菜单</span>
              </>
            )}
          </Button>
          {!collapsed && (
            <p className="mt-2 text-center text-xs text-muted-foreground">
              v0.1.0
            </p>
          )}
        </div>
      </aside>

      {/* Main content */}
      <div
        className={cn(
          "flex flex-1 flex-col transition-all duration-300",
          collapsed ? "ml-14" : "ml-55"
        )}
      >
        {/* Top navigation */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-white px-6 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">学校端</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                className="relative size-8 rounded-full"
              >
                <Avatar className="size-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    教师
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">张老师</p>
                  <p className="text-xs text-muted-foreground">
                    数据填报员
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>个人设置</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>退出登录</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Breadcrumb + Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-4 text-sm text-muted-foreground">工作台</div>
          <div className="min-w-[1280px] rounded-lg bg-card p-6 shadow-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
