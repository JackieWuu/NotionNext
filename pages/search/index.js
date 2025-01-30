import BLOG from '@/blog.config'
<<<<<<< HEAD
import { getLayoutByTheme } from '@/themes/theme'
=======
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
import { useRouter } from 'next/router'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

/**
 * 搜索路由
 * @param {*} props
 * @returns
 */
const Search = props => {
<<<<<<< HEAD
  const { posts, siteInfo } = props
  const { locale } = useGlobal()

  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())
=======
  const { posts } = props
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

  const router = useRouter()
  const keyword = router?.query?.s

  let filteredPosts
  // 静态过滤
  if (keyword) {
    filteredPosts = posts.filter(post => {
      const tagContent = post?.tags ? post?.tags.join(' ') : ''
      const categoryContent = post.category ? post.category.join(' ') : ''
      const searchContent =
        post.title + post.summary + tagContent + categoryContent
      return searchContent.toLowerCase().includes(keyword.toLowerCase())
    })
  } else {
    filteredPosts = []
  }

<<<<<<< HEAD
  const meta = {
    title: `${keyword || ''}${keyword ? ' | ' : ''}${locale.NAV.SEARCH} | ${siteInfo?.title}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: 'search',
    type: 'website'
  }
=======
  props = { ...props, posts: filteredPosts }
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutSearch' {...props} />
}

/**
 * 浏览器前端搜索
 */
export async function getStaticProps({ locale }) {
  const props = await getGlobalData({
    from: 'search-props',
    locale
  })
  const { allPages } = props
  props.posts = allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
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

export default Search
