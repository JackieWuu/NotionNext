<<<<<<< HEAD
import FullScreenButton from '@/components/FullScreenButton'
import { siteConfig } from '@/lib/config'
=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
=======
import FullScreenButton from '@/components/FullScreenButton'
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import InformationButton from './InformationButton'
import LogoBar from './LogoBar'
<<<<<<< HEAD
import { MenuItemDrop } from './MenuItemDrop'
=======
<<<<<<< HEAD
=======
import { MenuItemDrop } from './MenuItemDrop'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

/**
 * 桌面端底部导航
 * @param {*} props
 * @returns
 */
const BottomNav = props => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return <>
        <div id="bottom-nav" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className={'z-20 px-4 hidden glassmorphism md:fixed bottom-0 w-screen py-4 md:flex flex-row justify-between items-center'}>
            {/* 左侧logo文字栏 */}
            <LogoBar {...props}/>
            {/* 右下角菜单栏 */}
            <MenuList {...props} />
        </div>
=======
>>>>>>> tangly1024-main
  return (
    <>
      <div
        id='bottom-nav'
        className={
          'dark:bg-black dark:bg-opacity-50z-20 px-4 hidden glassmorphism md:fixed bottom-0 w-screen py-4 md:flex flex-row justify-between items-center'
        }>
        {/* 左侧logo文字栏 */}
        <LogoBar {...props} />
        {/* 右下角菜单栏 */}
        <MenuList {...props} />
      </div>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    </>
  )
}

/**
 * 菜单
 * @param {*} props
 * @returns
 */
const MenuList = props => {
  const { customMenu, customNav } = props

  const { locale } = useGlobal()
  let links = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: BLOG.ENABLE_RSS && CONFIG.MENU_RSS, target: '_blank' },
    { icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: CONFIG.MENU_SEARCH },
    { icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: CONFIG.MENU_ARCHIVE },
    { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG.MENU_CATEGORY },
    { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: CONFIG.MENU_TAG }
=======
>>>>>>> tangly1024-main
    {
      id: 2,
      name: locale.NAV.RSS,
      href: '/feed',
      show:
        siteConfig('ENABLE_RSS') &&
        siteConfig('NOBELIUM_MENU_RSS', null, CONFIG),
      target: '_blank'
    },
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('NOBELIUM_MENU_SEARCH', null, CONFIG)
    },
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('NOBELIUM_MENU_ARCHIVE', null, CONFIG)
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('NOBELIUM_MENU_CATEGORY', null, CONFIG)
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('NOBELIUM_MENU_TAG', null, CONFIG)
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

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="flex-shrink-0">
            <ul className="hidden md:flex flex-row">
                {links?.map(link => <MenuItemDrop key={link?.id} link={link} />)}
                <li className='my-auto px-2'>
                    <FullScreenButton />
                </li>
                <li className='my-auto px-2'>
                    <InformationButton/>
                </li>
            </ul>
        </div>
=======
>>>>>>> tangly1024-main
    <div className='flex-shrink-0'>
      <ul className='hidden md:flex flex-row'>
        {links?.map((link, index) => (
          <MenuItemDrop key={index} link={link} />
        ))}
        <li className='my-auto px-2'>
          <FullScreenButton />
        </li>
        <li className='my-auto px-2'>
          <InformationButton />
        </li>
      </ul>
    </div>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  )
}

export default BottomNav
