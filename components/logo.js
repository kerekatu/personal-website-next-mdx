import styled from '@emotion/styled'
import { CONSTANTS } from '@/utils/constants'

const Logo = () => {
  return <LogoWrapper src={CONSTANTS.logoLocation} alt="Logo" />
}

const LogoWrapper = styled.img`
  display: block;
  height: 3.6rem;
  filter: var(--color-svg);

  &:hover {
    filter: var(--color-svg-2);
  }
`

export default Logo
