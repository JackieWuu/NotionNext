<<<<<<< HEAD
import React from 'react'
import BLOG from '@/blog.config'

const Footer = ({ siteInfo }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function () {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()
=======
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
/**
 * 站点也叫
 * @param {*} param0
 * @returns
 */
const Footer = ({ siteInfo }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

  return (
    <footer className='z-20 border p-2 rounded-lg bg:white dark:border-black dark:bg-hexo-black-gray justify-center text-center w-full text-sm relative'>
      <SocialButton />

<<<<<<< HEAD
            <div className='flex justify-center'>
                <div><i className='mx-1 animate-pulse fas fa-heart' /> <a href={BLOG.LINK} className='underline font-bold text-gray-500 dark:text-gray-300 '>{BLOG.AUTHOR}</a>.<br /></div>
                © {`${copyrightDate}`}
            </div>
=======
      <div className='flex justify-center'>
        <div>
          <i className='mx-1 animate-pulse fas fa-heart' />{' '}
          <a
            href={siteConfig('LINK')}
            className='underline font-bold text-gray-500 dark:text-gray-300 '>
            {siteConfig('AUTHOR')}
          </a>
          .<br />
        </div>
        © {`${copyrightDate}`}
      </div>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

      {siteConfig('BEI_AN') && (
        <>
          <i className='fas fa-shield-alt' />{' '}
          <a href='https://beian.miit.gov.cn/' className='mr-2'>
            {siteConfig('BEI_AN')}
          </a>
          <BeiAnGongAn />
          <br />
        </>
      )}

<<<<<<< HEAD
            {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a><br /></>}

            <span className='hidden busuanzi_container_site_pv'>
                <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
            <span className='pl-2 hidden busuanzi_container_site_uv'>
                <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
            <h1 className='pt-1'>{siteInfo?.title}</h1>

        </footer>
=======
      <span className='hidden busuanzi_container_site_pv'>
        <i className='fas fa-eye' />
        <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
      </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users' />{' '}
        <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
      </span>
      <div className='text-xs font-serif'>
        Powered By{' '}
        <a
          href='https://github.com/tangly1024/NotionNext'
          className='underline text-gray-500 dark:text-gray-300'>
          NotionNext {siteConfig('VERSION')}
        </a>
      </div>
      {/* SEO title */}
      <h1 className='pt-1 hidden'>{siteConfig('TITLE')}</h1>
    </footer>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  )
}

export default Footer
