import { useEffect, useState } from 'preact/hooks'
import { TopNav } from './TopNav'
import { MobileNav } from './MobileNav'

export const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const overlay = (mobileOpen: boolean) => {
    if (mobileOpen) {
      document.body.classList.toggle('overflow-hidden')
    } else {
      document.body.classList.toggle('overflow-hidden')
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setMobileOpen(false)
        overlay(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const mobileControlData = {
    overlay: overlay,
    mobileOpen: mobileOpen,
    setMobileOpen: setMobileOpen,
  }

  return mobileOpen ? (
    <MobileNav mobileControlData={mobileControlData} />
  ) : (
    <TopNav mobileControlData={mobileControlData} />
  )
}
