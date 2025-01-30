import BLOG from '@/blog.config'
import { Home } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
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
  const { siteInfo } = props
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <Link href='/' passHref legacyBehavior>
            <div className='flex flex-nowrap justify-center items-center cursor-pointer font-extrabold'>
                <LazyImage src={siteInfo?.icon} width={24} height={24} alt={BLOG.AUTHOR} className='mr-4 hidden md:block' />
                <div id='logo-text' className='group rounded-2xl flex-none relative'>
                    <div className='group-hover:opacity-0 opacity-100 visible group-hover:invisible text-lg my-auto rounded dark:border-white duration-200'>
                        {siteInfo?.title || BLOG.TITLE}
                    </div>
                    <div className='flex justify-center rounded-2xl group-hover:bg-indigo-600 w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200'>
                        <Home className={'w-6 h-6 stroke-white stroke-2 '}/>
                    </div>
                </div>
            </div>
        </Link>
=======
>>>>>>> tangly1024-main
    <Link href='/' passHref legacyBehavior>
      <div className='flex flex-nowrap items-center cursor-pointer font-extrabold'>
        <LazyImage
          src={siteInfo?.icon}
          width={24}
          height={24}
          alt={siteConfig('AUTHOR')}
          className='mr-4 hidden md:block'
        />
        <div id='logo-text' className='group rounded-2xl flex-none relative'>
          <div className='logo group-hover:opacity-0 opacity-100 visible group-hover:invisible text-lg my-auto rounded dark:border-white duration-200'>
            {siteConfig('TITLE')}
          </div>
          <div className='flex justify-center rounded-2xl group-hover:bg-indigo-600 w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200'>
            <Home className={'w-6 h-6 stroke-white stroke-2 '} />
          </div>
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
