import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'
import { CONSTANTS } from '@/utils/constants'

import CustomLink from '@/components/custom-link'
import Button from '@/components/button'

const Navbar = ({ isAnimationCompleted }) => {
  const { theme, handleTheme, themes } = useContext(ThemeContext)
  const currentIndex = themes.indexOf(theme)
  const changeIcon =
    currentIndex === 0 ? 'moon' : currentIndex === 1 ? 'cloud-moon' : 'sun'

  return (
    <nav>
      <List>
        <NavbarItems />
        <ListItem>
          <Button
            variant="transparent"
            customPadding="0"
            icon={changeIcon}
            onClick={() => isAnimationCompleted && handleTheme()}
          />
        </ListItem>
      </List>
    </nav>
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

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 3rem;
  list-style: none;
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

Navbar.propTypes = {
  isAnimationCompleted: PropTypes.bool.isRequired,
}

export default Navbar
