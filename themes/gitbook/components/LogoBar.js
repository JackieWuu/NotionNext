import BLOG from '@/blog.config'
import LazyImage from '@/components/LazyImage'
<<<<<<< HEAD
import { useGitBookGlobal } from '@/themes/gitbook'
import Link from 'next/link'
=======
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

/**
 * Logo区域
 * @param {*} props
 * @returns
 */
export default function LogoBar(props) {
  const { siteInfo } = props
  return (
<<<<<<< HEAD
        <div id='top-wrapper' className='w-full flex items-center'>
            <div onClick={togglePageNavVisible} className='cursor-pointer md:hidden text-xl pr-3 hover:scale-110 duration-150'>
                <i className={`fa-solid ${pageNavVisible ? 'fa-align-justify' : 'fa-indent'}`}></i>
            </div>
            <Link href='/' className='flex text-md md:text-xl dark:text-gray-200'>
                <LazyImage src={siteInfo?.icon} width={24} height={24} alt={BLOG.AUTHOR} className='mr-2 hidden md:block' />
                {siteInfo?.title}
            </Link>
        </div>
=======
    <div id='logo-wrapper' className='w-full flex items-center mr-2'>
      <Link
        href={`/${siteConfig('GITBOOK_INDEX_PAGE', '', CONFIG)}`}
        className='flex text-lg font-bold md:text-2xl dark:text-gray-200'>
        <LazyImage
          src={siteInfo?.icon}
          width={24}
          height={24}
          alt={siteConfig('AUTHOR')}
          className='mr-2 hidden md:block '
        />
        {siteInfo?.title || siteConfig('TITLE')}
      </Link>
    </div>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  )
}
