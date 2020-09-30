import { useState, useEffect } from 'react'
import css from 'styled-jsx/css'
import { motion } from 'framer-motion'

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
    boxShadow: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  resized: {
    height: '6.4rem',
    boxShadow: 'var(--borderBoxShadow)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}

const Header = () => {
  const [headerResize, setHeaderResize] = useState(false)
  const { className, styles } = getStyles()

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop

    if (distanceY > 20) {
      setHeaderResize(true)
    } else {
      setHeaderResize(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', resizeHeaderOnScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={false}
        animate={headerResize ? 'resized' : 'initial'}
        variants={animationVariants}
        className={className}
      >
        <Container main={false}>
          <div className={`${className} content`}>
            <CustomLink href="/">
              <Logo />
            </CustomLink>
            <Navbar />
          </div>
        </Container>
      </motion.header>

      {styles}
    </>
  )
}

export default Header
