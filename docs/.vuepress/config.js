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
    colorModeSwitch: false,
    navbar: [
      {
        text: "😈 - Home",
        link: "/",
      },
      {
        text: "🤠 - Note",
        children: [
          {
            text: "HTML",
            link: "/a-note/a-html.md",
          },
          {
            text: "CSS",
            link: "/a-note/b-css.md",
          },
          {
            text: "JavaScript",
            link: "/a-note/c-javascript.md",
          },
          {
            text: "TypeScript",
            link: "/a-note/d-typescript.md",
          },
          {
            text: "Node.js",
            link: "/a-note/e-node.md",
          },
          {
            text: "Vue.js",
            link: "/a-note/f-vue.md",
          },
          {
            text: "React.js",
            link: "/a-note/g-react.md",
          },
          {
            text: "Build",
            link: "/a-note/h-build.md",
          },
          {
            text: "UniApp",
            link: "/a-note/i-uniapp.md",
          },
          {
            text: "WeChat",
            link: "/a-note/j-wechat.md",
          },
          {
            text: "Visualization",
            link: "/a-note/k-visualization.md",
          },
          {
            text: "MicroFrontends",
            link: "/a-note/l-microFrontends.md",
          },
          {
            text: "Flutter",
            link: "/a-note/m-flutter.md",
          },
          {
            text: "Electron",
            link: "/a-note/n-electron.md",
          },
          {
            text: "Web3",
            link: "/a-note/o-web3.md",
          },
        ],
      },
      {
        text: "😎 - Demo",
        children: [
          {
            text: "Snippet",
            link: "/b-demo/a-snippet.md",
          },
          {
            text: "Project",
            link: "/b-demo/b-project.md",
          },
        ],
      },
      {
        text: "🧐 - Interview",
        children: [
          {
            text: "Theory",
            link: "/c-interview/a-theory.md",
          },
          {
            text: "Operation",
            link: "/c-interview/b-operation.md",
          },
          {
            text: "Browser",
            link: "/c-interview/c-browser.md",
          },
          {
            text: "Network",
            link: "/c-interview/d-network.md",
          },
        ],
      },
      {
        text: "🤓 - Tools",
        children: [
          {
            text: "Git",
            link: "/d-tools/a-git.md",
          },
          {
            text: "Use",
            link: "/d-tools/b-use.md",
          },
          {
            text: "Color",
            link: "/d-tools/c-color.md",
          },
          {
            text: "Icon",
            link: "/d-tools/d-icon.md",
          },
        ],
      },
      {
        text: "😺 - Blockchain",
        link: "/e-blockchain/",
      },
    ],
  }),
})
