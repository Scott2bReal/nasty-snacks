import type { StateUpdater } from 'preact/hooks'

interface Props {
  mobileControlData: {
    lockScroll: (mobileOpen: boolean) => void
    mobileOpen: boolean
    setMobileOpen: StateUpdater<boolean>
  }
}

export const MobileNav = ({ mobileControlData }: Props) => {
  const { lockScroll, mobileOpen, setMobileOpen } = mobileControlData

  const sections = ['band', 'music', 'tour', 'media', 'merch', 'contact']
  const homeSections = ['band', 'music', 'tour']

  return (
    <nav className={`h-[100vh] w-[100vw] z-[2] text-center bg-neutral-900`}>
      <div class='flex gap-2 justify-evenly items-center'>
        <button
          className={`ml-6`}
          id='closeMobileNav'
          name='closeMobileNav'
          onClick={() => {
            setMobileOpen(false)
            lockScroll(mobileOpen)
          }}
        >
          <svg
            class='w-8 h-8'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
        <h1 className='p-2 -translate-x-6'>
          <a href='/'>
            <span className='text-gradient text-5xl font-extrabold tracking-widest'>
              NASTY SNACKS
            </span>
          </a>
        </h1>
      </div>
      <ul className='mt-6 text-gradient text-center font-extrabold my-auto lg:flex gap-12 flex flex-col items-center justify-center p-6 child-hover:scale-105 child:hover-grow max-w-[100vw]'>
        {sections.map((section) => {
          return (
            <li>
              <a
                href={`${
                  homeSections.includes(section)
                    ? `/#${section}`
                    : `/${section}`
                }`}
                onClick={() => {
                  setMobileOpen(false)
                  lockScroll(mobileOpen)
                }}
              >
                {section.toUpperCase()}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
