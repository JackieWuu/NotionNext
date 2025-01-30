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
 * 标签下的文章列表
 * @param {*} props
 * @returns
 */
const Tag = props => {
<<<<<<< HEAD
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
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPostList' {...props} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}

export async function getStaticProps({ params: { tag }, locale }) {
  const from = 'tag-props'
  const props = await getGlobalData({ from, locale })

  // 过滤状态
  props.posts = props.allPages
    ?.filter(page => page.type === 'Post' && page.status === 'Published')
    .filter(post => post && post?.tags && post?.tags.includes(tag))

  // 处理文章页数
  props.postCount = props.posts.length

  // 处理分页
  if (siteConfig('POST_LIST_STYLE') === 'scroll') {
    // 滚动列表 给前端返回所有数据
  } else if (siteConfig('POST_LIST_STYLE') === 'page') {
    props.posts = props.posts?.slice(
      0,
      siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
    )
  }

  props.tag = tag
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

/**
 * 获取所有的标签
 * @returns
 * @param tags
 */
function getTagNames(tags) {
  const tagNames = []
  tags.forEach(tag => {
    tagNames.push(tag.name)
  })
  return tagNames
}

export async function getStaticPaths() {
  const from = 'tag-static-path'
  const { tagOptions } = await getGlobalData({ from })
  const tagNames = getTagNames(tagOptions)

  return {
    paths: Object.keys(tagNames).map(index => ({
      params: { tag: tagNames[index] }
    })),
    fallback: true
  }
}

export default Tag
