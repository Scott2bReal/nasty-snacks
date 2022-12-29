import type { APIRoute } from "astro"

export const post: APIRoute = async ({ request, redirect }) => {
  console.log(Object.fromEntries(await request.formData()))

  return redirect('/success', 302)
}
