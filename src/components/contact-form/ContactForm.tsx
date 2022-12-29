import { useState } from 'preact/hooks'
import { SubmitButton } from './SubmitButton'

export const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)

  const clearForm = () => {
    setFirstName('')
    setlastName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setIsDisabled(true)
  }

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  if (firstName && email && subject && message) {
    setIsDisabled(false)
  } else {
    setIsDisabled(true)
  }

  return (
    <form
      name='contact'
      id='contact'
      class='flex flex-col gap-2 flex-grow flex-wrap p-4 items-center md:w-[50vw] w-full mx-auto child:w-full'
      onSubmit={async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        // const formData = {
        //   firstName: firstName,
        //   lastName: lastName,
        //   email: email,
        //   subject: subject,
        //   message: message,
        // }

        try {
          setSubmitLoading(true)
          await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // body: encode({ 'form-name': 'contact', ...formData }),
            body: { ...formData },
          })
          clearForm()
          setSubmitLoading(false)
        } catch (e) {
          console.log(e)
        }
      }}
    >
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
            onChange={(e) => setlastName(e.currentTarget.value)}
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

      <SubmitButton isDisabled={isDisabled} submitLoading={submitLoading} />
    </form>
  )
}