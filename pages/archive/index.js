import BLOG from '@/blog.config'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { getLayoutByTheme } from '@/themes/theme'
import { isBrowser } from '@/lib/utils'
import { formatDateFmt } from '@/lib/formatDate'
=======
>>>>>>> tangly1024-main
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { isBrowser } from '@/lib/utils'
import { formatDateFmt } from '@/lib/utils/formatDate'
import { DynamicLayout } from '@/themes/theme'
import { useEffect } from 'react'
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

/**
 * 归档首页
 * @param {*} props
 * @returns
 */
const ArchiveIndex = props => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { siteInfo } = props
  const { locale } = useGlobal()

  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme(useRouter())

=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  useEffect(() => {
    if (isBrowser) {
      const anchor = window.location.hash
      if (anchor) {
        setTimeout(() => {
          const anchorElement = document.getElementById(anchor.substring(1))
          if (anchorElement) {
            anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
          }
        }, 300)
      }
    }
  }, [])

<<<<<<< HEAD
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutArchive' {...props} />
=======
<<<<<<< HEAD
  const meta = {
    title: `${locale.NAV.ARCHIVE} | ${siteInfo?.title}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: 'archive',
    type: 'website'
  }

  props = { ...props, meta }

  return <Layout {...props} />
=======
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutArchive' {...props} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}

export async function getStaticProps({ locale }) {
  const props = await getGlobalData({ from: 'archive-index', locale })
  // 处理分页
  props.posts = props.allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
  delete props.allPages

  const postsSortByDate = Object.create(props.posts)

  postsSortByDate.sort((a, b) => {
    return b?.publishDate - a?.publishDate
  })

  const archivePosts = {}

  postsSortByDate.forEach(post => {
    const date = formatDateFmt(post.publishDate, 'yyyy-MM')
    if (archivePosts[date]) {
      archivePosts[date].push(post)
    } else {
      archivePosts[date] = [post]
    }
  })

  props.archivePosts = archivePosts
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

export default ArchiveIndex
