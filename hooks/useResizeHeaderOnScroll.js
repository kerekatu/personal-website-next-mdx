import { useState, useEffect } from 'react'

export default function useResizeHeaderOnScroll() {
  const [isHeaderResized, setIsHeaderResized] = useState(false)

  function handleResizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop

    if (distanceY > 20) {
      setIsHeaderResized(true)
    } else {
      setIsHeaderResized(false)
    }
  }

  useEffect(() => {
    const listener = window.addEventListener(
      'scroll',
      handleResizeHeaderOnScroll
    )

    return () => listener
  })

  return { isHeaderResized }
}
