import Link from 'next/link'
import CONFIG from '../config'
<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
=======
<<<<<<< HEAD:themes/heo/components/ArticleRecommend.js
import BLOG from '@/blog.config'
=======
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0:themes/commerce/components/ArticleRecommend.js
>>>>>>> tangly1024-main
import { useGlobal } from '@/lib/global'
import LazyImage from '@/components/LazyImage'

/**
 * 关联推荐文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleRecommend({ recommendPosts, siteInfo }) {
  const { locale } = useGlobal()

  if (
    !CONFIG.ARTICLE_RECOMMEND ||
    !recommendPosts ||
    recommendPosts.length === 0
  ) {
    return <></>
  }

  return (
    <div className="pt-8">
      <div className=" mb-2 px-1 flex flex-nowrap justify-between">
        <div className='dark:text-gray-300'>
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

              <div className="h-full w-full relative group">
                <div className="flex items-center justify-center w-full h-full duration-300 ">
                  <div className="z-10 text-lg px-4 font-bold text-white text-center shadow-text select-none">
                    {post.title}
                  </div>
                </div>
                <LazyImage src={headerImage} className='absolute top-0 w-full h-full object-cover object-center group-hover:scale-110 group-hover:brightness-50 transform duration-200' />
              </div>

            </Link>)
          )
        })}
      </div>
    </div>
  )
}
