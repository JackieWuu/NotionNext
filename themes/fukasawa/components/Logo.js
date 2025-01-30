<<<<<<< HEAD
=======
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
import Link from 'next/link'

const Logo = props => {
  const { siteInfo } = props
  return (
<<<<<<< HEAD
   <section className='flex'>
    <Link
     href='/'
     className='hover:bg-black hover:text-white border-black border-2 duration-500 px-4 py-2 cursor-pointer dark:text-gray-300 dark:border-gray-300 font-black'>
     {siteInfo?.title}
    </Link>
   </section>
  );
=======
    <section className='flex'>
      <Link
        href='/'
        className='logo hover:bg-black hover:text-white border-black border-2 duration-500 px-4 py-2 cursor-pointer dark:text-gray-300 dark:border-gray-300 font-black'>
        {siteConfig('TITLE')}
      </Link>
    </section>
  )
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
}

export default Logo
