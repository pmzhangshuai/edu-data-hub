import { useParams } from "react-router-dom";

export default function SchoolPlaceholder() {
  const { page } = useParams();
  const pageNames: Record<string, string> = {
    tasks: "任务中心",
    "base-data": "基础数据中枢",
    audit: "审核中心",
    analysis: "数据分析",
    settings: "系统设置",
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{pageNames[page || ""] || page}</h1>
      <p className="text-muted-foreground">此页面正在开发中...</p>
    </div>
  );
}
