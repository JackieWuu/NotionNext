<<<<<<< HEAD
import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return <footer className="z-10 relative w-full bg-white px-6 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray ">
        <DarkModeButton className='text-center pt-4'/>

        <div className="container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm">
            <div className='text-center'> &copy;{`${copyrightDate}`} {BLOG.AUTHOR}. All rights reserved.</div>
            <div className="md:p-0 text-center md:text-right text-xs">
                {/* 右侧链接 */}
                {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
                {BLOG.BEI_AN && (<a href="https://beian.miit.gov.cn/" className="text-black dark:text-gray-200 no-underline hover:underline ml-4">{BLOG.BEI_AN} </a>)}
                <span className='dark:text-gray-200 no-underline ml-4'>
                    Powered by
                    <a href="https://github.com/tangly1024/NotionNext" className=' hover:underline'> NotionNext {BLOG.VERSION}  </a>
                </span>
            </div>
=======
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import CopyRightDate from '@/components/CopyRightDate'
import DarkModeButton from '@/components/DarkModeButton'
import PoweredBy from '@/components/PoweredBy'

export const Footer = props => {
  return (
    <footer className='z-10 relative w-full bg-white px-6 space-y-1 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray '>
      <DarkModeButton className='text-center pt-4' />

      <div className='container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm'>
        <CopyRightDate />
        <div className='md:p-0 text-center md:text-right text-xs'>
          {/* 右侧链接 */}
          {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
          <div className='flex flex-wrap'>
            {' '}
            <BeiAnSite />
            <BeiAnGongAn />
          </div>
          <PoweredBy />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
        </div>
      </div>
    </footer>
  )
}
