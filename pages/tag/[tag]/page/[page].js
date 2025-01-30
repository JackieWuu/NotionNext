import BLOG from '@/blog.config'
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'

const Tag = props => {
  const { locale } = useGlobal()
  const { tag, siteInfo } = props

  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

  const meta = {
    title: `${tag} | ${locale.COMMON.TAGS} | ${siteInfo?.title}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: 'tag/' + tag,
    type: 'website'
  }
  props = { ...props, meta }

  return <Layout {...props} />
=======
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'

const Tag = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPostList' {...props} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}

export async function getStaticProps({ params: { tag, page }, locale }) {
  const from = 'tag-page-props'
  const props = await getGlobalData({ from, locale })
  // 过滤状态、标签
  props.posts = props.allPages
    ?.filter(page => page.type === 'Post' && page.status === 'Published')
    .filter(post => post && post?.tags && post?.tags.includes(tag))
  // 处理文章数
  props.postCount = props.posts.length
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
  // 处理分页
  props.posts = props.posts.slice(
    POSTS_PER_PAGE * (page - 1),
    POSTS_PER_PAGE * page
  )

  props.tag = tag
  props.page = page
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

export async function getStaticPaths() {
  const from = 'tag-page-static-path'
  const { tagOptions, allPages, NOTION_CONFIG } = await getGlobalData({ from })
  const paths = []
  tagOptions?.forEach(tag => {
    // 过滤状态类型
    const tagPosts = allPages
      ?.filter(page => page.type === 'Post' && page.status === 'Published')
      .filter(post => post && post?.tags && post?.tags.includes(tag.name))
    // 处理文章页数
    const postCount = tagPosts.length
    const totalPages = Math.ceil(
      postCount / siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
    )
    if (totalPages > 1) {
      for (let i = 1; i <= totalPages; i++) {
        paths.push({ params: { tag: tag.name, page: '' + i } })
      }
    }
  })
  return {
    paths: paths,
    fallback: true
  }
}

export default Tag
