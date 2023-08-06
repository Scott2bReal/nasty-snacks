import type { APIRoute } from "astro"

interface ContactForm {
  firstName: string
  lastName: string | undefined
  email: string
  subject: string
  message: string
  botField: string
}

const isContactFormData = (data: any): data is ContactForm => {
  return (
    typeof data.firstName === "string" &&
    (typeof data.lastName === "string" || "undefined") &&
    typeof data.email === "string" &&
    typeof data.subject === "string" &&
    typeof data.message === "string" &&
    typeof data.botField === "string"
  )
}

const secret = (import.meta.env.CONTACT_FORM_SECRET ?? "") as string
const botEndpoint = (import.meta.env.DISCORD_BOT_ENDPOINT ?? "") as string

export const post: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json()
    if (!formData) {
      throw new Error("No form data received")
    }
    if (!isContactFormData(formData)) {
      throw new Error("Invalid form data")
    }
    const { firstName, lastName = "", email, subject, message } = formData
    if (formData.botField && formData.botField.length > 0) {
      throw new Error("Bot detected")
    }
    // Send the discord bot the stuff
    await fetch(botEndpoint, {
      method: "POST",
      body: JSON.stringify({
        secret,
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    })
    return new Response(
      JSON.stringify({
        message: `Success`,
      }),
    )
  } catch (e) {
    console.log(e)
    return new Response(JSON.stringify({ message: `Error: ${e}` }))
  }
}
