export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$sRtVhxjmwx9NEiuB3qJxtuRP3B9lfN5CMBE8rCCc.05n5.wolW6BS\"]}},\"author\":{\"name\":\"Chisom Uma\",\"url\":\"https://www.linkedin.com/in/chisom-uma-36187a236/\"},\"logo\":\"/assets/icon/node.png\",\"repo\":\"https://github.com/ChisomUma/chisom-node-docs\",\"docsDir\":\"src\",\"footer\":\"Default footer\",\"displayFooter\":true,\"fullscreen\":true,\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",\"/get-started/\",\"docs/\"],\"sidebar\":{\"/\":[\"\",{\"text\":\"Get Started\",\"icon\":\"lightbulb\",\"prefix\":\"get-started/\",\"link\":\"get-started/\",\"children\":[\"installation.md\",\"quick-start.md\",\"what-is-nodejs.md\"]},{\"text\":\"Docs\",\"icon\":\"book\",\"prefix\":\"docs/\",\"link\":\"docs/\",\"children\":\"structure\"}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
