<<<<<<< HEAD
import React from 'react'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { MenuItemDrop } from './MenuItemDrop'
import BLOG from '@/blog.config'

export const MenuListTop = (props) => {
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { MenuItemDrop } from './MenuItemDrop'
/**
 * 菜单列表
 * 顶部导航栏用
 * @param {*} props
 * @returns
 */
export const MenuListTop = props => {
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
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
      show: siteConfig('MATERY_MENU_ARCHIVE', null, CONFIG)
    },
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('MATERY_MENU_SEARCH', null, CONFIG)
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('MATERY_MENU_CATEGORY', null, CONFIG)
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('MATERY_MENU_TAG', null, CONFIG)
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
    <nav id='nav' className='leading-8 flex justify-center  font-light w-full'>
<<<<<<< HEAD
      {links?.map(link => <MenuItemDrop key={link?.id} link={link}/>)}
=======
      {links?.map((link, index) => (
        <MenuItemDrop key={index} link={link} />
      ))}
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    </nav>
  )
}
