const CONFIG = {
<<<<<<< HEAD

  INDEX_PAGE: 'about', // 文档首页显示的文章，请确此路径包含在您的notion数据库中
=======
  GITBOOK_INDEX_PAGE: 'about', // 文档首页显示的文章，请确此路径包含在您的notion数据库中
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

  AUTO_SORT: process.env.NEXT_PUBLIC_GITBOOK_AUTO_SORT || true, // 是否自动按分类名 归组排序文章；自动归组可能会打乱您Notion中的文章顺序

  GITBOOK_LATEST_POST_RED_BADGE:
    process.env.NEXT_PUBLIC_GITBOOK_LATEST_POST_RED_BADGE || true, // 是否给最新文章显示红点

  // 菜单
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  // 导航文章自动排他折叠
  GITBOOK_EXCLUSIVE_COLLAPSE: true, // 一次只展开一个分类，其它文件夹自动关闭。

  GITBOOK_FOLDER_HOVER_EXPAND: false, // 左侧导航文件夹鼠标悬停时自动展开；若为false，则要点击才能展开

  // Widget
<<<<<<< HEAD
  WIDGET_REVOLVER_MAPS: process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  WIDGET_TO_TOP: true // 跳回顶部
=======
  GITBOOK_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  GITBOOK_WIDGET_TO_TOP: true // 跳回顶部
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}
export default CONFIG
