import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import TwikooCommentCount from '@/components/TwikooCommentCount'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
import { formatDateFmt } from '@/lib/formatDate'
=======
>>>>>>> tangly1024-main
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'
import Link from 'next/link'
import TagItemMini from './TagItemMini'
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

/**
 * 博客列表的文字内容
 * @param {*} param0
 * @returns
 */
<<<<<<< HEAD
=======
<<<<<<< HEAD
export const BlogPostCardInfo = ({ post, showPreview, showPageCover, showSummary }) => {
  return <div className={`flex flex-col justify-between lg:p-6 p-4  ${showPageCover && !showPreview ? 'md:w-7/12 w-full md:max-h-60' : 'w-full'}`}>
       <div>
         {/* 标题 */}
         <Link
            href={`${BLOG.SUB_PATH}/${post.slug}`}
            passHref
            className={`line-clamp-2 replace cursor-pointer text-2xl ${showPreview ? 'text-center' : ''
                } leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400`}>

            <span className='menu-link '>{post.title}</span>

        </Link>

        {/* 分类 */}
        { post?.category && <div
            className={`flex mt-2 items-center ${showPreview ? 'justify-center' : 'justify-start'
                } flex-wrap dark:text-gray-500 text-gray-400 `}
        >
=======
>>>>>>> tangly1024-main
export const BlogPostCardInfo = ({
  post,
  showPreview,
  showPageCover,
  showSummary
}) => {
  return (
    <article
      className={`flex flex-col justify-between lg:p-6 p-4  ${showPageCover && !showPreview ? 'md:w-7/12 w-full md:max-h-60' : 'w-full'}`}>
      <div>
        <header>
          <h2>
            {/* 标题 */}
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
            <Link
              href={post?.href}
              passHref
              className={`line-clamp-2 replace cursor-pointer text-2xl ${showPreview ? 'text-center' : ''
                } leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400`}>
              {siteConfig('POST_TITLE_ICON') && (
                <NotionIcon icon={post.pageIcon} />
              )}
              <span className='menu-link '>{post.title}</span>
            </Link>
          </h2>

          {/* 分类 */}
          {post?.category && (
            <div
              className={`flex mt-2 items-center ${showPreview ? 'justify-center' : 'justify-start'
                } flex-wrap dark:text-gray-500 text-gray-400 `}>
              <Link
                href={`/category/${post.category}`}
                passHref
                className='cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform'>
                <i className='mr-1 far fa-folder' />
                {post.category}
              </Link>

              <TwikooCommentCount
                className='text-sm hover:text-indigo-700 dark:hover:text-indigo-400'
                post={post}
              />
            </div>
          )}
        </header>

        {/* 摘要 */}
        {(!showPreview || showSummary) && !post.results && (
          <main className='line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7'>
            {post.summary}
          </main>
        )}

        {/* 搜索结果 */}
        {post.results && (
          <p className='line-clamp-2 mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7'>
            {post.results.map((r, index) => (
              <span key={index}>{r}</span>
            ))}
          </p>
        )}

        {/* 预览 */}
        {showPreview && (
          <div className='overflow-ellipsis truncate'>
            <NotionPage post={post} />
          </div>
        )}
      </div>

      <div>
        {/* 日期标签 */}
        <div className='text-gray-400 justify-between flex'>
          {/* 日期 */}
          <Link
            href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
            passHref
            className='font-light menu-link cursor-pointer text-sm leading-4 mr-3'>
            <i className='far fa-calendar-alt mr-1' />
            {post?.publishDay || post.lastEditedDay}
          </Link>

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
    </article>
  )
}
