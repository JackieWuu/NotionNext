import BLOG from '@/blog.config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * Artalk 自托管评论系统 @see https://artalk.js.org/
 * @returns {JSX.Element}
 * @constructor
 */

const Artalk = ({ siteInfo }) => {
  useEffect(() => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    loadExternalResource(BLOG.COMMENT_ARTALK_CSS, 'css')
    window?.Artalk?.init({
      server: BLOG.COMMENT_ARTALK_SERVER, // 后端地址
      el: '#artalk', // 容器元素
      locale: BLOG.LANG,
      //   pageKey: '/post/1', // 固定链接 (留空自动获取)
      //   pageTitle: '关于引入 Artalk 的这档子事', // 页面标题 (留空自动获取)
      site: siteInfo?.title // 你的站点名
    })
  }, [])
  return (
        <div id="artalk"></div>
  )
=======
>>>>>>> tangly1024-main
    initArtalk()
  }, [])

  const initArtalk = async () => {
    await loadExternalResource(artalkCss, 'css')
    const artalk = window?.Artalk?.init({
      server: artalkServer,
      el: '#artalk',
      locale: artalkLocale,
      site: site,
      darkMode: document.documentElement.classList.contains('dark')
    })

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark')
          artalk?.setDarkMode(isDark)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }

  return <div id="artalk"></div>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}

export default Artalk
