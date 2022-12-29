import { useState } from 'preact/hooks'
import { SubmitButton } from './SubmitButton'
import { SuccessMessage } from './SuccessMessage'

export const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <form
      data-netlify='true'
      name='contactUs'
      id='contactUs'
      class='flex flex-col gap-2 flex-grow flex-wrap p-4 items-center md:w-[50vw] w-full mx-auto child:w-full'
      action='/'
      method='POST'
      onSubmit={async (e) => {
        e.preventDefault()

        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          subject: subject,
          message: message,
        }

        const encode = (data: { [key: string]: string }) => {
          return Object.keys(data)
            .map(
              (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
            )
            .join('&')
        }

        const postUrl = '/?t=' + Math.floor(Date.now() / 1000);

        fetch(postUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: encode({
            'form-name': 'contactUs',
            ...data,
          }),
        })
          .then(() => {
            clearForm()
            setIsSubmitted(true)
          })
          .catch((e) => console.error(e))
      }}
    >
      <input class='hidden' name='form-name' value='contactUs' />
      <div class='flex w-full gap-2 child:flex-grow'>
        <div class='child:w-full'>
          <label for='firstName'>
            <em>First Name*</em>
          </label>
          <input
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            required
          />
        </div>
        <div class='child:w-full'>
          <label for='lastName'>
            <em>Last Name</em>
          </label>
          <input
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
        </div>
      </div>

      <label for='email'>
        <em>Email Address*</em>
      </label>
      <input
        id='email'
        name='email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />

      <label for='subject'>
        <em>Subject*</em>
      </label>
      <input
        id='subject'
        name='subject'
        required
        value={subject}
        onChange={(e) => setSubject(e.currentTarget.value)}
      />

      <label for='message'>
        <em>Message*</em>
      </label>
      <textarea
        id='message'
        rows={4}
        class='text-neutral-900 p-1'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        required
      ></textarea>

      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <SubmitButton
          isDisabled={!(firstName && email && subject && message)}
        />
      )}
    </form>
  )
}
