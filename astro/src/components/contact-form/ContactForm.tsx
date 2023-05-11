import { Accessor, createMemo, createSignal, onCleanup, Setter } from 'solid-js'

export const ContactForm = () => {
  // Form fields
  const [firstName, setFirstName] = createSignal('')
  const [lastName, setLastName] = createSignal('')
  const [email, setEmail] = createSignal('')
  const [subject, setSubject] = createSignal('')
  const [message, setMessage] = createSignal('')
  const [botField, setBotField] = createSignal('')

  // Form handling
  const isEmpty = (string: string) => {
    if (string.trim().length === 0) return true
    return false
  }

  const setters = [
    setFirstName,
    setLastName,
    setEmail,
    setSubject,
    setMessage,
    setBotField,
  ]

  const requiredGetters = [firstName, email, subject, message]

  const isFormComplete = (getters: Accessor<string>[]) => {
    if (isSubmitted()) return false
    for (let i = 0; i < getters.length; i++) {
      const getter = getters[i]
      if (typeof getter === 'function') {
        if (isEmpty(getter())) return false
      }
    }
    return true
  }

  const [isSubmitted, setIsSubmitted] = createSignal(false)

  const clearForm = (funcs: Setter<string>[]) => {
    funcs.forEach((func) => {
      func('')
    })
    return null
  }

  const isDisabled = createMemo(() => {
    return !isFormComplete(requiredGetters)
  })

  onCleanup(() => {
    setIsSubmitted(false)
    clearForm(setters)
  })

  return (
    <form
      data-netlify='true'
      netlify-honeypot='botField'
      name='contactUs'
      class='mx-auto flex w-full flex-grow flex-col flex-wrap items-center gap-2 p-4 child:w-full md:w-[50vw]'
      method='post'
      onSubmit={async (e) => {
        e.preventDefault()
        const data = {
          firstName: firstName(),
          lastName: lastName(),
          botField: botField(),
          email: email(),
          subject: subject(),
          message: message(),
        }
        const encode = (data: { [key: string]: string }) => {
          return Object.keys(data)
            .map(
              (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
            )
            .join('&')
        }
        await fetch('/forms/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: encode({
            'form-name': 'contactUs',
            ...data,
          }),
        }).then(() => {
          clearForm(setters)
          setIsSubmitted(true)
        })
      }}
    >
      <input class='hidden' name='form-name' value='contactUs' />
      <div class='hidden'>
        Don't fill this out if you're human!
        <input
          name='botField'
          class='hidden'
          onInput={(e) => setBotField(e.currentTarget.value)}
        />
      </div>
      <div class='flex w-full gap-2 child:flex-grow'>
        <div class='child:w-full'>
          <label for='firstName'>
            <em>First Name*</em>
          </label>
          <input
            id='firstName'
            name='firstName'
            value={firstName()}
            onInput={(e) => setFirstName(e.currentTarget.value)}
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
            value={lastName()}
            onInput={(e) => setLastName(e.currentTarget.value)}
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
        value={email()}
        onInput={(e) => setEmail(e.currentTarget.value)}
        required
      />

      <label for='subject'>
        <em>Subject*</em>
      </label>
      <input
        id='subject'
        name='subject'
        required
        value={subject()}
        onInput={(e) => setSubject(e.currentTarget.value)}
      />

      <label for='message'>
        <em>Message*</em>
      </label>
      <textarea
        id='message'
        rows={4}
        class='p-1 text-neutral-900'
        name='message'
        value={message()}
        onInput={(e) => setMessage(e.currentTarget.value)}
        required
      ></textarea>

      {
        <button
          type='submit'
          disabled={isDisabled()}
          classList={{
            'opacity-50': isDisabled(),
          }}
          class='mt-2 -mb-6 rounded-lg bg-gradient-to-br from-pink-700 to-purple-700 p-2 tracking-widest transition duration-300 ease-in-out'
        >
          {isSubmitted() ? `Thanks for reaching out!` : `Submit`}
        </button>
      }
    </form>
  )
}
