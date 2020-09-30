import PropTypes from 'prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const Button = ({ type, label, variant, icon, customPadding, ...props }) => {
  return (
    <>
      <button type={type ?? 'button'} className={variant} {...props}>
        {label} {icon && <Icon icon={icon} className="icon" />}
      </button>

      <style jsx>
        {`
          button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: var(--baseFontSize);
            font-weight: 500;
            line-height: 1;
            padding: 1rem 3.4rem;
          }

          button:disabled {
            opacity: 0.6;
            cursor: default;
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

          .icon {
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
  icon: PropTypes.node,
  customPadding: PropTypes.string,
}

export default Button
