import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ListChecks,
  Database,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronUp,
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
  path?: string;
  children?: { label: string; path: string }[];
}

const menuItems: MenuItem[] = [
  { label: "工作台", icon: LayoutDashboard, path: "/gov" },
  {
    label: "采集任务",
    icon: ListChecks,
    children: [
      { label: "任务中心", path: "/gov/tasks" },
      { label: "创建任务", path: "/gov/tasks/create" },
    ],
  },
  {
    label: "数据管理",
    icon: Database,
    children: [
      { label: "指标库", path: "/gov/indicators" },
      { label: "进度监控", path: "/gov/monitor" },
      { label: "质量中心", path: "/gov/quality" },
    ],
  },
  { label: "智能分析", icon: BarChart3, path: "/gov/analysis" },
  { label: "系统设置", icon: Settings, path: "/gov/settings" },
];

function SidebarItem({
  item,
  collapsed,
}: {
  item: MenuItem;
  collapsed: boolean;
}) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const isActive = item.path
    ? location.pathname === item.path
    : item.children?.some((c) => location.pathname === c.path);

  if (collapsed) {
    return (
      <div className="flex flex-col items-center py-2">
        <item.icon className="size-5 text-muted-foreground" />
      </div>
    );
  }

  if (item.children) {
    return (
      <div className="px-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            isActive
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <item.icon className="size-4 shrink-0" />
          <span className="flex-1 text-left">{item.label}</span>
          {expanded ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </button>
        {expanded && (
          <div className="mt-1 ml-4 flex flex-col gap-1 border-l pl-4">
            {item.children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  location.pathname === child.path
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path!}
      className={cn(
        "mx-3 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <item.icon className="size-4 shrink-0" />
      <span>{item.label}</span>
    </Link>
  );
}

export function GovLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen flex-col border-r bg-surface transition-all duration-300",
          collapsed ? "w-16" : "w-60"
        )}
        style={{ backgroundColor: "hsl(var(--card))" }}
      >
        {/* Logo area */}
        <div className="flex h-16 items-center gap-3 border-b px-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </div>
          {!collapsed && (
            <span className="text-sm font-semibold">高等教育数据采集平台</span>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-4 flex flex-col gap-1">
          {menuItems.map((item) => (
            <SidebarItem key={item.label} item={item} collapsed={collapsed} />
          ))}
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
          collapsed ? "ml-16" : "ml-60"
        )}
      >
        {/* Top navigation */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-primary px-6 text-primary-foreground">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">教育部端</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                className="relative size-8 rounded-full text-primary-foreground hover:bg-primary/80"
              >
                <Avatar className="size-8">
                  <AvatarFallback className="bg-primary-foreground text-primary text-xs">
                    管理
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">管理员</p>
                  <p className="text-xs text-muted-foreground">
                    教育部管理员
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
