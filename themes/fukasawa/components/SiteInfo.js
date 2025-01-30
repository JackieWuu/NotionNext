<<<<<<< HEAD
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'
=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
=======
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

function SiteInfo({ title }) {
  const d = new Date()
  const currentYear = d.getFullYear()
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
        <footer
            className='relative leading-6 justify-start w-full text-gray-600 dark:text-gray-300 text-xs font-sans'
        >
            <span> © {`${copyrightDate}`} <span> <a href={BLOG.LINK}> <i className='mx-1 animate-pulse fas fa-heart'/> {BLOG.AUTHOR}</a>. <br /></span>

            {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a><br/></>}

            <span className='hidden busuanzi_container_site_pv'> <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
            <span className='pl-2 hidden busuanzi_container_site_uv'> <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
            <br />
            <span className='text-xs font-serif'> Powered by <a href='https://github.com/tangly1024/NotionNext' className='underline'>NotionNext {BLOG.VERSION}</a></span><br /></span>
            <h1>{title}</h1>
        </footer>
=======
>>>>>>> tangly1024-main
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative leading-6 justify-start w-full text-gray-600 dark:text-gray-300 text-xs '>
      <span>
        © {`${copyrightDate}`}
        <span>
          <a href={siteConfig('LINK')}>
            <i className='mx-1 animate-pulse fas fa-heart' />
            {siteConfig('AUTHOR')}
          </a>
          . <br />
        </span>
        {siteConfig('BEI_AN') && (
          <>
            <i className='fas fa-shield-alt' />
            <a href='https://beian.miit.gov.cn/' className='mr-2'>
              {siteConfig('BEI_AN')}
            </a>
            <br />
          </>
        )}
        <BeiAnGongAn />
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-eye' />
          <span className='px-1 busuanzi_value_site_pv'> </span>
        </span>
        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users' />
          <span className='px-1 busuanzi_value_site_uv'> </span>
        </span>
        <br />
        <span className='text-xs font-serif'>
          Powered by
          <a
            href='https://github.com/tangly1024/NotionNext'
            className='underline'>
            NotionNext {siteConfig('VERSION')}
          </a>
        </span>
        <br />
      </span>
      <h1>{title}</h1>
    </footer>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  )
}
export default SiteInfo
