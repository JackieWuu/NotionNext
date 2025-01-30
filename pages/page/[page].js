import BLOG from '@/blog.config'
<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
import { getGlobalData, getPostBlocks } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
=======
<<<<<<< HEAD
import { getPostBlocks } from '@/lib/notion'
import { getGlobalData } from '@/lib/notion/getNotionData'
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'
=======
import { siteConfig } from '@/lib/config'
import { getGlobalData, getPostBlocks } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

/**
 * 文章列表分页
 * @param {*} props
 * @returns
 */
const Page = props => {
<<<<<<< HEAD
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPostList' {...props} />
=======
<<<<<<< HEAD
  const { siteInfo } = props

  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

  const meta = {
    title: `${props?.page} | Page | ${siteInfo?.title}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: 'page/' + props.page,
    type: 'website'
  }

  props = { ...props, meta }

  return <Layout {...props} />
=======
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPostList' {...props} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}

export async function getStaticPaths({ locale }) {
  const from = 'page-paths'
  const { postCount, NOTION_CONFIG } = await getGlobalData({ from, locale })
  const totalPages = Math.ceil(
    postCount / siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  )
  return {
    // remove first page, we 're not gonna handle that.
    paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: '' + (i + 2) }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params: { page }, locale }) {
  const from = `page-${page}`
  const props = await getGlobalData({ from, locale })
  const { allPages } = props
  const POST_PREVIEW_LINES = siteConfig(
    'POST_PREVIEW_LINES',
    12,
    props?.NOTION_CONFIG
  )

  const allPosts = allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
  // 处理分页
  props.posts = allPosts.slice(
    POSTS_PER_PAGE * (page - 1),
    POSTS_PER_PAGE * page
  )
  props.page = page

  // 处理预览
  if (siteConfig('POST_LIST_PREVIEW', false, props?.NOTION_CONFIG)) {
    for (const i in props.posts) {
      const post = props.posts[i]
      if (post.password && post.password !== '') {
        continue
      }
      post.blockMap = await getPostBlocks(post.id, 'slug', POST_PREVIEW_LINES)
    }
  }

  delete props.allPages
  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
        'NEXT_REVALIDATE_SECOND',
        BLOG.NEXT_REVALIDATE_SECOND,
        props.NOTION_CONFIG
      )
  }
}

export default Page
