<<<<<<< HEAD
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import DarkModeButton from '@/components/DarkModeButton'

=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
=======
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import DarkModeButton from '@/components/DarkModeButton'

<<<<<<< HEAD
export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()
=======
>>>>>>> tangly1024-main
/**
 * 页脚
 * @param {*} props
 * @returns
 */
export default function Footer(props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

  return (
    <footer className='relative w-full bg-black px-6 border-t'>
      <DarkModeButton className='text-center pt-4' />

<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="text-yellow-300 container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm">
            <div className='text-center'> &copy;{`${copyrightDate}`} {BLOG.AUTHOR}. All rights reserved.</div>
            <div className="md:p-0 text-center md:text-right text-xs">
                {/* 右侧链接 */}
                {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
                {BLOG.BEI_AN && (<a href="https://beian.miit.gov.cn/" className="text-black dark:text-gray-200 no-underline hover:underline ml-4">{BLOG.BEI_AN} </a>)}
                <span className='no-underline ml-4'>
                    Powered by
                    <a href="https://github.com/tangly1024/NotionNext" className=' hover:underline'> NotionNext {BLOG.VERSION}  </a>
                </span>
            </div>
=======
>>>>>>> tangly1024-main
      <div className='text-yellow-300 container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm'>
        <div className='text-center'>
          &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights
          reserved.
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
        </div>
        <div className='md:p-0 text-center md:text-right text-xs'>
          {/* 右侧链接 */}
          {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
          {siteConfig('BEI_AN') && (
            <a
              href={siteConfig('BEI_AN_LINK')}
              className='no-underline hover:underline ml-4'>
              {siteConfig('BEI_AN')}
            </a>
          )}
          <BeiAnGongAn />
          <span className='no-underline ml-4'>
            Powered by
            <a
              href='https://github.com/tangly1024/NotionNext'
              className=' hover:underline'>
              NotionNext {siteConfig('VERSION')}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
