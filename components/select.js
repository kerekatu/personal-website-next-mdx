import { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import useOnClickOutside from '@/hooks/useOnClickOutside'
import Button from '@/components/button'
import styled from '@emotion/styled'

const Select = ({ options, selectedOption, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef()
  useOnClickOutside(ref, () => setIsOpen(false))

  const handleClickOption = (option) => {
    setIsOpen(() => !isOpen)
    handleSelect(option)
  }

  return (
    <SelectWrapper ref={ref}>
      <div className="select">
        <Button
          variant={`transparent border ${isOpen ? 'active' : ''}`}
          label={selectedOption}
          onClick={() => setIsOpen(!isOpen)}
          icon={isOpen ? 'chevron-up' : 'chevron-down'}
        />
      </div>

      <SelectDropdown styleDisplay={isOpen}>
        <ul>
          {options.map((option, index) => {
            return option === selectedOption ? null : (
              <li key={index} onClick={() => handleClickOption(option)}>
                {option}
              </li>
            )
          })}
        </ul>
      </SelectDropdown>
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  position: relative;

  & .select {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: var(--headingSize-4);
    color: var(--color-black-3);
  }
`

const SelectDropdown = styled.div`
  ${({ styleDisplay }) => ({
    display: styleDisplay ? 'block' : 'none',
  })};
  position: absolute;
  top: 4.6rem;
  right: 0;
  white-space: nowrap;
  min-width: 100%;
  border-radius: var(--buttonRadius);
  background-color: var(--color-white-3);

  & ul {
    list-style: none;
    padding: 1rem 0;
    text-align: center;
  }

  & li {
    cursor: pointer;
    font-size: var(--headingSize-5);
    color: var(--color-black-3);
    font-weight: 500;
    padding: 0.5rem 2rem;
    transition: background-color var(--baseTransition);
  }

  & li:hover {
    background-color: var(--color-white-4);
  }
`

Select.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

export default Select
