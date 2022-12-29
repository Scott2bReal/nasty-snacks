import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request }) => {
  const text = await request.text()

  const inputs = text
    .split('&')
    .map((row) => [row.split('=')[0], decodeURIComponent(row.split('=')[1])])
  const inputJSON = Object.fromEntries(inputs)

  // now use inputJSON as an object with { inputName: inputValue }
  console.log(inputJSON)

  return {
    body: JSON.stringify({
      message: 'Form data received!',
    }),
  }
}
