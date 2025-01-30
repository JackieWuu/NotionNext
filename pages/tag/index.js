import BLOG from '@/blog.config'
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'
=======
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
import { useRouter } from 'next/router'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

/**
 * 标签首页
 * @param {*} props
 * @returns
 */
const TagIndex = props => {
<<<<<<< HEAD
  const { locale } = useGlobal()
  const { siteInfo } = props

  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

  const meta = {
    title: `${locale.COMMON.TAGS} | ${siteInfo?.title}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: 'tag',
    type: 'website'
  }
  props = { ...props, meta }

  return <Layout {...props} />
=======
  const router = useRouter()
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutTagIndex' {...props} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}

export async function getStaticProps(req) {
  const { locale } = req

  const from = 'tag-index-props'
  const props = await getGlobalData({ from, locale })
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

export default TagIndex
