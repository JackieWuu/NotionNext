import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'
// import Giscus from '@giscus/react'

/**
 * Giscus评论 @see https://giscus.app/zh-CN
 * Contribute by @txs https://github.com/txs/NotionNext/commit/1bf7179d0af21fb433e4c7773504f244998678cb
 * @returns {JSX.Element}
 * @constructor
 */

const GiscusComponent = () => {
  const { isDarkMode } = useGlobal()
  const theme = isDarkMode ? 'dark' : 'light'
  useEffect(() => {
    loadExternalResource('/js/giscus.js', 'js').then(() => {
      if (window?.Giscus?.init) {
        window?.Giscus?.init('#giscus')
      }
    })
    return () => {
      window?.Giscus?.destroy()
    }
  }, [isDarkMode])

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <Giscus
      repo={BLOG.COMMENT_GISCUS_REPO}
      repoId={BLOG.COMMENT_GISCUS_REPO_ID}
      categoryId={BLOG.COMMENT_GISCUS_CATEGORY_ID}
      mapping={BLOG.COMMENT_GISCUS_MAPPING}
      reactionsEnabled={BLOG.COMMENT_GISCUS_REACTIONS_ENABLED}
      emitMetadata={BLOG.COMMENT_GISCUS_EMIT_METADATA}
      theme={theme}
      inputPosition={BLOG.COMMENT_GISCUS_INPUT_POSITION}
      lang={BLOG.COMMENT_GISCUS_LANG}
      loading={BLOG.COMMENT_GISCUS_LOADING}
      crossorigin={BLOG.COMMENT_GISCUS_CROSSORIGIN}
    />
=======
>>>>>>> tangly1024-main
    <div
      id='giscus'
      data-repo={siteConfig('COMMENT_GISCUS_REPO')}
      data-repo-id={siteConfig('COMMENT_GISCUS_REPO_ID')}
      //   data-category='{{ $.Site.Params.giscus.dataCategory }}'
      data-category-id={siteConfig('COMMENT_GISCUS_CATEGORY_ID')}
      data-mapping={siteConfig('COMMENT_GISCUS_MAPPING')}
      //   data-strict='0'
      data-reactions-enabled={siteConfig('COMMENT_GISCUS_REACTIONS_ENABLED')}
      data-emit-metadata={siteConfig('COMMENT_GISCUS_EMIT_METADATA')}
      data-input-position={siteConfig('COMMENT_GISCUS_INPUT_POSITION')}
      data-theme={theme}
      data-lang={siteConfig('COMMENT_GISCUS_LANG')}
      data-loading={siteConfig('COMMENT_GISCUS_LOADING')}
    //   crossorigin={siteConfig('COMMENT_GISCUS_CROSSORIGIN')}
    ></div>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  )
}

export default GiscusComponent
