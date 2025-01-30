<<<<<<< HEAD
import { getGlobalData } from '@/lib/notion/getNotionData'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'
=======
import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

/**
 * 404
 * @param {*} props
 * @returns
 */
const NoFound = props => {
<<<<<<< HEAD
  const { siteInfo } = useGlobal()
  const meta = { title: `${props?.siteInfo?.title} | 页面找不到啦`, image: siteInfo?.pageCover }

  props = { ...props, meta }

  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

  return <Layout {...props} />
=======
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='Layout404' {...props} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}

export async function getStaticProps(req) {
  const { locale } = req

  const props = (await getGlobalData({ from: '404', locale })) || {}
  return { props }
}

export default NoFound
