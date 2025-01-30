<<<<<<< HEAD
=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import React from 'react'
import throttle from 'lodash.throttle'
import { BlogItem } from './BlogItem'

export const BlogListScroll = props => {
  const { posts } = props
  const { locale } = useGlobal()

  const [page, updatePage] = React.useState(1)

  let hasMore = false
  const postsToShow = posts
    ? Object.assign(posts).slice(0, BLOG.POSTS_PER_PAGE * page)
=======
>>>>>>> tangly1024-main
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BlogItem } from './BlogItem'

/**
 * 滚动博客列表
 * @param {*} props
 * @returns
 */
export default function BlogListScroll(props) {
  const { posts } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  let hasMore = false
  const postsToShow = posts
    ? Object.assign(posts).slice(0, POSTS_PER_PAGE * page)
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    : []

  if (posts) {
    const totalCount = posts.length
<<<<<<< HEAD
    hasMore = page * POSTS_PER_PAGE < totalCount
=======
<<<<<<< HEAD
    hasMore = page * BLOG.POSTS_PER_PAGE < totalCount
=======
    hasMore = page * POSTS_PER_PAGE < totalCount
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  }
  const handleGetMore = () => {
    if (!hasMore) return
    updatePage(page + 1)
  }

  const targetRef = React.useRef(null)

  // 监听滚动自动分页加载
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const scrollTrigger = React.useCallback(throttle(() => {
    const scrollS = window.scrollY + window.outerHeight
    const clientHeight = targetRef ? (targetRef.current ? (targetRef.current.clientHeight) : 0) : 0
    if (scrollS > clientHeight + 100) {
      handleGetMore()
    }
  }, 500))
=======
>>>>>>> tangly1024-main
  const scrollTrigger = useCallback(
    throttle(() => {
      const scrollS = window.scrollY + window.outerHeight
      const clientHeight = targetRef
        ? targetRef.current
          ? targetRef.current.clientHeight
          : 0
        : 0
      if (scrollS > clientHeight + 100) {
        handleGetMore()
      }
    }, 500)
  )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

  React.useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)

    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  })

  return (
    <div id='posts-wrapper' className='w-full md:pr-8 mb-12' ref={targetRef}>
      {postsToShow.map(p => (
        <BlogItem key={p.id} post={p} />
      ))}

      <div
        onClick={handleGetMore}
        className='w-full my-4 py-4 text-center cursor-pointer '>
        {' '}
        {hasMore ? locale.COMMON.MORE : `${locale.COMMON.NO_MORE} 😰`}{' '}
      </div>
    </div>
  )
}
