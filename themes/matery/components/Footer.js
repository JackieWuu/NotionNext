<<<<<<< HEAD
import React from 'react'
import BLOG from '@/blog.config'
// import DarkModeButton from '@/components/DarkModeButton'
=======
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
<<<<<<< HEAD
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
=======
  const copyrightDate = (function () {
    if (
      Number.isInteger(siteConfig('SINCE')) &&
      siteConfig('SINCE') < currentYear
    ) {
      return siteConfig('SINCE') + '-' + currentYear
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    }
    return currentYear
  })()

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-indigo-700 text-gray-300 justify-center text-center m-auto w-full leading-6  dark:text-gray-100 text-sm p-6'>
      {/* <DarkModeButton/> */}
<<<<<<< HEAD

      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={BLOG.LINK} className='underline font-bold  dark:text-gray-300 '>{BLOG.AUTHOR}</a>.<br/>

      {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a><br/></>}

      <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye'/><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users'/> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
        <br/>
        <h1>{title}</h1>
        <span className='text-xs '>Powered by <a href='https://github.com/tangly1024/NotionNext' className='underline dark:text-gray-300'>NotionNext {BLOG.VERSION}</a>.</span></span><br/>

=======
      <i className='fas fa-copyright' /> {`${copyrightDate}`}{' '}
      <span>
        <span className='w-5 mx-1 text-center'>
          <i className=' animate-pulse fas fa-heart' />
        </span>{' '}
        <a
          href={siteConfig('LINK')}
          className='underline font-bold  dark:text-gray-300 '>
          {siteConfig('AUTHOR')}
        </a>
        .<br />
        {siteConfig('BEI_AN') && (
          <>
            <i className='fas fa-shield-alt' />{' '}
            <a href='https://beian.miit.gov.cn/' className='mr-2'>
              {siteConfig('BEI_AN')}
            </a>
            <br />
          </>
        )}
        <BeiAnGongAn />
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-eye' />
          <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
        </span>
        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users' />{' '}
          <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
        </span>
        <br />
        <h1>{title}</h1>
        <span className='text-xs '>
          Powered by{' '}
          <a
            href='https://github.com/tangly1024/NotionNext'
            className='underline dark:text-gray-300'>
            NotionNext {siteConfig('VERSION')}
          </a>
          .
        </span>
      </span>
      <br />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    </footer>
  )
}

export default Footer
