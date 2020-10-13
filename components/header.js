import { useState, useEffect, useContext } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/context/themeContext'
import useResizeHeaderOnScroll from '@/hooks/useResizeHeaderOnScroll'

import Navbar from '@/components/navbar'
import Container from '@/components/container'
import Logo from '@/components/logo'
import CustomLink from '@/components/custom-link'

const Header = () => {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(true)
  const { isHeaderResized } = useResizeHeaderOnScroll()
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    // TODO: Update CSS custom properties in animationVariants when theme changes

    if (isHeaderResized && isAnimationCompleted) {
      document.getElementById('header').style.backgroundColor =
        'var(--color-header-2)'
      document.getElementById('header').style.boxShadow =
        'var(--color-headerBorder-2)'
    }
  }, [theme])

  return (
    <HeaderWrapper
      id="header"
      initial={false}
      animate={isHeaderResized ? 'resized' : 'initial'}
      variants={animationVariants}
      onAnimationStart={() => setIsAnimationCompleted(false)}
      onAnimationComplete={() => setIsAnimationCompleted(true)}
    >
      <Container main={false}>
        <Content>
          <CustomLink href="/">
            <Logo />
          </CustomLink>
          <Navbar isAnimationCompleted={isAnimationCompleted} />
        </Content>
      </Container>
    </HeaderWrapper>
  )
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

const HeaderWrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: var(--baseHeaderHeight);
  top: 0;
  z-index: var(--headerZ);
  background-color: transparent;
`

const Content = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  height: inherit;
  justify-content: space-between;
`

export default Header
