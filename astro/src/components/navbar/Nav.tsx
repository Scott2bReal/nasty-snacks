import { TopNav } from './TopNav'
import { MobileNav } from './MobileNav'
import { createEffect, createSignal } from 'solid-js'

export const Nav = () => {
  const [mobileOpen, setMobileOpen] = createSignal(false)
  const sections = ['shows', 'music', 'video', 'band', 'contact']
  const homeSections = ['shows', 'band', 'video', 'music']

  const lockScroll = (mobileOpen: boolean) => {
    if (mobileOpen) {
      document.body.classList.toggle('overflow-hidden')
    } else {
      document.body.classList.toggle('overflow-hidden')
    }
  }

  createEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setMobileOpen(false)
        lockScroll(false)
      }
    }

    return () => {
      window.addEventListener('resize', handleResize)
    }
  })

  const mobileControlData = {
    lockScroll: lockScroll,
    mobileOpen: mobileOpen,
    setMobileOpen: setMobileOpen,
  }

  return mobileOpen() ? (
    <MobileNav mobileControlData={mobileControlData} sections={sections} homeSections={homeSections} />
  ) : (
    <TopNav mobileControlData={mobileControlData} sections={sections} homeSections={homeSections}/>
  )
}
