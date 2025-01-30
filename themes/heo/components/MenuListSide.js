<<<<<<< HEAD
import React from 'react'
import { useGlobal } from '@/lib/global'
import BLOG from '@/blog.config'
import { MenuItemCollapse } from './MenuItemCollapse'
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import CONFIG from '../config'
import { MenuItemCollapse } from './MenuItemCollapse'

export const MenuListSide = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()

  let links = [
<<<<<<< HEAD
    { icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: CONFIG.MENU_ARCHIVE },
    { icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: CONFIG.MENU_SEARCH },
    { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG.MENU_CATEGORY },
    { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: CONFIG.MENU_TAG }
=======
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('HEO_MENU_ARCHIVE', null, CONFIG)
    },
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('HEO_MENU_SEARCH', null, CONFIG)
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('HEO_MENU_CATEGORY', null, CONFIG)
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('HEO_MENU_TAG', null, CONFIG)
    }
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  ]

  if (customNav) {
    links = customNav.concat(links)
  }

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (BLOG.CUSTOM_MENU) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
<<<<<<< HEAD
        <nav className='flex-col space-y-2'>
            {/* {links.map(link => <MenuItemNormal key={link?.id} link={link} />)} */}
            {links?.map(link => <MenuItemCollapse key={link?.id} link={link} />)}
        </nav>
=======
    <nav className='flex-col space-y-1'>
      {links?.map((link, index) => (
        <MenuItemCollapse key={index} link={link} />
      ))}
    </nav>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  )
}
