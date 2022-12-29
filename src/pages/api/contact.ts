import type { APIRoute } from "astro"

export const post: APIRoute = async ({ request }) => {
  const formData = await request.formData()

  return {
    body: JSON.stringify({
      message: 'Form data received!'
    })
  }
}
