import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const CustomLink = ({ as, href, children, ...props }) => {
  const router = useRouter()
  let activeLink

  if (router.pathname === href) {
    activeLink = 'active'
  }

  return (
    <>
      <Link as={as} href={href}>
        <a className={activeLink} {...props}>
          {children}
        </a>
      </Link>

      <style jsx>
        {`
          a:hover {
            color: var(--color-black);
          }

          .active {
            color: var(--color-black);
          }
        `}
      </style>
    </>
  )
}

CustomLink.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  children: PropTypes.node
}

export default CustomLink
