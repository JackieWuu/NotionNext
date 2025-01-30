import BLOG from '@/blog.config'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { getPostBlocks } from '@/lib/notion'
import { getGlobalData } from '@/lib/notion/getNotionData'
import { generateRss } from '@/lib/rss'
import { generateRobotsTxt } from '@/lib/robots.txt'
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'
=======
>>>>>>> tangly1024-main
import { siteConfig } from '@/lib/config'
import { getGlobalData, getPostBlocks } from '@/lib/db/getSiteData'
import { generateRobotsTxt } from '@/lib/robots.txt'
import { generateRss } from '@/lib/rss'
import { generateSitemapXml } from '@/lib/sitemap.xml'
import { DynamicLayout } from '@/themes/theme'
import { generateRedirectJson } from '@/lib/redirect'
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

/**
 * 首页布局
 * @param {*} props
 * @returns
 */
const Index = props => {
<<<<<<< HEAD
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutIndex' {...props} />
=======
<<<<<<< HEAD
  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())
  return <Layout {...props} />
=======
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutIndex' {...props} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}

/**
 * SSG 获取数据
 * @returns
 */
export async function getStaticProps(req) {
  const { locale } = req
  const from = 'index'
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const props = await getGlobalData({ from })

  const { siteInfo } = props
  props.posts = props.allPages?.filter(page => page.type === 'Post' && page.status === 'Published')
=======
>>>>>>> tangly1024-main
  const props = await getGlobalData({ from, locale })
  const POST_PREVIEW_LINES = siteConfig(
    'POST_PREVIEW_LINES',
    12,
    props?.NOTION_CONFIG
  )
  props.posts = props.allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

  const meta = {
    title: `${siteInfo?.title} | ${siteInfo?.description}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: '',
    type: 'website'
  }
  // 处理分页
  if (siteConfig('POST_LIST_STYLE') === 'scroll') {
    // 滚动列表默认给前端返回所有数据
  } else if (siteConfig('POST_LIST_STYLE') === 'page') {
    props.posts = props.posts?.slice(
      0,
      siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
    )
  }

  // 预览文章内容
  if (siteConfig('POST_LIST_PREVIEW', false, props?.NOTION_CONFIG)) {
    for (const i in props.posts) {
      const post = props.posts[i]
      if (post.password && post.password !== '') {
        continue
      }
      post.blockMap = await getPostBlocks(post.id, 'slug', POST_PREVIEW_LINES)
    }
  }

  // 生成robotTxt
  generateRobotsTxt(props)
  // 生成Feed订阅
  generateRss(props)
  // 生成
  generateSitemapXml(props)
  if (siteConfig('UUID_REDIRECT', false, props?.NOTION_CONFIG)) {
    // 生成重定向 JSON
    generateRedirectJson(props)
  }

  // 生成全文索引 - 仅在 yarn build 时执行 && process.env.npm_lifecycle_event === 'build'

  delete props.allPages

  return {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    props: {
      meta,
      ...props
    },
    revalidate: parseInt(BLOG.NEXT_REVALIDATE_SECOND)
=======
>>>>>>> tangly1024-main
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
<<<<<<< HEAD
        'NEXT_REVALIDATE_SECOND',
        BLOG.NEXT_REVALIDATE_SECOND,
        props.NOTION_CONFIG
      )
=======
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  }
}

export default Index
