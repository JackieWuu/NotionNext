<<<<<<< HEAD
=======
<<<<<<< HEAD
import BLOG from '@/blog.config'
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import MenuGroupCard from './MenuGroupCard'
import { MenuListSide } from './MenuListSide'

/**
 * 侧边抽屉
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const SideBar = props => {
  const { siteInfo } = props
  const router = useRouter()
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div id='side-bar'>
            <div className="h-52 w-full flex justify-center">
                <div>
                    <div onClick={() => { router.push('/') }}
                        className='justify-center items-center flex hover:rotate-45 py-6 hover:scale-105 dark:text-gray-100  transform duration-200 cursor-pointer'>
                        <LazyImage src={siteInfo?.icon} className='rounded-full' width={80} alt={BLOG.AUTHOR} />
                    </div>
                    <MenuGroupCard {...props} />
                </div>
            </div>
            <MenuListSide {...props} />
=======
>>>>>>> tangly1024-main
    <div id='side-bar'>
      <div className='h-52 w-full flex justify-center'>
        <div>
          <div
            onClick={() => {
              router.push('/')
            }}
            className='justify-center items-center flex hover:rotate-45 py-6 hover:scale-105 dark:text-gray-100  transform duration-200 cursor-pointer'>
            {/* 头像 */}
            <LazyImage
              src={siteInfo?.icon}
              className='rounded-full'
              width={80}
              alt={siteConfig('AUTHOR')}
            />
          </div>
          {/* 总览 */}
          <MenuGroupCard {...props} />
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
        </div>
      </div>
      {/* 侧拉抽屉的菜单 */}
      <MenuListSide {...props} />
    </div>
  )
}

export default SideBar
