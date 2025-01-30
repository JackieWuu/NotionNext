<<<<<<< HEAD:themes/hexo/components/FloatDarkModeButton.js
import { useGlobal } from '@/lib/global'
import { saveDarkModeToCookies } from '@/themes/theme'
=======
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { saveDarkModeToLocalStorage } from '@/themes/theme'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0:themes/hexo/components/ButtonFloatDarkMode.js
import CONFIG from '../config'

/**
 * 深色模式按钮
 */
export default function ButtonDarkModeFloat() {
  const { isDarkMode, updateDarkMode } = useGlobal()

  if (!CONFIG.WIDGET_DARK_MODE) {
    return <></>
  }

  // 用户手动设置主题
  const handleChangeDarkMode = () => {
    const newStatus = !isDarkMode
    saveDarkModeToLocalStorage(newStatus)
    updateDarkMode(newStatus)
    const htmlElement = document.getElementsByTagName('html')[0]
    htmlElement.classList?.remove(newStatus ? 'light' : 'dark')
    htmlElement.classList?.add(newStatus ? 'dark' : 'light')
  }

  return (
    <div
      onClick={handleChangeDarkMode}
      className={
        'justify-center items-center w-7 h-7 text-center transform hover:scale-105 duration-200'
      }>
      <i
        id='darkModeButton'
        className={`${isDarkMode ? 'fa-sun' : 'fa-moon'} fas text-xs`}
      />
    </div>
  )
}
