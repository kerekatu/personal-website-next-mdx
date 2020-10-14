import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { getCurrentYear } from '@/lib/date'

import { Section } from '@/layouts/section'
import Container from '@/layouts/container'
import { CONSTANTS } from 'utils/constants'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container main={false}>
        <Section gridColumns="repeat(2, 1fr)" initialPadding={false}>
          <Copyright>
            <p>
              <strong>Konrad Rosa</strong> &copy; {getCurrentYear()}
            </p>
          </Copyright>
          <Social>
            {CONSTANTS.footerSocialItems.map((item) => {
              const { title, iconLocation, link } = item

              return (
                <SocialIcon
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  title={title}
                  styleColor={title}
                  key={title}
                >
                  <img src={iconLocation} alt={title} />
                </SocialIcon>
              )
            })}
          </Social>
        </Section>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: relative;
  height: 10rem;
  margin-top: 10rem;
`

const Copyright = styled.div`
  align-self: center;
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`

const SocialIcon = styled.a`
  padding: 0.8rem 1rem;
  border-radius: var(--buttonRadius);
  transition: background-color var(--baseTransition);

  &:hover {
    background-color: var(--color-white-2);
  }

  & > img {
    display: block;
    width: 2.6rem;
    height: 2.6rem;
    filter: var(--color-svg);
    transition: filter var(--baseTransition);
  }

  &:hover > img {
    ${({ styleColor }) => {
      if (styleColor === 'Github') {
        return `filter: invert(27%) sepia(93%) saturate(1609%) hue-rotate(197deg)
      brightness(93%) contrast(106%);`
      } else if (styleColor === 'Linkedin') {
        return `filter: invert(27%) sepia(94%) saturate(1741%) hue-rotate(180deg)
       brightness(90%) contrast(101%);`
      } else if (styleColor === 'Twitter') {
        return `filter: invert(27%) sepia(94%) saturate(1741%) hue-rotate(180deg)
        brightness(90%) contrast(101%);`
      } else if (styleColor === 'Email') {
        return `filter: invert(40%) sepia(95%) saturate(553%) hue-rotate(321deg)
        brightness(83%) contrast(101%);`
      }
    }};
  }
`

Footer.propTypes = {
  includeNewsletter: PropTypes.bool,
}

export default Footer
