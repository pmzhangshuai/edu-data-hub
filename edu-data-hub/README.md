# 高等教育数据采集平台 (Edu Data Hub)

面向高等教育数据采集领域的双端产品原型系统。

## 项目简介

- **教育部端（Gov）**：沉稳权威风格，用于采集任务设计、进度监控、数据质量审核
- **学校端（School）**：清新高效风格，用于接收任务、智能填报、数据分析

## 技术栈

- **构建工具**：Vite 6 + React 19 + TypeScript 5
- **UI 组件**：shadcn/ui（Tailwind CSS v4）
- **图标库**：lucide-react
- **样式**：Tailwind CSS 4
- **路由**：React Router v7
- **状态管理**：Zustand（预留）
- **图表**：ECharts 5（预留）
- **拖拽**：@dnd-kit/core + @dnd-kit/sortable（预留）

## 安装与启动

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 双端入口

- 教育部端：`http://localhost:5173/gov`
- 学校端：`http://localhost:5173/school`

## 项目结构

```
edu-data-hub/
├── src/
│   ├── components/
│   │   ├── layout/          # 布局组件
│   │   │   ├── GovLayout.tsx
│   │   │   └── SchoolLayout.tsx
│   │   └── ui/              # shadcn/ui 组件
│   ├── pages/
│   │   ├── gov/             # 教育部端页面
│   │   └── school/          # 学校端页面
│   ├── router/              # 路由配置
│   ├── styles/              # 主题配置
│   └── lib/                 # 工具函数
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 下一步开发计划

### Step 1: 基础架构搭建（已完成）
- [x] Vite + React + TypeScript 项目初始化
- [x] Tailwind CSS v4 + shadcn/ui 配置
- [x] 双主题系统（gov/school）
- [x] 路由配置
- [x] 布局组件

### Step 2: 核心功能开发
- [ ] 教育部端采集任务设计器
- [ ] 学校端智能填报表单
- [ ] 数据质量审核流程
- [ ] 进度监控仪表盘

### Step 3: 数据可视化
- [ ] ECharts 图表集成
- [ ] 数据报表生成
- [ ] 实时数据监控

### Step 4: 高级功能
- [ ] 拖拽表单设计器
- [ ] 数据导入/导出
- [ ] 批量操作
- [ ] 消息通知系统
