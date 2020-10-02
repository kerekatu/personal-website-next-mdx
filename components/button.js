import PropTypes from 'prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const Button = ({ type, label, variant, icon, customPadding, ...props }) => {
  return (
    <>
      <button type={type ?? 'button'} className={variant} {...props}>
        {label} {icon && <Icon icon={icon} />}
      </button>

      <style jsx>
        {`
          button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: var(--baseFontSize);
            font-family: var(--baseFont);
            font-weight: 500;
            line-height: 1;
          }

          button:disabled {
            opacity: 0.6;
            cursor: default;
          }

          .primary,
          .secondary {
            padding: 1rem 3.4rem;
          }

          .primary {
            background-color: var(--color-blue);
            border-radius: var(--buttonRadius);
            color: var(--color-white);
          }

          .secondary {
            border: 0.2rem solid var(--color-blue);
            border-radius: var(--buttonRadius);
            color: var(--color-blue);
          }

          .secondary:hover {
            border: 0.2rem solid transparent;
            color: var(--color-white);
            background-color: var(--color-blue);
          }

          .tertiary {
            font-size: var(--headingSize-4);
            color: var(--color-black-3);
            border-radius: var(--buttonRadius);
            padding: 0.6rem 1rem;
          }

          .tertiary:hover {
            background-color: var(--color-white-2);
          }

          .tertiary.active {
            background-color: var(--color-white-2);
          }

          .full {
            border-radius: var(--buttonRadius-max) !important;
          }
        `}
      </style>

      <style jsx>
        {`
          button {
            display: ${icon ? 'flex' : 'block'};
            ${icon && 'align-items: center'};
            ${customPadding && `padding: ${customPadding} !important`};
          }
        `}
      </style>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.any,
  customPadding: PropTypes.string
}

export default Button
