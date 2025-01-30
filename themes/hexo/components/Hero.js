// import Image from 'next/image'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useEffect, useState } from 'react'
import Typed from 'typed.js'
import CONFIG from '../config'
import NavButtonGroup from './NavButtonGroup'
import { useGlobal } from '@/lib/global'
import BLOG from '@/blog.config'
import LazyImage from '@/components/LazyImage'
=======
>>>>>>> tangly1024-main
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { loadExternalResource } from '@/lib/utils'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
import NavButtonGroup from './NavButtonGroup'
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

let wrapperTop = 0

/**
 * 顶部全屏大图
 * @returns
 */
const Hero = props => {
  const [typed, changeType] = useState()
  const { siteInfo } = props
  const { locale } = useGlobal()
  const scrollToWrapper = () => {
    window.scrollTo({ top: wrapperTop, behavior: 'smooth' })
  }
<<<<<<< HEAD

  const GREETING_WORDS = siteConfig('GREETING_WORDS').split(',')
=======
<<<<<<< HEAD
=======

  const GREETING_WORDS = siteConfig('GREETING_WORDS').split(',')
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  useEffect(() => {
    updateHeaderHeight()

    if (!typed && window && document.getElementById('typed')) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      changeType(
        new Typed('#typed', {
          strings: BLOG.GREETING_WORDS.split(','),
          typeSpeed: 200,
          backSpeed: 100,
          backDelay: 400,
          showCursor: true,
          smartBackspace: true
        })
      )
=======
>>>>>>> tangly1024-main
      loadExternalResource('/js/typed.min.js', 'js').then(() => {
        if (window.Typed) {
          changeType(
            new window.Typed('#typed', {
              strings: GREETING_WORDS,
              typeSpeed: 200,
              backSpeed: 100,
              backDelay: 400,
              showCursor: true,
              smartBackspace: true
            })
          )
        }
      })
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    }

    window.addEventListener('resize', updateHeaderHeight)
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  })

  function updateHeaderHeight() {
    requestAnimationFrame(() => {
      const wrapperElement = document.getElementById('wrapper')
      wrapperTop = wrapperElement?.offsetTop
    })
  }

  return (
    <header
      id='header'
      style={{ zIndex: 1 }}
      className='w-full h-screen relative bg-black'>
      <div className='text-white absolute bottom-0 flex flex-col h-full items-center justify-center w-full '>
        {/* 站点标题 */}
        <div className='font-black text-4xl md:text-5xl shadow-text'>
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
        {/* 站点欢迎语 */}
        <div className='mt-2 h-12 items-center text-center font-medium shadow-text text-lg'>
          <span id='typed' />
        </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
            <div className="text-white absolute bottom-0 flex flex-col h-full items-center justify-center w-full ">
                {/* 站点标题 */}
                <div className='font-black text-4xl md:text-5xl shadow-text'>{siteInfo?.title}</div>
                {/* 站点欢迎语 */}
                <div className='mt-2 h-12 items-center text-center font-medium shadow-text text-lg'>
                    <span id='typed' />
                </div>

                {/* 首页导航大按钮 */}
                {CONFIG.HOME_NAV_BUTTONS && <NavButtonGroup {...props} />}

                {/* 滚动按钮 */}
                <div onClick={scrollToWrapper} className="z-10 cursor-pointer w-full text-center py-4 text-3xl absolute bottom-10 text-white">
                    <div className="opacity-70 animate-bounce text-xs">{CONFIG.SHOW_START_READING && locale.COMMON.START_READING}</div>
                    <i className='opacity-70 animate-bounce fas fa-angle-down' />
                </div>
            </div>

            <LazyImage id='header-cover' src={siteInfo?.pageCover}
                className={`header-cover w-full h-screen object-cover object-center ${CONFIG.HOME_NAV_BACKGROUND_IMG_FIXED ? 'fixed' : ''}`} />

        </header>
=======
>>>>>>> tangly1024-main
        {/* 首页导航大按钮 */}
        {siteConfig('HEXO_HOME_NAV_BUTTONS', null, CONFIG) && (
          <NavButtonGroup {...props} />
        )}

        {/* 滚动按钮 */}
        <div
          onClick={scrollToWrapper}
          className='z-10 cursor-pointer w-full text-center py-4 text-3xl absolute bottom-10 text-white'>
          <div className='opacity-70 animate-bounce text-xs'>
            {siteConfig('HEXO_SHOW_START_READING', null, CONFIG) &&
              locale.COMMON.START_READING}
          </div>
          <i className='opacity-70 animate-bounce fas fa-angle-down' />
        </div>
      </div>

      <LazyImage
        id='header-cover'
        alt={siteInfo?.title}
        src={siteInfo?.pageCover}
        className={`header-cover w-full h-screen object-cover object-center ${siteConfig('HEXO_HOME_NAV_BACKGROUND_IMG_FIXED', null, CONFIG) ? 'fixed' : ''}`}
      />
    </header>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  )
}

export default Hero
