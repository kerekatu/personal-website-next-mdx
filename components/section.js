import PropTypes from 'prop-types'

export const Section = ({
  gridDisplay = 'grid',
  gridColumns,
  gridGap,
  children
}) => {
  return (
    <>
      <section>{children}</section>

      <style jsx>
        {`
          section {
            display: ${gridDisplay};
            grid-template-columns: ${gridColumns};
            gap: ${gridGap};
            padding-top: 8rem;
          }
        `}
      </style>
    </>
  )
}

Section.propTypes = {
  gridDisplay: PropTypes.string,
  gridColumns: PropTypes.string.isRequired,
  gridGap: PropTypes.string.isRequired,
  children: PropTypes.node
}

export const SectionTitle = ({ title, children }) => {
  return (
    <>
      <div className="section-row">
        {title && <h2>{title}</h2>}
        <div className="section-row-right">{children}</div>
      </div>

      <style jsx>
        {`
          .section-row {
            display: flex;
            align-items: center;
            grid-column: 1 / -1;
            justify-content: space-between;
          }

          .section-row-right {
            display: flex;
            gap: 1rem;
          }
        `}
      </style>
    </>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
