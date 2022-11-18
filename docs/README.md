---
home: true
heroImage: /images/background.png
heroText: 前端摸金手册
tagline: 数据若有交互出 - 定有接口在此间
pageClass: page-home
actions:
  - text: 笔记总览
    link: /a-note/
    type: primary
  - text: 案例目录
    link: /b-demo/
    type: secondary
  - text: 面试八股
    link: /c-interview/
    type: secondary
  - text: 工具归纳
    link: /d-tools/
    type: secondary
features:
  - title: ▪ 核心技术
    details: HTML 超文本标记语言，CSS 层叠样式表，JavaScript 轻量级解释型脚本语言
  - title: ▪ 前端框架
    details: Vue 框架，React 框架，Angular 框架，Node 服务框架，Electron 桌面框架
  - title: ▪ 性能优化
    details: 加载优化，执行优化，渲染优化，样式优化，脚本优化，代码优化，SEO 优化
footer: ©2022 前端摸金手册
---

<style>
.page-home {
  background:
    linear-gradient(180deg, #FFB7B7 0%, #727272 100%),
    radial-gradient(60.91% 100% at 50% 0%, #FFD1D1 0%, #260000 100%),
    linear-gradient(238.72deg, #FFDDDD 0%, #720066 100%),
    linear-gradient(127.43deg, #00FFFF 0%, #FF4444 100%),
    radial-gradient(100.22% 100% at 70.57% 0%, #FF0000 0%, #00FFE0 100%),
    linear-gradient(127.43deg, #B7D500 0%, #3300FF 100%);
  background-blend-mode:
    screen,
    overlay,
    hard-light,
    color-burn,
    color-dodge,
    normal;
}

.page-home .navbar {
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border: 0px;
}

.page-home .sidebar {
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border: 0px;
}

.page-home .navbar .search-box input {
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
}

.page-home .navbar-dropdown-wrapper:not(.mobile) .navbar-dropdown {
  background-color: rgba(0, 0, 0, 0.2);
  border: 0px;
}

.page-home .navbar-dropdown-wrapper:not(.mobile) .navbar-dropdown a:hover {
  color: #eaecef;
}

.page-home .navbar-items .navbar-item > a:hover, .navbar-items .navbar-item > a.router-link-active {
  border-bottom: 2px solid #eaecef;
}

.page-home .home .hero .action-button.primary {
  background-color: rgba(0, 0, 0, 0);
  border-color: #2c3e50;
  color: #2c3e50;
}

.page-home .home .hero .action-button.primary:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.page-home .home .hero .action-button.secondary {
  background-color: rgba(0, 0, 0, 0);
  border-color: #2c3e50;
  color: #2c3e50;
}

.page-home .home .hero .action-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
