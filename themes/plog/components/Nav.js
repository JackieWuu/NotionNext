<<<<<<< HEAD
import { useRef, useState } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { SvgIcon } from './SvgIcon'
import { MenuItemDrop } from './MenuItemDrop'
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import Collapse from '@/components/Collapse'
import LazyImage from '@/components/LazyImage'
<<<<<<< HEAD
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRef, useState } from 'react'
import CONFIG from '../config'
import { MenuItemCollapse } from './MenuItemCollapse'
import { MenuItemDrop } from './MenuItemDrop'
import { SvgIcon } from './SvgIcon'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

const Header = props => {
  const { fullWidth, siteInfo } = props

  const title = siteInfo?.title

<<<<<<< HEAD
  return <div className='md:hidden fixed top-0 w-full z-20'>
        <div id="sticky-nav"
            className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8  glassmorphism ${!fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
                }`} >
                <Link href="/" aria-label={BLOG.title} className="flex items-center">
                    <>
                        <div className="h-6 w-6">
                            {/* <SvgIcon/> */}
                            {CONFIG.NAV_NOTION_ICON
                              ? <LazyImage src={siteInfo?.icon} width={24} height={24} alt={BLOG.AUTHOR} />
                              : <SvgIcon />}

                        </div>
                        <p className="ml-2 font-medium text-gray-800 dark:text-gray-300 header-name">
                            {title}  {/* ,{' '}<span className="font-normal">{siteInfo?.description}</span> */}
                        </p>
                    </>
                </Link>

            <NavBar {...props} />
        </div>
=======
  return (
    <div className='md:hidden fixed top-0 w-full z-20'>
      <div
        id='sticky-nav'
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8  glassmorphism ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}>
        <Link
          href='/'
          aria-label={siteConfig('title')}
          className='flex items-center'>
          <>
            <div className='h-6 w-6'>
              {/* <SvgIcon/> */}
              {siteConfig('NOBELIUM_NAV_NOTION_ICON', null, CONFIG) ? (
                <LazyImage
                  src={siteInfo?.icon}
                  width={24}
                  height={24}
                  alt={siteConfig('AUTHOR')}
                />
              ) : (
                <SvgIcon />
              )}
            </div>
            <p className='ml-2 font-medium text-gray-800 dark:text-gray-300 header-name'>
              {title}{' '}
              {/* ,{' '}<span className="font-normal">{siteConfig('HOME_BANNER_IMAGE')}</span> */}
            </p>
          </>
        </Link>

        <NavBar {...props} />
      </div>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    </div>
  )
}

const NavBar = props => {
  const { customMenu, customNav } = props
  const [isOpen, changeOpen] = useState(false)
  const toggleOpen = () => {
    changeOpen(!isOpen)
  }
  const collapseRef = useRef(null)

  const { locale } = useGlobal()
  let links = [
<<<<<<< HEAD
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: BLOG.ENABLE_RSS && CONFIG.MENU_RSS, target: '_blank' },
    { icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: CONFIG.MENU_SEARCH },
    { icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: CONFIG.MENU_ARCHIVE },
    { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG.MENU_CATEGORY },
    { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: CONFIG.MENU_TAG }
=======
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
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
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
        <div className="flex-shrink-0">
            <ul className=" hidden md:flex flex-row">
                {links?.map(link => <MenuItemDrop key={link?.id} link={link} />)}
            </ul>
            <div className='md:hidden'><i onClick={toggleOpen} className='fas fa-bars cursor-pointer px-5 block md:hidden'></i>
                <Collapse collapseRef={collapseRef} isOpen={isOpen} type='vertical' className='fixed top-16 right-6'>
                    <div className='dark:border-black bg-white dark:bg-black rounded border p-2 text-sm'>
                        {links?.map(link => <MenuItemCollapse key={link?.id} link={link} onHeightChange={(param) => collapseRef.current?.updateCollapseHeight(param)} />)}
                    </div>
                </Collapse>
            </div>
        </div>
=======
    <div className='flex-shrink-0'>
      <ul className=' hidden md:flex flex-row'>
        {links?.map((link, index) => (
          <MenuItemDrop key={index} link={link} />
        ))}
      </ul>
      <div className='md:hidden'>
        <i
          onClick={toggleOpen}
          className='fas fa-bars cursor-pointer px-5 block md:hidden'></i>
        <Collapse
          collapseRef={collapseRef}
          isOpen={isOpen}
          type='vertical'
          className='fixed top-16 right-6'>
          <div className='dark:border-black bg-white dark:bg-black rounded border p-2 text-sm'>
            {links?.map((link, index) => (
              <MenuItemCollapse
                key={index}
                link={link}
                onHeightChange={param =>
                  collapseRef.current?.updateCollapseHeight(param)
                }
              />
            ))}
          </div>
        </Collapse>
      </div>
    </div>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  )
}

export default Header
