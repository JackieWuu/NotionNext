<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { SvgIcon } from './SvgIcon'
import { MenuItemDrop } from './MenuItemDrop'
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import Collapse from '@/components/Collapse'
import DarkModeButton from '@/components/DarkModeButton'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import { MenuItemCollapse } from './MenuItemCollapse'
import { MenuItemDrop } from './MenuItemDrop'
import RandomPostButton from './RandomPostButton'
import SearchButton from './SearchButton'
<<<<<<< HEAD

const Nav = props => {
  const { navBarTitle, fullWidth, siteInfo } = props
  const useSticky = !BLOG.autoCollapsedNavBar
=======
import { SvgIcon } from './SvgIcon'
/**
 * 顶部导航
 */
const Nav = props => {
  const { post, fullWidth, siteInfo } = props
  const autoCollapseNavBar = siteConfig(
    'NOBELIUM_AUTO_COLLAPSE_NAV_BAR',
    true,
    CONFIG
  )

>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && autoCollapseNavBar) {
      if (!entry?.isIntersecting) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    return () => {
      if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    }
  }, [sentinalRef])
<<<<<<< HEAD
  return <>
        <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
        <div
            className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${!fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
                }`}
            id="sticky-nav"
            ref={navRef}
        >
            <div className="flex items-center">
                <Link href="/" aria-label={BLOG.title}>

                    <div className="h-6 w-6">
                        {/* <SvgIcon/> */}
                        {CONFIG.NAV_NOTION_ICON
                          ? <LazyImage src={siteInfo?.icon} width={24} height={24} alt={BLOG.AUTHOR} />
                          : <SvgIcon />}

                    </div>

                </Link>
                {navBarTitle
                  ? (
                        <p className="ml-2 font-medium text-gray-800 dark:text-gray-300 header-name">
                            {navBarTitle}
                        </p>
                    )
                  : (
                        <p className="ml-2 font-medium text-gray-800 dark:text-gray-300 header-name">
                            {siteInfo?.title}
                            {/* ,{' '}<span className="font-normal">{siteInfo?.description}</span> */}
                        </p>
                    )}
=======
  return (
    <>
      <div className='observer-element h-4 md:h-12' ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id='sticky-nav'
        ref={navRef}>
        <div className='flex items-center'>
          <Link href='/' aria-label={siteConfig('TITLE')}>
            <div className='h-6 w-6'>
              {/* <SvgIcon/> */}
              {siteConfig('NOBELIUM_NAV_NOTION_ICON') ? (
                <LazyImage
                  src={siteInfo?.icon}
                  width={24}
                  height={24}
                  alt={siteConfig('AUTHOR')}
                />
              ) : (
                <SvgIcon />
              )}
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
            </div>
          </Link>
          {post ? (
            <p className='ml-2 max-h-12 line-clamp-2 overflow-ellipsis font-medium text-gray-800 dark:text-gray-300 header-name'>
              {post?.title}
            </p>
          ) : (
            <p className='logo line-clamp-1 overflow-ellipsis ml-2 font-medium text-gray-800 dark:text-gray-300 header-name whitespace-nowrap'>
              {siteConfig('TITLE')}
              {/* ,{' '}<span className="font-normal">{siteConfig('DESCRIPTION')}</span> */}
            </p>
          )}
        </div>
        <NavBar {...props} />
      </div>
    </>
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
      show: siteConfig('ENABLE_RSS') && siteConfig('NOBELIUM_MENU_RSS'),
      target: '_blank'
    },
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('NOBELIUM_MENU_SEARCH')
    },
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('NOBELIUM_MENU_ARCHIVE')
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('NOBELIUM_MENU_CATEGORY')
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('NOBELIUM_MENU_TAG')
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
        <div className="flex-shrink-0 flex">
            <ul className="hidden md:flex flex-row">
                {links?.map(link => <MenuItemDrop key={link?.id} link={link} />)}
            </ul>
            <div className='md:hidden'>
                <Collapse collapseRef={collapseRef} isOpen={isOpen} type='vertical' className='fixed top-16 right-6'>
                    <div className='dark:border-black bg-white dark:bg-black rounded border p-2 text-sm'>
                        {links?.map(link => <MenuItemCollapse key={link?.id} link={link} onHeightChange={(param) => collapseRef.current?.updateCollapseHeight(param)}/>)}
                    </div>
                </Collapse>
            </div>

            {JSON.parse(CONFIG.MENU_RANDOM_POST) && <RandomPostButton {...props} />}
            {JSON.parse(CONFIG.MENU_SEARCH_BUTTON) && <SearchButton {...props}/>}
            <i onClick={toggleOpen} className='fas fa-bars cursor-pointer px-5 flex justify-center items-center md:hidden'></i>
        </div>
=======
    <div className='flex-shrink-0 flex'>
      <ul className='hidden md:flex flex-row'>
        {links?.map((link, index) => (
          <MenuItemDrop key={index} link={link} />
        ))}
      </ul>
      <div className='md:hidden'>
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

      {siteConfig('NOBELIUM_MENU_DARKMODE_BUTTON') && (
        <DarkModeButton className='text-center p-2.5 hover:bg-black hover:bg-opacity-10 rounded-full' />
      )}

      {siteConfig('NOBELIUM_MENU_RANDOM_POST') && (
        <RandomPostButton {...props} />
      )}
      {siteConfig('NOBELIUM_MENU_SEARCH_BUTTON') && <SearchButton {...props} />}
      <i
        onClick={toggleOpen}
        className='fas fa-bars cursor-pointer px-5 flex justify-center items-center md:hidden'></i>
    </div>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  )
}

export default Nav

/**
 *
                    {!JSON.parse(BLOG.THEME_SWITCH) && <div className='hidden md:block'><DarkModeButton {...props} /></div>}
                    <ReadingProgress />

 */
