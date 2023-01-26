import { createSignal, Show } from 'solid-js'

const [isMobileOpen, setIsMobileOpen] = createSignal(false)
const sections = ['shows', 'music', 'video', 'band', 'contact']
const homeSections = ['shows', 'band', 'video', 'music']

function TopNav() {
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
          setIsMobileOpen(true)
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

function MobileNav() {
  return (
    <nav class={`h-[100vh] w-[100vw] z-[5] text-center bg-neutral-900 top-0 bottom-0 pr-2`}>
      <div class='flex gap-2 justify-between items-center'>
        <h1 class='p-4 md:pl-4 min-w-[357px] opacity-0'>
          <a href='/'>
            <span class='text-gradient text-4xl font-extrabold tracking-widest'>
              NASTY SNACKS
            </span>
          </a>
        </h1>
        <button
          class='pr-12 -translate-x-4'
          id='closeMobileNav'
          aria-label='Close mobile nav'
          onClick={() => {
            setIsMobileOpen(false)
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
      </div>
      <ul class='mt-6 text-gradient text-center font-extrabold my-auto lg:flex gap-12 flex flex-col items-center justify-center p-6 max-w-[100vw]'>
        <li>
          <a
            href='/'
            onClick={() => {
              setIsMobileOpen(false)
            }}
          >
            <span class='text-3xl'>HOME</span>
          </a>
        </li>
        {sections.map((section) => {
          return (
            <li>
              <a
                href={`${homeSections.includes(section)
                  ? `/#${section}`
                  : `/${section}`
                  }`}
                onClick={() => {
                  setIsMobileOpen(false)
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

export default function Nav() {
  return (
    <Show
      when={isMobileOpen()}
      fallback={<TopNav />}
    >
      <MobileNav />
    </Show>
  )
}
