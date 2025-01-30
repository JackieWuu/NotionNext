import BLOG from '@/blog.config'
import Link from 'next/link'
<<<<<<< HEAD
import React from 'react'

=======
/**
 * Logo
 * 实际值支持文字
 * @param {*} props
 * @returns
 */
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
const Logo = props => {
  const { siteInfo } = props
  return (
    <Link href='/' passHref legacyBehavior>
      <div className='flex flex-col justify-center items-center cursor-pointer space-y-3'>
<<<<<<< HEAD
        <div className='font-medium text-lg p-1.5 rounded dark:border-white menu-link transform duration-200'> {siteInfo?.title || BLOG.TITLE}</div>
=======
        <div className='font-medium text-lg p-1.5 rounded dark:border-white dark:text-white menu-link transform duration-200'>
          {' '}
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
      </div>
    </Link>
  )
}
export default Logo
