import { defineUserConfig } from "vuepress";
import gitDescribe from 'git-describe';
import theme from "./theme.js";

//Git Hash 
const gitInfo = gitDescribe.gitDescribeSync();
process.env.VUE_APP_GIT_HASH = gitInfo.hash;

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Pysio's Home",
  description: "一个温暖的家",
  head: [
      //JetBrains Mono
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
