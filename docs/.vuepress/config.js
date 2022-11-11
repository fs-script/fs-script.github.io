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
        ],
      },
      {
        text: "🤓 - Tools",
        children: [
          {
            text: "Use",
            link: "/d-tools/a-use.md",
          },
          {
            text: "Color",
            link: "/d-tools/b-color.md",
          },
          {
            text: "Icon",
            link: "/d-tools/c-icon.md",
          },
        ],
      },
    ],
  }),
})
