import { createSignal, Show } from 'solid-js'
import SolidSocials from '../socials/SolidSocials'

const [isMobileOpen, setIsMobileOpen] = createSignal(false)
const sections = ["shows", "music", "video", "band", "contact"]
const homeSections = ["shows", "band", "video", "music"]

function TopNav() {
  return (
    <nav class="fixed left-0 top-0 z-40 flex w-[100vw] justify-between bg-neutral-900/20 pr-2 text-center backdrop-blur-xl">
      <h1 class="min-w-[357px] py-4">
        <a href="/">
          <span class="text-gradient text-4xl font-extrabold tracking-widest">
            NASTY SNACKS
          </span>
        </a>
      </h1>
      <ul class="reverse-text-gradient hidden max-w-[100vw] flex-row items-end justify-evenly gap-12 p-3 font-extrabold wide:visible wide:flex">
        {sections.map((section) => {
          return (
            <li>
              <a
                rel="prefetch"
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
        id="openMobileNav"
        aria-label="Open mobile nav"
        class="-translate-x-2 pr-12 wide:hidden"
        onClick={() => {
          setIsMobileOpen(true)
        }}
      >
        <svg
          class="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </button>
    </nav>
  )
}

function MobileNav() {
  return (
    <nav
      class={`bottom-0 top-0 z-[5] h-[100vh] w-[100vw] bg-neutral-900 pr-2 text-center`}
    >
      <div class="flex items-center justify-between gap-2">
        <h1 class="min-w-[357px] p-4 opacity-0 md:pl-4">
          <a href="/">
            <span class="text-gradient text-4xl font-extrabold tracking-widest">
              NASTY SNACKS
            </span>
          </a>
        </h1>
        <button
          class="-translate-x-4 pr-12"
          id="closeMobileNav"
          aria-label="Close mobile nav"
          onClick={() => {
            setIsMobileOpen(false)
          }}
        >
          <svg
            class="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="text-gradient my-auto mt-6 flex max-w-[100vw] flex-col items-center justify-center gap-12 p-6 text-center font-extrabold lg:flex">
        <li>
          <a
            href="/"
            onClick={() => {
              setIsMobileOpen(false)
            }}
          >
            <span class="text-3xl">HOME</span>
          </a>
        </li>
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
                  setIsMobileOpen(false)
                }}
              >
                {section.toUpperCase()}
              </a>
            </li>
          )
        })}
      </ul>
      <SolidSocials />
    </nav>
  )
}

export default function Nav() {
  return (
    <Show when={isMobileOpen()} fallback={<TopNav />}>
      <MobileNav />
    </Show>
  )
}
