import type { APIRoute, Params } from 'astro'

// This is the endpoint we use to communicate with Spotify

function logRequestInfo(request: Request, params: Params) {
  console.log(`Params: `, params)
  console.log(`Request headers: `, request.headers)
  console.log(`Request body: `, JSON.stringify(request.body, null, 2))
}

export const get: APIRoute = async function({ params, request }) {
  logRequestInfo(request, params)
  return new Response('hi', {
    status: 200,
  })
}

export const post: APIRoute = async function({ params, request }) {
  logRequestInfo(request, params)
  console.log(`Params: `, JSON.stringify(params, null, 2))
  console.log(`Request headers: `, request.headers)
  console.log(`Request body: `, JSON.stringify(request.body, null, 2))
  return new Response('hi', {
    status: 200,
  })
}
