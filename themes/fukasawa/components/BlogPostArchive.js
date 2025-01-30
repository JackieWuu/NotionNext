import React from 'react'
import Link from 'next/link'
<<<<<<< HEAD
import BLOG from '@/blog.config'
=======

>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
/**
 * 博客归档
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
const BlogArchiveItem = ({ posts = [], archiveTitle }) => {
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return (
      <div>
        <div
          className='pt-16 pb-4 text-3xl dark:text-gray-300'
          id={archiveTitle}>
          {archiveTitle}
        </div>
        <ul>
<<<<<<< HEAD
          {posts?.map(post => (
            <li
              key={post.id}
              className="border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500"
            >
              <div id={post?.publishDay}>
                <span className="text-gray-400">{post.date?.start_date}</span>{' '}
                &nbsp;
                <Link
                  href={`${BLOG.SUB_PATH}/${post.slug}`}
                  passHref
                  className="dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600">

                  {post.title}

                </Link>
              </div>
            </li>
          ))}
=======
          {posts?.map(post => {
            return (
              <li
                key={post.id}
                className='border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500'>
                <div id={post?.publishDay}>
                  <span className='text-gray-400'>{post.date?.start_date}</span>{' '}
                  &nbsp;
                  <Link
                    href={post?.href}
                    passHref
                    className='dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600'>
                    {post.title}
                  </Link>
                </div>
              </li>
            )
          })}
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
        </ul>
      </div>
    )
  }
}

export default BlogArchiveItem
