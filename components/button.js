import PropTypes from 'prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'

const Button = ({
  type,
  label,
  variant,
  icon,
  customPadding,
  customWidth,
  ...props
}) => {
  return (
    <ButtonWrapper
      type={type ?? 'button'}
      styleIcon={icon}
      styleCustomPadding={customPadding}
      styleCustomWidth={customWidth}
      className={variant}
      {...props}
    >
      {label} {icon && <Icon icon={icon} width="0" />}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: var(--baseFontSize);
  font-family: var(--baseFont);
  font-weight: 500;
  line-height: 1;
  ${({ styleIcon, styleCustomPadding, styleCustomWidth }) => ({
    display: styleIcon ? 'flex' : 'block',
    gap: styleIcon && '0.8rem',
    alignItems: styleIcon && 'center',
    padding: styleCustomPadding && `${styleCustomPadding} !important`,
    width: styleCustomWidth && `${styleCustomWidth} !important`,
  })}

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  &.primary,
  &.secondary {
    padding: 1rem 3.4rem;
  }

  &.primary {
    background-color: var(--color-primary);
    border-radius: var(--buttonRadius);
    color: var(--color-white);
    transition: background-color var(--baseTransition);
  }

  &.primary:hover {
    background-color: var(--color-secondary);
  }

  &.secondary {
    border: 0.2rem solid var(--color-primary);
    border-radius: var(--buttonRadius);
    font-weight: 500;
    color: var(--color-primary);
    transition: var(--baseTransition);
    transition-property: border, color, background-color;
  }

  &.secondary:hover {
    border: 0.2rem solid transparent;
    color: var(--color-white);
    background-color: var(--color-primary);
  }

  &.secondary.active {
    border: 0.2rem solid transparent;
    color: var(--color-white);
    background-color: var(--color-primary);
  }

  &.tertiary {
    font-size: var(--headingSize-4);
    color: var(--color-black-3);
    border-radius: var(--buttonRadius);
    padding: 0.6rem 1rem;
    transition: background-color var(--baseTransition);
  }

  &.tertiary:hover {
    background-color: var(--color-white-2);
  }

  &.tertiary.active {
    background-color: var(--color-white-2);
  }

  &.quaternary {
    color: var(--color-primary);
    border-radius: var(--buttonRadius-max);
    border: 0.2rem solid var(--color-white-3);
    padding: 0.6rem 1.5rem;
    font-size: var(--headingSize-5);
    transition: border var(--baseTransition);
  }

  &.quaternary:hover {
    border: 0.2rem solid var(--color-primary);
  }

  &.quaternary.active {
    background-color: var(--color-primary);
    border: 0.2rem solid var(--color-primary);
    color: var(--color-white);
  }

  &.transparent {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    height: 3.6rem;
    padding: 0.6rem 2rem;
    font-size: var(--headingSize-5);
    color: currentColor;
  }

  &.transparent > svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  &.border {
    border: 0.2rem solid var(--color-white-3);
    border-radius: var(--buttonRadius);
    transition: border var(--baseTransition);
  }

  &.border:hover {
    border: 0.2rem solid var(--color-white-4);
  }

  &.border.active {
    border: 0.2rem solid var(--color-white-4);
  }

  &.full {
    border-radius: var(--buttonRadius-max) !important;
  }
`

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.any,
  customPadding: PropTypes.string,
  customWidth: PropTypes.string,
}

export default Button
