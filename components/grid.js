import PropTypes from 'prop-types'

const Grid = ({
  gridDisplay = 'flex',
  gridColumns = 'auto',
  gridRows = 'auto',
  gridGap = '0',
  children
}) => {
  return (
    <>
      <section className="grid">{children}</section>
      <style jsx>
        {`
          .grid {
            display: ${gridDisplay};
            grid-template-columns: ${gridColumns};
            grid-template-rows: ${gridRows};
            gap: ${gridGap};
          }
        `}
      </style>
    </>
  )
}

Grid.propTypes = {
  gridDisplay: PropTypes.string,
  gridColumns: PropTypes.string,
  gridRows: PropTypes.string,
  gridGap: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Grid
