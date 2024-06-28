## MDUI-Modified

本项目基于 [MDUI](https://github.com/zdhxiong/mdui) 1.0.2 版本编译后的代码进行魔改

### 为什么要魔改?

在开发 LingChair 的前端页面时, 碰到了很多原本 MDUI 所没有涉及到的问题(例如在 Tab 菜单使用 Menu 等), 这也就导致开发时出现了很多与 CSS 有关的问题, 严重浪费了开发的时间

因此, 经考虑, 决定直接通过魔改来解决一切问题

### 为什么分离出 LingChair 的资源文件了?

考虑到目前对 Webpack 的使用尚不熟练, 且多次编译十分麻烦, 因此我们决定单独分出一个仓库来储存源代码和编译后的文件, 通过一些 CDN 来分发给前端网页从而大大缓解服务端文件读取的压力

### 修改了哪里?

请自行查看源代码中 `Mod:` 开头的注释, 那里会有答案

### 协议

与 [MDUI](https://github.com/zdhxiong/mdui) 一样, 本项目使用 MIT-License 进行开源
