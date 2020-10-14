import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'

import { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'
import { CONSTANTS } from '@/utils/constants'

import CustomLink from '@/components/custom-link'
import Button from '@/components/button'

const Navbar = ({ isAnimationCompleted }) => {
  const { theme, handleTheme, themes } = useContext(ThemeContext)
  const currentIndex = themes.indexOf(theme)
  const currentIcon =
    currentIndex === 0
      ? CONSTANTS.themeIcons[1]
      : currentIndex === 1
      ? CONSTANTS.themeIcons[2]
      : CONSTANTS.themeIcons[0]

  return (
    <NavbarWrapper>
      <ul>
        <NavbarItems />
        <ListItem>
          <ThemeButton
            type="button"
            onClick={() => isAnimationCompleted && handleTheme()}
          >
            <AnimatePresence exitBeforeEnter>
              {theme && currentIcon && (
                <ThemeIcon
                  src={currentIcon}
                  variants={themeButtonVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  key={currentIcon}
                />
              )}
            </AnimatePresence>
          </ThemeButton>
        </ListItem>
      </ul>
    </NavbarWrapper>
  )
}

export const NavbarItems = () => {
  return (
    <>
      {CONSTANTS.navbarItems.map((item) => {
        const { text, link } = item

        if (item?.type === 'button') {
          return (
            <ListItem key={text}>
              <a href={link} title={item?.title}>
                <Button label={item?.text} variant="secondary full" />
              </a>
            </ListItem>
          )
        } else {
          return (
            <ListItem key={text}>
              <CustomLink href={link}>{text}</CustomLink>
            </ListItem>
          )
        }
      })}
    </>
  )
}

const NavbarWrapper = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 0 3rem;
    list-style: none;
  }
`

const ThemeButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: opacity var(--baseTransition);
  }
`

const ThemeIcon = styled(motion.img)`
  display: block;
  height: 2rem;
  width: 2rem;
  filter: var(--color-svg);
`

const ListItem = styled.li`
  display: block;
  color: var(--color-black-3);
  line-height: 1;
  font-weight: 500;
  transition: color var(--baseTransition);

  &:hover:last-child {
    color: var(--color-black);
  }
`

const themeButtonVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },

  enter: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, mass: 0.2 },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { type: 'spring', stiffness: 120, mass: 0.2 },
  },
}

Navbar.propTypes = {
  isAnimationCompleted: PropTypes.bool.isRequired,
}

export default Navbar
