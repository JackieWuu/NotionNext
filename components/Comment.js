<<<<<<< HEAD
import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'
import Tabs from '@/components/Tabs'
import { isBrowser } from '@/lib/utils'
import { useRouter } from 'next/router'
import Artalk from './Artalk'
=======
import Tabs from '@/components/Tabs'
import { siteConfig } from '@/lib/config'
import { isBrowser, isSearchEngineBot } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Artalk from './Artalk'

/**
 * 评论组件
 * 只有当前组件在浏览器可见范围内才会加载内容
 * @param {*} param0
 * @returns
 */
const Comment = ({ frontMatter, className }) => {
  const router = useRouter()
  const [shouldLoad, setShouldLoad] = useState(false)
  const commentRef = useRef(null)

  const COMMENT_ARTALK_SERVER = siteConfig('COMMENT_ARTALK_SERVER')
  const COMMENT_TWIKOO_ENV_ID = siteConfig('COMMENT_TWIKOO_ENV_ID')
  const COMMENT_WALINE_SERVER_URL = siteConfig('COMMENT_WALINE_SERVER_URL')
  const COMMENT_VALINE_APP_ID = siteConfig('COMMENT_VALINE_APP_ID')
  const COMMENT_GISCUS_REPO = siteConfig('COMMENT_GISCUS_REPO')
  const COMMENT_CUSDIS_APP_ID = siteConfig('COMMENT_CUSDIS_APP_ID')
  const COMMENT_UTTERRANCES_REPO = siteConfig('COMMENT_UTTERRANCES_REPO')
  const COMMENT_GITALK_CLIENT_ID = siteConfig('COMMENT_GITALK_CLIENT_ID')
  const COMMENT_WEBMENTION_ENABLE = siteConfig('COMMENT_WEBMENTION_ENABLE')

  useEffect(() => {
    // Check if the component is visible in the viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.unobserve(entry.target)
        }
      })
    })

    if (commentRef.current) {
      observer.observe(commentRef.current)
    }

    return () => {
      if (commentRef.current) {
        observer.unobserve(commentRef.current)
      }
    }
  }, [frontMatter])

  // 当连接中有特殊参数时跳转到评论区
  if (
    isBrowser &&
    ('giscus' in router.query || router.query.target === 'comment')
  ) {
    setTimeout(() => {
      const url = router.asPath.replace('?target=comment', '')
      history.replaceState({}, '', url)
      document
        ?.getElementById('comment')
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }, 1000)
  }

  if (!frontMatter) {
    return null
  }

  if (isSearchEngineBot) {
    return null
  }

  // 特定文章关闭评论区
  if (frontMatter?.comment === 'Hide') {
    return null
  }

  return (
    <div
      key={frontMatter?.id}
      id='comment'
      ref={commentRef}
      className={`comment mt-5 text-gray-800 dark:text-gray-300 ${className || ''}`}>
      {/* 延迟加载评论区 */}
      {!shouldLoad && (
        <div className='text-center'>
          Loading...
          <i className='fas fa-spinner animate-spin text-3xl ' />
        </div>
      )}

      {shouldLoad && (
        <Tabs>
          {COMMENT_ARTALK_SERVER && (
            <div key='Artalk'>
              <Artalk />
            </div>
          )}

          {COMMENT_TWIKOO_ENV_ID && (
            <div key='Twikoo'>
              <TwikooCompenent />
            </div>
          )}

          {COMMENT_WALINE_SERVER_URL && (
            <div key='Waline'>
              <WalineComponent />
            </div>
          )}

          {COMMENT_VALINE_APP_ID && (
            <div key='Valine' name='reply'>
              <ValineComponent path={frontMatter.id} />
            </div>
          )}

          {COMMENT_GISCUS_REPO && (
            <div key='Giscus'>
              <GiscusComponent className='px-2' />
            </div>
          )}

          {COMMENT_CUSDIS_APP_ID && (
            <div key='Cusdis'>
              <CusdisComponent frontMatter={frontMatter} />
            </div>
          )}

          {COMMENT_UTTERRANCES_REPO && (
            <div key='Utterance'>
              <UtterancesComponent
                issueTerm={frontMatter.id}
                className='px-2'
              />
            </div>
          )}

          {COMMENT_GITALK_CLIENT_ID && (
            <div key='GitTalk'>
              <GitalkComponent frontMatter={frontMatter} />
            </div>
          )}

          {COMMENT_WEBMENTION_ENABLE && (
            <div key='WebMention'>
              <WebMentionComponent frontMatter={frontMatter} className='px-2' />
            </div>
          )}
        </Tabs>
      )}
    </div>
  )
}
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

