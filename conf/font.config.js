/**
 * 网站字体相关配置
 *
 */
module.exports = {
  // START ************网站字体*****************
  // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 后面空格隔开的font-light的字体粗细，留空是默认粗细；参考 https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  // 2026-11-25：清空 Google Fonts 外链。大陆手机流量下 fonts.googleapis.com 不可达，
  // 而它是由 components/SEO.js 的 webfontloader（cdnjs）在水合后注入的纯装饰性外链。
  // 清空后 hasWebFontUrl=false ⇒ 不加载 webfontloader、不发 dns-prefetch/preconnect，
  // 字体回落到 FONT_SANS / FONT_SERIF 里的系统字体（苹方 / 微软雅黑）。
  FONT_URL: process.env.NEXT_PUBLIC_FONT_URL || [],

  // 字体优化配置
  FONT_DISPLAY: process.env.NEXT_PUBLIC_FONT_DISPLAY || 'swap',
  FONT_PRELOAD: process.env.NEXT_PUBLIC_FONT_PRELOAD || true,
  FONT_SUBSET: process.env.NEXT_PUBLIC_FONT_SUBSET || 'chinese-simplified',
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS: [
    '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  FONT_SERIF: [
    '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  // 2026-11-25：改回自托管。public/vendor/fontawesome/ 里本来就有 6.4.2 的全套资源
  // （提交 df71ae22 Self-host Font Awesome for menu icons），但默认值后来被改回 cdnjs，
  // 属于「同步上游时定制丢失」的复发。前缀 /vendor/fontawesome/ 会命中 pages/_document.js
  // 的 isLocalFontAwesome 分支 ⇒ 额外 preload 三个 woff2。
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    '/vendor/fontawesome/css/all.min.css' // font-awesome 字体图标地址（自托管）

  // END ************网站字体*****************
}
