<<<<<<< HEAD

import BLOG from '@/blog.config'
=======
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BlogPost from './BlogPost'

export const BlogListPage = props => {
  const { page = 1, posts, postCount } = props
  const { locale } = useGlobal()
  const router = useRouter()
<<<<<<< HEAD
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
=======
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
  const currentPage = +page

  const showPrev = currentPage > 1
  const showNext = currentPage < totalPage && posts?.length > 0
  const pagePrefix = router.asPath
    .split('?')[0]
    .replace(/\/page\/[1-9]\d*/, '')
    .replace(/\/$/, '')
    .replace('.html', '')

  return (
    <div className='w-full md:pr-12 my-6'>
      <div id='posts-wrapper'>
        {posts?.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>

      <div className='flex justify-between text-xs'>
        <Link
          href={{
            pathname:
              currentPage - 1 === 1
                ? `${pagePrefix}/`
                : `${pagePrefix}/page/${currentPage - 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          className={`${showPrev ? '  ' : ' invisible block pointer-events-none '}no-underline py-2 px-3 rounded`}>
          <button rel='prev' className='block cursor-pointer'>
            ← {locale.PAGINATION.PREV}
          </button>
        </Link>
        <Link
          href={{
            pathname: `${pagePrefix}/page/${currentPage + 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          className={`${showNext ? '  ' : 'invisible pointer-events-none '}  no-underline py-2 px-3 rounded`}>
          <button rel='next' className='block cursor-pointer'>
            {locale.PAGINATION.NEXT} →
          </button>
        </Link>
      </div>
    </div>
  )
}
