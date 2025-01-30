import BLOG from '@/blog.config'
<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
=======
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'
=======
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

/**
 * 分类首页
 * @param {*} props
 * @returns
 */
export default function Category(props) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { locale } = useGlobal()
  const { siteInfo } = props

  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

  const meta = {
    title: `${locale.COMMON.CATEGORY} | ${siteInfo?.title}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: 'category',
    type: 'website'
  }
  props = { ...props, meta }

  return <Layout {...props} />
=======
>>>>>>> tangly1024-main
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return (
    <DynamicLayout theme={theme} layoutName='LayoutCategoryIndex' {...props} />
  )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}

export async function getStaticProps({ locale }) {
  const props = await getGlobalData({ from: 'category-index-props', locale })
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
