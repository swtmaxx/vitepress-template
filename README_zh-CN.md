# VitePress 文档模板

一个简洁可定制的 VitePress 文档模板，具有良好的组织结构和现代化设计。

## 部署
部署到 EdgeOne Pages。

[![EdgeOne Pages deploy](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?template=vitepress-template)

## 特性

- 📚 结构良好的文档组织
- 🎨 自定义主题和样式
- 📱 响应式设计
- 🔍 全文搜索
- 📦 易于部署
- 🚀 快速轻量

## 目录结构

```
.
├── .vitepress/          # VitePress 配置
│   ├── config.mts       # 站点配置
│   └── theme/           # 自定义主题文件
│       └── style.css    # 自定义样式
├── pages/              # 文档页面
│   ├── index.md        # 首页
│   ├── quick-start/    # 快速开始指南
│   ├── advanced/       # 进阶主题
│   ├── deployment/     # 部署指南
│   └── examples/       # 示例
├── dist/               # 构建输出目录
├── package.json        # 项目依赖
├── edgeone.json        # 项目部署参数
└── .gitignore         # Git 忽略规则
```

## 快速开始

1. **安装**

```bash
# 克隆仓库
git clone [your-repo-url]

# 安装依赖
npm install
```

2. **开发**

```bash
# 启动本地开发服务器
npm run dev
```

3. **构建**

```bash
# 构建生产版本
npm run build
```

4. **预览**

```bash
# 预览生产构建
npm run preview
```

## 文档结构

- **快速开始**: 基础设置和配置指南
- **进阶**: 深入主题和自定义设置
- **示例**: Markdown 和 API 使用示例
- **部署**: 各种平台的部署指南

## 贡献

欢迎贡献！请随时提交 Pull Request。