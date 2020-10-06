import CustomLink from '@/components/custom-link'
import Button from '@/components/button'
import { useContext } from 'react'
import { ThemeContext } from 'context/themeContext'

const Navbar = () => {
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
              variant="primary"
              label="Toggle Dark"
              onClick={() => handleTheme(theme === 'dark' ? 'light' : 'dark')}
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
        `}
      </style>
    </>
  )
}

export default Navbar
