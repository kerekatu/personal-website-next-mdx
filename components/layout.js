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
            background-color: var(--color-primary);
            color: var(--color-white);
          }

          :root[id='darker'] {
            /* DARK MODE */
            --color-white: #0f1214;
            --color-white-2: #202528;
            --color-white-3: #33393d;
            --color-white-4: #474d51;
            --color-black: #fff;
            --color-black-2: #f5f5f5;
            --color-black-3: #efefef;
            --color-gray: #888;
            --color-gray-2: #999;

            --color-header: rgba(15, 18, 20, 0);
            --color-header-2: rgba(15, 18, 20, 1);
            --color-headerBorder: 0 0.1rem rgba(33, 33, 33, 0);
            --color-headerBorder-2: 0 0.1rem rgba(33, 33, 33, 1);
            --color-background: #0f1214;
            --color-text: #fff;
            --color-primary: #46e87c;
            --color-secondary: #6eed98;

            --color-svg: invert(100%) sepia(100%) saturate(0%)
              hue-rotate(212deg) brightness(102%) contrast(102%);
            --color-svg-2: invert(82%) sepia(26%) saturate(1118%)
              hue-rotate(76deg) brightness(96%) contrast(89%);
          }

          :root[id='dark'] {
            /* DARK MODE */
            --color-white: #fff;
            --color-white-2: #2e2e2e;
            --color-white-3: #454545;
            --color-white-4: #5c5c5c;
            --color-black: #fff;
            --color-black-2: #f5f5f5;
            --color-black-3: #efefef;
            --color-gray: #888;
            --color-gray-2: #999;

            --color-header: rgba(23, 23, 23, 0);
            --color-header-2: rgba(23, 23, 23, 1);
            --color-headerBorder: 0 0.1rem rgba(40, 40, 40, 0);
            --color-headerBorder-2: 0 0.1rem rgba(40, 40, 40, 1);
            --color-background: #171717;
            --color-text: #fff;
            --color-primary: #e74699;
            --color-secondary: #ec6faf;

            --color-svg: invert(100%) sepia(100%) saturate(0%)
              hue-rotate(212deg) brightness(102%) contrast(102%);
            --color-svg-2: invert(42%) sepia(73%) saturate(3205%)
              hue-rotate(304deg) brightness(96%) contrast(88%);
          }

          :root[id='light'] {
            /* LIGHT MODE */
            --color-white: #fff;
            --color-white-2: #f5f5f5;
            --color-white-3: #efefef;
            --color-white-4: #dfe1e5;
            --color-black: #000;
            --color-black-2: #363636;
            --color-black-3: #696969;
            --color-gray: #999;
            --color-gray-2: #888;

            --color-header: rgba(255, 255, 255, 0);
            --color-header-2: rgba(255, 255, 255, 1);
            --color-headerBorder: 0 0.1rem rgba(0, 0, 0, 0);
            --color-headerBorder-2: 0 0.1rem rgba(0, 0, 0, 0.04);
            --color-background: #fff;
            --color-text: #000;
            --color-primary: #156dff;
            --color-secondary: #5192f3;

            --color-svg: invert(0%) sepia(95%) saturate(5%) hue-rotate(351deg)
              brightness(97%) contrast(100%);
            --color-svg-2: invert(37%) sepia(73%) saturate(4914%)
              hue-rotate(211deg) brightness(100%) contrast(103%);
          }

          :root {
            /* COLORS */
            --color-blue: #156dff;
            --color-blue-2: #5192f3;
            --color-aqua: #51f3b9;
            --color-yellow: #f3d951;
            --color-red: #e74699;

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
            --resizedHeaderHeight: 6.4rem;
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
            background-color: var(--color-background) !important;
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
            color: var(--color-text);
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          h1,
          h2,
          h3,
          h4 {
            font-weight: 700;
            font-family: var(--secondaryFont);
            color: currentColor;
          }

          h1 {
            font-size: var(--headingSize-1);
            line-height: var(--lineHeight-heading);
          }

          h2 {
            font-size: var(--headingSize-2);
            line-height: var(--lineHeight-heading);
          }

          h3 {
            font-size: var(--headingSize-3);
          }

          h4 {
            font-size: var(--headingSize-4);
          }

          h5 {
            font-size: var(--headingSize-5);
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
