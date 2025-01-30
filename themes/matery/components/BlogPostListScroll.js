<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import { useGlobal } from '@/lib/global'
import React, { useCallback } from 'react'
import CONFIG from '../config'
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import { getListByPage } from '@/lib/utils'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'

/**
 * 博客列表滚动分页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
<<<<<<< HEAD
=======
<<<<<<< HEAD
const BlogPostListScroll = ({ posts = [], currentSearch, showSummary = CONFIG.POST_LIST_SUMMARY, siteInfo }) => {
  const postsPerPage = BLOG.POSTS_PER_PAGE
  const [page, updatePage] = React.useState(1)
  const postsToShow = getListByPage(posts, page, postsPerPage)
=======
>>>>>>> tangly1024-main
const BlogPostListScroll = ({
  posts = [],
  currentSearch,
  showSummary = siteConfig('MATERY_POST_LIST_SUMMARY', null, CONFIG),
  siteInfo
}) => {
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const [page, updatePage] = useState(1)
  const postsToShow = getListByPage(posts, page, POSTS_PER_PAGE)
  // 监听滚动
  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  })
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

  let hasMore = false
  if (posts) {
    const totalCount = posts.length
    hasMore = page * POSTS_PER_PAGE < totalCount
  }

  const handleGetMore = () => {
    if (!hasMore) return
    updatePage(page + 1)
  }

  const throttleMs = 200
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const scrollTrigger = useCallback(throttle(() => {
    requestAnimationFrame(() => {
      const scrollS = window.scrollY + window.outerHeight
      const clientHeight = targetRef ? (targetRef.current ? (targetRef.current.clientHeight) : 0) : 0
      if (scrollS > clientHeight + 100) {
        handleGetMore()
      }
    })
  }, throttleMs))
  // 监听滚动
  React.useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  })

  const targetRef = React.useRef(null)
  const { locale } = useGlobal()
=======
>>>>>>> tangly1024-main
  const scrollTrigger = useCallback(
    throttle(() => {
      requestAnimationFrame(() => {
        const scrollS = window.scrollY + window.outerHeight
        const clientHeight = targetRef
          ? targetRef.current
            ? targetRef.current.clientHeight
            : 0
          : 0
        if (scrollS > clientHeight + 100) {
          handleGetMore()
        }
      })
    }, throttleMs)
  )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

  if (!postsToShow || postsToShow.length === 0) {
    return <BlogPostListEmpty currentSearch={currentSearch} />
  } else {
    return (
      <div id='container' ref={targetRef} className='w-full'>
        {/* 文章列表 */}
        <div className='pt-4 flex flex-wrap pb-12'>
          {postsToShow.map(post => (
            <div key={post.id} className='xl:w-1/3 md:w-1/2 w-full p-4'>
              <BlogPostCard
                index={posts.indexOf(post)}
                post={post}
                siteInfo={siteInfo}
              />
            </div>
          ))}
        </div>

        <div>
          <div
            onClick={() => {
              handleGetMore()
            }}
            className='w-full my-4 py-4 text-center cursor-pointer rounded-xl dark:text-gray-200'>
            {' '}
            {hasMore ? locale.COMMON.MORE : `${locale.COMMON.NO_MORE}`}{' '}
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostListScroll
