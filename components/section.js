import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export const Section = ({
  gridDisplay = 'grid',
  gridColumns,
  gridGap,
  initialPadding = true,
  children,
}) => {
  return (
    <SectionWrapper
      styleDisplay={gridDisplay}
      styleColumns={gridColumns}
      styleGap={gridGap}
      styleInitialPadding={initialPadding}
    >
      {children}
    </SectionWrapper>
  )
}

export const SectionRow = ({ title, children }) => {
  return (
    <SelectRowWrapper>
      {title && <h2>{title}</h2>}
      <div className="section-row-items">{children}</div>
    </SelectRowWrapper>
  )
}

const SectionWrapper = styled.section(
  ({ styleDisplay, styleColumns, styleGap, styleInitialPadding }) => ({
    display: styleDisplay,
    gridTemplateColumns: (styleDisplay === 'grid' && styleColumns) || '1fr',
    gap: styleGap || '0',
    padding: styleInitialPadding ? '8rem 0' : '0',
    height: '100%',
  })
)

const SelectRowWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1 / -1;
  justify-content: space-between;

  & .section-row-items {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

Section.propTypes = {
  gridDisplay: PropTypes.string,
  gridColumns: PropTypes.string,
  gridGap: PropTypes.string,
  initialPadding: PropTypes.bool,
  children: PropTypes.node,
}

SectionRow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