const WalineComponent = dynamic(
  () => {
    return import('@/components/WalineComponent')
  },
  { ssr: false }
)

const CusdisComponent = dynamic(
  () => {
    return import('@/components/CusdisComponent')
  },
  { ssr: false }
)

const TwikooCompenent = dynamic(
  () => {
    return import('@/components/Twikoo')
  },
  { ssr: false }
)

const GitalkComponent = dynamic(
  () => {
    return import('@/components/Gitalk')
  },
  { ssr: false }
)
const UtterancesComponent = dynamic(
  () => {
    return import('@/components/Utterances')
  },
  { ssr: false }
)
const GiscusComponent = dynamic(
  () => {
    return import('@/components/Giscus')
  },
  { ssr: false }
)
const WebMentionComponent = dynamic(
  () => {
    return import('@/components/WebMention')
  },
  { ssr: false }
)

const ValineComponent = dynamic(() => import('@/components/ValineComponent'), {
  ssr: false
})

<<<<<<< HEAD
/**
 * 是否有评论
 */
export const commentEnable = BLOG.COMMENT_TWIKOO_ENV_ID || BLOG.COMMENT_WALINE_SERVER_URL || BLOG.COMMENT_VALINE_APP_ID ||
BLOG.COMMENT_GISCUS_REPO || BLOG.COMMENT_CUSDIS_APP_ID || BLOG.COMMENT_UTTERRANCES_REPO ||
 BLOG.COMMENT_GITALK_CLIENT_ID || BLOG.COMMENT_WEBMENTION.ENABLE

/**
 * 评论组件
 * @param {*} param0
 * @returns
 */
const Comment = ({ siteInfo, frontMatter, className }) => {
  const router = useRouter()

  if (isBrowser && ('giscus' in router.query || router.query.target === 'comment')) {
    setTimeout(() => {
      const url = router.asPath.replace('?target=comment', '')
      history.replaceState({}, '', url)
      document?.getElementById('comment')?.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }, 1000)
  }

  if (!frontMatter) {
    return <>Loading...</>
  }

  return (
    <div key={frontMatter?.id} id='comment' className={`comment mt-5 text-gray-800 dark:text-gray-300 ${className || ''}`}>
        <Tabs>
             {BLOG.COMMENT_ARTALK_SERVER && (<div key='Artalk'>
                <Artalk siteInfo={siteInfo} />
            </div>)}

            {BLOG.COMMENT_TWIKOO_ENV_ID && (<div key='Twikoo'>
                <TwikooCompenent />
            </div>)}

            {BLOG.COMMENT_WALINE_SERVER_URL && (<div key='Waline'>
                <WalineComponent />
            </div>)}

            {BLOG.COMMENT_VALINE_APP_ID && (<div key='Valine' name='reply'>
                <ValineComponent path={frontMatter.id} />
            </div>)}

            {BLOG.COMMENT_GISCUS_REPO && (
                <div key="Giscus">
                    <GiscusComponent className="px-2" />
                </div>
            )}

            {BLOG.COMMENT_CUSDIS_APP_ID && (<div key='Cusdis'>
                <CusdisComponent frontMatter={frontMatter} />
            </div>)}

            {BLOG.COMMENT_UTTERRANCES_REPO && (<div key='Utterance'>
                <UtterancesComponent issueTerm={frontMatter.id} className='px-2' />
            </div>)}

            {BLOG.COMMENT_GITALK_CLIENT_ID && (<div key='GitTalk'>
                <GitalkComponent frontMatter={frontMatter} />
            </div>)}

            {BLOG.COMMENT_WEBMENTION.ENABLE && (<div key='WebMention'>
                <WebMentionComponent frontMatter={frontMatter} className="px-2" />
            </div>)}
        </Tabs>
    </div>
  )
}

=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
export default Comment
