import Container from '@/components/container'
import Logo from './logo'

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <div className="content">
            <Logo />
          </div>
        </Container>
      </header>

      <style jsx>
        {`
          header {
            position: sticky;
            top: 0;
            height: var(--baseHeaderHeight);
          }

          .content {
            display: flex;
            align-items: center;
            height: inherit;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  )
}

export default Header
