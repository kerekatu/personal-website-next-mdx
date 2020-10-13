import PropTypes from 'prop-types'

import Button from '@/components/button'
import styled from '@emotion/styled'

export const Form = ({ children, submitLabel, handleSubmit, titleLabel }) => {
  return (
    <FormWrapper>
      {titleLabel && <h4>{titleLabel}</h4>}
      {children}

      <FormSubmit>
        <Button
          variant="primary"
          customPadding="1.4rem 0"
          customWidth="100%"
          label={submitLabel}
          onClick={() => handleSubmit(true)}
        />
      </FormSubmit>
    </FormWrapper>
  )
}

export const FormInput = ({ label, name, type, ...props }) => {
  return (
    <FormInputWrapper>
      <label htmlFor={name}>{label}</label>
      <input type={type || 'text'} name={name} id={name} size="10" {...props} />
    </FormInputWrapper>
  )
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const FormSubmit = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: 3rem;
  }

  & label {
    color: currentColor;
    font-weight: 500;
    font-size: var(--headingSize-5);
    margin-bottom: 0.8rem;
    cursor: pointer;
  }

  & input,
  & textarea {
    border-radius: var(--buttonRadius);
    font-size: var(--baseFontSize);
    border: 0.2rem solid transparent;
    height: 4.6rem;
    padding: 0 2rem;
    transition: border var(--baseTransition);
  }

  & input:focus {
    border: 0.2rem solid var(--color-blue);
  }

  & input:invalid:required {
    outline: none;
    box-shadow: none;
  }

  & input:focus:invalid:required {
    border: 0.2rem solid var(--color-red);
    outline: none;
    box-shadow: none;
  }

  & textarea {
    resize: vertical;
  }
`

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  submitLabel: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  titleLabel: PropTypes.string,
}

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
}
