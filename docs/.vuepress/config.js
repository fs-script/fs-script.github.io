import { defineUserConfig } from "vuepress"
import { defaultTheme } from "@vuepress/theme-default"
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "前端摸金手册",
  description: "专注前端学习的摸金手册",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],

  plugins: [searchPlugin({})],

  theme: defaultTheme({
    home: "/",
    colorMode: "light",
    colorModeSwitch: false,
    navbar: [
      {
        text: "😈 - 首页",
        link: "/",
      },
      {
        text: "🤠 - 笔记",
        children: [
          {
            text: "◾ HTML",
            link: "/a-note/a-html.md",
          },
          {
            text: "◾ CSS",
            link: "/a-note/b-css.md",
          },
          {
            text: "◾ JavaScript",
            link: "/a-note/c-javascript.md",
          },
          {
            text: "◾ TypeScript",
            link: "/a-note/d-typescript.md",
          },
          {
            text: "◾ Node.js",
            link: "/a-note/e-node.md",
          },
          {
            text: "◾ Vue.js",
            link: "/a-note/f-vue.md",
          },
          {
            text: "◾ React.js",
            link: "/a-note/g-react.md",
          },
          {
            text: "◾ 工程化",
            link: "/a-note/h-build.md",
          },
          {
            text: "◾ 小程序",
            link: "/a-note/i-wechat.md",
          },
          {
            text: "◾ 可视化",
            link: "/a-note/j-visualization.md",
          },
          {
            text: "◾ UniApp",
            link: "/a-note/k-uniapp.md",
          },
          {
            text: "◾ Flutter",
            link: "/a-note/l-flutter.md",
          },
          {
            text: "◾ Electron",
            link: "/a-note/m-electron.md",
          },
          {
            text: "◾ 微前端",
            link: "/a-note/n-microFrontends.md",
          },
          {
            text: "◾ Web3",
            link: "/a-note/o-web3.md",
          },
        ],
      },
      {
        text: "😎 - 实战",
        children: [
          {
            text: "◾ 片段",
            link: "/b-demo/a-snippet.md",
          },
          {
            text: "◾ 项目",
            link: "/b-demo/b-project.md",
          },
        ],
      },
      {
        text: "🧐 - 面试",
        children: [
          {
            text: "◾ 理论",
            link: "/c-interview/a-theory.md",
          },
          {
            text: "◾ 手写",
            link: "/c-interview/b-operation.md",
          },
          {
            text: "◾ 算法",
            link: "/c-interview/c-algorithm.md",
          },
          {
            text: "◾ 网络",
            link: "/c-interview/d-network.md",
          },
          {
            text: "◾ 浏览器",
            link: "/c-interview/e-browser.md",
          },
        ],
      },
      {
        text: "🤓 - 工具",
        children: [
          {
            text: "◾ Git",
            link: "/d-tools/a-git.md",
          },
          {
            text: "◾ 配置",
            link: "/d-tools/b-use.md",
          },
          {
            text: "◾ 配色",
            link: "/d-tools/c-color.md",
          },
          {
            text: "◾ 图标",
            link: "/d-tools/d-icon.md",
          },
          {
            text: "◾ 动画",
            link: "/d-tools/e-animation.md",
          },
          {
            text: "◾ 设计",
            link: "/d-tools/f-design.md",
          },
        ],
      },
      {
        text: "😺 - 区块链",
        link: "/e-blockchain/",
      },
    ],
  }),
})
