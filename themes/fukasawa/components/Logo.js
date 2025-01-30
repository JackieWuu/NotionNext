<<<<<<< HEAD
import { siteConfig } from '@/lib/config'
=======
<<<<<<< HEAD
=======
import { siteConfig } from '@/lib/config'
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
import Link from 'next/link'

const Logo = props => {
  const { siteInfo } = props
  return (
<<<<<<< HEAD
=======
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
>>>>>>> tangly1024-main
    <section className='flex'>
      <Link
        href='/'
        className='logo hover:bg-black hover:text-white border-black border-2 duration-500 px-4 py-2 cursor-pointer dark:text-gray-300 dark:border-gray-300 font-black'>
        {siteConfig('TITLE')}
      </Link>
    </section>
  )
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}

export default Logo
