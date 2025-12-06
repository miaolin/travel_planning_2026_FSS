# 2026 法西瑞之旅 - 交互式行程规划

这是一个基于 Next.js + Tailwind CSS 构建的交互式旅行规划应用，用于 2026 年 5 月 31 日至 6 月 15 日的法国、西班牙（马略卡）、瑞士家庭旅行。

## 功能特性

### 📅 行程安排
- **城市筛选**：支持查看全部行程，或仅查看巴黎、马略卡、瑞士的行程
- **巴黎模式切换**：一键在「法网观赛版本」和「非法网版本」之间切换
- **详细信息**：每日行程包含日期、城市、标签、住宿信息、活动安排

### 💰 预算追踪
- **自动分类汇总**：按法国（巴黎）、西班牙（马略卡）、瑞士、全程总计自动分类
- **多币种支持**：支持 EUR、CHF、SGD 三种货币，自动换算为新币
- **分类详情**：住宿、交通、餐饮、门票、活动等细分类别
- **实时汇总**：自动计算各地区小计和全程总预算

## 技术栈

- **框架**：Next.js 14 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **部署**：Vercel

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 部署到 Vercel

### 方法 1：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel
```

### 方法 2：通过 Git 集成

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 项目并完成部署

## 项目结构

```
.
├── app/
│   ├── components/
│   │   ├── BudgetView.tsx      # 预算视图组件
│   │   ├── DayCard.tsx          # 单日行程卡片
│   │   └── ItineraryView.tsx    # 行程视图组件
│   ├── globals.css              # 全局样式
│   ├── layout.tsx               # 根布局
│   └── page.tsx                 # 主页面（Tab 切换）
├── data/
│   ├── budget.ts                # 预算数据
│   ├── itinerary.ts             # 行程数据
│   └── types.ts                 # TypeScript 类型定义
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 自定义数据

### 修改行程

编辑 `data/itinerary.ts` 文件，更新 `days` 数组中的行程信息。

### 修改预算

编辑 `data/budget.ts` 文件，更新 `budgetItems` 数组中的预算项目。

### 调整汇率

在 `app/components/BudgetView.tsx` 中更新 `EXCHANGE_RATES` 常量：

```typescript
const EXCHANGE_RATES = {
  EUR: 1.44,  // 根据实际汇率调整
  CHF: 1.52,  // 根据实际汇率调整
  SGD: 1.0,
};
```

## 特色设计

- 🎨 **深色主题**：优雅的深色配色方案，减少眼睛疲劳
- 📱 **响应式设计**：完美适配桌面端和移动端
- ⚡ **快速切换**：无刷新的标签页和模式切换
- 💎 **玻璃态设计**：现代化的毛玻璃效果
- 🎯 **清晰分类**：不同地区用不同颜色标识（巴黎-红、马略卡-蓝、瑞士-绿）

## 许可

本项目为个人旅行规划工具，仅供参考使用