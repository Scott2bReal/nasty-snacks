import type { StateUpdater } from 'preact/hooks'

interface Props {
  mobileControlData: {
    lockScroll: (mobileOpen: boolean) => void
    mobileOpen: boolean
    setMobileOpen: StateUpdater<boolean>
  }
  sections: string[]
  homeSections: string[]
}

export const MobileNav = ({ mobileControlData, sections, homeSections }: Props) => {
  const { lockScroll, mobileOpen, setMobileOpen } = mobileControlData

  return (
    <nav className={`h-[100vh] w-[100vw] z-[5] text-center bg-neutral-900 fixed top-0 bottom-0`}>
      <div className='flex gap-2 justify-between items-center'>
      <h1 className='py-2 pl-4 min-w-[357px]'>
          <a href='/'>
            <span className='text-gradient text-4xl font-extrabold tracking-widest'>
              NASTY SNACKS
            </span>
          </a>
        </h1>
        <button
          className={`pr-12`}
          id='closeMobileNav'
          aria-label='Close mobile nav'
          onClick={() => {
            setMobileOpen(false)
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
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
      </div>
      <ul className='mt-6 text-gradient text-center font-extrabold my-auto lg:flex gap-12 flex flex-col items-center justify-center p-6 max-w-[100vw]'>
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
