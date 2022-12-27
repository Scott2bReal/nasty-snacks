import { useEffect, useState } from 'preact/hooks'

export const TopNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const overlay = (mobileOpen: boolean) => {
    if (mobileOpen) {
      document.body.classList.toggle('overflow-hidden')
    } else {
      document.body.classList.toggle('overflow-hidden')
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setMobileOpen(false)
        overlay(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return mobileOpen ? (
    <nav
      className={`h-[100vh] w-[100vw] z-[2] text-center`}
    >
      <button
        className={`absolute top-6 left-6 lg:hidden mobileOpen`}
        id='closeMobileNav'
        onClick={() => {
          setMobileOpen(false)
          overlay(mobileOpen)
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M6 18L18 6M6 6l12 12'
          ></path>
        </svg>
      </button>
      <h1 className='p-2'>
        <a href='/'>
          <span className='text-gradient text-5xl font-extrabold tracking-widest'>
            NASTY SNACKS
          </span>
        </a>
      </h1>
      <ul className='mt-6 text-gradient text-center font-extrabold my-auto lg:flex gap-12 flex flex-col items-center justify-center p-6 child-hover:scale-105 child:hover-grow max-w-[100vw]'>
        <li>
          <a href='/#band'>BAND</a>
        </li>
        <li>
          <a href='/#music'>MUSIC</a>
        </li>
        <li>
          <a href='/#tour'>TOUR</a>
        </li>
        <li>
          <a href='/media'>MEDIA</a>
        </li>
        <li>
          <a href='/merch'>MERCH</a>
        </li>
        <li>
          <a href='/contact'>CONTACT</a>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className='text-center'>
      <button id='openMobileNav' className='absolute top-6 left-6'>
        <svg
          className='h-8 w-8 lg:hidden'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
          onClick={() => {
            setMobileOpen(true)
            overlay(mobileOpen)
          }}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          ></path>
        </svg>
      </button>
      <h1 className='p-2'>
        <a href='/'>
          <span className='text-gradient text-5xl font-extrabold tracking-widest'>
            NASTY SNACKS
          </span>
        </a>
      </h1>
      <ul className='text-gradient text-center font-extrabold lg:flex gap-12 flex-row hidden lg:visible items-center justify-center p-6 child-hover:scale-105 child:hover-grow max-w-[100vw]'>
        <li>
          <a href='/#band'>BAND</a>
        </li>
        <li>
          <a href='/#music'>MUSIC</a>
        </li>
        <li>
          <a href='/#tour'>TOUR</a>
        </li>
        <li>
          <a href='/media'>MEDIA</a>
        </li>
        <li>
          <a href='/merch'>MERCH</a>
        </li>
        <li>
          <a href='/contact'>CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}
