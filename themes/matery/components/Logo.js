import BLOG from '@/blog.config'
import Link from 'next/link'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'

=======
>>>>>>> tangly1024-main
/**
 * 站点logo
 * 这里默认只支持纯文字
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
        <div className=' text-lg p-1.5 rounded dark:border-white hover:scale-110 transform duration-200'> {siteInfo?.title || BLOG.TITLE}</div>
=======
>>>>>>> tangly1024-main
        <div className=' text-lg p-1.5 rounded dark:border-white hover:scale-110 transform duration-200'>
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
