import type { APIRoute } from "astro"

export const post: APIRoute = async ({ request, params }) => {
  return {
    body: JSON.stringify({
      message: 'Form data received!'
    })
  }
}
