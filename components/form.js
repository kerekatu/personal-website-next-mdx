import PropTypes from 'prop-types'

import Button from '@/components/button'

export const Form = ({ children, submitLabel, handleSubmit, titleLabel }) => {
  return (
    <>
      <form>
        {titleLabel && <h4>{titleLabel}</h4>}
        {children}

        <div className="submit">
          <Button
            variant="primary"
            customPadding="1.4rem 0"
            customWidth="100%"
            label={submitLabel}
            onClick={() => handleSubmit(true)}
          />
        </div>
      </form>

      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
          }

          .submit {
            margin-top: 2rem;
            display: flex;
            justify-content: flex-end;
          }

          .success {
            display: flex;
            align-items: center;
            font-size: var(--headingSize-5);
            background-color: var(--color-white);
            padding: 2rem 4rem;
            color: var(--color-blue);
            font-weight: 500;
            border-radius: var(--cardRadius);
          }
        `}
      </style>
    </>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  submitLabel: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  titleLabel: PropTypes.string
}

export const FormInput = ({ label, name, type, ...props }) => {
  return (
    <>
      <div className="form-input-container">
        <label htmlFor={name}>{label}</label>
        <input
          type={type || 'text'}
          name={name}
          id={name}
          size="10"
          {...props}
        />
      </div>

      <style jsx>
        {`
          .form-input-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .form-input-container + .form-input-container {
            margin-top: 3rem;
          }

          label {
            color: currentColor;
            font-weight: 500;
            font-size: var(--headingSize-5);
            margin-bottom: 0.8rem;
            cursor: pointer;
          }

          input,
          textarea {
            border-radius: var(--buttonRadius);
            font-size: var(--baseFontSize);
            border: 0.2rem solid transparent;
            height: 4.6rem;
            padding: 0 2rem;
          }

          input:focus {
            border: 0.2rem solid var(--color-blue);
          }

          input:invalid:required {
            outline: none;
            box-shadow: none;
          }

          input:focus:invalid:required {
            border: 0.2rem solid var(--color-red);
            outline: none;
            box-shadow: none;
          }

          textarea {
            resize: vertical;
          }
        `}
      </style>
    </>
  )
}

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
}
