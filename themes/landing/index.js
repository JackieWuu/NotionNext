'use client'

/**
 * 这是一个空白主题，方便您用作创建新主题时的模板，从而开发出您自己喜欢的主题
 * 1. 禁用了代码质量检查功能，提高了代码的宽容度；您可以使用标准的html写法
 * 2. 内容大部分是在此文件中写死，notion数据从props参数中传进来
 * 3. 您可在此网站找到更多喜欢的组件 https://www.tailwind-kit.com/
 */
<<<<<<< HEAD
/* eslint-disable*/
=======
import Loading from '@/components/Loading'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import NotionPage from '@/components/NotionPage'
import { siteConfig } from '@/lib/config'
import { isBrowser } from '@/lib/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Features from './components/Features'
import FeaturesBlocks from './components/FeaturesBlocks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import { Pricing } from './components/Pricing'
import Testimonials from './components/Testimonials'
import CONFIG from './config'
<<<<<<< HEAD
import Loading from '@/components/Loading'
import { isBrowser } from '@/lib/utils'

/**
 * 这是个配置文件，可以方便在此统一配置信息
 */
const THEME_CONFIG = { THEME: 'landing' }
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

/**
 * 布局框架
 * Landing 主题用作产品落地页展示
 * 结合Stripe或者lemonsqueezy插件可以成为saas支付订阅
 * @param {*} props
 * @returns
 */
<<<<<<< HEAD
const LayoutBase = (props) => {
    const { meta, siteInfo, children } = props

    return <div id='theme-landing' className="overflow-hidden flex flex-col justify-between bg-white">
=======
const LayoutBase = props => {
  const { children } = props

  return (
    <div
      id='theme-landing'
      className={`${siteConfig('FONT_STYLE')} scroll-smooth overflow-hidden flex flex-col justify-between bg-white dark:bg-black`}>
      {/* 顶部导航栏 */}
      <Header />
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0

      {/* 内容 */}
      <div id='content-wrapper'>{children}</div>

      {/* 底部页脚 */}
      <Footer />
    </div>
  )
}


/**
 * 首页布局
 * @param {*} props
 * @returns
 */
<<<<<<< HEAD
const LayoutIndex = (props) => {
    return (
        <LayoutBase {...props}>
            <Hero />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
            <Newsletter />
        </LayoutBase>
    )
=======
const LayoutIndex = props => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Pricing />
      <Newsletter />
    </>
  )
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}

/**
 * 文章详情页布局
 * @param {*} props
 * @returns
 */
<<<<<<< HEAD
const LayoutSlug = (props) => {
    // 如果 是 /article/[slug] 的文章路径则进行重定向到另一个域名
    const router = useRouter()
    if (JSON.parse(CONFIG.POST_REDIRECT_ENABLE) && isBrowser && router.route == '/[prefix]/[slug]') {
        const redirectUrl = CONFIG.POST_REDIRECT_URL + router.asPath.replace('?theme=landing', '')
        router.push(redirectUrl)
        return  <div id='theme-landing'><Loading /></div>
    }

    return <LayoutBase {...props}>

        <div id='container-inner' className='mx-auto max-w-screen-lg p-12'>
            <NotionPage {...props} />
        </div>
    </LayoutBase>


=======
const LayoutSlug = props => {
  const { post } = props

  // 如果 是 /article/[slug] 的文章路径则进行重定向到另一个域名
  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    // 404
    if (!post) {
      setTimeout(
        () => {
          if (isBrowser) {
            const article = document.querySelector('#article-wrapper #notion-article')
            if (!article) {
              router.push('/404').then(() => {
                console.warn('找不到页面', router.asPath)
              })
            }
          }
        },
        waiting404
      )
    }
  }, [post])

  if (
    JSON.parse(siteConfig('LANDING_POST_REDIRECT_ENABLE', null, CONFIG)) &&
    isBrowser &&
    router.route === '/[prefix]/[slug]'
  ) {
    const redirectUrl =
      siteConfig('LANDING_POST_REDIRECT_URL', null, CONFIG) +
      router.asPath.replace('?theme=landing', '')
    router.push(redirectUrl)
    return (
      <div id='theme-landing'>
        <Loading />
      </div>
    )
  }

  return (
    <>
      <div id='container-inner' className='mx-auto max-w-screen-lg p-12'>
        <div id='article-wrapper'>
          <NotionPage {...props} />
        </div>
      </div>
    </>
  )
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}

// 其他布局暂时留空
const LayoutSearch = props => (
  <>
    <Hero />
  </>
)
const LayoutArchive = props => (
  <>
    <Hero />
  </>
)
const Layout404 = props => (
  <>
    <Hero />
  </>
)
const LayoutCategoryIndex = props => (
  <>
    <Hero />
  </>
)
const LayoutPostList = props => (
  <>
    <Hero />
  </>
)
const LayoutTagIndex = props => (
  <>
    <Hero />
  </>
)

export {
<<<<<<< HEAD
    THEME_CONFIG,
    LayoutIndex,
    LayoutSearch,
    LayoutArchive,
    LayoutSlug,
    Layout404,
    LayoutPostList,
    LayoutCategoryIndex,
    LayoutTagIndex
=======
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}
