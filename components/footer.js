import PropTypes from 'prop-types'

import { Section } from '@/components/section'
import Container from '@/components/container'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer>
        <Container main={false}>
          <Section gridColumns="repeat(2, 1fr)" initialPadding={false}>
            <div className="footer-copyright">
              <span>
                <strong>Konrad Rosa</strong> © {currentYear}
              </span>
            </div>
            <div className="footer-social">
              <a
                href="https://www.github.com/kerekatu"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/icons/github-outline.svg"
                  alt="Github Icon"
                  className="icon-github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/konradtrosa/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/icons/linkedin-outline.svg"
                  alt="Linkedin Icon"
                  className="icon-linkedin"
                />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/icons/twitter-outline.svg"
                  alt="Twitter Icon"
                  className="icon-twitter"
                />
              </a>
              <a href="mailto:konradtrosa@gmail.com">
                <img
                  src="/static/icons/email-outline.svg"
                  alt="Email Icon"
                  className="icon-email"
                />
              </a>
            </div>
          </Section>
        </Container>
      </footer>

      <style jsx>
        {`
          footer {
            position: relative;
            height: 10rem;
            margin-top: 10rem;
          }

          .footer-copyright {
            display: flex;
            align-items: center;
          }

          .footer-social {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 1rem;
          }

          .footer-social > a > img {
            display: block;
            width: 2.6rem;
            height: 2.6rem;
          }

          .footer-social > a {
            padding: 0.8rem 1rem;
            border-radius: var(--buttonRadius);
          }

          .footer-social > a:hover {
            background-color: var(--color-white-2);
          }

          .icon-github,
          .icon-twitter,
          .icon-linkedin,
          .icon-email {
            filter: var(--color-svg);
          }

          .footer-social > a:hover .icon-github {
            filter: invert(27%) sepia(93%) saturate(1609%) hue-rotate(197deg)
              brightness(93%) contrast(106%);
          }

          .footer-social > a:hover .icon-twitter {
            filter: invert(43%) sepia(100%) saturate(386%) hue-rotate(159deg)
              brightness(104%) contrast(107%);
          }

          .footer-social > a:hover .icon-linkedin {
            filter: invert(27%) sepia(94%) saturate(1741%) hue-rotate(180deg)
              brightness(90%) contrast(101%);
          }

          .footer-social > a:hover .icon-linkedin {
            filter: invert(27%) sepia(94%) saturate(1741%) hue-rotate(180deg)
              brightness(90%) contrast(101%);
          }

          .footer-social > a:hover .icon-email {
            filter: invert(40%) sepia(95%) saturate(553%) hue-rotate(321deg)
              brightness(83%) contrast(101%);
          }
        `}
      </style>
    </>
  )
}

Footer.propTypes = {
  includeNewsletter: PropTypes.bool,
}

export default Footer
