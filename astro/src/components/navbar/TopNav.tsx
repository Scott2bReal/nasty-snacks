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

export const TopNav = ({ mobileControlData, sections, homeSections }: Props) => {
  const { lockScroll, mobileOpen, setMobileOpen } = mobileControlData

  return (
    <nav className='text-center bg-neutral-900/90 mx-auto sticky top-0 backdrop-blur-xl z-40'>
      <div class='flex gap-2 items-center justify-evenly '>
        <h1 className='p-2 -translate-x-6 md:-translate-x-0'>
          <a href='/'>
            <span className='text-gradient text-5xl font-extrabold tracking-widest'>
              NASTY SNACKS
            </span>
          </a>
        </h1>
      </div>
      <ul className='top-0 text-gradient text-center font-extrabold md:flex gap-12 flex-row hidden md:visible items-center justify-center p-3 max-w-[100vw] mx-auto'>
        {sections.map((section) => {
          return (
            <li>
              <a
                rel='prefetch'
                href={`${homeSections.includes(section)
                    ? `/#${section}`
                    : `/${section}`
                  }`}
              >
                {section.toUpperCase()}
              </a>
            </li>
          )
        })}
      </ul>
        <button
          id='openMobileNav'
          aria-label='Open mobile nav'
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
    </nav>
  )
}
