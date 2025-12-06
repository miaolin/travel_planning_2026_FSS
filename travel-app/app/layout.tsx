import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 法西瑞之旅 - 交互行程表",
  description: "05/31 – 06/15 · 巴黎 / 马略卡 / 瑞士 · 家庭旅行 + 网球主题",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
