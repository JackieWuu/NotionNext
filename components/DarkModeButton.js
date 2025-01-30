import { useGlobal } from '@/lib/global'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { saveDarkModeToCookies } from '@/themes/theme'
import { Moon, Sun } from './HeroIcons'
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import { useImperativeHandle } from 'react'
import { Moon, Sun } from './HeroIcons'

/**
 * 深色模式按钮
 */
const DarkModeButton = props => {
  const { cRef, className } = props
  const { isDarkMode, updateDarkMode } = useGlobal()

  /**
   * 对外暴露方法
   */
  useImperativeHandle(cRef, () => {
    return {
      handleChangeDarkMode: () => {
        handleChangeDarkMode()
      }
    }
  })

<<<<<<< HEAD
=======
<<<<<<< HEAD
  // 用户手动设置主题
  const handleChangeDarkMode = () => {
    const newStatus = !isDarkMode
    saveDarkModeToCookies(newStatus)
    updateDarkMode(newStatus)
    const htmlElement = document.getElementsByTagName('html')[0]
    htmlElement.classList?.remove(newStatus ? 'light' : 'dark')
    htmlElement.classList?.add(newStatus ? 'dark' : 'light')
  }

  return <div onClick={handleChangeDarkMode} className={`${className || ''} flex justify-center dark:text-gray-200 text-gray-800`}>
        <div id='darkModeButton' className=' hover:scale-110 cursor-pointer transform duration-200 w-5 h-5'> {isDarkMode ? <Sun /> : <Moon />}</div>
=======
>>>>>>> tangly1024-main
  return (
    <div
      className={`${className || ''} flex justify-center dark:text-gray-200 text-gray-800`}>
      <div
        onClick={toggleDarkMode}
        id='darkModeButton'
        className=' hover:scale-110 cursor-pointer transform duration-200 w-5 h-5'>
        {' '}
        {isDarkMode ? <Sun /> : <Moon />}
      </div>
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
    </div>
  )
}
export default DarkModeButton
