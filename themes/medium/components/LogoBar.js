<<<<<<< HEAD
import Link from 'next/link'

export default function LogoBar (props) {
  const { siteInfo } = props
  return (
    <div id='top-wrapper' className='w-full flex items-center '>
          <Link href='/' className='text-md md:text-xl dark:text-gray-200'>
            {siteInfo?.title}
          </Link>
=======
import { siteConfig } from '@/lib/config'
import Link from 'next/link'

export default function LogoBar(props) {
  return (
    <div id='top-wrapper' className='w-full flex items-center '>
      <Link href='/' className='logo text-md md:text-xl dark:text-gray-200'>
        {siteConfig('TITLE')}
      </Link>
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
    </div>
  )
}
