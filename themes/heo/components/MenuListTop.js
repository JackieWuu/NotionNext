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
import { MenuItemDrop } from './MenuItemDrop'

export const MenuListTop = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()

  let links = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
    { id: 1, icon: 'fa-solid fa-house', name: locale.NAV.INDEX, to: '/', show: CONFIG.MENU_INDEX },
    { id: 2, icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: CONFIG.MENU_SEARCH },
    { id: 3, icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: CONFIG.MENU_ARCHIVE }
=======
>>>>>>> tangly1024-main
    {
      id: 1,
      icon: 'fa-solid fa-house',
      name: locale.NAV.INDEX,
      href: '/',
      show: siteConfig('HEO_MENU_INDEX', null, CONFIG)
    },
    {
      id: 2,
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('HEO_MENU_SEARCH', null, CONFIG)
    },
    {
      id: 3,
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('HEO_MENU_ARCHIVE', null, CONFIG)
    }
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (BLOG.CUSTOM_MENU) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  return (<>
        <nav id='nav-mobile' className='leading-8 justify-center font-light w-full flex'>
            {links?.map(link => link && link.show && <MenuItemDrop key={link?.id} link={link} />)}
        </nav>
    </>)
=======
>>>>>>> tangly1024-main
  return (
    <>
      <nav
        id='nav-mobile'
        className='leading-8 justify-center font-light w-full flex'>
        {links?.map(
          (link, index) =>
            link && link.show && <MenuItemDrop key={index} link={link} />
        )}
      </nav>
    </>
  )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}
