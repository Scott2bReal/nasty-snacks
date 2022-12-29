import type { APIRoute } from 'astro'

export const post: APIRoute = async () => {
  return {
    body: JSON.stringify({
      message: 'Form data received!',
    }),
  }
}
