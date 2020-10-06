import PropTypes from 'prop-types'

export const Section = ({
  gridDisplay = 'grid',
  gridColumns,
  gridGap,
  initialPadding = true,
  children
}) => {
  return (
    <>
      <section>{children}</section>

      <style jsx>
        {`
          section {
            display: ${gridDisplay};
            ${gridDisplay === 'grid' &&
            `grid-template-columns: ${gridColumns || 0}`};
            gap: ${gridGap || 0};
            padding: ${initialPadding ? '8rem 0' : '0'};
            height: 100%;
          }
        `}
      </style>
    </>
  )
}

Section.propTypes = {
  gridDisplay: PropTypes.string,
  gridColumns: PropTypes.string.isRequired,
  gridGap: PropTypes.string,
  initialPadding: PropTypes.bool,
  children: PropTypes.node
}

export const SectionRow = ({ title, children }) => {
  return (
    <>
      <div className="section-row">
        {title && <h2>{title}</h2>}
        <div className="section-row-items">{children}</div>
      </div>

      <style jsx>
        {`
          .section-row {
            display: flex;
            align-items: center;
            grid-column: 1 / -1;
            justify-content: space-between;
          }

          .section-row-items {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
        `}
      </style>
    </>
  )
}

SectionRow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
