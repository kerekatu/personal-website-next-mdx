import { Form, FormInput } from '@/components/form'
import { useState } from 'react'
import { Card } from '@/components/card'

const Newsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    // TODO: Add Functionality and Validation

    setIsSubmitted(() => true)
  }

  return (
    <>
      <Card variant="secondary" customPadding="6rem 8rem">
        <div className={`newsletter ${isSubmitted ? 'full' : ''}`}>
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
        </div>
      </Card>

      <style jsx>
        {`
          .newsletter {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem;
            color: currentColor;
            position: relative;
          }

          strong {
            color: var(--color-blue);
          }

          .full {
            grid-template-columns: 1fr;
            text-align: center;
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
            top: 1.4rem;
            width: 10rem;
            right: 50%;
            pointer-events: none;
            user-select: none;
          }
        `}
      </style>
    </>
  )
}

export default Newsletter
