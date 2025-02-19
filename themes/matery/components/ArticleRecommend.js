<<<<<<< HEAD
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
=======
<<<<<<< HEAD
import Link from 'next/link'
import CONFIG from '../config'
import BLOG from '@/blog.config'
=======
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import CONFIG from '../config'

/**
 * 关联推荐文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleRecommend({ recommendPosts, siteInfo }) {
  const { locale } = useGlobal()

  if (
<<<<<<< HEAD
    !siteConfig('MATERY_ARTICLE_RECOMMEND', null, CONFIG) ||
    !recommendPosts ||
    recommendPosts.length === 0
=======
<<<<<<< HEAD
    !CONFIG.ARTICLE_RECOMMEND ||
        !recommendPosts ||
        recommendPosts.length === 0
=======
    !siteConfig('MATERY_ARTICLE_RECOMMEND', null, CONFIG) ||
    !recommendPosts ||
    recommendPosts.length === 0
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  ) {
    return <></>
  }

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="p-2">
            <div className="mb-2 px-1 flex flex-nowrap justify-between">
                <div>
                    <i className="mr-2 fas fa-thumbs-up" />
                    {locale.COMMON.RELATE_POSTS}
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {recommendPosts.map(post => {
                  const headerImage = post?.pageCoverThumbnail
                    ? post.pageCoverThumbnail
                    : siteInfo?.pageCover

                  return (
                    (<Link
                            key={post.id}
                            title={post.title}
                            href={`${BLOG.SUB_PATH}/${post.slug}`}
                            passHref
                            className="flex h-40 cursor-pointer overflow-hidden">

                            <div className="h-full w-full group" >

                                <LazyImage src={headerImage} className="h-full w-full object-cover object-center group-hover:scale-110 transform duration-200" />

                                <div className="flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-10 w-full h-full duration-300 ">
                                    <div className="text-sm text-white text-center shadow-text">
                                        <div>
                                            <i className="fas fa-calendar-alt mr-1" />
                                            {post.date?.start_date}
                                        </div>
                                        <div className="hover:underline">{post.title}</div>
                                    </div>
                                </div>
                            </div>

                        </Link>)
                  )
                })}
            </div>
=======
>>>>>>> tangly1024-main
    <div className='p-2'>
      <div className='mb-2 px-1 flex flex-nowrap justify-between'>
        <div>
          <i className='mr-2 fas fa-thumbs-up' />
          {locale.COMMON.RELATE_POSTS}
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {recommendPosts.map(post => {
          const headerImage = post?.pageCoverThumbnail
            ? post.pageCoverThumbnail
            : siteInfo?.pageCover

          return (
            <Link
              key={post.id}
              title={post.title}
              href={post?.href}
              passHref
              className='flex h-40 cursor-pointer overflow-hidden'>
              <div className='h-full w-full group'>
                <LazyImage
                  src={headerImage}
                  className='h-full w-full object-cover object-center group-hover:scale-110 transform duration-200'
                />

                <div className='flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-10 w-full h-full duration-300 '>
                  <div className='text-sm text-white text-center shadow-text'>
                    <div>
                      <i className='fas fa-calendar-alt mr-1' />
                      {post.date?.start_date}
                    </div>
                    <div className='hover:underline'>{post.title}</div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
