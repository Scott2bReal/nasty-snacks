import type { Accessor, Setter } from "solid-js"

interface Props {
  mobileControlData: {
    lockScroll: (mobileOpen: boolean) => void
    mobileOpen: Accessor<boolean>
    setMobileOpen: Setter<boolean>
  }
  sections: string[]
  homeSections: string[]
}

export const TopNav = ({
  mobileControlData,
  sections,
  homeSections,
}: Props) => {
  return (
    <nav class='text-center bg-neutral-900/20 flex justify-between fixed w-[100vw] top-0 left-0 backdrop-blur-xl z-40 pr-2'>
      <h1 class='py-4 min-w-[357px]'>
        <a href='/'>
          <span class='text-gradient text-4xl font-extrabold tracking-widest'>
            NASTY SNACKS
          </span>
        </a>
      </h1>
      <ul class='reverse-text-gradient font-extrabold wide:flex gap-12 flex-row hidden wide:visible items-end justify-evenly p-3 max-w-[100vw]'>
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
          class='pr-12 wide:hidden -translate-x-2'
          onClick={() => {
            mobileControlData.setMobileOpen(true)
            mobileControlData.lockScroll(mobileControlData.mobileOpen())
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
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            ></path>
          </svg>
        </button>
    </nav>
  )
}
