import { useState } from 'react'
import styled from '@emotion/styled'
import { Form, FormInput } from '@/components/form'
import { Card } from '@/components/card'

const Newsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    // TODO: Add Functionality and Validation

    setIsSubmitted(() => true)
  }

  return (
    <Card variant="secondary" customPadding="6rem 8rem">
      <NewsletterWrapper styleIsSubmitted={isSubmitted}>
        {!isSubmitted ? (
          <>
            <div className="title">
              <h2>Wanna stay up to date?</h2>
              <h5>
                Subscribe to my newsletter and <strong>never miss</strong>{' '}
                upcoming articles!
              </h5>
            </div>

            <img
              src="/static/icons/arrow.svg"
              alt="Arrow Icon"
              className="background-icon"
            />
            <Form submitLabel="Sign Up" handleSubmit={handleSubmit}>
              <FormInput
                type="email"
                label="Email Address"
                name="emailInput"
                placeholder="example@example.com"
                required
              />
            </Form>
          </>
        ) : (
          <h5>
            Thank you for subscribing to the newsletter.{' '}
            <strong>
              Please check your inbox to confirm your subscription.
            </strong>{' '}
            You can always unsubscribe at any time.
          </h5>
        )}
      </NewsletterWrapper>
    </Card>
  )
}

const NewsletterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  color: currentColor;
  position: relative;
  ${({ styleIsSubmitted }) =>
    styleIsSubmitted && {
      gridTemplateColumns: '1fr',
      textAlign: 'center',
    }}

  strong {
    color: var(--color-primary);
  }

  .title {
    width: 28rem;
    color: currentColor;
  }

  .title > h2 {
    margin-bottom: 2.5rem;
  }

  .background-icon {
    position: absolute;
    top: 1rem;
    width: 10rem;
    height: 10rem;
    right: 50%;
    pointer-events: none;
    user-select: none;
    filter: var(--color-svg-2);
  }
`

export default Newsletter
