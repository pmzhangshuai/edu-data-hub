import { useParams } from "react-router-dom";

export default function GovPlaceholder() {
  const { page } = useParams();
  const pageNames: Record<string, string> = {
    tasks: "任务中心",
    "tasks-create": "创建任务",
    indicators: "指标库",
    monitor: "进度监控",
    quality: "质量中心",
    analysis: "智能分析",
    settings: "系统设置",
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{pageNames[page || ""] || page}</h1>
      <p className="text-muted-foreground">此页面正在开发中...</p>
    </div>
  );
}
