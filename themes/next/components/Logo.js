<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
=======
<<<<<<< HEAD
import Link from 'next/link'
import React from 'react'
=======
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

const Logo = props => {
  const { siteInfo, className } = props
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <Link href='/' passHref legacyBehavior>
            <div className={'flex flex-col justify-center items-center cursor-pointer bg-black dark:bg-gray-800 space-y-3 font-bold ' + className}>
                <div data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className='font-serif text-xl text-white'> {siteInfo?.title}</div>
                <div data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className='text-sm text-gray-300 font-light text-center'> {siteInfo?.description}</div>
            </div>
        </Link>
=======
>>>>>>> tangly1024-main
    <Link href='/' passHref legacyBehavior>
      <div
        className={
          'flex flex-col justify-center items-center cursor-pointer bg-black dark:bg-gray-800 space-y-3 font-bold ' +
          className
        }>
        <div
          data-aos='fade-down'
          data-aos-duration='500'
          data-aos-once='true'
          data-aos-anchor-placement='top-bottom'
          className='font-serif text-xl text-white logo'>
          {' '}
          {siteConfig('TITLE')}
        </div>
        <div
          data-aos='fade-down'
          data-aos-duration='500'
          data-aos-delay='300'
          data-aos-once='true'
          data-aos-anchor-placement='top-bottom'
          className='text-sm text-gray-300 font-light text-center'>
          {' '}
          {siteConfig('DESCRIPTION')}
        </div>
      </div>
    </Link>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  )
}
export default Logo
