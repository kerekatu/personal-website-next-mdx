import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const CustomLink = ({ as, href, children, ...props }) => {
  const router = useRouter()
  let activeLink

  if (router.pathname === href) {
    activeLink = 'active'
  }

  return (
    <Link as={as} href={href}>
      <LinkWrapper className={activeLink} {...props}>
        {children}
      </LinkWrapper>
    </Link>
  )
}

const LinkWrapper = styled.a`
  transition: color var(--baseTransition);

  &:hover {
    cursor: pointer;
    color: var(--color-black);
  }

  &.active {
    color: var(--color-black);
  }
`

CustomLink.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  children: PropTypes.node,
}

export default CustomLink
