import { useEffect, useState } from 'preact/hooks'
import { TopNav } from './TopNav'
import { MobileNav } from './MobileNav'

export const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const sections = ['shows', 'music', 'video', 'contact']
  const homeSections = ['shows']

  const lockScroll = (mobileOpen: boolean) => {
    if (mobileOpen) {
      document.body.classList.toggle('overflow-hidden')
      document.body.classList.toggle('h-[100vh]')
    } else {
      document.body.classList.toggle('overflow-hidden')
      document.body.classList.toggle('h-[100vh]')
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setMobileOpen(false)
        lockScroll(false)
      }
    }

    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  const mobileControlData = {
    lockScroll: lockScroll,
    mobileOpen: mobileOpen,
    setMobileOpen: setMobileOpen,
  }

  return mobileOpen ? (
    <MobileNav mobileControlData={mobileControlData} sections={sections} homeSections={homeSections} />
  ) : (
    <TopNav mobileControlData={mobileControlData} sections={sections} homeSections={homeSections}/>
  )
}
