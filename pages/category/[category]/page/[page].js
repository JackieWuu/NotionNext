import BLOG from '@/blog.config'
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'
=======
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

/**
 * 分类页
 * @param {*} props
 * @returns
 */

export default function Category(props) {
<<<<<<< HEAD
  const { siteInfo } = props
  const { locale } = useGlobal()
  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

  const meta = {
    title: `${props.category} | ${locale.COMMON.CATEGORY} | ${
      siteInfo?.title || ''
    }`,
    description: siteInfo?.description,
    slug: 'category/' + props.category,
    image: siteInfo?.pageCover,
    type: 'website'
  }

  props = { ...props, meta }

  return <Layout {...props} />
=======
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPostList' {...props} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}

export async function getStaticProps({ params: { category, page } }) {
  const from = 'category-page-props'
  let props = await getGlobalData({ from })

  // 过滤状态类型
  props.posts = props.allPages
    ?.filter(page => page.type === 'Post' && page.status === 'Published')
    .filter(post => post && post.category && post.category.includes(category))
  // 处理文章页数
  props.postCount = props.posts.length
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
  // 处理分页
  props.posts = props.posts.slice(
    POSTS_PER_PAGE * (page - 1),
    POSTS_PER_PAGE * page
  )

  delete props.allPages
  props.page = page

  props = { ...props, category, page }

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

export async function getStaticPaths() {
  const from = 'category-paths'
  const { categoryOptions, allPages, NOTION_CONFIG } = await getGlobalData({
    from
  })
  const paths = []

  categoryOptions?.forEach(category => {
    // 过滤状态类型
    const categoryPosts = allPages
      ?.filter(page => page.type === 'Post' && page.status === 'Published')
      .filter(
        post => post && post.category && post.category.includes(category.name)
      )
    // 处理文章页数
    const postCount = categoryPosts.length
    const totalPages = Math.ceil(
      postCount / siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
    )
    if (totalPages > 1) {
      for (let i = 1; i <= totalPages; i++) {
        paths.push({ params: { category: category.name, page: '' + i } })
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}
