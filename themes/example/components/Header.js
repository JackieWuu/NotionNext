<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { MenuList } from './MenuList'
=======
<<<<<<< HEAD
import Link from 'next/link'
=======
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { MenuList } from './MenuList'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main

/**
 * 网站顶部
 * LOGO 和 菜单
 * @returns
 */
<<<<<<< HEAD
export const Header = props => {
=======
<<<<<<< HEAD
export const Header = (props) => {
  const { siteInfo } = props

=======
export const Header = props => {
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  return (
    <header className='w-full px-6 bg-white  dark:bg-black relative z-20'>
      <div className='mx-auto max-w-4xl md:flex justify-between items-center'>
        <Link
          href='/'
          className='logo py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center'>
          {siteConfig('TITLE')}
        </Link>
        <div className='w-full md:w-auto text-center md:text-right'>
          {/* 右侧文字 */}
        </div>
      </div>

<<<<<<< HEAD
      {/* 菜单 */}
      <MenuList {...props} />
    </header>
=======
<<<<<<< HEAD
                    {siteInfo?.title}
                </Link>
                <div className="w-full md:w-auto text-center md:text-right">
                    {/* 右侧文字 */}
                </div>
            </div>
        </header>
=======
      {/* 菜单 */}
      <MenuList {...props} />
    </header>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  )
}
