import PropTypes from 'prop-types'
import Container from '@/components/container'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />

      <style jsx global>
        {`
          ::selection {
            background-color: var(--color-blue);
            color: var(--color-white);
          }

          :root {
            /* COLORS */
            --color-white: #fff;
            --color-white-2: #f5f5f5;
            --color-white-3: #efefef;
            --color-black: #000;
            --color-black-2: #363636;
            --color-black-3: #696969;
            --color-gray: #999;
            --color-gray-2: #888;
            --color-blue: #156dff;
            --color-aqua: #51f3b9;
            --color-yellow: #f3d951;

            /* BORDERS */
            --cardRadius: 1.6rem;
            --buttonRadius: 1rem;
            --buttonRadius-max: 100rem;
            --cardBorder: 0.1rem solid var(--color-white-3);

            /* BOX-SHADOWS */
            --cardBoxShadow: 0 0.8rem 1rem 0 rgba(0, 0, 0, 0.02);
            --borderBoxShadow: 0 0.1rem rgba(0, 0, 0, 0.04);

            /* FONTS */
            --baseFont: 'Inter', sans-serif;
            --secondaryFont: 'Ubuntu', sans-serif;
            --bigFontSize: 9.6rem;
            --baseFontSize: 1.6rem;
            --smallFontSize: 1.2rem;
            --smallestFontSize: 1rem;
            --headingSize-1: 6.4rem;
            --headingSize-2: 4.8rem;
            --headingSize-3: 3.6rem;
            --headingSize-4: 2.4rem;
            --headingSize-5: 1.8rem;

            --lineHeight-body: 1.58;
            --lineHeight-heading: 1.2;

            /* Z-INDEXES */
            --headerZ: 10;
            --highestZ: 100;

            /* SIZES */
            --baseHeaderHeight: 8rem;
            --baseMainWidth: 100rem;
          }

          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          html,
          body {
            min-height: 100vh;
          }

          body {
            font-size: var(--baseFontSize);
            font-family: var(--baseFont);
            font-weight: 400;
            line-height: var(--lineHeight-body);
            text-rendering: optimizeLegibility;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
