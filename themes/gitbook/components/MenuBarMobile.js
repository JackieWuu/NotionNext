<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
=======
<<<<<<< HEAD
import React from 'react'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import BLOG from '@/blog.config'
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import { MenuItemCollapse } from './MenuItemCollapse'

export const MenuBarMobile = props => {
  const { customMenu, customNav } = props
  const { locale } = useGlobal()

  let links = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
    // { name: locale.NAV.INDEX, to: '/' || '/', show: true },
    { name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG.MENU_CATEGORY },
    { name: locale.COMMON.TAGS, to: '/tag', show: CONFIG.MENU_TAG },
    { name: locale.NAV.ARCHIVE, to: '/archive', show: CONFIG.MENU_ARCHIVE }
    // { name: locale.NAV.SEARCH, to: '/search', show: CONFIG.MENU_SEARCH }
=======
>>>>>>> tangly1024-main
    // { name: locale.NAV.INDEX, href: '/' || '/', show: true },
    {
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('GITBOOK_MENU_CATEGORY', null, CONFIG)
    },
    {
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('GITBOOK_BOOK_MENU_TAG', null, CONFIG)
    },
    {
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('GITBOOK_MENU_ARCHIVE', null, CONFIG)
    }
    // { name: locale.NAV.SEARCH, href: '/search', show: siteConfig('MENU_SEARCH', null, CONFIG) }
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果 开启自定义菜单，则不再使用 Page生成菜单。
  if (BLOG.CUSTOM_MENU) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <nav id='nav' className=' text-md'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* {links.map(link => <NormalMenu key={link?.id} link={link}/>)} */}
        {links?.map((link, index) => <MenuItemCollapse onHeightChange={props.onHeightChange} key={index} link={link}/>)}

=======
>>>>>>> tangly1024-main
      {links?.map((link, index) => (
        <MenuItemCollapse
          onHeightChange={props.onHeightChange}
          key={index}
          link={link}
        />
      ))}
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    </nav>
  )
}
