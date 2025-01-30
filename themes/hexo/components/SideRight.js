<<<<<<< HEAD
=======
<<<<<<< HEAD
import Card from './Card'
import CategoryGroup from './CategoryGroup'
import LatestPostsGroup from './LatestPostsGroup'
import TagGroups from './TagGroups'
import Catalog from './Catalog'
import { InfoCard } from './InfoCard'
import { AnalyticsCard } from './AnalyticsCard'
import CONFIG from '../config'
import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'
import Announcement from './Announcement'
import { useGlobal } from '@/lib/global'
import Live2D from '@/components/Live2D'
=======
>>>>>>> tangly1024-main
import Live2D from '@/components/Live2D'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import CONFIG from '../config'
import { AnalyticsCard } from './AnalyticsCard'
import Announcement from './Announcement'
import Card from './Card'
import Catalog from './Catalog'
import CategoryGroup from './CategoryGroup'
import { InfoCard } from './InfoCard'
import LatestPostsGroup from './LatestPostsGroup'
import TagGroups from './TagGroups'
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

const HexoRecentComments = dynamic(() => import('./HexoRecentComments'))
const FaceBookPage = dynamic(
  () => {
    let facebook = <></>
    try {
      facebook = import('@/components/FacebookPage')
    } catch (err) {
      console.error(err)
    }
    return facebook
  },
  { ssr: false }
)

/**
 * Hexo主题右侧栏
 * @param {*} props
 * @returns
 */
export default function SideRight(props) {
  const {
    post,
    currentCategory,
    categories,
    latestPosts,
    tags,
    currentTag,
    showCategory,
    showTag,
    rightAreaSlot,
    notice,
    className
  } = props

  const { locale } = useGlobal()

  // 文章全屏处理
  if (post && post?.fullWidth) {
    return null
  }

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div id='sideRight' className={'space-y-4 lg:w-80 lg:pt-0 px-2 pt-4'}>
      <InfoCard {...props} />
      {CONFIG.WIDGET_ANALYTICS && <AnalyticsCard {...props} />}

      {showCategory && (
        <Card>
          <div className='ml-2 mb-1 '>
            <i className='fas fa-th' /> {locale.COMMON.CATEGORY}
          </div>
          <CategoryGroup
            currentCategory={currentCategory}
            categories={categories}
          />
        </Card>
      )}
      {showTag && (
        <Card>
          <TagGroups tags={tags} currentTag={currentTag} />
        </Card>
      )}
      {CONFIG.WIDGET_LATEST_POSTS && latestPosts && latestPosts.length > 0 && <Card>
        <LatestPostsGroup {...props} />
      </Card>}
=======
>>>>>>> tangly1024-main
    <div
      id='sideRight'
      className={` lg:w-80 lg:pt-8 ${post ? 'lg:pt-0' : 'lg:pt-4'}`}>
      <div className='sticky top-8 space-y-4'>
        {post && post.toc && post.toc.length > 1 && (
          <Card>
            <Catalog toc={post.toc} />
          </Card>
        )}

        <InfoCard {...props} />
        {siteConfig('HEXO_WIDGET_ANALYTICS', null, CONFIG) && (
          <AnalyticsCard {...props} />
        )}
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

        {showCategory && (
          <Card>
            <div className='ml-2 mb-1 '>
              <i className='fas fa-th' /> {locale.COMMON.CATEGORY}
            </div>
            <CategoryGroup
              currentCategory={currentCategory}
              categories={categories}
            />
          </Card>
        )}
        {showTag && (
          <Card>
            <TagGroups tags={tags} currentTag={currentTag} />
          </Card>
        )}
        {siteConfig('HEXO_WIDGET_LATEST_POSTS', null, CONFIG) &&
          latestPosts &&
          latestPosts.length > 0 && (
            <Card>
              <LatestPostsGroup {...props} />
            </Card>
          )}

<<<<<<< HEAD
        <Announcement post={notice} />
=======
<<<<<<< HEAD
      {BLOG.COMMENT_WALINE_SERVER_URL && BLOG.COMMENT_WALINE_RECENT && <HexoRecentComments/>}
=======
        <Announcement post={notice} />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

        {siteConfig('COMMENT_WALINE_SERVER_URL') &&
          siteConfig('COMMENT_WALINE_RECENT') && <HexoRecentComments />}

        {rightAreaSlot}
        <FaceBookPage />
        <Live2D />
      </div>
    </div>
  )
}
