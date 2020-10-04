import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import Button from '@/components/button'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Select = ({ options, selectedOption, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef()
  useOnClickOutside(ref, () => setIsOpen(false))

  const handleClickOption = (option) => {
    setIsOpen(() => !isOpen)
    handleSelect(option)
  }

  return (
    <>
      <div className="select-container" ref={ref}>
        <div className="select">
          <Button
            variant="transparent border"
            label={selectedOption}
            onClick={() => setIsOpen(!isOpen)}
            icon={isOpen ? faChevronUp : faChevronDown}
          />
        </div>

        <div className="select-dropdown">
          <ul>
            {options.map((option, index) => (
              <>
                {option === selectedOption ? null : (
                  <li key={index} onClick={() => handleClickOption(option)}>
                    {option}
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .select-container {
            position: relative;
          }

          .select {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: var(--headingSize-4);
          }

          .select-dropdown {
            position: absolute;
            top: 4rem;
            right: 0;
            white-space: nowrap;
            min-width: 100%;
            border-radius: var(--buttonRadius);
            background-color: var(--color-white-2);
          }

          ul {
            list-style: none;
            padding: 1rem 0;
            text-align: center;
          }

          li {
            cursor: pointer;
            font-size: var(--headingSize-5);
            color: var(--color-black-3);
            font-weight: 500;
            padding: 0.5rem 2rem;
          }

          li:hover {
            background-color: var(--color-white-3);
          }
        `}
      </style>

      <style jsx>
        {`
          .select-dropdown {
            display: ${isOpen ? 'block' : 'none'};
          }
        `}
      </style>
    </>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

export default Select
