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

export const TopNav = ({
  mobileControlData,
  sections,
  homeSections,
}: Props) => {
  const { lockScroll, mobileOpen, setMobileOpen } = mobileControlData

  return (
    <nav className='text-center bg-neutral-900/80 flex justify-between fixed w-full top-0 backdrop-blur-xl z-40'>
      <h1 className='py-2 md:pl-4 min-w-[357px]'>
        <a href='/'>
          <span className='text-gradient text-4xl font-extrabold tracking-widest'>
            NASTY SNACKS
          </span>
        </a>
      </h1>
      <ul className='reverse-text-gradient font-extrabold md:flex gap-12 flex-row hidden lg:visible items-end justify-evenly p-3 max-w-[100vw]'>
        {sections.map((section) => {
          return (
            <li>
              <a
                rel='prefetch'
                href={`${
                  homeSections.includes(section)
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
        class='pr-12 md:hidden'
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
