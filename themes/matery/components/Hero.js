// import Image from 'next/image'
<<<<<<< HEAD
import { useEffect, useState } from 'react'
import Typed from 'typed.js'
import CONFIG from '../config'
import { useGlobal } from '@/lib/global'
import BLOG from '@/blog.config'
import LazyImage from '@/components/LazyImage'
=======
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { loadExternalResource } from '@/lib/utils'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

let wrapperTop = 0

/**
 * 首页英雄区
 * 是一张大图，带个居中按钮
 * @returns 头图
 */
const Hero = props => {
  const [typed, changeType] = useState()
  const { siteInfo } = props
  const { locale } = useGlobal()
<<<<<<< HEAD

  useEffect(() => {
    updateHeaderHeight()
    if (!typed && window && document.getElementById('typed')) {
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
  const GREETING_WORDS = siteConfig('GREETING_WORDS').split(',')
  useEffect(() => {
    updateHeaderHeight()
    if (!typed && window && document.getElementById('typed')) {
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
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    }

    window.addEventListener('resize', updateHeaderHeight)
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

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
      className=' w-full h-screen relative bg-black'>
      <div className='text-white absolute flex flex-col h-full items-center justify-center w-full '>
        {/* 站点标题 */}
        <div className='text-4xl md:text-5xl shadow-text'>
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
        {/* 站点欢迎语 */}
        <div className='mt-2 h-12 items-center text-center shadow-text text-white text-lg'>
          <span id='typed' />
        </div>
        {/* 滚动按钮 */}
        <div
          onClick={() => {
            window.scrollTo({ top: wrapperTop, behavior: 'smooth' })
          }}
          className='glassmorphism mt-12 border cursor-pointer w-40 text-center pt-4 pb-3 text-md text-white hover:bg-orange-600 duration-300 rounded-3xl z-40'>
          <i className='animate-bounce fas fa-angle-double-down' />{' '}
          <span>
            {siteConfig('MATERY_SHOW_START_READING', null, CONFIG) &&
              locale.COMMON.START_READING}
          </span>
        </div>
      </div>

<<<<<<< HEAD
            <div className="text-white absolute flex flex-col h-full items-center justify-center w-full ">
                {/* 站点标题 */}
                <div className='text-4xl md:text-5xl shadow-text'>{siteInfo?.title}</div>
                {/* 站点欢迎语 */}
                <div className='mt-2 h-12 items-center text-center shadow-text text-white text-lg'>
                    <span id='typed' />
                </div>
                {/* 滚动按钮 */}
                <div onClick={() => { window.scrollTo({ top: wrapperTop, behavior: 'smooth' }) }}
                    className="mt-12 border cursor-pointer w-40 text-center pt-4 pb-3 text-md text-white hover:bg-orange-600 duration-300 rounded-3xl z-40">
                    <i className='animate-bounce fas fa-angle-double-down' /> <span>{CONFIG.SHOW_START_READING && locale.COMMON.START_READING}</span>
                </div>
            </div>

            <LazyImage priority={true} id='header-cover'src={siteInfo?.pageCover}
                className={`header-cover object-center w-full h-screen object-cover ${CONFIG.HOME_NAV_BACKGROUND_IMG_FIXED ? 'fixed' : ''}`} />

        </header>
=======
      <LazyImage
        priority={true}
        id='header-cover'
        src={siteInfo?.pageCover}
        className={`header-cover object-center w-full h-screen object-cover ${siteConfig('MATERY_HOME_NAV_BACKGROUND_IMG_FIXED', null, CONFIG) ? 'fixed' : ''}`}
      />
    </header>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  )
}

export default Hero
