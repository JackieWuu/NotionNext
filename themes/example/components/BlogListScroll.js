import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
<<<<<<< HEAD
import React, { useEffect } from 'react'
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import BlogItem from './BlogItem'
/**
 * 使用滚动无限加载的博客列表
 * @param {*} props
 * @returns
 */
export const BlogListScroll = props => {
  const { posts } = props
<<<<<<< HEAD
  const { locale } = useGlobal()

  const [page, updatePage] = React.useState(1)

  let hasMore = false
  const postsToShow = posts
    ? Object.assign(posts).slice(0, BLOG.POSTS_PER_PAGE * page)
=======
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)

  let hasMore = false
  const postsToShow = posts
    ? Object.assign(posts).slice(0, POSTS_PER_PAGE * page)
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    : []

  if (posts) {
    const totalCount = posts.length
<<<<<<< HEAD
    hasMore = page * BLOG.POSTS_PER_PAGE < totalCount
=======
    hasMore = page * POSTS_PER_PAGE < totalCount
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  }
  const handleGetMore = () => {
    if (!hasMore) return
    updatePage(page + 1)
  }

  const targetRef = React.useRef(null)

  // 监听滚动自动分页加载
<<<<<<< HEAD
  const scrollTrigger = React.useCallback(throttle(() => {
    const scrollS = window.scrollY + window.outerHeight
    const clientHeight = targetRef ? (targetRef.current ? (targetRef.current.clientHeight) : 0) : 0
    if (scrollS > clientHeight + 100) {
      handleGetMore()
    }
  }, 500))
  const showPageCover = CONFIG.POST_LIST_COVER
=======
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
  const showPageCover = siteConfig('EXAMPLE_POST_LIST_COVER', null, CONFIG)
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)

    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  })

  return (
    <div
      id='posts-wrapper'
      className={`w-full ${showPageCover ? 'md:pr-2' : 'md:pr-12'}} mb-12`}
      ref={targetRef}>
      {postsToShow?.map(post => (
        <BlogItem key={post.id} post={post} />
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
