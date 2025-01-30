import BLOG from '@/blog.config'
import Link from 'next/link'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'

=======
>>>>>>> tangly1024-main
/**
 * Logo
 * 实际值支持文字
 * @param {*} props
 * @returns
 */
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
const Logo = props => {
  const { siteInfo } = props
  return (
    <Link href='/' passHref legacyBehavior>
      <div className='flex flex-col justify-center items-center cursor-pointer space-y-3'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className='font-medium text-lg p-1.5 rounded dark:border-white menu-link transform duration-200'> {siteInfo?.title || BLOG.TITLE}</div>
=======
>>>>>>> tangly1024-main
        <div className='font-medium text-lg p-1.5 rounded dark:border-white dark:text-white menu-link transform duration-200'>
          {' '}
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
      </div>
    </Link>
  )
}
export default Logo
