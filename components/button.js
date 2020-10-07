import PropTypes from 'prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

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
    <>
      <button type={type ?? 'button'} className={variant} {...props}>
        {label} {icon && <Icon icon={icon} width="0" className="icon" />}
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
            background-color: var(--color-primary);
            border-radius: var(--buttonRadius);
            color: var(--color-white);
            transition: background-color 0.2s ease-in-out;
          }

          .primary:hover {
            background-color: var(--color-secondary);
          }

          .secondary {
            border: 0.2rem solid var(--color-primary);
            border-radius: var(--buttonRadius);
            font-weight: 700;
            color: var(--color-primary);
          }

          .secondary:hover {
            border: 0.2rem solid transparent;
            color: var(--color-white);
            background-color: var(--color-primary);
          }

          .secondary.active {
            border: 0.2rem solid transparent;
            color: var(--color-white);
            background-color: var(--color-primary);
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

          .quaternary {
            color: var(--color-primary);
            border-radius: var(--buttonRadius-max);
            border: 0.1rem solid var(--color-white-3);
            padding: 0.6rem 1.5rem;
            font-size: var(--headingSize-5);
          }

          .quaternary:hover {
            border: 0.1rem solid var(--color-primary);
          }

          .quaternary.active {
            background-color: var(--color-primary);
            border: 0.1rem solid var(--color-primary);
            color: var(--color-white);
          }

          .transparent {
            background-color: transparent;
            text-transform: capitalize;
            border: none;
            height: 3.6rem;
            padding: 0.6rem 2rem;
            font-size: var(--headingSize-5);
            color: currentColor;
          }

          .border {
            border: 0.1rem solid var(--color-white-3);
            border-radius: var(--buttonRadius);
          }

          .border:hover {
            border: 0.1rem solid var(--color-white-4);
          }

          .border.active {
            border: 0.1rem solid var(--color-white-4);
          }

          .full {
            border-radius: var(--buttonRadius-max) !important;
          }

          .icon {
            margin-left: 2rem !important;
          }
        `}
      </style>

      <style jsx>
        {`
          button {
            display: ${icon ? 'flex' : 'block'};
            ${icon && 'gap: 0.8rem'};
            ${icon && 'align-items: center'};
            ${customPadding && `padding: ${customPadding} !important`};
            ${customWidth && `width: ${customWidth} !important`};
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
  customPadding: PropTypes.string,
  customWidth: PropTypes.string,
}

export default Button
