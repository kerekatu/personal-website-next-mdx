import { useState, useEffect, useContext } from 'react'
import css from 'styled-jsx/css'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/context/themeContext'

import Navbar from '@/components/navbar'
import Container from '@/components/container'
import Logo from '@/components/logo'
import CustomLink from '@/components/custom-link'

function getStyles() {
  return css.resolve`
    header {
      position: fixed;
      width: 100%;
      height: var(--baseHeaderHeight);
      top: 0;
      z-index: var(--headerZ);
      background-color: transparent;
    }

    .content {
      opacity: 1;
      display: flex;
      align-items: center;
      height: inherit;
      justify-content: space-between;
    }
  `
}

const animationVariants = {
  initial: {
    height: 'var(--baseHeaderHeight)',
    boxShadow: 'var(--color-headerBorder)',
    backgroundColor: 'var(--color-header)',
  },
  resized: {
    height: 'var(--resizedHeaderHeight)',
    boxShadow: 'var(--color-headerBorder-2)',
    backgroundColor: 'var(--color-header-2)',
  },
}

const Header = () => {
  const [isHeaderResized, setIsHeaderResized] = useState(false)
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(true)
  const { className, styles } = getStyles()
  const { theme } = useContext(ThemeContext)

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop

    if (distanceY > 20) {
      setIsHeaderResized(true)
    } else {
      setIsHeaderResized(false)
    }
  }

  useEffect(() => {
    if (isHeaderResized && isAnimationCompleted) {
      document.getElementsByTagName('header')[0].style.backgroundColor =
        'var(--color-header-2)'
      document.getElementsByTagName('header')[0].style.boxShadow =
        'var(--color-headerBorder-2)'
    }
  }, [theme])

  useEffect(() => {
    const listener = window.addEventListener('scroll', resizeHeaderOnScroll)

    return () => listener
  })

  return (
    <>
      <motion.header
        initial={false}
        animate={isHeaderResized ? 'resized' : 'initial'}
        variants={animationVariants}
        className={className}
        onAnimationStart={() => setIsAnimationCompleted(false)}
        onAnimationComplete={() => setIsAnimationCompleted(true)}
      >
        <Container main={false}>
          <div className={`${className} content`}>
            <CustomLink href="/">
              <Logo />
            </CustomLink>
            <Navbar animationCompleted={isAnimationCompleted} />
          </div>
        </Container>
      </motion.header>

      {styles}
    </>
  )
}

export default Header
