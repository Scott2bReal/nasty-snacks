import type { APIRoute } from "astro"

export const post: APIRoute = async ({ request, redirect }) => {
  console.log(JSON.stringify(request, null, 2))

  redirect('/success')

  return {
    body: JSON.stringify({
      message: 'Form data received!'
    })
  }
}
