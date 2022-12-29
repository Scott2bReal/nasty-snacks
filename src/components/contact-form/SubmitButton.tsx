import { useState } from 'preact/hooks'
import { LoadingSpinner } from './LoadingSpinner'

interface Props {
  isDisabled: boolean
  submitLoading: boolean
}

export const SubmitButton = ({ isDisabled, submitLoading }: Props) => {
  // Animating submit button
  const buttonUpStyles =
    'p-2 rounded-lg bg-gradient-to-br to-purple-700 from-pink-700 mt-2 -mb-6 tracking-widest'
  const buttonDownStyles = buttonUpStyles + ' scale-95'
  const [submitStyles, setSubmitStyles] = useState(buttonUpStyles)

  return isDisabled ? (
    <button
      disabled
      type='submit'
      id='submitContactForm'
      class={`${buttonUpStyles}` + ' opacity-50'}
    >
      Submit
    </button>
  ) : (
    <button
      class={`${submitStyles}`}
      type='submit'
      id='submitContactForm'
      onMouseDown={() => setSubmitStyles(buttonDownStyles)}
      onMouseUp={() => setSubmitStyles(buttonUpStyles)}
    >
      {submitLoading ? <LoadingSpinner /> : 'Submit' }
    </button>
  )
}
