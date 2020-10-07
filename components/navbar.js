import CustomLink from '@/components/custom-link'
import Button from '@/components/button'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ animationCompleted }) => {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <>
      <nav>
        <ul>
          <li>
            <CustomLink href="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink href="/blog">Blog</CustomLink>
          </li>
          <li>
            <CustomLink href="/contact" title="Contact Me">
              <Button label="Hire me" variant="secondary full" />
            </CustomLink>
          </li>
          <li>
            <Button
              variant="transparent"
              customPadding="0"
              icon={theme === 'dark' ? faSun : faMoon}
              onClick={() =>
                animationCompleted &&
                handleTheme(theme === 'dark' ? 'light' : 'dark')
              }
            ></Button>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          nav {
          }

          ul {
            display: flex;
            align-items: center;
            gap: 0 3rem;
            list-style: none;
          }

          li {
            display: block;
            color: var(--color-black-3);
            line-height: 1;
            font-weight: 500;
          }

          li:hover:last-child {
            color: var(--color-black);
          }
        `}
      </style>
    </>
  )
}

Navbar.propTypes = {
  animationCompleted: PropTypes.bool.isRequired,
}

export default Navbar
