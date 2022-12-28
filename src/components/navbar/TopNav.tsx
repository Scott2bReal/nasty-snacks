import type { StateUpdater } from 'preact/hooks'

interface Props {
  mobileControlData: {
    lockScroll: (mobileOpen: boolean) => void
    mobileOpen: boolean
    setMobileOpen: StateUpdater<boolean>
  }
}

export const TopNav = ({ mobileControlData }: Props) => {
  const { lockScroll, mobileOpen, setMobileOpen } = mobileControlData

  return (
    <nav className='text-center bg-neutral-900/90 mx-auto top-0'>
      <div class='flex gap-2 items-center justify-evenly '>
        <button
          id='openMobileNav'
          name='openMobileNav'
          class='ml-6 md:hidden'
          onClick={() => {
            setMobileOpen(true)
            lockScroll(mobileOpen)
          }}
        >
          <svg
            className='w-8 h-8'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            ></path>
          </svg>
        </button>
        <h1 className='p-2 -translate-x-6 md:-translate-x-0'>
          <a href='/'>
            <span className='text-gradient text-5xl font-extrabold tracking-widest'>
              NASTY SNACKS
            </span>
          </a>
        </h1>
      </div>
      <ul className='sticky top-0 text-gradient text-center font-extrabold md:flex gap-12 flex-row hidden md:visible items-center justify-center p-3 child-hover:scale-105 child:hover-grow max-w-[100vw] mx-auto'>
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
