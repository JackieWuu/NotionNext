<<<<<<< HEAD
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
=======
<<<<<<< HEAD
import React from 'react'
=======
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import Link from 'next/link'
import BLOG from '@/blog.config'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import LazyImage from '@/components/LazyImage'
=======

>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
/**
 * 博客归档列表
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostArchive = ({ posts = [], archiveTitle, siteInfo }) => {
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <div className=''>
                <div
                    className="pb-4 dark:text-gray-300"
                    id={archiveTitle}
                >
                    {archiveTitle}
                </div>
                <ul>
                    {posts?.map(post => {
                      const showPreview = CONFIG.POST_LIST_PREVIEW && post.blockMap
                      if (post && !post.pageCoverThumbnail && CONFIG.POST_LIST_COVER_DEFAULT) {
                        post.pageCoverThumbnail = siteInfo?.pageCover
                      }
                      const showPageCover = CONFIG.POST_LIST_COVER && post?.pageCoverThumbnail && !showPreview
                      return <div key={post.id} className={'cursor-pointer flex flex-row mb-4 h-24 md:flex-row group w-full  dark:border-gray-600 hover:border-indigo-600  dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden'}>

                            {/* 图片封面 */}
                            {showPageCover && (
                                <div>
                                    <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref legacyBehavior>
                                        <LazyImage className={'rounded-xl bg-center bg-cover w-40 h-24'} src={post?.pageCoverThumbnail}/>
                                    </Link>
                                </div>
                            )}
=======
>>>>>>> tangly1024-main
      <div className=''>
        <div className='pb-4 dark:text-gray-300' id={archiveTitle}>
          {archiveTitle}
        </div>
        <ul>
          {posts?.map(post => {
            const showPreview =
              siteConfig('HEO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
            if (
              post &&
              !post.pageCoverThumbnail &&
              siteConfig('HEO_POST_LIST_COVER_DEFAULT', null, CONFIG)
            ) {
              post.pageCoverThumbnail = siteInfo?.pageCover
            }
            const showPageCover =
              siteConfig('HEO_POST_LIST_COVER', null, CONFIG) &&
              post?.pageCoverThumbnail &&
              !showPreview
            return (
              <div
                key={post.id}
                className={
                  'cursor-pointer flex flex-row mb-4 h-24 md:flex-row group w-full  dark:border-gray-600 hover:border-indigo-600  dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden'
                }>
                {/* 图片封面 */}
                {showPageCover && (
                  <div>
                    <Link href={post?.href} passHref legacyBehavior>
                      <LazyImage
                        className={'rounded-xl bg-center bg-cover w-40 h-24'}
                        src={post?.pageCoverThumbnail}
                      />
                    </Link>
                  </div>
                )}

                {/* 文字区块 */}
                <div className={'flex px-2 flex-col justify-between w-full'}>
                  <div>
                    {/* 分类 */}
                    {post?.category && (
                      <div
                        className={`flex items-center ${showPreview ? 'justify-center' : 'justify-start'} hidden md:block flex-wrap dark:text-gray-500 text-gray-600 `}>
                        <Link
                          passHref
                          href={`/category/${post.category}`}
                          className='cursor-pointer text-xs font-normal menu-link hover:text-indigo-700  dark:text-gray-600 transform'>
                          {post.category}
                        </Link>
                      </div>
                    )}
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

                    {/* 标题 */}
                    <Link
                      href={post?.href}
                      passHref
                      className={
                        ' group-hover:text-indigo-700 group-hover:dark:text-indigo-400 text-black dark:text-gray-100 dark:group-hover:text-yellow-600 line-clamp-2 replace cursor-pointer text-xl font-extrabold leading-tight'
                      }>
                      <span className='menu-link '>{post.title}</span>
                    </Link>
                  </div>

<<<<<<< HEAD
                  {/* 摘要 */}
                  {/* <p className="line-clamp-1 replace my-3 2xl:my-0 text-gray-700  dark:text-gray-300 text-xs font-light leading-tight">
=======
<<<<<<< HEAD
                                    {/* 标题 */}
                                    <Link
                                        href={`${BLOG.SUB_PATH}/${post.slug}`}
                                        passHref
                                        className={' group-hover:text-indigo-700 group-hover:dark:text-indigo-400 text-black dark:text-gray-100 dark:group-hover:text-yellow-600 line-clamp-2 replace cursor-pointer text-xl font-extrabold leading-tight'}>
                                        <span className='menu-link '>{post.title}</span>
                                    </Link>
                                </div>

                                {/* 摘要 */}
                                    {/* <p className="line-clamp-1 replace my-3 2xl:my-0 text-gray-700  dark:text-gray-300 text-xs font-light leading-tight">
=======
                  {/* 摘要 */}
                  {/* <p className="line-clamp-1 replace my-3 2xl:my-0 text-gray-700  dark:text-gray-300 text-xs font-light leading-tight">
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
                                        {post.summary}
                                    </p> */}

                  <div className='md:flex-nowrap flex-wrap md:justify-start inline-block'>
                    <div>
                      {' '}
                      {post.tagItems?.map(tag => (
                        <TagItemMini key={tag.name} tag={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BlogPostArchive
