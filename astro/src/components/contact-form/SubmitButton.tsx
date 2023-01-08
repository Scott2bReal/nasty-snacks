import { useState } from 'preact/hooks'

interface Props {
  isDisabled: boolean
}

export const SubmitButton = ({ isDisabled }: Props) => {
  // Animating submit button
  const buttonUpStyles =
    'p-2 rounded-lg bg-gradient-to-br to-purple-700 from-pink-700 mt-2 -mb-6 tracking-widest transition duration-500 ease-in-out relative'
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
        Submit
    </button>
  )
}
