<<<<<<< HEAD
import Badge from '@/components/Badge'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
=======
import Badge from '@/components/Badge'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const BlogPostCard = ({ post, className }) => {
  const router = useRouter()
  const currentSelected =
    decodeURIComponent(router.asPath.split('?')[0]) === post?.href

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div key={post.id} className={`${className} py-1 cursor-pointer px-2 hover:bg-gray-50 rounded-md dark:hover:bg-gray-600  ${currentSelected ? 'bg-green-50 text-green-500' : ''}`}>
            <div className="flex flex-col w-full select-none">
                <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref>
                    {post.title}
                </Link>
            </div>
=======
>>>>>>> tangly1024-main
    <Link href={post?.href} passHref>
      <div
        key={post.id}
        className={`${className} relative py-1.5 cursor-pointer px-1.5 rounded-md hover:bg-gray-50
                    ${currentSelected ? 'text-green-500 dark:bg-yellow-100 dark:text-yellow-600 font-semibold' : ' dark:hover:bg-yellow-100 dark:hover:text-yellow-600'}`}>
        <div className='w-full select-none'>
          {siteConfig('POST_TITLE_ICON') && (
            <NotionIcon icon={post?.pageIcon} />
          )}{' '}
          {post.title}
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
        </div>
        {/* 最新文章加个红点 */}
        {post?.isLatest && siteConfig('GITBOOK_LATEST_POST_RED_BADGE') && (
          <Badge />
        )}
      </div>
    </Link>
  )
}

export default BlogPostCard
