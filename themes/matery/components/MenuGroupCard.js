<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import { useGlobal } from '@/lib/global'
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import CONFIG from '../config'

const MenuGroupCard = props => {
  const { postCount, categories, tags } = props
  const { locale } = useGlobal()
  const archiveSlot = <div className='text-center'>{postCount}</div>
  const categorySlot = <div className='text-center'>{categories?.length}</div>
  const tagSlot = <div className='text-center'>{tags?.length}</div>

  const links = [
<<<<<<< HEAD
    { name: locale.COMMON.ARTICLE, to: '/archive', slot: archiveSlot, show: CONFIG.MENU_ARCHIVE },
    { name: locale.COMMON.CATEGORY, to: '/category', slot: categorySlot, show: CONFIG.MENU_CATEGORY },
    { name: locale.COMMON.TAGS, to: '/tag', slot: tagSlot, show: CONFIG.MENU_TAG }
=======
    {
      name: locale.COMMON.ARTICLE,
      href: '/archive',
      slot: archiveSlot,
      show: siteConfig('MATERY_MENU_ARCHIVE', null, CONFIG)
    },
    {
      name: locale.COMMON.CATEGORY,
      href: '/category',
      slot: categorySlot,
      show: siteConfig('MATERY_MENU_CATEGORY', null, CONFIG)
    },
    {
      name: locale.COMMON.TAGS,
      href: '/tag',
      slot: tagSlot,
      show: siteConfig('MATERY_MENU_TAG', null, CONFIG)
    }
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  ]

  return (
    <nav id='nav' className='leading-8 flex justify-center   w-full'>
      {links.map(link => {
        if (link.show) {
          return (
            <Link
              key={`${link.href}`}
              title={link.href}
              href={link.href}
              target={link?.target}
              className={
                'py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer'
              }>
              <div className='w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600'>
                <div className='text-center'>{link.name}</div>
                <div className='text-center font-semibold'>{link.slot}</div>
              </div>
            </Link>
          )
        } else {
          return null
        }
      })}
    </nav>
  )
}
export default MenuGroupCard
