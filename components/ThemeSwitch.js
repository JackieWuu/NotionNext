import { useGlobal } from '@/lib/global'
<<<<<<< HEAD
import { getQueryParam } from '@/lib/utils'
=======
<<<<<<< HEAD
import React, { useState } from 'react'
import { Draggable } from './Draggable'
=======
import { getQueryParam } from '@/lib/utils'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import { THEMES } from '@/themes/theme'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DarkModeButton from './DarkModeButton'
<<<<<<< HEAD
import { Draggable } from './Draggable'
import LazyImage from './LazyImage'
import SideBarDrawer from './SideBarDrawer'
=======
<<<<<<< HEAD
=======
import { Draggable } from './Draggable'
import LazyImage from './LazyImage'
import SideBarDrawer from './SideBarDrawer'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
/**
 *
 * @returns 主题切换
 */
const ThemeSwitch = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { theme } = useGlobal()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // 修改当前路径url中的 theme 参数
  // 例如 http://localhost?theme=hexo 跳转到 http://localhost?theme=newTheme
  const onSelectChange = (e) => {
    setIsLoading(true)
    const newTheme = e.target.value
=======
>>>>>>> tangly1024-main
  const { theme, locale, isDarkMode, toggleDarkMode } = useGlobal()
  const router = useRouter()
  const currentTheme = getQueryParam(router.asPath, 'theme') || theme
  const [sideBarVisible, setSideBarVisible] = useState(false)

  const changeTheme = newTheme => {
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    const query = router.query
    query.theme = newTheme
    router.push({ pathname: router.pathname, query }).then(() => { })
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  return (<>
        <Draggable>
            <div id="draggableBox" style={{ left: '10px', top: '80vh' }} className="fixed z-50 dark:text-white bg-gray-50 dark:bg-black rounded-2xl drop-shadow-lg">
                <div className="p-3 w-full flex items-center text-sm group duration-200 transition-all">
                    <DarkModeButton className='mr-2' />
                    <div className='w-0 group-hover:w-20 transition-all duration-200 overflow-hidden'>
                        <select value={theme} onChange={onSelectChange} name="themes" className='appearance-none outline-none dark:text-white bg-gray-50 dark:bg-black uppercase cursor-pointer'>
                            {THEMES?.map(t => {
                              return <option key={t} value={t}>{t}</option>
                            })}
                        </select>
                    </div>
                    <i className="fa-solid fa-palette pl-2"></i>
                </div>
            </div>
            {/* 切换主题加载时的全屏遮罩 */}
            <div className={`${isLoading ? 'opacity-50 ' : 'opacity-0'} w-screen h-screen bg-black text-white shadow-text flex justify-center items-center
                              transition-all fixed top-0 left-0 pointer-events-none duration-1000 z-50 shadow-inner`}>
                <i className='text-3xl mr-5 fas fa-spinner animate-spin' />
            </div>
        </Draggable>
=======
>>>>>>> tangly1024-main
  return (
    <>
      {/* 悬浮的主题切换按钮 */}
      <Draggable stick={true}>
        <div
          id='draggableBox'
          style={{ left: '0px', top: '80vh' }}
          className='border dark:border-gray-600 fixed group flex flex-col items-start space-y-2 overflow-hidden z-20 p-3
                    dark:text-white bg-white dark:bg-black 
                      rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl   '>
          {/* 主题切换按钮 */}
          <div className='text-sm flex items-center group-hover:w-44 h-4 text-center duration-200'>
            <i
              className='cursor-pointer fa-solid fa-palette w-5 '
              onClick={() => {
                setSideBarVisible(true)
              }}
              onTouchStart={() => {
                setSideBarVisible(true)
              }}
            />
            <div className='w-0 group-hover:w-32 duration-200 overflow-hidden'>
              <label htmlFor='themeSelect' className='sr-only'>
                {locale.COMMON.THEME}
              </label>
              {/* 点击弹出主题切换面板 */}
              <div
                onClick={() => {
                  setSideBarVisible(true)
                }}
                className='uppercase cursor-pointer'
                title='Click To Switch Theme'
                alt='Click To Switch Theme'>
                {currentTheme}
              </div>
            </div>
          </div>
        </div>
      </Draggable>

      <SideBarDrawer
        className='p-10 max-w-3xl 2xl:max-w-5xl dark:text-white bg-white dark:bg-black '
        isOpen={sideBarVisible}
        showOnPC={true}
        onClose={() => {
          setSideBarVisible(false)
        }}>
        {/* 开关 */}
        <div className='flex items-center justify-between font-bold'>
          {/* 深色模式切换 */}
          <div className='border dark:border-gray-60 text-sm flex items-center w-32 duration-200 hover:bg-green-500 p-2'>
            <DarkModeButton />
            <div
              onClick={toggleDarkMode}
              className='cursor-pointer w-24 duration-200 overflow-hidden whitespace-nowrap pl-1 h-auto'>
              {isDarkMode ? locale.MENU.DARK_MODE : locale.MENU.LIGHT_MODE}
            </div>
          </div>

          {/* 关闭 */}
          <div
            className='hover:bg-green-500 px-2 py-1 duration-200 cursor-pointer'
            onClick={() => {
              setSideBarVisible(false)
            }}>
            <i className='fas fa-times' />
          </div>
        </div>

        <hr className='my-4 dark:border-gray-600' />

        <div>点击下方主题进行切换.</div>
        <div> Click below to switch the theme.</div>

        {/* 陈列所有主题 */}
        <div className='grid lg:grid-cols-2 gap-6'>
          {THEMES?.map(t => {
            return (
              <div
                className='my-6'
                key={t}
                onClick={() => {
                  changeTheme(t)
                }}>
                <div className='text-lg dark:text-white font-bold uppercase mb-4'>
                  {t}
                </div>
                <LazyImage
                  src={`/images/themes-preview/${t}.png`}
                  className='cursor-pointer shadow-lg rounded-xl hover:scale-110 duration-200'
                />
              </div>
            )
          })}
        </div>
      </SideBarDrawer>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    </>
  )
}

export default ThemeSwitch
